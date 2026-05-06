/* ═══════════════════════════════════════════
   ARCHLEARN — ADVANCED 3D ENGINE (V5)
   Supports Dynamic Scene Switching for tabs.
═══════════════════════════════════════════ */

const canvasState = {};
const currentScenes = { 
    oopCanvas: 'oopCanvas', 
    solidCanvas: 'solidCanvas', 
    patternCanvas: 'patternCreational', 
    msCanvas: 'msCanvas',
    mvcCanvas: 'mvcCanvas',
    ftCanvas: 'ftCanvas'
};

const SCENES = {
  ftCanvas: {
    nodes: [
      {l:'Week 1', x:0,   y:120, z:0,    c:'#f59e0b', r:30, d:'Trade-offs.'},
      {l:'Week 2', x:-120,y:20,  z:60,   c:'#60a5fa', r:24, d:'Foundations.'},
      {l:'Week 3', x:120, y:20,  z:60,   c:'#60a5fa', r:24, d:'Patterns.'},
      {l:'Week 4', x:0,   y:-110,z:100,  c:'#10b981', r:34, d:'Distributed.'},
    ],
    edges:[[0,1],[1,3],[0,2],[2,3]]
  },
  mvcCanvas: {
    nodes: [
      {l:'Controller', x:0,   y:120, z:0,    c:'#f59e0b', r:34, d:'Handles requests.'},
      {l:'Model',      x:-120,y:-60, z:60,   c:'#10b981', r:28, d:'Logic & Data.'},
      {l:'View',       x:120, y:-60, z:60,   c:'#60a5fa', r:28, d:'User Interface.'},
      {l:'User',       x:0,   y:-110,z:-100, c:'#fff',    r:20, d:'Initiator.'},
    ],
    edges:[[0,1],[1,2],[2,0],[3,0]]
  },
  oopCanvas: {
    nodes: [
      {l:'Encapsulation', x:0,   y:80,  z:0,   c:'#f59e0b', r:30, d:'Hides internal state. Only exposes behavior through methods.'},
      {l:'Polymorphism',  x:100, y:-20, z:60,  c:'#a78bfa', r:28, d:'Common base type for different implementations.'},
      {l:'Inheritance',   x:-100,y:-20, z:60,  c:'#60a5fa', r:26, d:'Share logic up the tree.'},
      {l:'Abstraction',   x:0,   y:-100,z:-60, c:'#34d399', r:26, d:'Focus on "what", hide "how".'},
    ],
    edges:[[0,1],[0,2],[0,3],[1,2],[2,3]]
  },
  solidCanvas: {
    nodes: [
      {l:'S — SRP',   x:-140, y:-20, z:40,  c:'#f59e0b', r:24, d:'Single Responsibility.'},
      {l:'O — OCP',   x:-50,  y:-80, z:80,  c:'#60a5fa', r:24, d:'Open/Closed.'},
      {l:'L — LSP',   x:70,   y:-60, z:60,  c:'#a78bfa', r:24, d:'Liskov Substitution.'},
      {l:'I — ISP',   x:130,  y:30,  z:30,  c:'#22d3ee', r:24, d:'Interface Segregation.'},
      {l:'D — DIP',   x:40,   y:90,  z:-30, c:'#10b981', r:26, d:'Dependency Inversion.'},
    ],
    edges:[[0,4],[1,4],[2,4],[3,4],[0,1]]
  },
  patternCreational: {
    nodes: [
      {l:'Abstract Factory', x:0,   y:80,  z:0,   c:'#f59e0b', r:26, d:'Families of products.'},
      {l:'Builder',          x:80,  y:-40, z:40,  c:'#f59e0b', r:24, d:'Step-by-step construction.'},
      {l:'Factory Method',   x:-80, y:-40, z:40,  c:'#f59e0b', r:24, d:'Subclasses decide creation.'},
      {l:'Prototype',        x:0,   y:-90, z:-40, c:'#f59e0b', r:22, d:'Clone objects.'},
      {l:'Singleton',        x:0,   y:0,   z:100, c:'#f59e0b', r:30, d:'Global access to one instance.'},
    ],
    edges:[[0,1],[0,2],[0,3],[0,4],[1,4],[2,4]]
  },
  patternStructural: {
    nodes: [
      {l:'Adapter',   x:-100, y:-20, z:40,  c:'#60a5fa', r:24, d:'Convert interfaces.'},
      {l:'Bridge',    x:-30,  y:-80, z:70,  c:'#60a5fa', r:24, d:'Decouple abstraction.'},
      {l:'Composite', x:60,   y:-60, z:50,  c:'#60a5fa', r:24, d:'Part-whole hierarchies.'},
      {l:'Decorator', x:120,  y:20,  z:20,  c:'#60a5fa', r:24, d:'Dynamic responsibility.'},
      {l:'Facade',    x:40,   y:90,  z:-30, c:'#60a5fa', r:26, d:'Simplified interface.'},
      {l:'Proxy',     x:-40,  y:90,  z:-30, c:'#60a5fa', r:24, d:'Access control.'},
    ],
    edges:[[0,4],[1,4],[2,4],[3,4],[5,4]]
  },
  patternBehavioural: {
    nodes: [
      {l:'Strategy',   x:0,    y:80,  z:0,    c:'#a78bfa', r:30, d:'Interchangeable algorithms.'},
      {l:'Observer',   x:-120, y:0,   z:80,   c:'#a78bfa', r:22, d:'Notification system.'},
      {l:'Command',    x:-50,  y:0,   z:120,  c:'#a78bfa', r:22, d:'Requests as objects.'},
      {l:'Mediator',   x:60,   y:0,   z:120,  c:'#a78bfa', r:22, d:'Simplified communication.'},
      {l:'State',      x:120,  y:0,   z:80,   c:'#a78bfa', r:22, d:'Behavior via state.'},
      {l:'Iterator',   x:0,    y:-110,z:0,    c:'#a78bfa', r:26, d:'Sequential access.'},
    ],
    edges:[[0,1],[0,2],[0,3],[0,4],[0,5]]
  },
  msCanvas: {
    nodes: [
      {l:'API Gateway',   x:0,   y:100, z:0,    c:'#f59e0b', r:34, d:'Entry point.'},
      {l:'Order Svc',     x:-160,y:10,  z:80,   c:'#10b981', r:22, d:'Orders.'},
      {l:'Payment Svc',   x:160, y:10,  z:80,   c:'#a78bfa', r:22, d:'Payments.'},
      {l:'Message Bus',   x:0,   y:-110,z:0,    c:'rgba(245,158,11,.5)', r:28, d:'Backbone.'},
    ],
    edges:[[0,1],[0,2],[1,3],[2,3]]
  },
  llmCanvas: {
    nodes: [
      {l:'Attention Head', x:0,   y:100, z:0,   c:'#a78bfa', r:30, d:'Neural focus mechanism.'},
      {l:'Feed Forward',   x:-100,y:-20, z:60,  c:'#60a5fa', r:26, d:'Linear transformations.'},
      {l:'Token Embed',    x:100, y:-20, z:60,  c:'#f59e0b', r:24, d:'Numeric representation.'},
      {l:'Softmax',        x:0,   y:-110,z:-40, c:'#34d399', r:28, d:'Probability distribution.'},
    ],
    edges:[[0,1],[0,2],[1,2],[1,3],[2,3]]
  },
  ragCanvas: {
    nodes: [
      {l:'User Prompt',   x:-120, y:80,  z:0,   c:'#f59e0b', r:22, d:'Input source.'},
      {l:'Vector Search', x:0,    y:0,   z:100, c:'#60a5fa', r:34, d:'Semantic lookup.'},
      {l:'Knowledge Base',x:120,  y:-80, z:0,   c:'#10b981', r:28, d:'Augmented facts.'},
      {l:'Grounding',     x:0,    y:110, z:-60, c:'#a78bfa', r:24, d:'Prompt augmentation.'},
    ],
    edges:[[0,1],[1,2],[2,3],[3,1]]
  }
};

window.switchScene = function(canvasId, sceneKey) {
    currentScenes[canvasId] = sceneKey;
};

window.initCanvas = function(sectionId) {
  const idMap = { mvc:'mvcCanvas', oop:'oopCanvas', solid:'solidCanvas', patterns:'patternCanvas', microservices:'msCanvas', llm:'llmCanvas', rag:'ragCanvas' };
  const canvasElemId = idMap[sectionId];
  if (!canvasElemId) return;
  const canvas = document.getElementById(canvasElemId);
  if (!canvas || canvasState[canvasElemId]) return;
  
  if (canvas.offsetWidth === 0) {
    // If not visible yet, wait and retry
    setTimeout(() => window.initCanvas(sectionId), 100);
    return;
  }
  
  canvasState[canvasElemId] = true;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const resize = () => {
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);
  };
  window.addEventListener('resize', resize);
  resize();

  let W = canvas.offsetWidth, H = canvas.offsetHeight;
  let rotX = -0.3, rotY = 0.5, targetRotX = -0.3, targetRotY = 0.5;
  let dragging = false, lastX, lastY, moved = false;
  let time = 0;

  function hexToRgba(c, a) {
    if (!c || !c.startsWith('#')) return c;
    let r, g, b;
    if (c.length === 4) {
      r = parseInt(c[1] + c[1], 16);
      g = parseInt(c[2] + c[2], 16);
      b = parseInt(c[3] + c[3], 16);
    } else {
      r = parseInt(c.slice(1,3), 16);
      g = parseInt(c.slice(3,5), 16);
      b = parseInt(c.slice(5,7), 16);
    }
    return `rgba(${r},${g},${b},${a})`;
  }

  function project(x, y, z) {
    const cx = Math.cos(rotX), sx = Math.sin(rotX);
    const cy = Math.cos(rotY), sy = Math.sin(rotY);
    const x1 = cy * x + sy * z;
    const z1 = -sy * x + cy * z;
    const y1 = cx * y - sx * z1;
    const z2 = sx * y + cx * z1;
    const fov = 600, s = fov / (fov + z2 + 250);
    return { sx: W/2 + x1*s, sy: H/2 - y1*s, z: z2, s };
  }

  function draw() {
    W = canvas.offsetWidth; H = canvas.offsetHeight;
    if (W === 0) return;
    ctx.clearRect(0, 0, W, H);
    const dark = document.documentElement.dataset.theme === 'dark';
    const sceneKey = currentScenes[canvasElemId];
    const scene = SCENES[sceneKey];
    if (!scene) return;
    time += 0.01;

    if (!dragging) { targetRotY += 0.003; rotX += (targetRotX - rotX) * 0.05; rotY += (targetRotY - rotY) * 0.05; }

    ctx.strokeStyle = dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)';
    const gS = 500, gStep = 50;
    for (let i = -gS; i <= gS; i += gStep) {
      const p1 = project(i, -140, -gS), p2 = project(i, -140, gS);
      ctx.beginPath(); ctx.moveTo(p1.sx, p1.sy); ctx.lineTo(p2.sx, p2.sy); ctx.stroke();
      const p3 = project(-gS, -140, i), p4 = project(gS, -140, i);
      ctx.beginPath(); ctx.moveTo(p3.sx, p3.sy); ctx.lineTo(p4.sx, p4.sy); ctx.stroke();
    }

    scene.edges.forEach(([a, b]) => {
      const pA = project(scene.nodes[a].x, scene.nodes[a].y, scene.nodes[a].z);
      const pB = project(scene.nodes[b].x, scene.nodes[b].y, scene.nodes[b].z);
      ctx.beginPath(); ctx.moveTo(pA.sx, pA.sy); ctx.lineTo(pB.sx, pB.sy);
      const grad = ctx.createLinearGradient(pA.sx, pA.sy, pB.sx, pB.sy);
      grad.addColorStop(0, hexToRgba(scene.nodes[a].c, 0.15 * pA.s));
      grad.addColorStop(1, hexToRgba(scene.nodes[b].c, 0.15 * pB.s));
      ctx.strokeStyle = grad; ctx.lineWidth = 1 * pA.s; ctx.stroke();
    });

    const sorted = scene.nodes
      .map((n, i) => ({ ...n, ...project(n.x, n.y + Math.sin(time + i)*5, n.z), i }))
      .sort((a, b) => a.z - b.z);

    sorted.forEach(n => {
      const r = n.r * n.s, op = Math.max(0.1, n.s * 0.9);
      const glow = ctx.createRadialGradient(n.sx, n.sy, 0, n.sx, n.sy, r * 2.5);
      glow.addColorStop(0, hexToRgba(n.c, 0.3 * op)); glow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(n.sx, n.sy, r*2.5, 0, Math.PI*2); ctx.fill();
      const grad = ctx.createRadialGradient(n.sx - r*0.3, n.sy - r*0.3, r*0.1, n.sx, n.sy, r);
      grad.addColorStop(0, '#fff'); grad.addColorStop(0.2, n.c); grad.addColorStop(1, dark ? '#000' : '#444');
      ctx.globalAlpha = op; ctx.beginPath(); ctx.arc(n.sx, n.sy, r, 0, Math.PI*2); ctx.fillStyle = grad; ctx.fill(); ctx.globalAlpha = 1;
      const fs = Math.max(7, 12 * n.s); ctx.font = `${n.sub ? 300 : 700} ${fs}px IBM Plex Sans, sans-serif`; ctx.textAlign = 'center';
      ctx.fillStyle = dark ? '#fff' : '#000'; ctx.fillText(n.l, n.sx, n.sy + r + fs + 2);
    });
  }

  const animate = () => { draw(); requestAnimationFrame(animate); };
  animate();

  function handleClick(e) {
    if (moved) return;
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const my = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
    const sceneKey = currentScenes[canvasElemId];
    const scene = SCENES[sceneKey];
    let closest = null, minDist = 40;
    scene.nodes.forEach(n => {
        const proj = project(n.x, n.y, n.z);
        const d = Math.hypot(mx - proj.sx, my - proj.sy);
        if (d < minDist) { minDist = d; closest = n; }
    });
    if (closest) {
        const overlay = document.getElementById('node-detail');
        overlay.style.display = 'block';
        overlay.style.left = Math.min(window.innerWidth - 320, e.clientX || e.touches[0].clientX) + 'px';
        overlay.style.top = Math.min(window.innerHeight - 200, e.clientY || e.touches[0].clientY) + 'px';
        document.getElementById('node-detail-title').textContent = closest.l;
        document.getElementById('node-detail-title').style.color = closest.c;
        document.getElementById('node-detail-body').textContent = closest.d;
    } else { document.getElementById('node-detail').style.display = 'none'; }
  }

  canvas.onmousedown = e => { dragging = true; moved = false; lastX = e.clientX; lastY = e.clientY; };
  window.onmousemove = e => {
    if (!dragging) return;
    moved = true;
    targetRotY += (e.clientX - lastX) * 0.01;
    targetRotX += (e.clientY - lastY) * 0.01;
    lastX = e.clientX; lastY = e.clientY;
    rotX = targetRotX; rotY = targetRotY;
  };
  window.onmouseup = e => { if (dragging) handleClick(e); dragging = false; };
  canvas.ontouchstart = e => { dragging = true; moved = false; lastX = e.touches[0].clientX; lastY = e.touches[0].clientY; };
  window.ontouchmove = e => {
    if (!dragging) return;
    moved = true;
    targetRotY += (e.touches[0].clientX - lastX) * 0.01;
    targetRotX += (e.touches[0].clientY - lastY) * 0.01;
    lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
    rotX = targetRotX; rotY = targetRotY;
  };
  window.ontouchend = e => { if (dragging) handleClick(e); dragging = false; };
}
