// ===== PrepICFES - App Core =====
const APP = {
  currentView: 'home',
  currentQuestionIndex: 0,
  filteredQuestions: [],
  simulacroState: null,
  studyAnswers: {},
};

// ===== EXAM CONFIG =====
const EXAM_CONFIG = {
  areas: [
    { id: 'lectura', name: 'Lectura Crítica', color: '#1565c0', tag: 'tag-lectura', weight: 0.25, icon: '📖' },
    { id: 'matematicas', name: 'Matemáticas', color: '#e65100', tag: 'tag-matematicas', weight: 0.25, icon: '🔢' },
    { id: 'sociales', name: 'Sociales y Ciudadanía', color: '#c62828', tag: 'tag-sociales', weight: 0.20, icon: '🌍' },
    { id: 'ciencias', name: 'Ciencias Naturales', color: '#2e7d32', tag: 'tag-ciencias', weight: 0.20, icon: '🔬' },
    { id: 'ingles', name: 'Inglés', color: '#6a1b9a', tag: 'tag-ingles', weight: 0.10, icon: '🗣️' }
  ],
  simulacros: {
    facil: { questions: 50, time: 45, label: '🌱 Fácil' },
    intermedio: { questions: 150, time: 90, label: '🔥 Intermedio' },
    avanzado: { questions: 254, time: 180, label: '💀 Avanzado' }
  },
  avanzadoBreakdown: { lectura: 63, matematicas: 63, sociales: 48, ciencias: 48, ingles: 32 }
};

function getAreaInfo(areaId) {
  return EXAM_CONFIG.areas.find(a => a.id === areaId) || EXAM_CONFIG.areas[0];
}

// ===== PERSISTENCE =====
function saveState() {
  const data = {
    studyAnswers: APP.studyAnswers,
    simulacros: window.simulacros || [],
    stats: window.userStats || {}
  };
  try { localStorage.setItem('icfesPrep', JSON.stringify(data)); } catch (e) {}
}

function loadState() {
  try {
    const raw = localStorage.getItem('icfesPrep');
    if (raw) {
      const data = JSON.parse(raw);
      APP.studyAnswers = data.studyAnswers || {};
      window.simulacros = data.simulacros || [];
      window.userStats = data.stats || {};
    }
  } catch (e) {}
  if (!window.simulacros) window.simulacros = [];
  if (!window.userStats) window.userStats = {};
}

// ===== IMPORT / NORMALIZE =====
function showImportDialog() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'import-overlay';
  overlay.innerHTML = `
    <div class="modal-box" style="max-width:520px;text-align:left">
      <h2>📥 Importar preguntas</h2>
      <p style="font-size:14px;margin-bottom:16px">Sube un archivo JSON con preguntas en formato ICFES. Se fusionarán con las existentes.</p>
      <div style="border:2px dashed var(--border);border-radius:var(--radius);padding:28px;text-align:center;margin-bottom:16px;cursor:pointer;transition:var(--transition)" id="drop-zone" onclick="document.getElementById('json-file-input').click()">
        <div style="font-size:48px;margin-bottom:8px">📄</div>
        <p style="font-size:14px;color:var(--text-secondary);margin-bottom:12px">Arrastra un archivo JSON aquí o haz clic</p>
        <input type="file" accept=".json" id="json-file-input" style="display:none" onchange="handleImportFile(event)">
        <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();document.getElementById('json-file-input').click()">Seleccionar archivo</button>
      </div>
      <p style="font-size:12px;color:var(--text-light);margin-bottom:12px">Formato: Array con id, area, difficulty, question, options[], correct (0-3), explanation{correct, wrongs[]}.</p>
      <button class="btn btn-sm btn-outline" onclick="downloadTemplate()">📝 Descargar plantilla</button>
      <div class="modal-actions" style="margin-top:12px">
        <button class="btn btn-secondary" onclick="document.getElementById('import-overlay').remove()">Cancelar</button>
      </div>
      <div id="import-status" style="margin-top:12px"></div>
    </div>
  `;
  document.body.appendChild(overlay);
  setTimeout(() => {
    const zone = document.getElementById('drop-zone');
    if (!zone) return;
    zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.style.borderColor = 'var(--primary)'; zone.style.background = '#e8eaf6'; });
    zone.addEventListener('dragleave', () => { zone.style.borderColor = ''; zone.style.background = ''; });
    zone.addEventListener('drop', (e) => {
      e.preventDefault(); zone.style.borderColor = ''; zone.style.background = '';
      const file = e.dataTransfer.files[0];
      if (file) handleImportFile({ target: { files: [file] } });
    });
  }, 50);
}

function normalizeQuestion(q) {
  if (!q.area) {
    if (q.materia) {
      const m = q.materia.toLowerCase().replace(/[áéíóú]/g, c => ({'á':'a','é':'e','í':'i','ó':'o','ú':'u'})[c] || c);
      if (m.includes('lectura')) q.area = 'lectura';
      else if (m.includes('matem')) q.area = 'matematicas';
      else if (m.includes('social')) q.area = 'sociales';
      else if (m.includes('cienci')) q.area = 'ciencias';
      else if (m.includes('ingle')) q.area = 'ingles';
    }
    if (!q.area) q.area = 'lectura';
  }
  const areaInfo = getAreaInfo(q.area);
  if (!q.areaName && areaInfo) q.areaName = areaInfo.name;
  if (!q.areaName) q.areaName = 'General';
  if (!q.difficulty) q.difficulty = 'media';
  if (!q.id) q.id = 'IMP' + Math.random().toString(36).substr(2, 4).toUpperCase();
  else q.id = String(q.id);
  if (q.enunciado && !q.question) q.question = q.enunciado;
  if (!q.question) return null;
  if (q.opciones && !q.options) {
    q.options = [q.opciones.A, q.opciones.B, q.opciones.C, q.opciones.D].filter(Boolean);
  }
  if (q.respuesta_correcta !== undefined && q.correct === undefined) {
    const letras = {'A':0,'B':1,'C':2,'D':3};
    if (typeof q.respuesta_correcta === 'string' && letras[q.respuesta_correcta.toUpperCase()] !== undefined) {
      q.correct = letras[q.respuesta_correcta.toUpperCase()];
    }
  }
  if (typeof q.correct === 'string' && /^[ABCDabcd]$/.test(q.correct)) {
    q.correct = {'A':0,'B':1,'C':2,'D':3}[q.correct.toUpperCase()];
  }
  q.correct = parseInt(q.correct);
  if (!Array.isArray(q.options) || q.options.length < 2) return null;
  if (isNaN(q.correct) || q.correct < 0 || q.correct >= q.options.length) q.correct = 0;
  if (q.imagen && !q.image) q.image = q.imagen;
  if (q.images && Array.isArray(q.images)) {
    q.images = q.images.map(img => {
      if (typeof img === 'string') return {src: img, alt: '', type: ''};
      return {src: img.src || '', alt: img.alt || '', type: img.type || '', caption: img.caption || ''};
    }).filter(img => img.src);
  }
  if (q.table) {
    if (!Array.isArray(q.table.headers)) q.table.headers = [];
    if (!Array.isArray(q.table.rows)) q.table.rows = [];
    q.table.caption = q.table.caption || '';
  }
  if (!q.explanation) {
    q.explanation = {
      correct: 'La respuesta correcta es la opción ' + 'ABCD'[q.correct] + '.',
      wrongs: q.options.map((_, i) => i === q.correct ? 'Opción correcta' : `La opción ${'ABCD'[i]} no es la respuesta correcta.`)
    };
  }
  return q;
}

function handleImportFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      let raw = JSON.parse(e.target.result);
      if (!Array.isArray(raw)) {
        if (raw.preguntas && Array.isArray(raw.preguntas)) raw = raw.preguntas;
        else throw new Error('El archivo debe contener un array de preguntas o un objeto con clave "preguntas"');
      }
      let added = 0, errors = 0;
      raw.forEach(q => {
        const normalized = normalizeQuestion(q);
        if (!normalized) { errors++; return; }
        const existing = QUESTIONS.findIndex(e => e.id === q.id);
        if (existing >= 0) QUESTIONS[existing] = normalized;
        else QUESTIONS.push(normalized);
        added++;
      });
      const status = document.getElementById('import-status');
      if (status) {
        status.innerHTML = `<div style="padding:12px;background:#e8f5e9;border-radius:var(--radius-sm);color:var(--success);font-weight:700">✅ ${added} preguntas importadas. Total: ${QUESTIONS.length} preguntas. ${errors ? `<span style="color:var(--error)">(${errors} ignoradas)</span>` : ''}</div>`;
      }
      saveState();
    } catch (err) {
      const status = document.getElementById('import-status');
      if (status) status.innerHTML = `<div style="padding:12px;background:#ffebee;border-radius:var(--radius-sm);color:var(--error);font-weight:700">❌ Error: ${err.message}</div>`;
    }
  };
  reader.readAsText(file);
}

function downloadTemplate() {
  const template = [{
    id: 'EJ01', area: 'lectura', areaName: 'Lectura Crítica', difficulty: 'media',
    images: [{src: 'images/ejemplo.png', alt: 'Figura 1', type: 'figure', caption: 'Figura 1: Descripción'}],
    table: { headers: ['Curso', 'Promedio 2023', 'Promedio 2024'], rows: [['I', '63', '65'], ['II', '61', '45']], caption: 'Tabla 1: Puntajes promedio' },
    context: 'Texto opcional de contexto aquí...',
    question: '¿Cuál es el propósito del autor?',
    options: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
    correct: 0,
    explanation: { correct: 'Explicación de por qué A es correcta...', wrongs: ['Por qué B es incorrecta', 'Por qué C es incorrecta', 'Por qué D es incorrecta'] }
  }];
  const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'plantilla_preguntas_icfes.json'; a.click();
  URL.revokeObjectURL(url);
}

window.showImportDialog = showImportDialog;
window.handleImportFile = handleImportFile;
window.downloadTemplate = downloadTemplate;

// ===== VISUAL CONTENT RENDERER =====
function renderVisualContent(q) {
  let html = '';
  // Table
  if (q.table && q.table.headers && q.table.headers.length) {
    html += `<div class="question-table-wrapper"><table class="question-table"><thead><tr>${q.table.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${q.table.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    if (q.table.caption) html += `<div class="question-table-caption">${q.table.caption}</div>`;
  }
  // SVG inline
  if (q.svg) {
    html += `<div class="question-svg">${q.svg}</div>`;
  }
  // Images gallery
  if (q.images && q.images.length) {
    html += `<div class="question-image-gallery ${q.images.length > 2 ? 'comic-gallery' : ''}">${q.images.map(img => {
      const badge = img.type ? `<span class="visual-badge visual-badge-${img.type}">${img.type}</span>` : '';
      return `<div class="gallery-item">${badge}<img src="${img.src}" alt="${img.alt || ''}" loading="lazy">${img.caption ? `<div class="gallery-caption">${img.caption}</div>` : ''}</div>`;
    }).join('')}</div>`;
  }
  // Single image
  if (q.image && !q.images) {
    html += `<div class="question-image"><img src="${q.image}" alt="" loading="lazy"></div>`;
  }
  return html;
}
window.renderVisualContent = renderVisualContent;

// ===== ROUTER =====
function navigate(view, data) {
  const protectedViews = ['home', 'study', 'simulacro', 'simulacro-playing', 'simulacro-results', 'stats'];
  if (protectedViews.includes(view) && !AUTH.isLoggedIn()) view = 'login';
  if (view === 'admin' && !AUTH.isAdmin()) view = 'home';
  APP.currentView = view;
  if (typeof updateNav === 'function') updateNav();
  switch (view) {
    case 'home': renderHome(); break;
    case 'login': renderLogin(); break;
    case 'register': renderRegister(); break;
    case 'admin': renderAdmin(); break;
    case 'study': renderStudy(); break;
    case 'simulacro': renderSimulacroSelect(); break;
    case 'simulacro-playing': renderSimulacroPlaying(); break;
    case 'simulacro-results': renderSimulacroResults(data); break;
    case 'stats': renderStats(); break;
    default: renderHome();
  }
  window.scrollTo(0, 0);
}

// ===== THEME =====
function initTheme() {
  const saved = localStorage.getItem('icfesTheme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  updateThemeIcon();
}
function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) { document.documentElement.removeAttribute('data-theme'); localStorage.setItem('icfesTheme', 'light'); }
  else { document.documentElement.setAttribute('data-theme', 'dark'); localStorage.setItem('icfesTheme', 'dark'); }
  updateThemeIcon();
}
function updateThemeIcon() {
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
}
window.toggleTheme = toggleTheme;

// ===== HOME PAGE =====
function renderHome() {
  const s = window.userStats || {};
  const sims = window.simulacros || [];
  const advancedSims = sims.filter(s => s.type === 'avanzado');
  const bestScore = advancedSims.length ? Math.max(...advancedSims.map(s => s.puntaje || 0)) : 0;
  const totalAnswered = Object.keys(APP.studyAnswers).length;
  const totalCorrect = Object.values(APP.studyAnswers).filter(a => a === true).length;
  const totalSims = sims.length;
  const totalQuestionsAnswered = sims.reduce((acc, s) => acc + (s.totalQuestions || 0), 0) + totalAnswered;
  const correctSimulacro = sims.reduce((acc, s) => acc + (s.correctas || 0), 0);

  document.getElementById('main-content').innerHTML = `
    <div class="welcome-card">
      <h1>Prepárate para el ICFES</h1>
      <p>Domina el Saber 11° con estudio personalizado y simulacros realistas basados en el examen oficial</p>
      <div class="welcome-badges">
        ${AUTH.getStreak() > 0 ? `<span class="welcome-badge">🔥 ${AUTH.getStreak()} días consecutivos</span>` : ''}
        <span class="welcome-badge">📚 ${QUESTIONS.length} preguntas</span>
        <span class="welcome-badge">👤 ${AUTH.getCurrentUser()}</span>
      </div>
    </div>

    <div class="score-card">
      <div class="score-display">${bestScore}</div>
      <div class="score-label">de 500 · Mejor puntaje en simulacro avanzado</div>
      <div class="score-bar">
        <div class="score-bar-fill" style="width:${bestScore / 5}%"></div>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">📝</div>
        <div class="stat-value">${totalSims}</div>
        <div class="stat-label">Simulacros realizados</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">✅</div>
        <div class="stat-value green">${totalCorrect + correctSimulacro}</div>
        <div class="stat-label">Respuestas correctas</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">❌</div>
        <div class="stat-value red">${totalQuestionsAnswered - totalCorrect - correctSimulacro}</div>
        <div class="stat-label">Respuestas incorrectas</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📊</div>
        <div class="stat-value gold">${totalQuestionsAnswered}</div>
        <div class="stat-label">Total respondidas</div>
      </div>
    </div>

    <h2 class="section-title">⚡ Acceso rápido</h2>
    <div class="quick-actions">
      <div class="action-card" onclick="navigate('study')">
        <span class="action-icon">📖</span>
        <h3>Modo Estudio</h3>
        <p>Todas las preguntas con explicaciones detalladas. Aprende a tu ritmo y repasa tus errores.</p>
      </div>
      <div class="action-card" onclick="navigate('simulacro')">
        <span class="action-icon">⏱️</span>
        <h3>Modo Simulacro</h3>
        <p>Pon a prueba tus conocimientos con tiempo límite. 3 niveles de dificultad.</p>
      </div>
      <div class="action-card" onclick="navigate('stats')">
        <span class="action-icon">📈</span>
        <h3>Estadísticas</h3>
        <p>Revisa tu progreso, áreas débiles y evolución en el tiempo.</p>
      </div>
      <div class="action-card" onclick="showImportDialog()" style="border-color:#9c27b0">
        <span class="action-icon">📥</span>
        <h3>Importar preguntas</h3>
        <p>Sube tus propias preguntas desde un archivo JSON.</p>
      </div>
    </div>

    <h2 class="section-title">📋 Áreas del examen</h2>
    <div class="stats-grid">
      ${EXAM_CONFIG.areas.map(a => {
        const qs = QUESTIONS.filter(q => q.area === a.id);
        const ans = Object.keys(APP.studyAnswers).filter(k => {
          const q = QUESTIONS.find(q => q.id === k);
          return q && q.area === a.id;
        });
        const corrects = ans.filter(k => APP.studyAnswers[k] === true).length;
        const progress = ans.length ? Math.round((corrects / ans.length) * 100) : 0;
        return `
          <div class="stat-card" style="border-top:3px solid ${a.color}">
            <div class="stat-icon">${a.icon}</div>
            <div class="stat-value" style="color:${a.color}">${qs.length}</div>
            <div class="stat-label">${a.name}</div>
            <div style="margin-top:8px;font-size:13px;color:var(--text-secondary)">
              ${ans.length ? `${corrects}/${ans.length} correctas (${progress}%)` : 'Sin comenzar'}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ===== EXPORTS =====
window.navigate = navigate;
window.APP = APP;
window.EXAM_CONFIG = EXAM_CONFIG;
window.QUESTIONS = QUESTIONS;
window.getAreaInfo = getAreaInfo;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initTheme();
  updateNav();
  if (AUTH.isLoggedIn()) navigate('home');
  else navigate('login');
});
