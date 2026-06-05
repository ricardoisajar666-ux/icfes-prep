let simulacroTimer = null;
let simulacroState = null;

function renderSimulacroSelect() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="container">
      <h2 class="section-title">⏱️ Modo Simulacro</h2>
      <p class="section-subtitle">Elige el nivel que se ajuste a tu preparación. Cada simulacro tiene tiempo límite y un sistema de puntuación realista.</p>

      <div class="simulacro-select">
        <div class="difficulty-card easy" onclick="startSimulacro('facil')">
          <div class="difficulty-icon">🌱</div>
          <h3>Fácil</h3>
          <p>Perfecto para empezar</p>
          <div class="difficulty-detail">50 preguntas · 45 minutos</div>
        </div>
        <div class="difficulty-card medium" onclick="startSimulacro('intermedio')">
          <div class="difficulty-icon">🔥</div>
          <h3>Intermedio</h3>
          <p>Pon a prueba tu resistencia</p>
          <div class="difficulty-detail">150 preguntas · 90 minutos</div>
        </div>
        <div class="difficulty-card hard" onclick="startSimulacro('avanzado')">
          <div class="difficulty-icon">💀</div>
          <h3>Avanzado</h3>
          <p>Simulación completa del examen real</p>
          <div class="difficulty-detail">254 preguntas · 3 horas</div>
        </div>
      </div>

      <div class="question-card">
        <h3 style="margin-bottom:12px">📊 Distribución del examen avanzado</h3>
        <p style="font-size:14px;color:var(--text-light);margin-bottom:16px">El simulacro avanzado replica la distribución oficial del ICFES Saber 11°:</p>
        ${Object.entries(EXAM_CONFIG.avanzadoBreakdown).map(([area, count]) => {
          const info = getAreaInfo(area);
          return `
            <div class="area-row">
              <span class="area-name" style="color:${info ? info.color : '#333'}">${info ? info.name : area}</span>
              <div class="area-bar">
                <div class="area-bar-fill" style="width:${(count/254)*100}%;background:${info ? info.color : '#333'}"></div>
              </div>
              <span class="area-score">${count} preg · ${info ? Math.round(info.weight*100) : 0}%</span>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startSimulacro(type) {
  const config = EXAM_CONFIG.simulacros[type];
  const totalQ = config.questions;

  let pool;
  if (type === 'avanzado') {
    pool = [];
    const breakdown = EXAM_CONFIG.avanzadoBreakdown;
    Object.entries(breakdown).forEach(([area, count]) => {
      const areaQs = QUESTIONS.filter(q => q.area === area);
      const shuffled = shuffle(areaQs);
      pool.push(...shuffled.slice(0, Math.min(count, shuffled.length)));
    });
    // Fill remaining if not enough questions
    while (pool.length < totalQ) {
      const extras = QUESTIONS.filter(q => !pool.find(p => p.id === q.id));
      if (!extras.length) break;
      pool.push(extras[Math.floor(Math.random() * extras.length)]);
    }
  } else {
    pool = shuffle(QUESTIONS);
    if (pool.length < totalQ) {
      // Repeat questions if not enough
      while (pool.length < totalQ) {
        pool.push({...QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)], id: pool.length + 1});
      }
    }
    pool = pool.slice(0, totalQ);
  }

  simulacroState = {
    type: type,
    questions: pool,
    totalQuestions: pool.length,
    answers: {},
    timeRemaining: config.time * 60,
    currentIndex: 0,
    startTime: Date.now(),
    finished: false
  };

  APP.simulacroState = simulacroState;
  navigate('simulacro-playing');
}

function renderSimulacroPlaying() {
  const state = simulacroState;
  if (!state) { navigate('simulacro'); return; }

  const q = state.questions[state.currentIndex];
  const total = state.totalQuestions;
  const current = state.currentIndex + 1;
  const answered = state.answers[q.id] !== undefined;
  const selectedIdx = state.answers[q.id];
  const areaInfo = getAreaInfo(q.area);

  const config = EXAM_CONFIG.simulacros[state.type];

  const mins = Math.floor(state.timeRemaining / 60);
  const secs = state.timeRemaining % 60;
  const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  const answeredCount = Object.keys(state.answers).length;
  const timerClass = state.timeRemaining <= 60 ? 'danger' : state.timeRemaining <= 300 ? 'warning' : '';

  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="container">
      <div class="timer-bar">
        <div class="simulacro-info">
          <span>📋 ${config.label}</span>
          <span>📝 ${answeredCount}/${total}</span>
        </div>
        <div class="timer ${timerClass}" id="simulacro-timer">${timeStr}</div>
        <button class="btn btn-danger btn-sm" onclick="confirmEndSimulacro()">✋ Terminar</button>
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
        ${renderVisualContent(q)}
        ${q.context ? `<div class="question-context">${q.context}</div>` : ''}
        <div class="question-text">${q.question}</div>

        <div class="options-list">
          ${q.options.map((opt, i) => {
            let cls = 'option-item';
            if (answered) cls += ' disabled';
            if (selectedIdx === i) cls += ' selected';
            return `
              <div class="${cls}" onclick="${answered ? '' : `selectSimulacroOption(${i})`}">
                <span class="option-letter">${'ABCD'[i]}</span>
                <span>${opt}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="question-nav">
        <button class="btn btn-secondary" onclick="prevSimulacroQuestion()" ${state.currentIndex <= 0 ? 'disabled' : ''}>← Anterior</button>
        <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center">
          ${state.questions.slice(Math.max(0, state.currentIndex - 4), Math.min(total, state.currentIndex + 5)).map((_, i) => {
            const idx = Math.max(0, state.currentIndex - 4) + i;
            const qq = state.questions[idx];
            let btnClass = 'btn btn-sm ';
            if (idx === state.currentIndex) btnClass += 'btn-primary';
            else if (state.answers[qq.id] !== undefined) btnClass += 'btn-success';
            else btnClass += 'btn-secondary';
            return `<button class="${btnClass}" onclick="goToSimulacroQuestion(${idx})">${idx + 1}</button>`;
          }).join('')}
        </div>
        <button class="btn btn-primary" onclick="nextSimulacroQuestion()" ${state.currentIndex >= total - 1 ? 'disabled' : ''}>Siguiente →</button>
      </div>
    </div>
  `;

  // Start timer
  if (simulacroTimer) clearInterval(simulacroTimer);
  simulacroTimer = setInterval(() => {
    state.timeRemaining--;
    if (state.timeRemaining <= 0) {
      clearInterval(simulacroTimer);
      finishSimulacro();
      return;
    }
    const timerEl = document.getElementById('simulacro-timer');
    if (timerEl) {
      const m = Math.floor(state.timeRemaining / 60);
      const s = state.timeRemaining % 60;
      timerEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      timerEl.className = 'timer' + (state.timeRemaining <= 60 ? ' danger' : state.timeRemaining <= 300 ? ' warning' : '');
    }
  }, 1000);
}

function selectSimulacroOption(idx) {
  const state = simulacroState;
  if (!state || state.finished) return;
  const q = state.questions[state.currentIndex];
  state.answers[q.id] = idx;
  renderSimulacroPlaying();
}

function nextSimulacroQuestion() {
  const state = simulacroState;
  if (!state) return;
  if (state.currentIndex < state.totalQuestions - 1) {
    state.currentIndex++;
    renderSimulacroPlaying();
  }
}

function prevSimulacroQuestion() {
  const state = simulacroState;
  if (!state) return;
  if (state.currentIndex > 0) {
    state.currentIndex--;
    renderSimulacroPlaying();
  }
}

function goToSimulacroQuestion(idx) {
  const state = simulacroState;
  if (!state) return;
  if (idx >= 0 && idx < state.totalQuestions) {
    state.currentIndex = idx;
    renderSimulacroPlaying();
  }
}

function confirmEndSimulacro() {
  const state = simulacroState;
  if (!state) return;
  const answered = Object.keys(state.answers).length;
  const total = state.totalQuestions;

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box">
      <h2>✋ ¿Terminar simulacro?</h2>
      <p>Has respondido ${answered} de ${total} preguntas. ${total - answered} preguntas quedarán sin responder.</p>
      <div class="modal-actions">
        <button class="btn btn-secondary" onclick="document.getElementById('modal-overlay').remove()">Seguir</button>
        <button class="btn btn-danger" onclick="finishSimulacro()">Terminar ahora</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

function finishSimulacro() {
  if (simulacroTimer) clearInterval(simulacroTimer);
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.remove();

  const state = simulacroState;
  if (!state) return;
  state.finished = true;

  // Calculate results
  const results = calculateResults(state);
  window.simulacros = window.simulacros || [];
  window.simulacros.push(results);
  saveState();

  simulacroState = null;
  APP.simulacroState = null;
  navigate('simulacro-results', results);
}

function calculateResults(state) {
  const total = state.totalQuestions;
  let correctas = 0;
  let incorrectas = 0;
  let sinResponder = 0;
  const areaResults = {};

  EXAM_CONFIG.areas.forEach(a => {
    areaResults[a.id] = { total: 0, correctas: 0, incorrectas: 0, sinResponder: 0 };
  });

  state.questions.forEach(q => {
    const ans = state.answers[q.id];
    if (ans === undefined) {
      sinResponder++;
      if (areaResults[q.area]) areaResults[q.area].sinResponder++;
    } else if (ans === q.correct) {
      correctas++;
      if (areaResults[q.area]) { areaResults[q.area].correctas++; areaResults[q.area].total++; }
    } else {
      incorrectas++;
      if (areaResults[q.area]) { areaResults[q.area].incorrectas++; areaResults[q.area].total++; }
    }
  });

  // Calculate score (0-500) based on advanced mode weights
  let puntaje = 0;
  if (state.type === 'avanzado') {
    let totalPonderado = 0;
    EXAM_CONFIG.areas.forEach(a => {
      const ar = areaResults[a.id];
      const areaTotal = ar.correctas + ar.incorrectas;
      if (areaTotal > 0) {
        const pct = ar.correctas / (ar.correctas + ar.incorrectas);
        totalPonderado += pct * a.weight;
      }
    });
    puntaje = Math.round(totalPonderado * 500);
  } else {
    // For non-advanced, simple percentage
    const answered = correctas + incorrectas;
    const pct = answered > 0 ? correctas / answered : 0;
    puntaje = Math.round(pct * 500);
  }

  puntaje = Math.min(500, Math.max(0, puntaje));

  const timeSpent = Math.round((Date.now() - state.startTime) / 1000);

  return {
    date: new Date().toISOString(),
    type: state.type,
    totalQuestions: total,
    correctas,
    incorrectas,
    sinResponder,
    puntaje,
    timeSpent,
    areaResults,
    answers: state.answers,
    questions: state.questions.map(q => ({ id: q.id, correct: q.correct, area: q.area }))
  };
}

function renderSimulacroResults(results) {
  if (!results) {
    navigate('simulacro');
    return;
  }

  const config = EXAM_CONFIG.simulacros[results.type];
  const total = results.totalQuestions;
  const correctas = results.correctas;
  const incorrectas = results.incorrectas;
  const sinResponder = results.sinResponder;
  const pct = total > 0 ? Math.round(((correctas + incorrectas) / total) * 100) : 0;

  const timeMins = Math.floor(results.timeSpent / 60);
  const timeSecs = results.timeSpent % 60;

  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="container">
      <div class="results-container">
        <div class="results-header">
          <div style="font-size:14px;color:var(--text-light);margin-bottom:8px">${config.label} · ${new Date(results.date).toLocaleDateString('es-CO')}</div>
          <div class="results-score">${results.puntaje}</div>
          <div style="font-size:16px;color:var(--text-light)">de 500 puntos</div>
          <div class="score-bar" style="max-width:300px;margin:12px auto">
            <div class="score-bar-fill" style="width:${results.puntaje/5}%"></div>
          </div>
          ${results.type === 'avanzado' ? '<div style="font-size:13px;color:var(--text-light);margin-top:4px">Puntaje ponderado oficial</div>' : '<div style="font-size:13px;color:var(--text-light);margin-top:4px">Puntaje estimado</div>'}
        </div>

        <div class="results-details">
          <div class="result-item">
            <div class="value green">${correctas}</div>
            <div class="label">Correctas</div>
          </div>
          <div class="result-item">
            <div class="value red">${incorrectas}</div>
            <div class="label">Incorrectas</div>
          </div>
          <div class="result-item">
            <div class="value" style="color:#95a5a6">${sinResponder}</div>
            <div class="label">Sin responder</div>
          </div>
          <div class="result-item">
            <div class="value" style="color:var(--primary)">${pct}%</div>
            <div class="label">Completado</div>
          </div>
          <div class="result-item">
            <div class="value" style="color:var(--primary)">${timeMins}:${String(timeSecs).padStart(2, '0')}</div>
            <div class="label">Tiempo usado</div>
          </div>
        </div>

        <div class="area-breakdown">
          <h3 style="margin-bottom:16px">📊 Desempeño por área</h3>
          ${EXAM_CONFIG.areas.map(a => {
            const ar = results.areaResults[a.id];
            if (!ar) return '';
            const totalArea = ar.correctas + ar.incorrectas;
            const pctArea = totalArea > 0 ? Math.round((ar.correctas / totalArea) * 100) : 0;
            return `
              <div class="area-row">
                <span class="area-name" style="color:${a.color}">${a.name}</span>
                <div class="area-bar">
                  <div class="area-bar-fill" style="width:${pctArea}%;background:${a.color}"></div>
                </div>
                <span class="area-score">${ar.correctas}/${totalArea} (${pctArea}%)</span>
              </div>
            `;
          }).join('')}
        </div>

        <div class="question-nav" style="justify-content:center">
          <button class="btn btn-primary btn-lg" onclick="navigate('simulacro')">🔄 Nuevo simulacro</button>
          <button class="btn btn-outline btn-lg" onclick="reviewSimulacroAnswers(${window.simulacros.length - 1})">📝 Revisar respuestas</button>
          <button class="btn btn-secondary btn-lg" onclick="navigate('stats')">📈 Ver estadísticas</button>
          <button class="btn btn-sm btn-outline" onclick="shareResults(window.simulacros[${window.simulacros.length - 1}])" style="border-color:#25D366;color:#25D366">📤 Compartir</button>
        </div>
      </div>
    </div>
  `;
}

function reviewSimulacroAnswers(simIndex) {
  const sim = window.simulacros[simIndex];
  if (!sim) return;

  const main = document.getElementById('main-content');
  let html = `
    <div class="container">
      <button class="btn btn-secondary mb-4" onclick="renderSimulacroResults(window.simulacros[${simIndex}])">← Volver a resultados</button>
      <h2 class="section-title">📝 Revisión de respuestas</h2>
      <p class="section-subtitle">Revisa cada pregunta para ver cuál era la respuesta correcta</p>
  `;

  sim.questions.forEach((qData, idx) => {
    const q = QUESTIONS.find(qq => qq.id === qData.id);
    if (!q) return;
    const userAns = sim.answers[q.id];
    const isCorrect = userAns === qData.correct;
    const areaInfo = getAreaInfo(q.area);

    html += `
      <div class="question-card" style="margin-bottom:12px;padding:16px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
          <div class="question-area-tag ${areaInfo ? areaInfo.tag : 'tag-lectura'}" style="margin-bottom:0">${q.areaName}</div>
          <span style="font-size:14px;font-weight:600;color:${isCorrect ? 'var(--success)' : 'var(--error)'}">
            ${isCorrect ? '✅ Correcta' : '❌ Incorrecta'}
          </span>
        </div>
        ${q.image ? `<div style="margin-bottom:8px"><img src="${q.image}" alt="" style="max-width:120px;max-height:80px;border-radius:6px;object-fit:cover" loading="lazy"></div>` : ''}
        <div style="font-size:14px;font-weight:500;margin-bottom:8px">${idx + 1}. ${q.question.length > 100 ? q.question.substring(0, 100) + '...' : q.question}</div>
        <div style="font-size:13px;color:var(--text-light)">
          Tu respuesta: <strong>${userAns !== undefined ? 'ABCD'[userAns] : 'No respondiste'}</strong> ·
          Respuesta correcta: <strong style="color:var(--success)">${'ABCD'[qData.correct]}</strong>
        </div>
      </div>
    `;
  });

  html += '</div>';
  main.innerHTML = html;
}

function shareResults(results) {
  if (!results) return;
  const timeM = Math.floor(results.timeSpent / 60);
  const timeS = results.timeSpent % 60;
  const text = `📚 PrepICFES - Resultado Simulacro\n` +
    `Puntaje: ${results.puntaje}/500\n` +
    `✅ Correctas: ${results.correctas}\n` +
    `❌ Incorrectas: ${results.incorrectas}\n` +
    `⏱️ Tiempo: ${timeM}m ${String(timeS).padStart(2,'0')}s\n\n` +
    `🧠 Sigue practicando en icfes-prep.netlify.app`;

  if (navigator.share) {
    navigator.share({ title: 'PrepICFES - Resultado', text }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      alert('📋 Resultado copiado al portapapeles');
    }).catch(() => {});
  } else {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    alert('📋 Resultado copiado al portapapeles');
  }
}
window.shareResults = shareResults;

// Export globals
window.renderSimulacroSelect = renderSimulacroSelect;
window.startSimulacro = startSimulacro;
window.renderSimulacroPlaying = renderSimulacroPlaying;
window.selectSimulacroOption = selectSimulacroOption;
window.nextSimulacroQuestion = nextSimulacroQuestion;
window.prevSimulacroQuestion = prevSimulacroQuestion;
window.goToSimulacroQuestion = goToSimulacroQuestion;
window.confirmEndSimulacro = confirmEndSimulacro;
window.finishSimulacro = finishSimulacro;
window.renderSimulacroResults = renderSimulacroResults;
window.reviewSimulacroAnswers = reviewSimulacroAnswers;
