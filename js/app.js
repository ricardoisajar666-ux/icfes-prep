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
    { id: 'lectura', name: 'Lectura Cr\u00edtica', color: '#1565c0', tag: 'tag-lectura', weight: 0.25, icon: '📖' },
    { id: 'matematicas', name: 'Matem\u00e1ticas', color: '#e65100', tag: 'tag-matematicas', weight: 0.25, icon: '🔢' },
    { id: 'sociales', name: 'Sociales y Ciudadan\u00eda', color: '#c62828', tag: 'tag-sociales', weight: 0.20, icon: '🌍' },
    { id: 'ciencias', name: 'Ciencias Naturales', color: '#2e7d32', tag: 'tag-ciencias', weight: 0.20, icon: '🔬' },
    { id: 'ingles', name: 'Ingl\u00e9s', color: '#6a1b9a', tag: 'tag-ingles', weight: 0.10, icon: '🗣️' }
  ],
  simulacros: {
    facil: { questions: 50, time: 45, label: '🌱 F\u00e1cil' },
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
      <h1>Prep\u00e1rate para el ICFES</h1>
      <p>Domina el Saber 11\u00b0 con estudio personalizado y simulacros realistas basados en el examen oficial</p>
      <div class="welcome-badges">
        ${AUTH.getStreak() > 0 ? `<span class="welcome-badge">🔥 ${AUTH.getStreak()} d\u00edas consecutivos</span>` : ''}
        <span class="welcome-badge">📚 ${QUESTIONS.length} preguntas</span>
        <span class="welcome-badge">👤 ${AUTH.getCurrentUser()}</span>
      </div>
    </div>

    <div class="score-card">
      <div class="score-display">${bestScore}</div>
      <div class="score-label">de 500 \u00b7 Mejor puntaje en simulacro avanzado</div>
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

    <h2 class="section-title">⚡ Acceso r\u00e1pido</h2>
    <div class="quick-actions">
      <div class="action-card" onclick="navigate('study')">
        <span class="action-icon">📖</span>
        <h3>Modo Estudio</h3>
        <p>Todas las preguntas con explicaciones detalladas. Aprende a tu ritmo y repasa tus errores.</p>
      </div>
      <div class="action-card" onclick="navigate('simulacro')">
        <span class="action-icon">⏱️</span>
        <h3>Modo Simulacro</h3>
        <p>Pon a prueba tus conocimientos con tiempo l\u00edmite. 3 niveles de dificultad.</p>
      </div>
      <div class="action-card" onclick="navigate('stats')">
        <span class="action-icon">📈</span>
        <h3>Estad\u00edsticas</h3>
        <p>Revisa tu progreso, \u00e1reas d\u00e9biles y evoluci\u00f3n en el tiempo.</p>
      </div>
    </div>

    <h2 class="section-title">📋 \u00e1reas del examen</h2>
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
