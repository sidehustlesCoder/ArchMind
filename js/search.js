/* ═══════════════════════════════════════════
   ARCHLEARN — SEARCH
   Highlights matching text across all sections.
═══════════════════════════════════════════ */

function doSearch(q) {
  const content = document.querySelector('.content');
  // Remove existing highlights
  content.querySelectorAll('mark').forEach(m => {
    m.parentNode.replaceChild(document.createTextNode(m.textContent), m);
    m.parentNode.normalize();
  });
  if (q && q.length >= 2) highlightIn(content, q);
}

function highlightIn(node, q) {
  if (node.nodeType === 3) {
    const idx = node.nodeValue.toLowerCase().indexOf(q.toLowerCase());
    if (idx >= 0) {
      const m  = document.createElement('mark');
      const a  = node.splitText(idx);
      a.splitText(q.length);
      m.appendChild(a.cloneNode(true));
      a.parentNode.replaceChild(m, a);
    }
  } else if (node.nodeType === 1 && !['SCRIPT','STYLE','PRE'].includes(node.tagName)) {
    [...node.childNodes].forEach(c => highlightIn(c, q));
  }
}
