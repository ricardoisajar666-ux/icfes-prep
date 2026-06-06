// ===== PrepICFES - Stats Page =====
function renderStats() {
  const sims = window.simulacros || [];
  const studyCorrect = Object.values(APP.studyAnswers).filter(v => v === true).length;
  const studyAnswered = Object.keys(APP.studyAnswers).filter(k => !k.endsWith('_selected')).length;
  const totalSims = sims.length;

  const allCorrect = sims.reduce((acc, s) => acc + (s.correctas || 0), 0) + studyCorrect;
  const allAnswered = sims.reduce((acc, s) => acc + (s.totalQuestions || 0), 0) + studyAnswered;
  const allIncorrect = allAnswered - allCorrect;

  const advancedSims = sims.filter(s => s.type === 'avanzado');
  const bestScore = advancedSims.length ? Math.max(...advancedSims.map(s => s.puntaje || 0)) : 0;
  const lastScore = advancedSims.length ? advancedSims[advancedSims.length - 1].puntaje : 0;
  const avgScore = advancedSims.length ? Math.round(advancedSims.reduce((acc, s) => acc + (s.puntaje || 0), 0) / advancedSims.length) : 0;
  const totalTime = sims.reduce((acc, s) => acc + (s.timeSpent || 0), 0);
  const totalTimeMins = Math.round(totalTime / 60);

  const areaPerf = {};
  EXAM_CONFIG.areas.forEach(a => {
    areaPerf[a.id] = {correctas: 0, total: 0};
    const studyQs = QUESTIONS.filter(q => q.area === a.id);
    studyQs.forEach(q => {
      if (APP.studyAnswers[q.id] !== undefined) {
        areaPerf[a.id].total++;
        if (APP.studyAnswers[q.id]) areaPerf[a.id].correctas++;
      }
    });
    sims.forEach(s => {
      if (s.questions && s.answers) {
        s.questions.forEach(qData => {
          const q = QUESTIONS.find(qq => qq.id === qData.id);
          if (q && q.area === a.id && s.answers[q.id] !== undefined) {
            areaPerf[a.id].total++;
            if (s.answers[q.id] === qData.correct) areaPerf[a.id].correctas++;
          }
        });
      }
    });
  });

  const main = document.getElementById('main-content');
  const hasData = allAnswered > 0;
  const recentSims = [...sims].reverse().slice(0, 10).reverse();

  const accuracyPct = allAnswered > 0 ? Math.round((allCorrect / allAnswered) * 100) : 0;

  main.innerHTML = `
    <div class="container stats-page">
      <h2 class="section-title">📈 Estad\u00edsticas</h2>
      <p class="section-subtitle">Sigue tu progreso y encuentra \u00e1reas de mejora</p>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">🏆</div>
          <div class="stat-value" style="background:linear-gradient(135deg,#f39c12,#e74c3c);-webkit-background-clip:text;-webkit-text-fill-color:transparent">${bestScore}</div>
          <div class="stat-label">Mejor puntaje (avanzado)</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">📊</div>
          <div class="stat-value">${avgScore}</div>
          <div class="stat-label">Promedio (avanzado)</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">🎯</div>
          <div class="stat-value" style="color:${lastScore >= bestScore - 50 ? 'var(--success)' : 'var(--error)'}">${lastScore}</div>
          <div class="stat-label">\u00faltimo puntaje</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">📝</div>
          <div class="stat-value">${totalSims}</div>
          <div class="stat-label">Simulacros realizados</div>
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">✅</div>
          <div class="stat-value green">${allCorrect}</div>
          <div class="stat-label">Respuestas correctas</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">❌</div>
          <div class="stat-value red">${allIncorrect}</div>
          <div class="stat-label">Respuestas incorrectas</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">🎯</div>
          <div class="stat-value" style="color:${accuracyPct >= 70 ? 'var(--success)' : accuracyPct >= 40 ? 'var(--warning)' : 'var(--error)'}">${accuracyPct}%</div>
          <div class="stat-label">Precisi\u00f3n general</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">⏱️</div>
          <div class="stat-value">${totalTimeMins} min</div>
          <div class="stat-label">Tiempo total</div>
        </div>
      </div>

      ${hasData ? `
        <div class="stat-card-large">
          <h3 style="font-weight:800;margin-bottom:20px">📊 Desempe\u00f1o por \u00e1rea</h3>
          ${EXAM_CONFIG.areas.map(a => {
            const perf = areaPerf[a.id];
            const pct = perf.total > 0 ? Math.round((perf.correctas / perf.total) * 100) : 0;
            const barColor = pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--error)';
            const emoji = pct >= 80 ? '🟢' : pct >= 50 ? '🟡' : '🔴';
            return `
              <div class="area-row">
                <span class="area-name" style="color:${a.color};min-width:180px">${a.icon} ${a.name}</span>
                <div class="area-bar"><div class="area-bar-fill" style="width:${pct}%;background:${barColor}"></div></div>
                <span class="area-score" style="min-width:120px;text-align:right">
                  ${emoji} <span style="color:${pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--error)'};font-weight:800">${pct}%</span>
                  <span style="color:var(--text-light);font-size:12px">(${perf.correctas}/${perf.total})</span>
                </span>
              </div>
            `;
          }).join('')}
        </div>

        ${recentSims.length > 0 ? `
          <div class="stat-card-large">
            <h3 style="font-weight:800;margin-bottom:20px">📈 Evoluci\u00f3n de puntajes</h3>
            <div class="stats-chart">
              ${recentSims.map((s, i) => {
                const height = Math.max(4, (s.puntaje || 0) / 5);
                const color = s.puntaje >= 400 ? 'var(--success)' : s.puntaje >= 250 ? 'var(--warning)' : 'var(--error)';
                return `<div class="chart-bar" style="height:${height}%;background:linear-gradient(180deg,${color},${color}cc)" title="${s.puntaje} pts - ${new Date(s.date).toLocaleDateString('es-CO')}"><span class="chart-label">#${i + 1}</span></div>`;
              }).join('')}
            </div>
            <div style="text-align:center;font-size:13px;color:var(--text-light);margin-top:24px">\u00faltimos ${recentSims.length} simulacros</div>
          </div>
        ` : ''}

        ${sims.length > 0 ? `
          <div class="stat-card-large">
            <h3 style="font-weight:800;margin-bottom:20px">📋 Historial de simulacros</h3>
            <div style="overflow-x:auto">
              <table class="history-table">
                <thead><tr><th>Fecha</th><th>Nivel</th><th>Correctas</th><th>Incorrectas</th><th>Sin resp.</th><th>Puntaje</th><th></th></tr></thead>
                <tbody>
                  ${[...sims].reverse().map((s, i) => {
                    const realIdx = sims.length - 1 - i;
                    return `<tr><td>${new Date(s.date).toLocaleDateString('es-CO')}</td><td><span style="font-weight:700">${EXAM_CONFIG.simulacros[s.type]?.label || s.type}</span></td><td style="color:var(--success);font-weight:700">${s.correctas}</td><td style="color:var(--error)">${s.incorrectas}</td><td style="color:#95a5a6">${s.sinResponder || 0}</td><td style="font-weight:800;color:var(--primary)">${s.puntaje}</td><td><button class="btn btn-sm btn-outline" onclick="reviewSimulacroAnswers(${realIdx})">Ver</button></td></tr>`;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>
        ` : ''}
      ` : `
        <div class="empty-state">
          <div class="icon">📊</div>
          <h3>A\u00fan no hay datos estad\u00edsticos</h3>
          <p>Comienza a estudiar y a hacer simulacros para ver tu progreso aqu\u00ed.</p>
          <div class="flex gap-2" style="justify-content:center;margin-top:16px">
            <button class="btn btn-primary" onclick="navigate('study')">📖 Ir a estudiar</button>
            <button class="btn btn-outline" onclick="navigate('simulacro')">⏱️ Hacer simulacro</button>
          </div>
        </div>
      `}
    </div>
  `;
}

window.renderStats = renderStats;
