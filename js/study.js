// ===== PrepICFES - Study Mode =====
function renderStudy() {
  const main = document.getElementById('main-content');
  APP.filteredQuestions = [...QUESTIONS];
  APP.currentQuestionIndex = 0;
  let activeArea = 'todas';
  let showErrorsOnly = false;
  let shuffledPool = [];
  let poolVersion = 0;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getFiltered() {
    let base = activeArea === 'todas' ? QUESTIONS : QUESTIONS.filter(q => q.area === activeArea);
    if (showErrorsOnly) base = base.filter(q => APP.studyAnswers[q.id] === false);
    const baseIds = new Set(base.map(q => q.id));
    const poolIds = new Set(shuffledPool.map(q => q.id));
    if (baseIds.size !== poolIds.size || [...baseIds].some(id => !poolIds.has(id))) {
      poolVersion++;
      shuffledPool = smartShuffle(base);
    }
    return shuffledPool;
  }

  function smartShuffle(questions) {
    const unanswered = [];
    const wrong = [];
    const correct = [];
    questions.forEach(q => {
      const val = APP.studyAnswers[q.id];
      if (val === undefined) unanswered.push(q);
      else if (val === false) wrong.push(q);
      else correct.push(q);
    });
    return [...shuffle(unanswered), ...shuffle(wrong), ...shuffle(correct)];
  }

  function renderQuestionView() {
    const filtered = getFiltered();
    if (!filtered.length) {
      main.innerHTML = `<div class="container"><h2 class="section-title">\u{1f4d6} Modo Estudio</h2><div class="empty-state"><div class="icon">\u{1f4ed}</div><h3>No hay preguntas en esta \u00e1rea</h3><p>Selecciona otra \u00e1rea o agrega m\u00e1s preguntas.</p></div></div>`;
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
    const totalCorrect = Object.keys(APP.studyAnswers).filter(k => !k.endsWith('_selected') && APP.studyAnswers[k] === true).length;
    const totalWrong = Object.keys(APP.studyAnswers).filter(k => !k.endsWith('_selected') && APP.studyAnswers[k] === false).length;

    const diffLabel = q.difficulty === 'dificil' ? `<span class="difficulty-badge dif dificil">Dif\u00edcil</span>`
      : q.difficulty === 'media' ? `<span class="difficulty-badge dif media">Media</span>`
      : `<span class="difficulty-badge dif facil">F\u00e1cil</span>`;

    const statusIcon = answered ? (isCorrect ? '<span style="color:var(--success)">\u2705</span>' : '<span style="color:var(--error)">\u274c</span>') : '<span style="color:var(--text-secondary)">\u25cb</span>';

    main.innerHTML = `
      <div class="container">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:8px">
          <h2 class="section-title" style="margin-bottom:0">\u{1f4d6} Modo Estudio</h2>
          <button class="btn btn-outline btn-sm" onclick="showStudyGuide()">\u{1f4cb} Gu\u00eda r\u00e1pida</button>
        </div>

        <div class="area-filter">
          <button class="area-btn ${activeArea === 'todas' ? 'active' : ''}" onclick="filterStudy('todas')">Todas (${QUESTIONS.length})</button>
          ${EXAM_CONFIG.areas.map(a => {
            const count = QUESTIONS.filter(q => q.area === a.id).length;
            return `<button class="area-btn ${activeArea === a.id ? 'active' : ''}" onclick="filterStudy('${a.id}')">${a.icon} ${a.name} (${count})</button>`;
          }).join('')}
          <button class="area-btn ${showErrorsOnly ? 'active' : ''}" onclick="toggleErrorsOnly()" style="${showErrorsOnly ? 'background:var(--error);border-color:var(--error);color:#fff' : ''}">\u274c Solo errores</button>
        </div>

        <div class="question-progress">
          <span>Pregunta ${current} de ${total}</span>
          <div class="progress-bar"><div class="progress-fill" style="width:${(current / total) * 100}%"></div></div>
          <span>${Math.round((current / total) * 100)}%</span>
        </div>

        <div class="question-card">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:12px">
            <div class="question-area-tag ${areaInfo ? areaInfo.tag : 'tag-lectura'}">${q.areaName}</div>
            ${diffLabel}
            <span class="question-count-badge">#${q.id}</span>
            ${statusIcon}
          </div>

          ${renderVisualContent(q)}
          ${q.context ? `<div class="question-context">${q.context}</div>` : ''}
          <div class="question-text">${q.question}</div>

          <div class="options-list">
            ${q.options.map((opt, i) => {
              let cls = 'option-item';
              if (answered) {
                cls += ' disabled';
                if (i === q.correct) cls += ' correct';
                else if (i === selectedIdx) cls += ' wrong';
              } else {
                if (selectedIdx === i) cls += ' selected';
              }
              const optContent = (q.optionsSvg && q.optionsSvg[i]) ? `<div class="option-svg">${q.optionsSvg[i]}</div><span>${opt}</span>` : `<span>${opt}</span>`;
              return `<div class="${cls}" onclick="${answered ? '' : `selectStudyOption(${i})`}"><span class="option-letter">${'ABCD'[i]}</span>${optContent}</div>`;
            }).join('')}
          </div>

          ${answered ? `
            <div style="display:flex;gap:8px;margin:12px 0;flex-wrap:wrap">
              <button class="btn btn-sm btn-outline" onclick="unmarkQuestion('${q.id}')">\u{1f504} Desmarcar esta pregunta</button>
              <button class="btn btn-sm btn-outline" onclick="markWrong('${q.id}')">\u{1f534} Marcar como incorrecta</button>
            </div>
            <div class="explanation-box ${isCorrect ? 'correct-box' : 'wrong-box'}">
              <div class="explanation-title">${isCorrect ? '<span class="check">\u2705 \u00a1Correcto!</span>' : '<span class="cross">\u274c Incorrecto</span>'}</div>
              <div class="explanation-correct"><strong>\u2714\ufe0f Respuesta correcta (${'ABCD'[q.correct]}):</strong><br>${q.explanation.correct}</div>
              <div class="explanation-wrongs">
                ${q.options.map((opt, i) => {
                  if (i === q.correct) return '';
                  return `<div class="explanation-wrong-item"><strong>\u274c ${'ABCD'[i]}:</strong> ${q.explanation.wrongs[i]}</div>`;
                }).join('')}
              </div>
            </div>
          ` : ''}
        </div>

        <div class="question-nav">
          <button class="btn btn-secondary" onclick="prevStudyQuestion()" ${current <= 1 ? 'disabled' : ''}>\u2190 Anterior</button>
          <div style="display:flex;gap:12px;align-self:center;font-size:13px;color:var(--text-secondary)">
            <span>\u2705 ${totalCorrect}</span>
            <span>\u274c ${totalWrong}</span>
            <span>\u25cb ${totalQ - progress}</span>
          </div>
          <button class="btn btn-primary" onclick="nextStudyQuestion()" ${current >= total ? 'disabled' : ''}>Siguiente \u2192</button>
        </div>
      </div>
    `;
  }

  window.filterStudy = (area) => { activeArea = area; APP.currentQuestionIndex = 0; shuffledPool = []; renderQuestionView(); };
  window.toggleErrorsOnly = () => { showErrorsOnly = !showErrorsOnly; APP.currentQuestionIndex = 0; shuffledPool = []; renderQuestionView(); };
  window.selectStudyOption = (idx) => {
    const filtered = getFiltered();
    const q = filtered[APP.currentQuestionIndex];
    if (APP.studyAnswers[q.id] !== undefined) return;
    APP.studyAnswers[q.id] = idx === q.correct;
    APP.studyAnswers[q.id + '_selected'] = idx;
    saveState();
    renderQuestionView();
  };
  window.unmarkQuestion = (id) => {
    delete APP.studyAnswers[id];
    delete APP.studyAnswers[id + '_selected'];
    saveState();
    poolVersion++;
    shuffledPool = smartShuffle(activeArea === 'todas' ? QUESTIONS : QUESTIONS.filter(q => q.area === activeArea));
    renderQuestionView();
  };
  window.markWrong = (id) => {
    APP.studyAnswers[id] = false;
    saveState();
    poolVersion++;
    shuffledPool = smartShuffle(activeArea === 'todas' ? QUESTIONS : QUESTIONS.filter(q => q.area === activeArea));
    renderQuestionView();
  };
  window.nextStudyQuestion = () => {
    const filtered = getFiltered();
    if (APP.currentQuestionIndex < filtered.length - 1) { APP.currentQuestionIndex++; renderQuestionView(); }
  };
  window.prevStudyQuestion = () => { if (APP.currentQuestionIndex > 0) { APP.currentQuestionIndex--; renderQuestionView(); } };

  window.showStudyGuide = () => {
    const answered = Object.keys(APP.studyAnswers).filter(k => !k.endsWith('_selected'));
    const corrects = answered.filter(k => APP.studyAnswers[k] === true);
    const wrongs = answered.filter(k => APP.studyAnswers[k] === false);
    main.innerHTML = `
      <div class="container">
        <button class="btn btn-secondary mb-4" onclick="renderStudy()">\u2190 Volver al estudio</button>
        <div class="stats-grid mb-4">
          <div class="stat-card"><div class="stat-value green">${corrects.length}</div><div class="stat-label">Correctas</div></div>
          <div class="stat-card"><div class="stat-value red">${wrongs.length}</div><div class="stat-label">Incorrectas</div></div>
          <div class="stat-card"><div class="stat-value">${answered.length}</div><div class="stat-label">Respondidas</div></div>
          <div class="stat-card"><div class="stat-value">${QUESTIONS.length - answered.length}</div><div class="stat-label">Pendientes</div></div>
        </div>
        <h3 class="section-title">\u{1f4cb} Progreso por \u00e1rea</h3>
        <div class="question-card">
          ${EXAM_CONFIG.areas.map(a => {
            const qs = QUESTIONS.filter(q => q.area === a.id);
            const ans = qs.filter(q => APP.studyAnswers[q.id] !== undefined);
            const corr = ans.filter(q => APP.studyAnswers[q.id] === true).length;
            const pct = ans.length ? Math.round((corr / ans.length) * 100) : 0;
            return `<div class="area-row"><span class="area-name" style="color:${a.color}">${a.icon} ${a.name}</span><div class="area-bar"><div class="area-bar-fill" style="width:${pct}%;background:${a.color}"></div></div><span class="area-score">${corr}/${ans.length} (${pct}%)</span></div>`;
          }).join('')}
        </div>
        <button class="btn btn-danger" onclick="resetStudy()">\u{1f504} Reiniciar progreso</button>
      </div>
    `;
  };

  window.resetStudy = () => {
    if (confirm('\u00bfEst\u00e1s seguro de reiniciar todo tu progreso de estudio?')) { APP.studyAnswers = {}; saveState(); renderStudy(); }
  };

  renderQuestionView();
}
window.renderStudy = renderStudy;
