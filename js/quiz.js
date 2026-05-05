/* ═══════════════════════════════════════════
   ARCHLEARN — QUIZ ENGINE
   Handles quiz answer checking, feedback,
   and prevents re-answering.
═══════════════════════════════════════════ */

const quizDone = {};

/**
 * Called from each quiz option button's onclick.
 * @param {HTMLElement} btn      - The clicked button
 * @param {boolean}     correct  - Whether this option is correct
 * @param {string}      msg      - Feedback message to display
 */
function quiz(btn, correct, msg) {
  const card = btn.closest('.quiz-card');
  const key  = card.querySelector('.quiz-q').textContent.trim();

  // Prevent re-answering
  if (quizDone[key]) return;
  quizDone[key] = true;

  // Disable all options
  card.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);

  // Mark clicked option
  btn.classList.add(correct ? 'correct' : 'wrong');

  // Always reveal correct answer if wrong
  if (!correct) {
    card.querySelectorAll('.quiz-opt').forEach(b => {
      const fn = b.getAttribute('onclick') || '';
      if (fn.includes('true,')) b.classList.add('correct');
    });
  }

  // Show feedback
  const fb = card.querySelector('.quiz-feedback');
  if (fb) {
    fb.textContent = (correct ? '✓ ' : '✗ ') + msg;
    fb.className   = `quiz-feedback show ${correct ? 'correct' : 'wrong'}`;
  }
}
