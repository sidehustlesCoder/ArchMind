/* ═══════════════════════════════════════════
   SECTION: RAG Systems
   Registers HTML into global SECTIONS map.
═══════════════════════════════════════════ */
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS['rag'] = `
<section id="rag">
    <div class="section-header">
      <div class="section-eyebrow"><span class="eyebrow-line"></span>MODERN AI STACK</div>
      <h1 class="section-title">RAG Systems</h1>
      <p class="section-subtitle">Retrieval-Augmented Generation. How to give your LLM "Long-Term Memory" by connecting it to your own private data.</p>
    </div>

    <div class="grid-3">
        <div class="concept-card">
            <div class="concept-label">PILLAR 01</div>
            <div class="concept-title">Vector Embeddings</div>
            <div class="concept-body">Converting text into high-dimensional vectors. Similar meanings end up as points close together in space.</div>
        </div>
        <div class="concept-card">
            <div class="concept-label">PILLAR 02</div>
            <div class="concept-title">Semantic Retrieval</div>
            <div class="concept-body">Finding the relevant "fact" not by keyword, but by meaning. Use cosine similarity to find the best match.</div>
        </div>
        <div class="concept-card">
            <div class="concept-label">PILLAR 03</div>
            <div class="concept-title">Augmentation</div>
            <div class="concept-body">Injecting the retrieved facts into the prompt to "Ground" the model and prevent hallucinations.</div>
        </div>
    </div>

    <hr class="divider"/>

    <!-- RAG Pipeline Diagram -->
    <div class="diagram-wrap">
        <div class="diagram-label">THE RAG PIPELINE (Architectural Flow)</div>
        <svg viewBox="0 0 800 300" font-family="IBM Plex Mono">
            <!-- User -->
            <circle cx="80" cy="150" r="30" fill="var(--bg3)" stroke="var(--brd2)" />
            <text x="80" y="155" fill="var(--txt)" text-anchor="middle" font-size="10">User Query</text>
            
            <path d="M110 150 L180 150" stroke="var(--brd)" marker-end="url(#arr)" />
            
            <!-- Retrieval -->
            <rect x="180" y="100" width="140" height="100" rx="8" fill="rgba(96,165,250,0.1)" stroke="var(--blue)" />
            <text x="250" y="145" fill="var(--blue)" text-anchor="middle" font-size="12" font-weight="700">RETRIEVAL</text>
            <text x="250" y="165" fill="var(--txt3)" text-anchor="middle" font-size="10">Vector Search</text>

            <path d="M250 200 L250 240 L380 240" stroke="var(--brd)" marker-end="url(#arr)" />
            
            <!-- Vector DB -->
            <rect x="380" y="210" width="120" height="60" rx="6" fill="var(--bg3)" stroke="var(--ai)" />
            <text x="440" y="245" fill="var(--ai)" text-anchor="middle" font-size="12" font-weight="700">Vector DB</text>

            <!-- Augmentation -->
            <path d="M320 150 L400 150" stroke="var(--brd)" marker-end="url(#arr)" />
            
            <rect x="400" y="100" width="160" height="100" rx="8" fill="rgba(167,139,250,0.1)" stroke="var(--purple)" />
            <text x="480" y="145" fill="var(--purple)" text-anchor="middle" font-size="12" font-weight="700">AUGMENTATION</text>
            <text x="480" y="165" fill="var(--txt3)" text-anchor="middle" font-size="10">Combined Prompt</text>

            <path d="M560 150 L640 150" stroke="var(--brd)" marker-end="url(#arr)" />
            
            <!-- LLM -->
            <rect x="640" y="100" width="100" height="100" rx="50" fill="var(--bg3)" stroke="var(--good)" />
            <text x="690" y="155" fill="var(--good)" text-anchor="middle" font-size="14" font-weight="700">LLM</text>
        </svg>
    </div>

    <div class="grid-2">
        <div class="concept-card">
            <div class="concept-label">C# EXAMPLE</div>
            <div class="concept-title">Semantic Kernel (RAG)</div>
            <div class="concept-body">Using Microsoft's Semantic Kernel to connect an LLM to a memory store (Pinecone/Azure Search).</div>
            <pre style="margin-top:15px;"><code class="language-csharp">// Retrieval via Memory
var results = kernel.Memory.SearchAsync(
    "docs", "How to scale?", limit: 3);</code></pre>
        </div>
        <div class="concept-card">
            <div class="concept-label">WHY IT MATTERS</div>
            <div class="concept-title">Solving Hallucinations</div>
            <div class="concept-body">By providing the LLM with relevant excerpts from your PDF/Database, the model doesn't have to "guess." It becomes an answer machine grounded in fact.</div>
        </div>
    </div>

    <hr class="divider"/>

    <div class="scene-3d-wrap">
      <div class="scene-label">
        <span>Vector Space Visualization (drag to rotate)</span>
        <span class="scene-3d-badge">● SPATIAL 3D</span>
      </div>
      <canvas class="canvas-3d" id="ragCanvas"></canvas>
    </div>

    <div class="quiz-card">
        <div class="quiz-label">ARCHITECT QUIZ</div>
        <div class="quiz-q">What is the primary benefit of RAG over Fine-Tuning?</div>
        <div class="quiz-options">
            <button class="quiz-opt" onclick="quiz(this,true,'Correct! RAG allows you to update the knowledge base in real-time by adding/removing documents from the vector DB without expensive retraining.')">Real-time data updates without retraining.</button>
            <button class="quiz-opt" onclick="quiz(this,false,'Actually, fine-tuning is better for changing style/tone, not for facts.')">It makes the model faster at reasoning.</button>
        </div>
        <div class="quiz-feedback"></div>
    </div>
</section>
`;
