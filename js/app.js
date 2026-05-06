/* ═══════════════════════════════════════════
   ARCHLEARN — APP CORE
   Navigation, routing, theme, progress tracking.
   This must be loaded AFTER all section scripts.
═══════════════════════════════════════════ */

/* ── Copy code button ── */
function copyCode(btn) {
  const code = btn.closest('.code-wrap').querySelector('code');
  navigator.clipboard.writeText(code.innerText).then(() => {
    btn.textContent = '✓ Copied';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 1800);
  });
}

/* ── Mobile sidebar ── */
function toggleMobile() {
  document.getElementById('sidebar').classList.toggle('mobile-open');
}

/* ── Track switching ── */
let currentTrack = 'dotnet';

function setTrack(t) {
  currentTrack = t;
  document.getElementById('trackDotnet').className = 'track-btn' + (t === 'dotnet' ? ' active-dotnet' : '');
  document.getElementById('trackAi').className     = 'track-btn' + (t === 'ai'     ? ' active-ai'     : '');
  document.getElementById('dotnet-nav').style.display = t === 'dotnet' ? '' : 'none';
  document.getElementById('ai-nav').style.display     = t === 'ai'     ? '' : 'none';
  t === 'dotnet' ? show('roadmap', 'dotnet') : show('llm', 'ai');
}

/* ── Progress ── */
const visited = new Set(['roadmap']);
const TOTAL   = 8;

function updateProgress() {
  document.getElementById('progressFill').style.width = Math.round((visited.size / TOTAL) * 100) + '%';
}

/* ── Navigation ── */
const idMap = { roadmap:'ftCanvas', mvc:'mvcCanvas', oop:'oopCanvas', solid:'solidCanvas', patterns:'patternCanvas', microservices:'msCanvas', llm:'llmCanvas', rag:'ragCanvas' };
const tracks = {
    dotnet: ['roadmap', 'mvc', 'oop', 'solid', 'patterns', 'microservices'],
    ai: ['llm', 'rag']
};
const SECTION_LABELS = {
  oop: 'OOP Concepts', solid: 'SOLID Principles',
  patterns: 'Design Patterns', microservices: 'Microservices',
  llm: 'How LLMs Work', rag: 'RAG Systems', mvc: 'MVC Architecture', roadmap: '8 Week Plan'
};

function zoomImg(src) {
  const overlay = document.getElementById('image-overlay');
  const img = document.getElementById('overlay-img');
  img.src = src;
  overlay.style.display = 'flex';
}

function openMVC(name) {
  const data = window.MVC_DETAILS?.[name];
  if (!data) return;
  const modal = document.getElementById('pattern-modal');
  document.getElementById('pm-type').textContent = data.type;
  document.getElementById('pm-title').textContent = name;
  document.getElementById('pm-concept').textContent = data.concept;
  
  const usageList = document.getElementById('pm-usage');
  usageList.innerHTML = data.usage.map(u => `<li>${u}</li>`).join('');
  
  const codeArea = document.getElementById('pm-code');
  codeArea.style.padding = '20px';
  codeArea.innerHTML = `
    <pre><code class="language-csharp">${data.code}</code></pre>
  `;
  
  modal.style.display = 'flex';
  hljs.highlightElement(codeArea.querySelector('code'));
}

function openMS(name) {
  const data = window.MS_DETAILS?.[name];
  if (!data) return;
  const modal = document.getElementById('pattern-modal');
  document.getElementById('pm-type').textContent = data.type;
  document.getElementById('pm-title').textContent = name;
  document.getElementById('pm-concept').textContent = data.concept;
  
  const usageList = document.getElementById('pm-usage');
  usageList.innerHTML = data.usage.map(u => `<li>${u}</li>`).join('');
  
  const codeArea = document.getElementById('pm-code');
  codeArea.style.padding = '20px';
  codeArea.innerHTML = `
    <div style="cursor:zoom-in" onclick="zoomImg(this.querySelector('img').src)">
        ${data.diag}
        <div style="text-align:center; font-size:9px; color:var(--txt3); margin-top:5px; text-transform:uppercase;">Click image to expand</div>
    </div>
    <div style="margin-top:20px; border-top:1px solid var(--brd); padding-top:15px;">
        <pre><code class="language-csharp">${data.code}</code></pre>
    </div>
  `;
  
  modal.style.display = 'flex';
  hljs.highlightElement(codeArea.querySelector('code'));
}

function openPattern(name) {
  const data = window.PATTERN_DETAILS?.[name];
  if (!data) return;
  const modal = document.getElementById('pattern-modal');
  document.getElementById('pm-type').textContent = data.type;
  document.getElementById('pm-title').textContent = name;
  document.getElementById('pm-concept').textContent = data.concept;
  
  const usageList = document.getElementById('pm-usage');
  usageList.innerHTML = data.usage.map(u => `<li>${u}</li>`).join('');
  
  const codeArea = document.getElementById('pm-code');
  codeArea.innerHTML = `<pre><code class="language-csharp">${data.code}</code></pre>`;
  
  modal.style.display = 'flex';
  hljs.highlightElement(codeArea.querySelector('code'));
}

function switchPatternCat(cat) {
  const area = document.getElementById('pattern-content-area');
  if (!area || !window.PATTERN_CATS) return;
  document.querySelectorAll('#patterns .track-btn').forEach(b => b.classList.remove('active-dotnet'));
  document.getElementById('btn-p-' + cat)?.classList.add('active-dotnet');
  area.innerHTML = window.PATTERN_CATS[cat];
  hljs.highlightAll();
  
  // Update 3D scene
  const sceneKey = 'pattern' + cat.charAt(0).toUpperCase() + cat.slice(1);
  if (window.switchScene) window.switchScene('patternCanvas', sceneKey);
}

function show(id, track) {
  // Render section if not yet in DOM
  if (typeof SECTIONS === 'object' && SECTIONS[id] && !document.getElementById(id)) {
    const content = document.getElementById('mainContent');
    content.insertAdjacentHTML('beforeend', SECTIONS[id]);
    hljs.highlightAll();
    if (id === 'solid') switchSolid('S');
    if (id === 'patterns') switchPatternCat('creational');
    if (id === 'roadmap') switchWeek(1);
  }

  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById(id)?.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('nav-' + id)?.classList.add('active');

  visited.add(id);
  document.querySelectorAll('.nav-item').forEach(n => {
    if (visited.has(n.id.replace('nav-', ''))) n.classList.add('done');
  });

  document.getElementById('breadcrumb').innerHTML =
    `<span>${track === 'ai' ? 'AI Track' : '.NET Track'}</span> / ${SECTION_LABELS[id] || id}`;
  document.getElementById('secIndicator').className =
    'section-indicator' + (track === 'ai' ? ' ai' : '');

  localStorage.setItem('alProgress', JSON.stringify([...visited]));
  updateProgress();
  document.querySelector('.content').scrollTop = 0;
  requestAnimationFrame(() => window.initCanvas && window.initCanvas(id));
}

/* ── Fast Track Detail ── */
/* ── Roadmap Topic Switch ── */
function switchFT(id) {
  const area = document.getElementById('ft-content-area');
  if (!area || !window.FT_PAGES) return;
  document.querySelectorAll('#roadmap .track-switcher:nth-child(2) .track-btn').forEach(b => b.classList.remove('active-dotnet'));
  document.getElementById('ft-' + id)?.classList.add('active-dotnet');
  area.innerHTML = window.FT_PAGES[id];
  if (id === 'cap') switchCAP('sql');
}

/* ── CAP Implementation Switch ── */
function switchCAP(id) {
  const area = document.getElementById('cap-impl-area');
  if (!area || !window.CAP_IMPL) return;
  document.querySelectorAll('#roadmap .track-switcher:nth-child(4) .track-btn').forEach(b => b.classList.remove('active-dotnet'));
  document.getElementById('cap-' + id)?.classList.add('active-dotnet');
  area.innerHTML = window.CAP_IMPL[id];
  hljs.highlightAll();
}

/* ── Roadmap Week Switch ── */
function switchWeek(num) {
  const area = document.getElementById('week-content-area');
  if (!area || !window.WEEK_DATA) return;
  document.querySelectorAll('#roadmap > .track-switcher .track-btn').forEach(b => b.classList.remove('active-dotnet'));
  document.getElementById('btn-w' + num)?.classList.add('active-dotnet');
  area.innerHTML = window.WEEK_DATA[num];
  if (num === 1) switchFT('cap');
}

/* ── Theme ── */
function toggleTheme() {
  const dark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = dark ? 'light' : 'dark';
  localStorage.setItem('alTheme', document.documentElement.dataset.theme);
  updateThemeUI();
}

function updateThemeUI() {
  const dark = document.documentElement.dataset.theme === 'dark';
  document.getElementById('themeIcon').textContent  = dark ? '☀' : '🌙';
  document.getElementById('themeLabel').textContent = dark ? 'Light' : 'Dark';
}

/* ── SOLID Detail ── */
function switchSolid(letter) {
  const area = document.getElementById('solid-content-area');
  if (!area || !window.SOLID_PAGES) return;
  document.querySelectorAll('.solid-brick').forEach(b => b.classList.remove('active'));
  document.getElementById('brick-' + letter)?.classList.add('active');
  area.innerHTML = window.SOLID_PAGES[letter];
  hljs.highlightAll();
}

/* ── BOOT ── */
(function init() {
  // Restore theme
  const savedTheme = localStorage.getItem('alTheme') || 'dark';
  document.documentElement.dataset.theme = savedTheme;
  updateThemeUI();

  // Restore progress
  try {
    const saved = JSON.parse(localStorage.getItem('alProgress') || '["oop"]');
    saved.forEach(id => {
      visited.add(id);
      document.getElementById('nav-' + id)?.classList.add('done');
    });
    updateProgress();
  } catch (e) {}

  // Render Roadmap (default section) into DOM
  show('roadmap', 'dotnet');
})();
