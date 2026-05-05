/* ═══════════════════════════════════════════
   SECTION: SOLID Principles
   Registers HTML into global SECTIONS map.
═══════════════════════════════════════════ */
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS['solid'] = `
<section id="solid">
    <div class="section-header">
      <div class="section-eyebrow"><span class="eyebrow-line"></span>DESIGN PRINCIPLES</div>
      <h1 class="section-title">SOLID Principles</h1>
      <p class="section-subtitle">Five laws by Robert C. Martin. Click each brick below to explore the architecture, code, and analogies for that principle.</p>
    </div>

    <div class="solid-wall">
      <div class="solid-brick sb-s active" id="brick-S" onclick="switchSolid('S')">
        <div class="solid-letter">S</div>
        <div class="solid-name">SINGLE RESPONSIBILITY</div>
      </div>
      <div class="solid-brick sb-o" id="brick-O" onclick="switchSolid('O')">
        <div class="solid-letter">O</div>
        <div class="solid-name">OPEN / CLOSED</div>
      </div>
      <div class="solid-brick sb-l" id="brick-L" onclick="switchSolid('L')">
        <div class="solid-letter">L</div>
        <div class="solid-name">LISKOV SUBSTITUTION</div>
      </div>
      <div class="solid-brick sb-i" id="brick-I" onclick="switchSolid('I')">
        <div class="solid-letter">I</div>
        <div class="solid-name">INTERFACE SEGREGATION</div>
      </div>
      <div class="solid-brick sb-d" id="brick-D" onclick="switchSolid('D')">
        <div class="solid-letter">D</div>
        <div class="solid-name">DEPENDENCY INVERSION</div>
      </div>
    </div>

    <div id="solid-content-area" style="animation: fadeIn 0.4s ease;">
        <!-- Dynamic content injected here -->
    </div>

    <hr class="divider"/>

    <div class="scene-3d-wrap">
      <div class="scene-label">
        <span>SOLID — Dependency Flow Visualised (drag to rotate)</span>
        <span class="scene-3d-badge">● INTERACTIVE 3D</span>
      </div>
      <canvas class="canvas-3d" id="solidCanvas"></canvas>
    </div>

    <div style="display: flex; justify-content: flex-end; margin-top: 40px;">
        <button class="hbtn primary" onclick="show('patterns', 'dotnet')">Next Step: Design Patterns →</button>
    </div>
</section>
`;

// ── SOLID Content Data ──
window.SOLID_PAGES = {
  S: `
    <div class="concept-card">
      <div class="concept-label">S — SINGLE RESPONSIBILITY · E-Commerce Order Flow</div>
      <div class="concept-title">MediatR + Domain Events = Perfect SRP</div>
      <div class="concept-body">
        One handler places the order. Then domain events are published — each subscriber handles one concern: email, inventory, analytics. Change the email provider? Touch only one handler.
      </div>
    </div>
    <div class="code-wrap">
      <div class="code-header"><span class="code-lang">C# — SRP with MediatR</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
      <pre><code class="language-csharp">public class PlaceOrderHandler : IRequestHandler&lt;PlaceOrderCommand&gt; {
    public async Task Handle(PlaceOrderCommand cmd) {
        await _repo.SaveAsync(Order.Create(cmd));
        await _mediator.Publish(new OrderPlacedEvent(order));
    }
}</code></pre>
    </div>
  `,
  O: `
    <div class="concept-card">
      <div class="concept-label">O — OPEN / CLOSED · Discount Engine</div>
      <div class="concept-title">Strategy Pattern for Discounts</div>
      <div class="concept-body">
        Add a "Summer Sale" or "Black Friday" discount by creating a new class, not by adding another 'if' statement to your core engine.
      </div>
    </div>
    <div class="code-wrap">
      <div class="code-header"><span class="code-lang">C# — OCP with Strategy</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
      <pre><code class="language-csharp">public interface IDiscountStrategy { decimal Apply(decimal total); }
public class BlackFridayDiscount : IDiscountStrategy { 
    public decimal Apply(decimal total) =&gt; total * 0.5m; 
}</code></pre>
    </div>
  `,
  L: `
    <div class="concept-card">
      <div class="concept-label">L — LISKOV SUBSTITUTION · Persistence Layers</div>
      <div class="concept-title">Read-Only vs Read-Write Repositories</div>
      <div class="concept-body">
        If a ReadOnlyRepo is passed where a full Repo is expected, calling Save() will fail. This violates LSP. Split interfaces into IReadRepo and IWriteRepo.
      </div>
    </div>
    <div class="code-wrap">
      <div class="code-header"><span class="code-lang">C# — LSP Violation Fix</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
      <pre><code class="language-csharp">public interface IReadOnlyRepository&lt;T&gt; { Task&lt;T&gt; GetAsync(Guid id); }
public interface IRepository&lt;T&gt; : IReadOnlyRepository&lt;T&gt; { Task SaveAsync(T entity); }</code></pre>
    </div>
  `,
  I: `
    <div class="concept-card">
      <div class="concept-label">I — INTERFACE SEGREGATION · Worker Roles</div>
      <div class="concept-title">Small, Atomic Interfaces</div>
      <div class="concept-body">
        Don't force a Robot to implement IFeedable just because it implements IWorker. Split them up.
      </div>
    </div>
    <div class="code-wrap">
      <div class="code-header"><span class="code-lang">C# — ISP in Action</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
      <pre><code class="language-csharp">public interface IWorker { void Work(); }
public interface IFeedable { void Eat(); }
public class Robot : IWorker { public void Work() { /* ... */ } }</code></pre>
    </div>
  `,
  D: `
    <div class="concept-card">
      <div class="concept-label">D — DEPENDENCY INVERSION · Constructor Injection</div>
      <div class="concept-title">Injecting Abstractions</div>
      <div class="concept-body">
        High-level services should never instantiate low-level components. Use the ASP.NET Core DI Container to provide dependencies at runtime.
      </div>
    </div>
    <div class="code-wrap">
      <div class="code-header"><span class="code-lang">C# — DIP via DI Container</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
      <pre><code class="language-csharp">public class OrderService(IOrderRepository repo) {
    public async Task Process(Guid id) =&gt; await repo.GetAsync(id);
}</code></pre>
    </div>
  `
};
