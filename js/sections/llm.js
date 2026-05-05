/* ═══════════════════════════════════════════
   SECTION: LLM Architecture
   Registers HTML into global SECTIONS map.
═══════════════════════════════════════════ */
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS['llm'] = `
<section id="llm">
    <div class="section-header">
      <div class="section-eyebrow"><span class="eyebrow-line"></span>AI CORE</div>
      <h1 class="section-title">How LLMs Work</h1>
      <p class="section-subtitle">Demystifying the "Magic." Learn how self-attention and transformer layers turn math into human-like intelligence.</p>
    </div>

    <div class="grid-3">
        <div class="concept-card">
            <div class="concept-label">PILLAR 01</div>
            <div class="concept-title">Self-Attention</div>
            <div class="concept-body">The "Aha!" moment. Self-attention allows the model to look at every word in a sentence and decide which ones are relevant to each other.</div>
        </div>
        <div class="concept-card">
            <div class="concept-label">PILLAR 02</div>
            <div class="concept-title">Tokenization</div>
            <div class="concept-body">Models don't see words; they see numbers. Tokenization breaks text into sub-word chunks (tokens) for mathematical processing.</div>
        </div>
        <div class="concept-card">
            <div class="concept-label">PILLAR 03</div>
            <div class="concept-title">RLHF</div>
            <div class="concept-body">Reinforcement Learning from Human Feedback. This is how we align models to be helpful, honest, and harmless.</div>
        </div>
    </div>

    <hr class="divider"/>

    <!-- Transformer Diagram -->
    <div class="diagram-wrap">
        <div class="diagram-label">TRANSFORMER ARCHITECTURE (The Heart of LLMs)</div>
        <svg viewBox="0 0 800 320" font-family="IBM Plex Mono">
            <!-- Layers -->
            <rect x="300" y="20" width="200" height="40" rx="4" fill="rgba(16,185,129,0.1)" stroke="var(--good)" />
            <text x="400" y="45" fill="var(--good)" text-anchor="middle" font-size="12">Output (Probabilities)</text>
            
            <path d="M400 60 L400 90" stroke="var(--brd)" marker-end="url(#arr)" />
            
            <rect x="300" y="90" width="200" height="60" rx="4" fill="var(--bg3)" stroke="var(--dotnet)" />
            <text x="400" y="125" fill="var(--dotnet)" text-anchor="middle" font-size="14" font-weight="700">FEED FORWARD</text>

            <path d="M400 150 L400 180" stroke="var(--brd)" marker-end="url(#arr)" />

            <rect x="250" y="180" width="300" height="80" rx="8" fill="rgba(167,139,250,0.1)" stroke="var(--purple)" stroke-width="2" />
            <text x="400" y="225" fill="var(--purple)" text-anchor="middle" font-size="16" font-weight="700">MULTI-HEAD ATTENTION</text>
            <text x="400" y="245" fill="var(--txt3)" text-anchor="middle" font-size="10">"The Core Intelligence"</text>

            <path d="M400 260 L400 290" stroke="var(--brd)" marker-end="url(#arr)" />

            <rect x="300" y="290" width="200" height="30" rx="4" fill="var(--bg3)" stroke="var(--brd)" />
            <text x="400" y="310" fill="var(--txt3)" text-anchor="middle" font-size="10">Input Tokens</text>
        </svg>
    </div>

    <div class="grid-2">
        <div class="concept-card">
            <div class="concept-label">ANALOGY</div>
            <div class="concept-title">The Auto-Complete on Steroids</div>
            <div class="concept-body">Imagine an auto-complete that has read the entire internet. It doesn't "know" facts; it predicts the most likely next token based on trillions of patterns.</div>
        </div>
        <div class="code-wrap">
            <div class="code-header"><span class="code-lang">Python — Simple Inference</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
            <pre><code class="language-python"># Predicting the next word
input_text = "The architect designed a..."
output = model.generate(input_text)
# Result: "scalable microservices system"</code></pre>
        </div>
    </div>

    <hr class="divider"/>

    <div class="scene-3d-wrap">
      <div class="scene-label">
        <span>Transformer Layer Visualization (drag to rotate)</span>
        <span class="scene-3d-badge">● NEURAL 3D</span>
      </div>
      <canvas class="canvas-3d" id="llmCanvas"></canvas>
    </div>

    <div style="display: flex; justify-content: flex-end; margin-top: 40px;">
        <button class="hbtn primary" onclick="show('rag', 'ai')">Next Step: RAG Systems →</button>
    </div>
</section>
`;
