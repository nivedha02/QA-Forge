// ── State ──────────────────────────────────────────────
let state = Storage.load();

// ── Helpers ────────────────────────────────────────────
function totalTopics() {
  return CURRICULUM.reduce((a, p) => a + p.topics.length, 0);
}

function doneCount() {
  return Object.values(state.completed).filter(Boolean).length;
}

function currentPhaseIndex() {
  for (let i = 0; i < CURRICULUM.length; i++) {
    if (!CURRICULUM[i].topics.every(t => state.completed[t.id])) return i;
  }
  return CURRICULUM.length - 1;
}

function nextTopic() {
  for (let p of CURRICULUM) {
    for (let t of p.topics) {
      if (!state.completed[t.id]) return { topic: t, phase: p };
    }
  }
  return null;
}

function markStreak() {
  const today = Streak.today();
  if (!state.streakDays.includes(today)) {
    state.streakDays.push(today);
    state.lastLogged = today;
    Storage.save(state);
  }
}

// ── Toggle topic ───────────────────────────────────────
function toggleTopic(id) {
  state.completed[id] = !state.completed[id];
  if (state.completed[id]) markStreak();
  Storage.save(state);
  render();
}

// ── Log today manually ─────────────────────────────────
function logToday() {
  markStreak();
  render();
}

// ── Navigation ─────────────────────────────────────────
function showScreen(name) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("screen-" + name).classList.add("active");
  document.getElementById("nav-" + name).classList.add("active");
}

// ── Render: Dashboard ──────────────────────────────────
function renderDashboard() {
  const total = totalTopics();
  const done = doneCount();
  const streak = Streak.current(state.streakDays);
  const pct = total ? Math.round((done / total) * 100) : 0;
  const phaseIdx = currentPhaseIndex();
  const next = nextTopic();

  document.getElementById("s-streak").textContent = streak;
  document.getElementById("s-done").textContent = done;
  document.getElementById("s-total").textContent = total;
  document.getElementById("s-phase").textContent = phaseIdx + 1;
  document.getElementById("s-pct").textContent = pct + "%";
  document.getElementById("streak-badge").textContent =
    streak > 0 ? "🔥 " + streak + " day streak" : "Start your streak today";

  document.getElementById("today-topic").textContent =
    next ? next.topic.name : "All topics complete! 🎉";
  document.getElementById("today-phase").textContent =
    next ? next.phase.title : "";

  // Phase progress bars
  const list = document.getElementById("phase-progress-list");
  list.innerHTML = CURRICULUM.map(p => {
    const d = p.topics.filter(t => state.completed[t.id]).length;
    const pct = Math.round((d / p.topics.length) * 100);
    return `
      <div class="phase-bar">
        <div class="phase-bar-labels">
          <span>${p.title.split("—")[1].trim()}</span>
          <span class="muted">${d}/${p.topics.length}</span>
        </div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
      </div>`;
  }).join("");
}

// ── Render: Curriculum ─────────────────────────────────
function renderCurriculum() {
  const el = document.getElementById("curriculum-list");
  el.innerHTML = CURRICULUM.map(p => {
    const done = p.topics.filter(t => state.completed[t.id]).length;
    const pct = Math.round((done / p.topics.length) * 100);
    return `
      <div class="phase-card">
        <div class="phase-card-header">
          <div>
            <div class="phase-card-title">${p.title}</div>
            <div class="phase-card-months muted">${p.months}</div>
          </div>
          <span class="badge badge-${p.color}">${done}/${p.topics.length} done</span>
        </div>
        <div class="bar-track" style="margin-bottom:1rem">
          <div class="bar-fill bar-${p.color}" style="width:${pct}%"></div>
        </div>
        ${p.topics.map(t => {
          const isDone = !!state.completed[t.id];
          return `
            <div class="topic-row">
              <div class="topic-main" onclick="toggleTopic('${t.id}')">
                <div class="check-box ${isDone ? "checked" : ""}">
                  ${isDone ? "✓" : ""}
                </div>
                <span class="topic-name ${isDone ? "done" : ""}">${t.name}</span>
                <span class="topic-time muted">${t.time}</span>
              </div>
              <div class="source-links">
                <a class="src-btn src-yt" href="${t.yt.url}" target="_blank" rel="noopener">
                  ▶ ${t.yt.label}
                </a>
                <a class="src-btn src-doc" href="${t.doc.url}" target="_blank" rel="noopener">
                  📄 ${t.doc.label}
                </a>
              </div>
            </div>`;
        }).join("")}
      </div>`;
  }).join("");
}

// ── Render: Streak ─────────────────────────────────────
function renderStreak() {
  const today = Streak.today();
  const days30 = Streak.last30();
  const logged = new Set(state.streakDays);

  document.getElementById("streak-grid").innerHTML = days30.map(d => {
    const day = new Date(d).getDate();
    const isToday = d === today;
    const active = logged.has(d);
    const cls = active ? "day-active" : isToday ? "day-today" : "day-empty";
    return `<div class="streak-day ${cls}" title="${d}">${day}</div>`;
  }).join("");

  const streak = Streak.current(state.streakDays);
  document.getElementById("streak-cur").textContent = streak;
  document.getElementById("streak-best").textContent = Streak.longest(state.streakDays);
  document.getElementById("streak-total").textContent = [...new Set(state.streakDays)].length;
  document.getElementById("streak-month").textContent = days30.filter(d => logged.has(d)).length;

  const btn = document.getElementById("log-btn");
  const alreadyLogged = logged.has(today);
  btn.disabled = alreadyLogged;
  btn.textContent = alreadyLogged ? "✓ Already logged today" : "Mark today complete";
}

// ── Master render ──────────────────────────────────────
function render() {
  renderDashboard();
  renderCurriculum();
  renderStreak();
}

// ── Init ───────────────────────────────────────────────
render();
