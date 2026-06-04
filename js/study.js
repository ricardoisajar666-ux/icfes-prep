function renderStudy() {
  const main = document.getElementById('main-content');
  APP.filteredQuestions = [...QUESTIONS];
  APP.currentQuestionIndex = 0;
  let activeArea = 'todas';
  let shuffledPool = [];

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getFiltered() {
    const base = activeArea === 'todas' ? QUESTIONS : QUESTIONS.filter(q => q.area === activeArea);
    if (shuffledPool.length !== base.length || !shuffledPool.every((q, i) => q.id === base[i]?.id)) {
      shuffledPool = shuffle(base);
    }
    return shuffledPool;
  }

  function renderQuestionView() {
    const filtered = getFiltered();
    if (!filtered.length) {
      main.innerHTML = `
        <div class="container">
          <h2 class="section-title">📖 Modo Estudio</h2>
          <div class="empty-state">
            <div class="icon">📭</div>
            <h3>No hay preguntas en esta área</h3>
            <p>Selecciona otra área o agrega más preguntas.</p>
          </div>
        </div>
      `;
      return;
    }
    if (APP.currentQuestionIndex >= filtered.length) APP.currentQuestionIndex = 0;
    const q = filtered[APP.currentQuestionIndex];
    const total = filtered.length;
    const current = APP.currentQuestionIndex + 1;
    const answered = APP.studyAnswers[q.id] !== undefined;
    const selectedIdx = APP.studyAnswers[q.id + '_selected'];
    const isCorrect = APP.studyAnswers[q.id];
    const areaInfo = getAreaInfo(q.area);

    const progress = Object.keys(APP.studyAnswers).filter(k => !k.endsWith('_selected')).length;
    const totalQ = QUESTIONS.length;

    main.innerHTML = `
      <div class="container">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:8px">
          <h2 class="section-title" style="margin-bottom:0">📖 Modo Estudio</h2>
          <button class="btn btn-outline btn-sm" onclick="showStudyGuide()">📋 Guía rápida</button>
        </div>

        <div class="area-filter">
          <button class="area-btn ${activeArea === 'todas' ? 'active' : ''}" onclick="filterStudy('todas')">Todas</button>
          ${EXAM_CONFIG.areas.map(a => `
            <button class="area-btn ${activeArea === a.id ? 'active' : ''}" onclick="filterStudy('${a.id}')">${a.name}</button>
          `).join('')}
        </div>

        <div class="question-progress">
          <span>Pregunta ${current} de ${total}</span>
          <div class="progress-bar">
            <div class="progress-fill" style="width:${(current/total)*100}%"></div>
          </div>
          <span>${Math.round((current/total)*100)}%</span>
        </div>

        <div class="question-card">
          <div class="question-area-tag ${areaInfo ? areaInfo.tag : 'tag-lectura'}">${q.areaName}</div>
          ${q.difficulty === 'dificil' ? '<span style="font-size:12px;color:var(--error);margin-left:8px">🔴 Difícil</span>' : q.difficulty === 'media' ? '<span style="font-size:12px;color:#ff9800;margin-left:8px">🟡 Media</span>' : '<span style="font-size:12px;color:var(--success);margin-left:8px">🟢 Fácil</span>'}
          <div class="question-number">Pregunta #${q.id}</div>
          ${q.context ? `<div class="question-context">${q.context}</div>` : ''}
          <div class="question-text">${q.question}</div>

          <div class="options-list">
            ${q.options.map((opt, i) => {
              let cls = 'option-item';
              if (answered) {
                cls += ' disabled';
                if (i === q.correct) cls += ' correct';
                else if (i === selectedIdx) cls += ' wrong';
                else if (i === selectedIdx && i === q.correct) cls += ' correct';
              } else {
                if (selectedIdx === i) cls += ' selected';
              }
              return `
                <div class="${cls}" onclick="${answered ? '' : `selectStudyOption(${i})`}">
                  <span class="option-letter">${'ABCD'[i]}</span>
                  <span>${opt}</span>
                </div>
              `;
            }).join('')}
          </div>

          ${answered ? `
            <div class="explanation-box ${isCorrect ? 'correct-box' : 'wrong-box'}">
              <div class="explanation-title">
                ${isCorrect ? '<span class="check">✅ ¡Correcto!</span>' : '<span class="cross">❌ Incorrecto</span>'}
              </div>
              <div class="explanation-correct">
                <strong>✔️ Respuesta correcta (${'ABCD'[q.correct]}):</strong><br>
                ${q.explanation.correct}
              </div>
              <div class="explanation-wrongs">
                ${q.options.map((opt, i) => {
                  if (i === q.correct) return '';
                  return `<div class="explanation-wrong-item"><strong>❌ ${'ABCD'[i]}:</strong> ${q.explanation.wrongs[i]}</div>`;
                }).join('')}
              </div>
            </div>
          ` : ''}
        </div>

        <div class="question-nav">
          <button class="btn btn-secondary" onclick="prevStudyQuestion()" ${current <= 1 ? 'disabled' : ''}>← Anterior</button>
          <span style="font-size:13px;color:var(--text-light);align-self:center">Progreso total: ${progress}/${totalQ}</span>
          <button class="btn btn-primary" onclick="nextStudyQuestion()" ${current >= total ? 'disabled' : ''}>Siguiente →</button>
        </div>
      </div>
    `;
  }

  window.filterStudy = (area) => {
    activeArea = area;
    APP.currentQuestionIndex = 0;
    shuffledPool = [];
    renderQuestionView();
  };

  window.selectStudyOption = (idx) => {
    const filtered = getFiltered();
    const q = filtered[APP.currentQuestionIndex];
    if (APP.studyAnswers[q.id] !== undefined) return;
    APP.studyAnswers[q.id] = idx === q.correct;
    APP.studyAnswers[q.id + '_selected'] = idx;
    saveState();
    renderQuestionView();
  };

  window.nextStudyQuestion = () => {
    const filtered = getFiltered();
    if (APP.currentQuestionIndex < filtered.length - 1) {
      APP.currentQuestionIndex++;
      renderQuestionView();
    }
  };

  window.prevStudyQuestion = () => {
    if (APP.currentQuestionIndex > 0) {
      APP.currentQuestionIndex--;
      renderQuestionView();
    }
  };

  window.showStudyGuide = () => {
    const content = document.getElementById('main-content');
    const filtered = getFiltered();
    const answered = Object.keys(APP.studyAnswers).filter(k => !k.endsWith('_selected'));
    const corrects = answered.filter(k => APP.studyAnswers[k] === true);
    const wrongs = answered.filter(k => APP.studyAnswers[k] === false);

    content.innerHTML = `
      <div class="container">
        <button class="btn btn-secondary mb-4" onclick="renderStudy()">← Volver al estudio</button>
        <div class="stats-grid mb-4">
          <div class="stat-card">
            <div class="stat-value green">${corrects.length}</div>
            <div class="stat-label">Correctas</div>
          </div>
          <div class="stat-card">
            <div class="stat-value red">${wrongs.length}</div>
            <div class="stat-label">Incorrectas</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${answered.length}</div>
            <div class="stat-label">Respondidas</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${QUESTIONS.length - answered.length}</div>
            <div class="stat-label">Pendientes</div>
          </div>
        </div>
        <h3 class="section-title">📋 Progreso por área</h3>
        <div class="question-card">
          ${EXAM_CONFIG.areas.map(a => {
            const qs = QUESTIONS.filter(q => q.area === a.id);
            const ans = qs.filter(q => APP.studyAnswers[q.id] !== undefined);
            const corr = ans.filter(q => APP.studyAnswers[q.id] === true).length;
            const pct = ans.length ? Math.round((corr/ans.length)*100) : 0;
            return `
              <div class="area-row">
                <span class="area-name" style="color:${a.color}">${a.name}</span>
                <div class="area-bar">
                  <div class="area-bar-fill" style="width:${pct}%;background:${a.color}"></div>
                </div>
                <span class="area-score">${corr}/${ans.length} (${pct}%)</span>
              </div>
            `;
          }).join('')}
        </div>
        <button class="btn btn-danger" onclick="resetStudy()">🔄 Reiniciar progreso de estudio</button>
      </div>
    `;
  };

  window.resetStudy = () => {
    if (confirm('¿Estás seguro de reiniciar todo tu progreso de estudio?')) {
      APP.studyAnswers = {};
      saveState();
      renderStudy();
    }
  };

  renderQuestionView();
}

// make renderStudy available globally
window.renderStudy = renderStudy;
