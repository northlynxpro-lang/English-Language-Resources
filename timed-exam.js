/* ============================================================
   TIMED EXAM SYSTEM — English Language Practice Hub
   Modular addition. All identifiers prefixed timed-exam-* or
   timedExam* to avoid conflicts with existing code.
   ============================================================ */

// ── Password (change this to your preferred password) ────────
const TIMED_EXAM_PASSWORD = "exam2026";

// ── Exam duration in seconds (60 minutes) ────────────────────
const TIMED_EXAM_DURATION = 60 * 60;

// ── Internal state ────────────────────────────────────────────
let timedExamState = {
  grade: null,          // key into timedExamData
  answers: {},          // { 'p1_0': 1, 'p3a_2': 'T', ... }
  startTime: null,      // Date object
  endTime: null,        // Date object
  timerInterval: null,
  secondsLeft: TIMED_EXAM_DURATION,
  submitted: false,
  studentName: '',
  studentSection: '',
  teacherName: '',
  teacherId: ''
};

// ── Part configuration ────────────────────────────────────────
const TIMED_EXAM_PARTS = [
  { id: 'p1',  label: 'Part 1: Vocabulary',        marks: 2,  count: 5,  type: 'mcq' },
  { id: 'p2',  label: 'Part 2: Grammar',           marks: 2,  count: 5,  type: 'mcq' },
  { id: 'p3a', label: 'Part 3A: Reading',          marks: 4,  count: 6,  type: 'tfng' },
  { id: 'p3b', label: 'Part 3B: Reading',          marks: 4,  count: 7,  type: 'reading_mcq' },
  { id: 'p3c', label: 'Part 3C: Reading',          marks: 4,  count: 7,  type: 'reading_mcq' }
];

// Current navigation state
let teActivePart = 'p1';
let teActiveQIndex = 0;

// ─────────────────────────────────────────────────────────────
//  OPEN / CLOSE
// ─────────────────────────────────────────────────────────────
function openTimedExamSection() {
  document.getElementById('teOverlay').style.display = 'flex';
  document.getElementById('tePasswordScreen').style.display = 'block';
  document.getElementById('teGradeScreen').style.display = 'none';
  document.getElementById('teExamScreen').style.display = 'none';
  document.getElementById('teResultsScreen').style.display = 'none';
  document.getElementById('tePwInput').value = '';
  document.getElementById('tePwError').textContent = '';
  document.getElementById('tePwInput').focus();
}

function closeTimedExam() {
  if (timedExamState.timerInterval) {
    clearInterval(timedExamState.timerInterval);
    timedExamState.timerInterval = null;
  }
  document.getElementById('teOverlay').style.display = 'none';
}

// ─────────────────────────────────────────────────────────────
//  PASSWORD CHECK
// ─────────────────────────────────────────────────────────────
function teCheckPassword() {
  const val = document.getElementById('tePwInput').value.trim();
  if (val === TIMED_EXAM_PASSWORD) {
    document.getElementById('tePasswordScreen').style.display = 'none';
    teShowGradeSelection();
  } else {
    document.getElementById('tePwError').textContent = 'Incorrect password. Please try again.';
    document.getElementById('tePwInput').value = '';
    document.getElementById('tePwInput').focus();
  }
}

// ─────────────────────────────────────────────────────────────
//  GRADE SELECTION
// ─────────────────────────────────────────────────────────────
function teShowGradeSelection() {
  document.getElementById('teGradeScreen').style.display = 'block';
  // Pre-fill student name/section from existing profile fields if present
  const sn = document.getElementById('studentNameInput');
  const ss = document.getElementById('studentSectionSelect');
  if (sn && sn.value) document.getElementById('teStudentName').value = sn.value;
  if (ss && ss.value) {
    const opt = document.getElementById('teStudentSection');
    opt.value = ss.value;
  }
}

const TIMED_EXAM_GRADE_OPTIONS = [
  { key: 'g9g',      label: 'Grade 9 General',    level: 'B1.1',       icon: '📗' },
  { key: 'g9a',      label: 'Grade 9 Advanced',   level: 'B1.2',       icon: '📘' },
  { key: 'g10g',     label: 'Grade 10 General',   level: 'B1.2',       icon: '📐' },
  { key: 'g10a',     label: 'Grade 10 Advanced',  level: 'B1.2–B2.1',  icon: '🌐' },
  { key: 'general',  label: 'Grade 11 General',   level: 'B1.2–B2.1',  icon: '🎓' },
  { key: 'advanced', label: 'Grade 11 Advanced',  level: 'B2.1',       icon: '🦋' },
  { key: 'g12g',     label: 'Grade 12 General',   level: 'B2.1',       icon: '🏛️' },
  { key: 'g12a',     label: 'Grade 12 Advanced',  level: 'B2.2',       icon: '🔬' }
];

function teRenderGradeCards() {
  const grid = document.getElementById('teGradeGrid');
  if (!grid) return;
  grid.innerHTML = TIMED_EXAM_GRADE_OPTIONS.map(g => `
    <button class="te-grade-card" data-key="${g.key}" onclick="teSelectGrade('${g.key}')" aria-label="Select ${g.label}">
      <span class="te-grade-icon">${g.icon}</span>
      <span class="te-grade-name">${g.label}</span>
      <span class="te-grade-level">${g.level}</span>
    </button>
  `).join('');
}

function teSelectGrade(key) {
  document.querySelectorAll('.te-grade-card').forEach(c => c.classList.remove('selected'));
  const clicked = document.querySelector(`.te-grade-card[data-key="${key}"]`);
  if (clicked) clicked.classList.add('selected');
  timedExamState.grade = key;
  document.getElementById('teStartBtn').disabled = false;
}

function teStartExam() {
  if (!timedExamState.grade) { alert('Please select your grade first.'); return; }
  const sn = document.getElementById('teStudentName').value.trim();
  if (!sn) { document.getElementById('teStudentNameError').textContent = 'Please enter your name before starting.'; return; }
  document.getElementById('teStudentNameError').textContent = '';

  timedExamState.studentName    = sn;
  timedExamState.studentSection = document.getElementById('teStudentSection').value.trim();
  timedExamState.answers        = {};
  timedExamState.submitted      = false;
  timedExamState.secondsLeft    = TIMED_EXAM_DURATION;
  timedExamState.startTime      = new Date();

  // Grab teacher info from existing global (if available)
  if (typeof getActiveTeacherName === 'function') timedExamState.teacherName = getActiveTeacherName();
  if (typeof getActiveTeacherId  === 'function') timedExamState.teacherId   = getActiveTeacherId();

  teActivePart   = 'p1';
  teActiveQIndex = 0;

  document.getElementById('teGradeScreen').style.display  = 'none';
  document.getElementById('teExamScreen').style.display   = 'block';
  document.getElementById('teResultsScreen').style.display = 'none';

  const lbl = document.getElementById('teExamGradeLabel');
  if (lbl) lbl.textContent = timedExamData[timedExamState.grade].name + ' · ' + timedExamData[timedExamState.grade].level;

  teRenderExam();
  teStartTimer();
}

// ─────────────────────────────────────────────────────────────
//  TIMER
// ─────────────────────────────────────────────────────────────
function teStartTimer() {
  teUpdateTimerDisplay();
  timedExamState.timerInterval = setInterval(() => {
    timedExamState.secondsLeft--;
    teUpdateTimerDisplay();
    if (timedExamState.secondsLeft <= 0) {
      clearInterval(timedExamState.timerInterval);
      timedExamState.timerInterval = null;
      teAutoSubmit();
    }
  }, 1000);
}

function teUpdateTimerDisplay() {
  const s = timedExamState.secondsLeft;
  const m = Math.floor(s / 60);
  const sec = s % 60;
  const display = `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
  const el = document.getElementById('teTimerDisplay');
  if (!el) return;
  el.textContent = display;
  const wrap = document.getElementById('teTimerWrap');
  if (wrap) {
    if (s <= 300) wrap.classList.add('warning');   // 5 min left
    else          wrap.classList.remove('warning');
    if (s <= 60)  wrap.classList.add('critical');
    else          wrap.classList.remove('critical');
  }
  // Warning banner
  const wb = document.getElementById('teWarningBanner');
  if (wb) wb.style.display = s <= 300 && s > 0 ? 'flex' : 'none';
}

function teAutoSubmit() {
  if (!timedExamState.submitted) submitTimedExam(true);
}

// ─────────────────────────────────────────────────────────────
//  EXAM RENDER
// ─────────────────────────────────────────────────────────────
function teRenderExam() {
  const data  = timedExamData[timedExamState.grade];
  const parts = TIMED_EXAM_PARTS;

  // ── Progress tabs ──
  const tabBar = document.getElementById('tePartTabs');
  tabBar.innerHTML = parts.map(p => `
    <button class="te-part-tab ${teActivePart === p.id ? 'active' : ''}"
            onclick="teGoToPart('${p.id}')">${p.label.replace('Part ','')}</button>
  `).join('');

  const part = parts.find(p => p.id === teActivePart);
  const body = document.getElementById('teExamBody');

  if (part.type === 'mcq') {
    teRenderMcqPart(data, part, body);
  } else if (part.type === 'tfng') {
    teRenderTfngPart(data, part, body);
  } else if (part.type === 'reading_mcq') {
    teRenderReadingMcqPart(data, part, body);
  }
}

function teRenderMcqPart(data, part, container) {
  const qs = data[part.id];
  const q  = qs[teActiveQIndex];
  const ansKey = `${part.id}_${teActiveQIndex}`;
  const saved  = timedExamState.answers[ansKey];

  container.innerHTML = `
    <div class="te-part-header">
      <span class="te-part-label">${part.label}</span>
      <span class="te-part-marks">${part.marks} marks each · Total: ${part.marks * part.count} marks</span>
    </div>
    <div class="te-q-counter">Question ${teActiveQIndex + 1} of ${part.count}</div>
    <div class="te-q-progress-bar"><span style="width:${((teActiveQIndex+1)/part.count)*100}%"></span></div>
    <div class="timed-exam-card">
      <p class="timed-exam-question">${teActiveQIndex + 1}. ${teEscape(q.q)}</p>
      <div class="te-options-stack">
        ${q.opts.map((opt, i) => `
          <button class="timed-exam-option ${saved === i ? 'selected' : ''}"
                  onclick="teRecordAnswer('${part.id}', ${teActiveQIndex}, ${i}, this)"
                  aria-label="Option ${String.fromCharCode(65+i)}: ${teEscape(opt)}">
            <span class="te-opt-letter">${String.fromCharCode(65+i)}</span>
            <span class="te-opt-text">${teEscape(opt)}</span>
          </button>
        `).join('')}
      </div>
    </div>
    <div class="te-nav-row">
      <button class="te-btn te-btn-secondary" onclick="teNavQ(-1)" ${teActiveQIndex===0?'disabled':''}>← Previous</button>
      <span class="te-answered-count">${teCountAnswered(part.id, part.count)} / ${part.count} answered</span>
      ${teActiveQIndex < part.count - 1
        ? `<button class="te-btn" onclick="teNavQ(1)">Next →</button>`
        : `<button class="te-btn te-btn-next-part" onclick="teNextPart()">Next Section →</button>`}
    </div>
  `;
}

function teRenderTfngPart(data, part, container) {
  const pd = data[part.id];
  container.innerHTML = `
    <div class="te-part-header">
      <span class="te-part-label">${part.label}</span>
      <span class="te-part-marks">${part.marks} marks each · Total: ${part.marks * part.count} marks</span>
    </div>
    <div class="timed-exam-card te-reading-card">
      <div class="te-reading-title">📖 ${teEscape(pd.title)}</div>
      <div class="te-reading-text">${teEscape(pd.text)}</div>
    </div>
    <div class="te-tfng-questions">
      ${pd.qs.map((q, i) => {
        const ansKey = `${part.id}_${i}`;
        const saved  = timedExamState.answers[ansKey];
        return `
          <div class="te-tfng-row">
            <div class="te-tfng-q">${i + 1}. ${teEscape(q.q)}</div>
            <div class="te-tfng-opts">
              ${['T','F','N'].map(v => `
                <button class="te-tfng-btn ${saved === v ? 'selected' : ''}"
                        onclick="teRecordTfng('${part.id}', ${i}, '${v}', this)">
                  ${v === 'T' ? 'True' : v === 'F' ? 'False' : 'Not Given'}
                </button>
              `).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
    <div class="te-nav-row" style="margin-top:18px">
      <span class="te-answered-count">${teCountAnswered(part.id, part.count)} / ${part.count} answered</span>
      <button class="te-btn te-btn-next-part" onclick="teNextPart()">Next Section →</button>
    </div>
  `;
}

function teRenderReadingMcqPart(data, part, container) {
  const pd = data[part.id];
  const q  = pd.qs[teActiveQIndex];
  const ansKey = `${part.id}_${teActiveQIndex}`;
  const saved  = timedExamState.answers[ansKey];

  container.innerHTML = `
    <div class="te-part-header">
      <span class="te-part-label">${part.label}</span>
      <span class="te-part-marks">${part.marks} marks each · Total: ${part.marks * part.count} marks</span>
    </div>
    <div class="timed-exam-card te-reading-card">
      <div class="te-reading-title">📖 ${teEscape(pd.title)}</div>
      <div class="te-reading-text">${teEscape(pd.text)}</div>
    </div>
    <div class="te-q-counter">Question ${teActiveQIndex + 1} of ${part.count}</div>
    <div class="te-q-progress-bar"><span style="width:${((teActiveQIndex+1)/part.count)*100}%"></span></div>
    <div class="timed-exam-card">
      <p class="timed-exam-question">${teActiveQIndex + 1}. ${teEscape(q.q)}</p>
      <div class="te-options-stack">
        ${q.opts.map((opt, i) => `
          <button class="timed-exam-option ${saved === i ? 'selected' : ''}"
                  onclick="teRecordAnswer('${part.id}', ${teActiveQIndex}, ${i}, this)"
                  aria-label="Option ${String.fromCharCode(65+i)}: ${teEscape(opt)}">
            <span class="te-opt-letter">${String.fromCharCode(65+i)}</span>
            <span class="te-opt-text">${teEscape(opt)}</span>
          </button>
        `).join('')}
      </div>
    </div>
    <div class="te-nav-row">
      <button class="te-btn te-btn-secondary" onclick="teNavQ(-1)" ${teActiveQIndex===0?'disabled':''}>← Previous</button>
      <span class="te-answered-count">${teCountAnswered(part.id, part.count)} / ${part.count} answered</span>
      ${teActiveQIndex < part.count - 1
        ? `<button class="te-btn" onclick="teNavQ(1)">Next →</button>`
        : (teActivePart === 'p3c'
            ? `<button class="te-btn te-btn-submit" onclick="teConfirmSubmit()">Submit Exam ✓</button>`
            : `<button class="te-btn te-btn-next-part" onclick="teNextPart()">Next Section →</button>`)}
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
//  NAVIGATION
// ─────────────────────────────────────────────────────────────
function teGoToPart(partId) {
  teActivePart   = partId;
  teActiveQIndex = 0;
  teRenderExam();
  document.getElementById('teExamBody').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function teNavQ(dir) {
  const part = TIMED_EXAM_PARTS.find(p => p.id === teActivePart);
  teActiveQIndex = Math.max(0, Math.min(part.count - 1, teActiveQIndex + dir));
  teRenderExam();
}

function teNextPart() {
  const idx = TIMED_EXAM_PARTS.findIndex(p => p.id === teActivePart);
  if (idx < TIMED_EXAM_PARTS.length - 1) {
    teActivePart   = TIMED_EXAM_PARTS[idx + 1].id;
    teActiveQIndex = 0;
    teRenderExam();
    document.getElementById('teExamBody').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ─────────────────────────────────────────────────────────────
//  ANSWER RECORDING
// ─────────────────────────────────────────────────────────────
function teRecordAnswer(partId, qIdx, answerIdx, btn) {
  timedExamState.answers[`${partId}_${qIdx}`] = answerIdx;
  // Update UI highlights without full re-render
  const stack = btn.closest('.te-options-stack');
  if (stack) stack.querySelectorAll('.timed-exam-option').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  // Update answered counter
  const part = TIMED_EXAM_PARTS.find(p => p.id === partId);
  const counter = document.querySelector('.te-answered-count');
  if (counter && part) counter.textContent = `${teCountAnswered(partId, part.count)} / ${part.count} answered`;
}

function teRecordTfng(partId, qIdx, val, btn) {
  timedExamState.answers[`${partId}_${qIdx}`] = val;
  const row = btn.closest('.te-tfng-opts');
  if (row) row.querySelectorAll('.te-tfng-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  const counter = document.querySelector('.te-answered-count');
  const part = TIMED_EXAM_PARTS.find(p => p.id === partId);
  if (counter && part) counter.textContent = `${teCountAnswered(partId, part.count)} / ${part.count} answered`;
}

function teCountAnswered(partId, count) {
  let n = 0;
  for (let i = 0; i < count; i++) {
    if (timedExamState.answers[`${partId}_${i}`] !== undefined) n++;
  }
  return n;
}

// ─────────────────────────────────────────────────────────────
//  SUBMIT
// ─────────────────────────────────────────────────────────────
function teConfirmSubmit() {
  const total = TIMED_EXAM_PARTS.reduce((s, p) => s + p.count, 0);
  const answered = Object.keys(timedExamState.answers).length;
  const unanswered = total - answered;
  if (unanswered > 0) {
    if (!confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`)) return;
  }
  submitTimedExam(false);
}

function submitTimedExam(autoSubmit) {
  if (timedExamState.submitted) return;
  timedExamState.submitted = true;
  if (timedExamState.timerInterval) {
    clearInterval(timedExamState.timerInterval);
    timedExamState.timerInterval = null;
  }
  timedExamState.endTime = new Date();

  const scores = calculateTimedExamScore();
  teShowResults(scores, autoSubmit);
  submitTimedExamResultsToSheet(scores);
}

// ─────────────────────────────────────────────────────────────
//  SCORING
// ─────────────────────────────────────────────────────────────
function calculateTimedExamScore() {
  const data = timedExamData[timedExamState.grade];
  const result = { parts: {}, total: 0, maxTotal: 100 };

  TIMED_EXAM_PARTS.forEach(part => {
    let earned = 0, max = part.marks * part.count;
    const details = [];

    if (part.type === 'mcq') {
      data[part.id].forEach((q, i) => {
        const given = timedExamState.answers[`${part.id}_${i}`];
        const correct = given === q.ans;
        if (correct) earned += part.marks;
        details.push({ q: q.q, given, correct: q.ans, isCorrect: correct, opts: q.opts });
      });
    } else if (part.type === 'tfng') {
      data[part.id].qs.forEach((q, i) => {
        const given = timedExamState.answers[`${part.id}_${i}`];
        const correct = given === q.ans;
        if (correct) earned += part.marks;
        details.push({ q: q.q, given, correct: q.ans, isCorrect: correct });
      });
    } else if (part.type === 'reading_mcq') {
      data[part.id].qs.forEach((q, i) => {
        const given = timedExamState.answers[`${part.id}_${i}`];
        const correct = given === q.ans;
        if (correct) earned += part.marks;
        details.push({ q: q.q, given, correct: q.ans, isCorrect: correct, opts: q.opts });
      });
    }

    result.parts[part.id] = { earned, max, label: part.label, details };
    result.total += earned;
  });

  result.percentage = Math.round((result.total / result.maxTotal) * 100);
  result.feedback = result.percentage >= 90 ? '🏆 Excellent exam readiness!'
    : result.percentage >= 75 ? '⭐ Very good preparation!'
    : result.percentage >= 60 ? '👍 Good effort — revise your weaker areas.'
    : '💪 Keep practising and review the lessons.';

  const elapsed = timedExamState.endTime - timedExamState.startTime;
  const em = Math.floor(elapsed / 60000);
  const es = Math.floor((elapsed % 60000) / 1000);
  result.timeTaken = `${em}m ${es}s`;

  return result;
}

// ─────────────────────────────────────────────────────────────
//  RESULTS DISPLAY
// ─────────────────────────────────────────────────────────────
function teShowResults(scores, autoSubmit) {
  document.getElementById('teExamScreen').style.display   = 'none';
  document.getElementById('teResultsScreen').style.display = 'block';
  const data  = timedExamData[timedExamState.grade];
  const grade = timedExamState.grade;

  const scoreColour = scores.percentage >= 75 ? '#2E7D52'
    : scores.percentage >= 60 ? '#B8932F' : '#B14545';

  let html = `
    ${autoSubmit ? '<div class="te-auto-notice">⏰ Time is up — exam automatically submitted.</div>' : ''}
    <div class="te-results-hero">
      <div class="te-results-score" style="color:${scoreColour}">${scores.total}<span>/100</span></div>
      <div class="te-results-pct">${scores.percentage}%</div>
      <div class="te-results-feedback">${scores.feedback}</div>
      <div class="te-results-meta">
        <span>⏱ Time taken: ${scores.timeTaken}</span>
        <span>📚 ${timedExamData[grade].name}</span>
        <span>👤 ${teEscape(timedExamState.studentName)}</span>
      </div>
    </div>
    <div class="te-section-scores">
      ${TIMED_EXAM_PARTS.map(p => {
        const s = scores.parts[p.id];
        const pct = Math.round((s.earned / s.max) * 100);
        return `
          <div class="te-section-score-card">
            <div class="te-ss-label">${p.label}</div>
            <div class="te-ss-bar"><span style="width:${pct}%;background:${pct>=75?'#2E7D52':pct>=50?'#B8932F':'#B14545'}"></span></div>
            <div class="te-ss-nums">${s.earned} / ${s.max}</div>
          </div>
        `;
      }).join('')}
    </div>
    <div class="te-sheet-status" id="teSheetStatus">Sending results to teacher…</div>
    <h3 class="te-review-heading">Answer Review</h3>
  `;

  // Answer review per part
  TIMED_EXAM_PARTS.forEach(part => {
    const s = scores.parts[part.id];
    html += `<div class="te-review-part"><h4>${part.label} — ${s.earned}/${s.max}</h4>`;

    if (part.type === 'tfng') {
      data[part.id].qs.forEach((q, i) => {
        const d = s.details[i];
        const givenLabel = d.given === 'T' ? 'True' : d.given === 'F' ? 'False' : d.given === 'N' ? 'Not Given' : '(not answered)';
        const corrLabel  = d.correct === 'T' ? 'True' : d.correct === 'F' ? 'False' : 'Not Given';
        html += `
          <div class="te-review-q ${d.isCorrect ? 'correct' : 'incorrect'}">
            <div class="te-rq-text">${i+1}. ${teEscape(q.q)}</div>
            <div class="te-rq-answer">Your answer: <strong>${givenLabel}</strong></div>
            ${!d.isCorrect ? `<div class="te-rq-correct">Correct answer: <strong>${corrLabel}</strong></div>` : ''}
            <div class="te-rq-mark">${d.isCorrect ? '✓ +' + part.marks : '✗ +0'}</div>
          </div>`;
      });
    } else {
      const qs = part.type === 'mcq' ? data[part.id] : data[part.id].qs;
      qs.forEach((q, i) => {
        const d = s.details[i];
        const givenLabel = d.given !== undefined ? (d.opts ? d.opts[d.given] : d.given) : '(not answered)';
        const corrLabel  = d.opts ? d.opts[d.correct] : d.correct;
        html += `
          <div class="te-review-q ${d.isCorrect ? 'correct' : 'incorrect'}">
            <div class="te-rq-text">${i+1}. ${teEscape(q.q)}</div>
            <div class="te-rq-answer">Your answer: <strong>${teEscape(String(givenLabel))}</strong></div>
            ${!d.isCorrect ? `<div class="te-rq-correct">Correct answer: <strong>${teEscape(corrLabel)}</strong></div>` : ''}
            <div class="te-rq-mark">${d.isCorrect ? '✓ +' + part.marks : '✗ +0'}</div>
          </div>`;
      });
    }
    html += '</div>';
  });

  html += `
    <div class="te-results-actions">
      <button class="te-btn te-btn-secondary" onclick="closeTimedExam()">Close</button>
      <button class="te-btn" onclick="tePrintResults()">🖨️ Print Results</button>
    </div>
  `;

  document.getElementById('teResultsScreen').innerHTML = html;
}

function tePrintResults() {
  window.print();
}

// ─────────────────────────────────────────────────────────────
//  GOOGLE SHEETS SUBMISSION (separate sheet: Timed Exam Results)
// ─────────────────────────────────────────────────────────────
function submitTimedExamResultsToSheet(scores) {
  let gasUrl = '';
  if (typeof getActiveGasUrl === 'function') gasUrl = getActiveGasUrl();
  if (!gasUrl) {
    teSetSheetStatus('No teacher connection — results saved locally only.');
    return;
  }

  const answers = timedExamState.answers;
  const data    = timedExamData[timedExamState.grade];

  // Build a compact student-answers string
  const answerSummary = TIMED_EXAM_PARTS.map(p => {
    const count = p.count;
    const given = [];
    for (let i = 0; i < count; i++) {
      const v = answers[`${p.id}_${i}`];
      if (v === undefined) given.push('-');
      else if (typeof v === 'number') given.push(String.fromCharCode(65 + v));
      else given.push(v);
    }
    return p.id.toUpperCase() + ': ' + given.join(' ');
  }).join(' | ');

  const correctSummary = TIMED_EXAM_PARTS.map(p => {
    if (p.type === 'mcq') {
      return p.id.toUpperCase() + ': ' + data[p.id].map(q => String.fromCharCode(65 + q.ans)).join(' ');
    } else if (p.type === 'tfng') {
      return p.id.toUpperCase() + ': ' + data[p.id].qs.map(q => q.ans).join(' ');
    } else {
      return p.id.toUpperCase() + ': ' + data[p.id].qs.map(q => String.fromCharCode(65 + q.ans)).join(' ');
    }
  }).join(' | ');

  const params = new URLSearchParams();
  params.set('submissionType',   'timed_exam');
  params.set('teacherId',        timedExamState.teacherId);
  params.set('teacherName',      timedExamState.teacherName);
  params.set('grade',            timedExamData[timedExamState.grade].name);
  params.set('stream',           timedExamState.grade);
  params.set('section',          timedExamState.studentSection);
  params.set('studentName',      timedExamState.studentName);
  params.set('examType',         'Cycle 3 Timed Exam');
  params.set('totalScore',       String(scores.total));
  params.set('percentage',       scores.percentage + '%');
  params.set('p1Score',          String(scores.parts.p1.earned));
  params.set('p2Score',          String(scores.parts.p2.earned));
  params.set('p3aScore',         String(scores.parts.p3a.earned));
  params.set('p3bScore',         String(scores.parts.p3b.earned));
  params.set('p3cScore',         String(scores.parts.p3c.earned));
  params.set('timeStarted',      timedExamState.startTime.toLocaleString());
  params.set('timeSubmitted',    timedExamState.endTime.toLocaleString());
  params.set('timeTaken',        scores.timeTaken);
  params.set('studentAnswers',   answerSummary);
  params.set('correctAnswers',   correctSummary);
  params.set('feedbackMessage',  scores.feedback);
  params.set('pageUrl',          location.href);
  params.set('date',             new Date().toLocaleString());

  fetch(gasUrl, {
    method: 'POST',
    mode: 'no-cors',
    body: params
  })
  .then(() => teSetSheetStatus('✅ Results sent to teacher\'s Google Sheet (Timed Exam Results tab).'))
  .catch(() => teSetSheetStatus('❌ Could not reach teacher\'s Google Sheet. Check your connection.'));
}

function teSetSheetStatus(msg) {
  const el = document.getElementById('teSheetStatus');
  if (el) el.textContent = msg;
}

// ─────────────────────────────────────────────────────────────
//  UTILITIES
// ─────────────────────────────────────────────────────────────
function teEscape(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

// ─────────────────────────────────────────────────────────────
//  INIT — render grade cards when DOM ready
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  teRenderGradeCards();
});
