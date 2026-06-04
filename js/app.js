// App State
const APP = {
  currentView: 'home',
  currentQuestionIndex: 0,
  filteredQuestions: [],
  simulacroState: null,
  studyAnswers: {},
};

// Persistence
function saveState() {
  const data = {
    studyAnswers: APP.studyAnswers,
    simulacros: window.simulacros || [],
    stats: window.userStats || {}
  };
  try {
    localStorage.setItem('icfesPrep', JSON.stringify(data));
  } catch (e) { /* quota exceeded, ignore */ }
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
  } catch (e) { /* ignore */ }
  if (!window.simulacros) window.simulacros = [];
  if (!window.userStats) window.userStats = {};
}

// Question Bank Management
function showImportDialog() {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'import-overlay';
  overlay.innerHTML = `
    <div class="modal-box" style="max-width:500px;text-align:left">
      <h2>📥 Importar preguntas</h2>
      <p style="font-size:14px;margin-bottom:16px">Sube un archivo JSON con preguntas en formato ICFES. Las preguntas se fusionarán con las existentes.</p>
      <div style="border:2px dashed #ccc;border-radius:12px;padding:24px;text-align:center;margin-bottom:16px" id="drop-zone">
        <div style="font-size:48px;margin-bottom:8px">📄</div>
        <p style="font-size:14px;color:var(--text-light);margin-bottom:12px">Arrastra un archivo JSON aquí o haz clic para seleccionar</p>
        <input type="file" accept=".json" id="json-file-input" style="display:none" onchange="handleImportFile(event)">
        <button class="btn btn-primary" onclick="document.getElementById('json-file-input').click()">Seleccionar archivo</button>
      </div>
      <p style="font-size:12px;color:var(--text-light);margin-bottom:12px">Formato requerido: Array de objetos con id, area, areaName, difficulty, question, options[], correct (índice 0-3), explanation{correct, wrongs[]}</p>
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
    zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('dragover'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('dragover');
      const file = e.dataTransfer.files[0];
      if (file) handleImportFile({ target: { files: [file] } });
    });
  }, 50);
}

function normalizeQuestion(q) {
  if (!q.area) {
    if (q.materia) {
      const m = q.materia.toLowerCase().replace(/[áéíóú]/g, c => ({ 'á':'a','é':'e','í':'i','ó':'o','ú':'u' })[c] || c);
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
    const letras = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
    if (typeof q.respuesta_correcta === 'string' && letras[q.respuesta_correcta.toUpperCase()] !== undefined) {
      q.correct = letras[q.respuesta_correcta.toUpperCase()];
    }
  }

  if (typeof q.correct === 'string' && /^[ABCDabcd]$/.test(q.correct)) {
    q.correct = { 'A':0,'B':1,'C':2,'D':3 }[q.correct.toUpperCase()];
  }
  q.correct = parseInt(q.correct);

  if (!Array.isArray(q.options) || q.options.length < 2) return null;
  if (isNaN(q.correct) || q.correct < 0 || q.correct >= q.options.length) {
    q.correct = 0;
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
        if (raw.preguntas && Array.isArray(raw.preguntas)) {
          raw = raw.preguntas;
        } else {
          throw new Error('El archivo debe contener un array de preguntas o un objeto con clave "preguntas"');
        }
      }
      let added = 0;
      let errors = 0;
      raw.forEach(q => {
        const normalized = normalizeQuestion(q);
        if (!normalized) { errors++; return; }
        const existing = QUESTIONS.findIndex(e => e.id === q.id);
        if (existing >= 0) {
          QUESTIONS[existing] = normalized;
        } else {
          QUESTIONS.push(normalized);
        }
        added++;
      });
      const status = document.getElementById('import-status');
      if (status) {
        status.innerHTML = `
          <div style="padding:12px;background:#e8f5e9;border-radius:8px;color:var(--success);font-weight:600">
            ✅ ${added} preguntas importadas. Total: ${QUESTIONS.length} preguntas.
            ${errors ? `<span style="color:var(--error)"> (${errors} ignoradas por datos incompletos)</span>` : ''}
          </div>`;
      }
      saveState();
    } catch (err) {
      const status = document.getElementById('import-status');
      if (status) {
        status.innerHTML = `<div style="padding:12px;background:#ffebee;border-radius:8px;color:var(--error);font-weight:600">❌ Error: ${err.message}</div>`;
      }
    }
  };
  reader.readAsText(file);
}

function downloadTemplate() {
  const template = [
    {
      id: 'EJ01',
      area: 'lectura',
      areaName: 'Lectura Crítica',
      difficulty: 'media',
      context: 'Texto opcional de contexto aquí...',
      question: '¿Cuál es el propósito del autor?',
      options: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
      correct: 0,
      explanation: {
        correct: 'Explicación de por qué A es correcta...',
        wrongs: ['Por qué B es incorrecta', 'Por qué C es incorrecta', 'Por qué D es incorrecta']
      }
    }
  ];
  const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'plantilla_preguntas_icfes.json';
  a.click();
  URL.revokeObjectURL(url);
}

window.showImportDialog = showImportDialog;
window.handleImportFile = handleImportFile;
window.downloadTemplate = downloadTemplate;

// Router
function navigate(view, data) {
  const protectedViews = ['home', 'study', 'simulacro', 'simulacro-playing', 'simulacro-results', 'stats'];
  if (protectedViews.includes(view) && !AUTH.isLoggedIn()) { view = 'login'; }
  if (view === 'admin' && !AUTH.isAdmin()) { view = 'home'; }

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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  navigate(AUTH.isLoggedIn() ? 'home' : 'login');
});

// ===== HOME =====
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
      <h1>📚 Prepárate para el ICFES</h1>
      <p>Domina el Saber 11° con estudio personalizado y simulacros realistas</p>
      ${AUTH.getStreak() > 0 ? `<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap"><span style="background:rgba(255,255,255,0.15);padding:6px 14px;border-radius:20px;font-size:14px;font-weight:600">🔥 Racha: ${AUTH.getStreak()} días consecutivos</span><span style="background:rgba(255,255,255,0.15);padding:6px 14px;border-radius:20px;font-size:14px">${AUTH.getCurrentUser()}</span></div>` : ''}
    </div>

    <div class="score-card">
      <div class="score-display">${bestScore}</div>
      <div class="score-label">de 500 · Mejor puntaje en simulacro avanzado</div>
      <div class="score-bar">
        <div class="score-bar-fill" style="width: ${bestScore/5}%"></div>
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
        <div class="stat-label">Total preguntas respondidas</div>
      </div>
    </div>

    <h2 class="section-title">⚡ Acceso rápido</h2>
    <div class="quick-actions">
      <div class="action-card" onclick="navigate('study')">
        <div class="action-icon">📖</div>
        <h3>Modo Estudio</h3>
        <p>Todas las preguntas con explicaciones detalladas. Aprende a tu ritmo.</p>
      </div>
      <div class="action-card" onclick="navigate('simulacro')">
        <div class="action-icon">⏱️</div>
        <h3>Modo Simulacro</h3>
        <p>Pon a prueba tus conocimientos con tiempo límite. 3 niveles de dificultad.</p>
      </div>
      <div class="action-card" onclick="navigate('stats')">
        <div class="action-icon">📈</div>
        <h3>Estadísticas</h3>
        <p>Revisa tu progreso, áreas débiles y evolución en el tiempo.</p>
      </div>
      <div class="action-card" onclick="showImportDialog()" style="border-color:#9c27b0">
        <div class="action-icon">📥</div>
        <h3>Importar preguntas</h3>
        <p>Sube tus propias preguntas desde un archivo JSON. <strong style="color:#9c27b0">${QUESTIONS.length} preguntas</strong> en banco.</p>
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
          <div class="stat-card" style="border-top: 3px solid ${a.color}">
            <div class="stat-value" style="color:${a.color}">${qs.length}</div>
            <div class="stat-label">${a.name}</div>
            <div style="margin-top:8px;font-size:13px;color:var(--text-light)">
              ${ans.length ? `${corrects}/${ans.length} correctas (${progress}%)` : 'Sin comenzar'}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// Export for other modules
window.navigate = navigate;
window.APP = APP;
window.EXAM_CONFIG = EXAM_CONFIG;
window.QUESTIONS = QUESTIONS;
