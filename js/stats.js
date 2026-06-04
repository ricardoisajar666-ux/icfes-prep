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

  // Calculate area performance from study + simulacro
  const areaPerf = {};
  EXAM_CONFIG.areas.forEach(a => {
    areaPerf[a.id] = { correctas: 0, total: 0 };
    // Study mode
    const studyQs = QUESTIONS.filter(q => q.area === a.id);
    studyQs.forEach(q => {
      if (APP.studyAnswers[q.id] !== undefined) {
        areaPerf[a.id].total++;
        if (APP.studyAnswers[q.id]) areaPerf[a.id].correctas++;
      }
    });
    // Simulacro answers
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

  // Last 5 simulacros scores for chart
  const recentSims = [...sims].reverse().slice(0, 10).reverse();

  main.innerHTML = `
    <div class="container stats-page">
      <h2 class="section-title">📈 Estadísticas</h2>
      <p class="section-subtitle">Sigue tu progreso y encuentra áreas de mejora</p>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">🏆</div>
          <div class="stat-value" style="background:linear-gradient(135deg, #f39c12, #e74c3c);-webkit-background-clip:text;-webkit-text-fill-color:transparent">${bestScore}</div>
          <div class="stat-label">Mejor puntaje (avanzado)</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${avgScore}</div>
          <div class="stat-label">Promedio (avanzado)</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" style="color:${lastScore >= bestScore - 50 ? 'var(--success)' : 'var(--error)'}">${lastScore}</div>
          <div class="stat-label">Último puntaje</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${totalSims}</div>
          <div class="stat-label">Simulacros hechos</div>
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
          <div class="stat-value">${allAnswered}</div>
          <div class="stat-label">Total respondidas</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">⏱️</div>
          <div class="stat-value">${totalTimeMins} min</div>
          <div class="stat-label">Tiempo total en simulacros</div>
        </div>
      </div>

      ${hasData ? `
        <div class="stat-card-large">
          <h3>📊 Desempeño por área</h3>
          <div style="margin-top:16px">
            ${EXAM_CONFIG.areas.map(a => {
              const perf = areaPerf[a.id];
              const pct = perf.total > 0 ? Math.round((perf.correctas / perf.total) * 100) : 0;
              const barColor = pct >= 80 ? 'var(--success)' : pct >= 50 ? '#ff9800' : 'var(--error)';
              return `
                <div class="area-row">
                  <span class="area-name" style="color:${a.color};min-width:160px">${a.name}</span>
                  <div class="area-bar">
                    <div class="area-bar-fill" style="width:${pct}%;background:${barColor}"></div>
                  </div>
                  <span class="area-score" style="min-width:100px;text-align:right">
                    <span style="color:${pct >= 80 ? 'var(--success)' : pct >= 50 ? '#ff9800' : 'var(--error)'};font-weight:700">${pct}%</span>
                    (${perf.correctas}/${perf.total})
                  </span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        ${recentSims.length > 0 ? `
          <div class="stat-card-large">
            <h3>📈 Evolución de puntajes</h3>
            <div class="stats-chart">
              ${recentSims.map((s, i) => {
                const height = Math.max(4, (s.puntaje || 0) / 5);
                return `
                  <div class="chart-bar" style="height:${height}%" title="${s.puntaje} pts - ${new Date(s.date).toLocaleDateString('es-CO')}">
                    <span class="chart-label">#${i + 1}</span>
                  </div>
                `;
              }).join('')}
            </div>
            <div style="text-align:center;font-size:13px;color:var(--text-light);margin-top:24px">
              Últimos ${recentSims.length} simulacros
            </div>
          </div>
        ` : ''}

        ${sims.length > 0 ? `
          <div class="stat-card-large">
            <h3>📋 Historial de simulacros</h3>
            <div style="overflow-x:auto;margin-top:16px">
              <table class="history-table">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Nivel</th>
                    <th>Correctas</th>
                    <th>Incorrectas</th>
                    <th>Sin resp.</th>
                    <th>Puntaje</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  ${[...sims].reverse().map((s, i) => {
                    const realIdx = sims.length - 1 - i;
                    return `
                      <tr>
                        <td>${new Date(s.date).toLocaleDateString('es-CO')}</td>
                        <td><span style="font-weight:600">${EXAM_CONFIG.simulacros[s.type]?.label || s.type}</span></td>
                        <td style="color:var(--success);font-weight:600">${s.correctas}</td>
                        <td style="color:var(--error)">${s.incorrectas}</td>
                        <td style="color:#95a5a6">${s.sinResponder || 0}</td>
                        <td style="font-weight:700;color:var(--primary)">${s.puntaje}</td>
                        <td><button class="btn btn-sm btn-outline" onclick="reviewSimulacroAnswers(${realIdx})">Ver</button></td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>
        ` : ''}
      ` : `
        <div class="empty-state">
          <div class="icon">📊</div>
          <h3>Aún no hay datos estadísticos</h3>
          <p>Comienza a estudiar y a hacer simulacros para ver tu progreso aquí.</p>
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
