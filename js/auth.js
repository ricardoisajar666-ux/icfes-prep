const ADMIN_PW = 'ADMINISTRADOR/1150936204';

const AUTH = {
  _getData() {
    try { const r = localStorage.getItem('icfesAuth'); if (r) return JSON.parse(r); } catch (e) {}
    return { users: [], currentUser: null };
  },
  _saveData(d) {
    try { localStorage.setItem('icfesAuth', JSON.stringify(d)); } catch (e) {}
  },
  getUsers() { return this._getData().users || []; },
  getCurrentUser() { return this._getData().currentUser || null; },
  setCurrentUser(email) { const d = this._getData(); d.currentUser = email; this._saveData(d); },
  init() {
    const d = this._getData();
    const admins = ['ricardoisajar666@gmail.com', 'ricardoisajarparra@gmail.com'];
    let ch = false;
    admins.forEach(e => {
      const existing = d.users.find(u => u.email === e);
      if (!existing) {
        d.users.push({ email: e, password: ADMIN_PW, approved: true, isAdmin: true, blocked: false, streak: 0, lastLoginDate: '', registeredDate: new Date().toISOString().split('T')[0] });
        ch = true;
      } else if (existing.password !== ADMIN_PW) {
        existing.password = ADMIN_PW;
        existing.isAdmin = true;
        existing.approved = true;
        ch = true;
      }
    });
    if (ch) this._saveData(d);
  },
  register(email, password) {
    if (this.getUsers().find(u => u.email === email)) return { ok: false, error: 'Este correo ya est\u00e1 registrado' };
    const d = this._getData();
    d.users.push({ email, password, approved: true, isAdmin: false, blocked: false, streak: 0, lastLoginDate: '', registeredDate: new Date().toISOString().split('T')[0] });
    this._saveData(d);
    return { ok: true };
  },
  login(email, password) {
    const d = this._getData();
    const u = d.users.find(u => u.email === email);
    if (!u) return { ok: false, error: 'Correo no registrado' };
    if (u.blocked) return { ok: false, error: 'Tu cuenta ha sido bloqueada por el administrador.' };
    if (u.password !== password) return { ok: false, error: 'Contrase\u00f1a incorrecta' };
    d.currentUser = email; this._saveData(d); this._updateStreak(email);
    return { ok: true, isAdmin: !!u.isAdmin };
  },
  logout() { this.setCurrentUser(null); },
  isLoggedIn() { return this.getCurrentUser() !== null; },
  isAdmin(email) {
    if (!email) email = this.getCurrentUser();
    if (!email) return false;
    const u = this.getUsers().find(u => u.email === email);
    return u ? u.isAdmin : false;
  },
  _updateStreak(email) {
    const d = this._getData();
    const u = d.users.find(u => u.email === email);
    if (!u) return;
    const today = new Date().toISOString().split('T')[0];
    if (u.lastLoginDate === today) return;
    const y = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    u.streak = u.lastLoginDate === y ? (u.streak || 0) + 1 : 1;
    u.lastLoginDate = today;
    this._saveData(d);
  },
  getStreak(email) {
    if (!email) email = this.getCurrentUser();
    if (!email) return 0;
    const u = this.getUsers().find(u => u.email === email);
    return u ? (u.streak || 0) : 0;
  },
  getPendingUsers() { return this.getUsers().filter(u => !u.approved && !u.isAdmin); },
  getApprovedUsers() { return this.getUsers().filter(u => u.approved && !u.isAdmin); },
  getAllNonAdminUsers() { return this.getUsers().filter(u => !u.isAdmin); },
  approveUser(email) { const d = this._getData(); const u = d.users.find(u => u.email === email); if (!u) return false; u.approved = true; this._saveData(d); return true; },
  rejectUser(email) { const d = this._getData(); const i = d.users.findIndex(u => u.email === email); if (i < 0) return false; d.users.splice(i, 1); this._saveData(d); return true; },
  blockUser(email) { const d = this._getData(); const u = d.users.find(u => u.email === email); if (!u) return false; u.blocked = true; this._saveData(d); return true; },
  unblockUser(email) { const d = this._getData(); const u = d.users.find(u => u.email === email); if (!u) return false; u.blocked = false; this._saveData(d); return true; },
  deleteUser(email) {
    const d = this._getData();
    const i = d.users.findIndex(u => u.email === email);
    if (i < 0) return false;
    d.users.splice(i, 1);
    if (d.currentUser === email) d.currentUser = null;
    this._saveData(d);
    return true;
  }
};

AUTH.init();
window.AUTH = AUTH;

function updateNav() {
  const nav = document.getElementById('main-nav') || document.querySelector('nav');
  const cu = AUTH.getCurrentUser();
  const ia = AUTH.isAdmin();
  const sk = AUTH.getStreak();
  let html = '';
  if (!cu) {
    html = `<button class="nav-btn" data-view="login" onclick="navigate('login')">🔐 Iniciar Sesi\u00f3n</button><button class="nav-btn" data-view="register" onclick="navigate('register')">📝 Registrarse</button>`;
  } else {
    html = `<button class="nav-btn" data-view="home" onclick="navigate('home')">🏠 Inicio</button><button class="nav-btn" data-view="study" onclick="navigate('study')">📖 Estudio</button><button class="nav-btn" data-view="simulacro" onclick="navigate('simulacro')">⏱️ Simulacro</button><button class="nav-btn" data-view="stats" onclick="navigate('stats')">📈 Estad\u00edsticas</button>`;
    if (ia) html += `<button class="nav-btn" data-view="admin" onclick="navigate('admin')">👑 Admin</button>`;
    html += `<span style="color:rgba(255,255,255,0.85);font-size:13px;padding:0 8px;display:flex;align-items:center;gap:4px;white-space:nowrap;max-width:180px;overflow:hidden;text-overflow:ellipsis">${cu}${sk > 0 ? ` 🔥${sk}` : ''}</span><button class="nav-btn" onclick="handleLogout()" style="color:rgba(255,255,255,0.7)">🚪 Salir</button>`;
  }
  nav.innerHTML = html;
  nav.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === APP.currentView));
}

function handleLogout() { AUTH.logout(); updateNav(); navigate('login'); }
window.handleLogout = handleLogout;

function renderLogin() {
  document.getElementById('main-content').innerHTML = `
    <div class="auth-container">
      <div class="auth-box">
        <h2>🔐 Iniciar Sesi\u00f3n</h2>
        <p style="color:var(--text-light);margin-bottom:20px">Ingresa para acceder a tu preparaci\u00f3n ICFES</p>
        <form id="login-form" onsubmit="handleLogin(event)">
          <div class="form-group"><label for="login-email">Correo electr\u00f3nico</label><input type="email" id="login-email" class="form-input" placeholder="tu@correo.com" required></div>
          <div class="form-group"><label for="login-password">Contrase\u00f1a</label><input type="password" id="login-password" class="form-input" placeholder="Tu contrase\u00f1a" required></div>
          <button type="submit" class="btn btn-primary btn-full">Ingresar</button>
        </form>
        <div id="login-error" style="margin-top:12px"></div>
        <p style="margin-top:20px;font-size:14px;color:var(--text-light)">\u00bfNo tienes cuenta? <a href="#" onclick="navigate('register');return false" style="color:var(--primary);font-weight:600">Reg\u00edstrate aqu\u00ed</a></p>
      </div>
    </div>`;
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const r = AUTH.login(email, password);
  const ed = document.getElementById('login-error');
  if (r.ok) { updateNav(); navigate('home'); }
  else { ed.innerHTML = `<div style="padding:12px;background:#ffebee;border-radius:8px;color:var(--error);font-weight:500">${r.error}</div>`; }
}
window.handleLogin = handleLogin;

function renderRegister() {
  document.getElementById('main-content').innerHTML = `
    <div class="auth-container">
      <div class="auth-box">
        <h2>📝 Registrarse</h2>
        <p style="color:var(--text-light);margin-bottom:20px">Crea una cuenta para empezar a prepararte</p>
        <form id="register-form" onsubmit="handleRegister(event)">
          <div class="form-group"><label for="reg-email">Correo electr\u00f3nico</label><input type="email" id="reg-email" class="form-input" placeholder="tu@correo.com" required></div>
          <div class="form-group"><label for="reg-password">Contrase\u00f1a</label><input type="password" id="reg-password" class="form-input" placeholder="Crea una contrase\u00f1a" required minlength="4"></div>
          <div class="form-group"><label for="reg-confirm">Confirmar contrase\u00f1a</label><input type="password" id="reg-confirm" class="form-input" placeholder="Repite la contrase\u00f1a" required></div>
          <button type="submit" class="btn btn-primary btn-full">Crear cuenta</button>
        </form>
        <div id="register-status" style="margin-top:12px"></div>
        <p style="margin-top:20px;font-size:14px;color:var(--text-light)">\u00bfYa tienes cuenta? <a href="#" onclick="navigate('login');return false" style="color:var(--primary);font-weight:600">Inicia sesi\u00f3n</a></p>
      </div>
    </div>`;
}

function handleRegister(e) {
  e.preventDefault();
  const email = document.getElementById('reg-email').value.trim();
  const password = document.getElementById('reg-password').value;
  const confirm = document.getElementById('reg-confirm').value;
  const sd = document.getElementById('register-status');
  if (password !== confirm) { sd.innerHTML = `<div style="padding:12px;background:#ffebee;border-radius:8px;color:var(--error);font-weight:500">Las contrase\u00f1as no coinciden</div>`; return; }
  const r = AUTH.register(email, password);
  if (r.ok) { sd.innerHTML = `<div style="padding:12px;background:#e8f5e9;border-radius:8px;color:var(--success);font-weight:500">✅ Registro exitoso. Ya puedes iniciar sesi\u00f3n.</div>`; document.getElementById('register-form').reset(); }
  else { sd.innerHTML = `<div style="padding:12px;background:#ffebee;border-radius:8px;color:var(--error);font-weight:500">${r.error}</div>`; }
}
window.handleRegister = handleRegister;

function renderAdmin() {
  const cu = AUTH.getCurrentUser();
  if (!cu || !AUTH.isAdmin()) { navigate('home'); return; }
  const allUsers = AUTH.getAllNonAdminUsers();

  const ans = Object.keys(APP.studyAnswers).filter(k => !k.endsWith('_selected'));
  const corr = ans.filter(k => APP.studyAnswers[k] === true).length;
  const sims = window.simulacros || [];
  const totalSims = sims.length;
  const simCorrect = sims.reduce((a, s) => a + (s.correctas || 0), 0);
  const simTotal = sims.reduce((a, s) => a + (s.totalQuestions || 0), 0);

  const questionStats = EXAM_CONFIG.areas.map(a => {
    const qs = QUESTIONS.filter(q => q.area === a.id);
    return { ...a, count: qs.length, pct: Math.round((qs.length / QUESTIONS.length) * 100) };
  });

  const allStudyAnswered = Object.keys(APP.studyAnswers).filter(k => !k.endsWith('_selected')).length;
  const studyCorrectPerc = allStudyAnswered > 0 ? Math.round((corr / allStudyAnswered) * 100) : 0;
  const simCorrectPerc = simTotal > 0 ? Math.round((simCorrect / simTotal) * 100) : 0;

  document.getElementById('main-content').innerHTML = `
    <div class="container">
      <h2 class="section-title">\u{1f451} Panel de Administraci\u00f3n</h2>

      <div style="background:var(--card);border-radius:var(--radius);padding:24px;box-shadow:var(--shadow);margin-bottom:20px">
        <h3 style="margin-bottom:16px">\u{1f4ca} Estad\u00edsticas generales</h3>
        <div class="stats-grid">
          <div class="stat-card"><div class="stat-value" style="color:var(--primary)">${QUESTIONS.length}</div><div class="stat-label">Total preguntas</div></div>
          <div class="stat-card"><div class="stat-value green">${corr}/${allStudyAnswered}</div><div class="stat-label">Estudio (${studyCorrectPerc}% \u2705)</div></div>
          <div class="stat-card"><div class="stat-value">${totalSims}</div><div class="stat-label">Simulacros</div></div>
          <div class="stat-card"><div class="stat-value gold">${simCorrect}/${simTotal}</div><div class="stat-label">En simulacros (${simCorrectPerc}% \u2705)</div></div>
          <div class="stat-card"><div class="stat-value" style="color:var(--primary)">${AUTH.getStreak()}\u00b0 \u{1f525}</div><div class="stat-label">Racha actual</div></div>
          <div class="stat-card"><div class="stat-value">${allUsers.length}</div><div class="stat-label">Usuarios registrados</div></div>
        </div>
      </div>

      <div style="background:var(--card);border-radius:var(--radius);padding:24px;box-shadow:var(--shadow);margin-bottom:20px">
        <h3 style="margin-bottom:16px">\u{1f4da} Banco de preguntas por \u00e1rea</h3>
        <div style="overflow-x:auto">
          <table class="history-table">
            <thead><tr><th>\u00c1rea</th><th>Cantidad</th><th>%</th><th>Gr\u00e1fico</th></tr></thead>
            <tbody>
              ${questionStats.map(a => `<tr>
                <td style="font-weight:600;color:${a.color}">${a.icon} ${a.name}</td>
                <td>${a.count}</td>
                <td>${a.pct}%</td>
                <td><div style="background:#f0f0f0;border-radius:4px;height:8px;width:120px"><div style="background:${a.color};height:100%;border-radius:4px;width:${a.pct}%"></div></div></td>
              </tr>`).join('')}
              <tr style="font-weight:700;border-top:2px solid var(--border)"><td>Total</td><td>${QUESTIONS.length}</td><td>100%</td><td></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style="background:var(--card);border-radius:var(--radius);padding:24px;box-shadow:var(--shadow);margin-bottom:20px">
        <h3 style="margin-bottom:16px">\u{1f4dd} Historial de simulacros recientes</h3>
        ${sims.length === 0 ? '<p style="color:var(--text-light)">No hay simulacros registrados a\u00fan.</p>' : `
          <div style="overflow-x:auto">
            <table class="history-table">
              <thead><tr><th>Fecha</th><th>Tipo</th><th>Puntaje</th><th>Correctas</th><th>Tiempo</th></tr></thead>
              <tbody>
                ${sims.slice(-10).reverse().map(s => {
                  const cfg = EXAM_CONFIG.simulacros[s.type];
                  const t = Math.floor((s.timeSpent || 0) / 60);
                  const ts = (s.timeSpent || 0) % 60;
                  return `<tr>
                    <td>${new Date(s.date).toLocaleDateString('es-CO')}</td>
                    <td>${cfg ? cfg.label : s.type}</td>
                    <td style="font-weight:700;color:var(--primary)">${s.puntaje}/500</td>
                    <td>${s.correctas}/${s.totalQuestions}</td>
                    <td>${t}:${String(ts).padStart(2, '0')}</td>
                  </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>
        `}
      </div>

      <div style="background:var(--card);border-radius:var(--radius);padding:24px;box-shadow:var(--shadow);margin-bottom:20px">
        <h3 style="margin-bottom:16px">\u{1f465} Usuarios (${allUsers.length})</h3>
        <p style="font-size:13px;color:var(--text-light);margin-bottom:12px">\u26a0\ufe0f Solo muestra usuarios registrados en <strong>este</strong> navegador/dispositivo (almacenamiento local).</p>
        ${allUsers.length === 0 ? '<p style="color:var(--text-light)">No hay usuarios registrados.</p>' :
          `<div style="overflow-x:auto"><table class="history-table"><thead><tr><th>Correo</th><th>Contrase\u00f1a</th><th>Registro</th><th>Racha</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>
            ${allUsers.map(u => `<tr>
              <td>${u.email}</td>
              <td><code style="font-size:12px;background:#f0f0f0;padding:2px 6px;border-radius:4px">${u.password}</code></td>
              <td>${u.registeredDate}</td>
              <td>${u.streak || 0} d\u00edas \u{1f525}</td>
              <td>${u.blocked ? '<span style="color:var(--error);font-weight:600">\u{1f6ab} Bloqueado</span>' : '<span style="color:var(--success);font-weight:600">\u2705 Activo</span>'}</td>
              <td>
                ${u.blocked
                  ? `<button class="btn btn-sm btn-success" onclick="adminUnblock('${u.email}')">\u{1f513} Desbloquear</button>`
                  : `<button class="btn btn-sm btn-outline" onclick="adminBlock('${u.email}')">\u{1f6ab} Bloquear</button>`
                }
                <button class="btn btn-sm btn-danger" onclick="adminDelete('${u.email}')">\u{1f5d1}\ufe0f Eliminar</button>
              </td>
            </tr>`).join('')}
          </tbody></table></div>`}
      </div>
    </div>`;
}

function adminApprove(email) { AUTH.approveUser(email); renderAdmin(); }
function adminReject(email) { AUTH.rejectUser(email); renderAdmin(); }
function adminBlock(email) { AUTH.blockUser(email); renderAdmin(); }
function adminUnblock(email) { AUTH.unblockUser(email); renderAdmin(); }
function adminDelete(email) {
  if (!confirm('\u00bfEliminar permanentemente al usuario ' + email + '? Esta acci\u00f3n no se puede deshacer.')) return;
  const wasSelf = AUTH.getCurrentUser() === email;
  AUTH.deleteUser(email);
  if (wasSelf) { AUTH.logout(); updateNav(); navigate('login'); }
  else renderAdmin();
}
window.adminApprove = adminApprove;
window.adminReject = adminReject;
window.adminBlock = adminBlock;
window.adminUnblock = adminUnblock;
window.adminDelete = adminDelete;

window.renderLogin = renderLogin;
window.renderRegister = renderRegister;
window.renderAdmin = renderAdmin;
window.updateNav = updateNav;
