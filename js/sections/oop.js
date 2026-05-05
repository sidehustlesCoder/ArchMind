/* ═══════════════════════════════════════════
   SECTION: OOP Concepts
   Registers HTML into global SECTIONS map.
═══════════════════════════════════════════ */
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS['oop'] = `
<section id="oop">
  <div class="section-header">
    <div class="section-eyebrow"><span class="eyebrow-line"></span>OBJECT-ORIENTED PROGRAMMING</div>
    <h1 class="section-title">OOP Concepts</h1>
    <p class="section-subtitle">The four pillars that turn spaghetti into systems that 50-person teams can confidently change. Used in every production .NET application — from banking ledgers to e-commerce checkouts.</p>
    <div class="why-card"><span class="why-icon">🏦</span><span>Without OOP: a BankAccount with a public <code>Balance</code> field lets any developer set it to -999999 with zero validation. Encapsulation prevents 3 AM production disasters.</span></div>
  </div>

  <div class="pillars-viz">
    <div class="pillar-box p-enc">
      <div class="pillar-top"></div>
      <div class="pillar-body">
        <div class="pillar-letter">E</div>
        <div class="pillar-name">ENCAPSULATION</div>
        <div class="pillar-title">Invariants & Safety</div>
        <div class="pillar-desc">Protecting state via boundaries. Ensure your object is never in an invalid state.</div>
      </div>
    </div>
    <div class="pillar-box p-poly">
      <div class="pillar-top"></div>
      <div class="pillar-body">
        <div class="pillar-letter">P</div>
        <div class="pillar-name">POLYMORPHISM</div>
        <div class="pillar-title">Dynamic Dispatch</div>
        <div class="pillar-desc">Virtual/Override and Interfaces. Change behavior without changing the consumer.</div>
      </div>
    </div>
    <div class="pillar-box p-inh">
      <div class="pillar-top"></div>
      <div class="pillar-body">
        <div class="pillar-letter">I</div>
        <div class="pillar-name">INHERITANCE</div>
        <div class="pillar-title">Behavior Reuse</div>
        <div class="pillar-desc">IS-A relationships. Used for sharing common logic up the tree. Keep it shallow.</div>
      </div>
    </div>
    <div class="pillar-box p-abs">
      <div class="pillar-top"></div>
      <div class="pillar-body">
        <div class="pillar-letter">A</div>
        <div class="pillar-name">ABSTRACTION</div>
        <div class="pillar-title">Contractual Design</div>
        <div class="pillar-desc">Focus on 'What', hide 'How'. Interfaces are the ultimate tool for decoupling.</div>
      </div>
    </div>
  </div>

  <div class="scene-3d-wrap">
    <div class="scene-label">
        <span>Architectural Hologram — OOP Relationship Map (drag to rotate)</span>
        <span class="scene-3d-badge">● HIGH-FIDELITY 3D</span>
    </div>
    <canvas class="canvas-3d" id="oopCanvas"></canvas>
  </div>

  <div class="grid-2">
    <div class="callout callout-info">
      <span class="callout-icon">💡</span>
      <div>
        <strong>Architect's Rule: Composition over Inheritance</strong>
        <p style="font-size:12px; margin-top:4px;">Inheritance is a tight coupling. If you just want to reuse code, inject a service (Composition). Use Inheritance only when a class truly <em>is</em> a specialized version of another.</p>
      </div>
    </div>
    <div class="callout callout-success">
      <span class="callout-icon">🛡️</span>
      <div>
        <strong>Sealed by Default</strong>
        <p style="font-size:12px; margin-top:4px;">In high-performance systems, use <code>sealed</code>. It prevents unplanned inheritance and allows the JIT to devirtualize method calls for better speed.</p>
      </div>
    </div>
  </div>

  <hr class="divider"/>

  <!-- Advanced Comparison -->
  <div class="arch-pattern-card">
    <div class="apc-header">
      <div class="apc-title">Advanced: Interface vs. Abstract Class</div>
    </div>
    <div class="apc-body">
      <div class="compare-split">
        <div class="cs-panel cs-good" style="border-color: var(--blue);">
          <div class="cs-title" style="color: var(--blue);">INTERFACE (The 'Can-Do')</div>
          <ul style="font-size:12px; padding-left:16px;">
            <li>Defines a contract/capability</li>
            <li>Multiple implementation allowed</li>
            <li>Perfect for decoupling services</li>
            <li>No state (fields) allowed</li>
          </ul>
        </div>
        <div class="cs-panel cs-good" style="border-color: var(--purple);">
          <div class="cs-title" style="color: var(--purple);">ABSTRACT CLASS (The 'Is-A')</div>
          <ul style="font-size:12px; padding-left:16px;">
            <li>Defines a base identity</li>
            <li>Can have shared state/logic</li>
            <li>Only single inheritance in C#</li>
            <li>Provides a partial implementation</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <hr class="divider"/>

  <!-- Encapsulation -->
  <div class="concept-card">
    <div class="concept-label">PILLAR 01 — ENCAPSULATION · Real Architect Scenario</div>
    <div class="concept-title">BankAccount — Protecting Financial Invariants</div>
    <div class="concept-body">
      Every mutation of <span class="ic">_balance</span> MUST: validate the amount, check overdraft limits, acquire a thread lock, and write an audit log. If balance is a public field, none of this is guaranteed.
      <br/><br/>
      <span class="use-badge badge-beginner">HDFC Core</span>
      <span class="use-badge badge-intermediate">Stripe Ledger</span>
    </div>
  </div>

  <div class="compare-split">
    <div class="cs-panel cs-bad">
      <div class="cs-title">❌ PUBLIC FIELD — DISASTER</div>
      <div style="font-family:var(--fm);font-size:12px;color:var(--txt2);line-height:1.9;">
        <code>account.Balance = -500000m;</code><br/>
        — No overdraft check<br/>— No audit trail<br/>— Race condition possible<br/>— Junior dev can corrupt DB
      </div>
    </div>
    <div class="cs-panel cs-good">
      <div class="cs-title">✅ ENCAPSULATED — ARCHITECT GRADE</div>
      <div style="font-family:var(--fm);font-size:12px;color:var(--txt2);line-height:1.9;">
        <code>account.Withdraw(500000m);</code><br/>
        — Balance validated<br/>— Audit event fired<br/>— Thread-safe lock<br/>— Returns typed Result
      </div>
    </div>
  </div>

  <div class="code-wrap">
    <div class="code-header">
      <div class="code-dots"><span></span><span></span><span></span></div>
      <span class="code-lang">C# — Encapsulation · BankAccount with Audit, Thread Safety, Result Pattern</span>
      <button class="copy-btn" onclick="copyCode(this)">Copy</button>
    </div>
    <pre><code class="language-csharp">// ❌ BAD — anyone can corrupt financial state
public class BankAccount {
    public decimal Balance;  // account.Balance = -9999999m — no guards
}

// ✅ ARCHITECT-GRADE — Full encapsulation
public sealed class BankAccount {
    private decimal _balance;
    private readonly List&lt;LedgerEntry&gt; _ledger = new();
    private readonly SemaphoreSlim _lock = new(1, 1);

    public string AccountId { get; }
    public string OwnerId   { get; }

    // Read-only — no setter exposed
    public decimal Balance {
        get { _lock.Wait(); try { return _balance; } finally { _lock.Release(); } }
    }

    public BankAccount(string accountId, string ownerId, decimal openingBalance) {
        AccountId = accountId; OwnerId = ownerId; _balance = openingBalance;
        _ledger.Add(new LedgerEntry("OPEN", openingBalance, openingBalance, DateTime.UtcNow));
    }

    public async Task&lt;Result&lt;decimal&gt;&gt; DepositAsync(decimal amount, string reference) {
        if (amount &lt;= 0) return Result.Fail&lt;decimal&gt;("Deposit must be positive");
        await _lock.WaitAsync();
        try {
            _balance += amount;
            _ledger.Add(new LedgerEntry("CREDIT", amount, _balance, DateTime.UtcNow, reference));
            return Result.Ok(_balance);
        } finally { _lock.Release(); }
    }

    public async Task&lt;Result&lt;decimal&gt;&gt; WithdrawAsync(decimal amount, string reference) {
        if (amount &lt;= 0)       return Result.Fail&lt;decimal&gt;("Amount must be positive");
        if (amount &gt; _balance) return Result.Fail&lt;decimal&gt;($"Insufficient funds. Available: {_balance:N2}");
        await _lock.WaitAsync();
        try {
            _balance -= amount;
            _ledger.Add(new LedgerEntry("DEBIT", amount, _balance, DateTime.UtcNow, reference));
            return Result.Ok(_balance);
        } finally { _lock.Release(); }
    }

    public IReadOnlyList&lt;LedgerEntry&gt; GetStatement() =&gt; _ledger.AsReadOnly();
}

// Usage
var result = await account.WithdrawAsync(75_000m, "ORDER-2024-001");
if (result.IsFailure) throw new PaymentException(result.Error);</code></pre>
  </div>

  <hr class="divider"/>

  <!-- Polymorphism -->
  <div class="concept-card">
    <div class="concept-label">PILLAR 02 — POLYMORPHISM · E-Commerce Payment Gateway</div>
    <div class="concept-title">Add Stripe, Razorpay, PhonePe — zero change to checkout logic</div>
    <div class="concept-body">
      <span class="ic">CheckoutService</span> calls <span class="ic">_gateway.ChargeAsync()</span>. Whether it's Razorpay, Stripe, PhonePe, or BNPL — same call, different behaviour. Swap the gateway in one DI registration line.
      <br/><br/>
      <span class="use-badge">💳 Razorpay India</span>
      <span class="use-badge use-badge-purple">🌍 Stripe Global</span>
      <span class="use-badge use-badge-cyan">📱 PhonePe UPI</span>
      <span class="use-badge use-badge-pink">🛍 Simpl BNPL</span>
    </div>
  </div>

  <div class="diagram-wrap">
    <div class="diagram-label">POLYMORPHISM — Payment Gateway Hierarchy</div>
    <svg viewBox="0 0 720 220" font-family="IBM Plex Mono, monospace">
      <defs><marker id="arr" markerWidth="7" markerHeight="7" refX="4" refY="3.5" orient="auto"><path d="M0,0 L0,7 L7,3.5 z" fill="rgba(255,255,255,.18)"/></marker></defs>
      <rect x="240" y="12" width="240" height="68" rx="8" fill="rgba(245,158,11,.08)" stroke="rgba(245,158,11,.4)" stroke-width="1.5" stroke-dasharray="5,3"/>
      <text x="360" y="34" fill="#f59e0b" font-size="10" text-anchor="middle" letter-spacing="1">«interface»</text>
      <text x="360" y="52" fill="#fcd34d" font-size="12" text-anchor="middle" font-weight="500">IPaymentGateway</text>
      <text x="360" y="68" fill="rgba(255,255,255,.3)" font-size="9" text-anchor="middle">ChargeAsync(amount, currency, customerId)</text>
      <line x1="90"  y1="133" x2="265" y2="80" stroke="rgba(255,255,255,.12)" stroke-width="1" marker-end="url(#arr)"/>
      <line x1="250" y1="133" x2="320" y2="80" stroke="rgba(255,255,255,.12)" stroke-width="1" marker-end="url(#arr)"/>
      <line x1="470" y1="133" x2="400" y2="80" stroke="rgba(255,255,255,.12)" stroke-width="1" marker-end="url(#arr)"/>
      <line x1="630" y1="133" x2="455" y2="80" stroke="rgba(255,255,255,.12)" stroke-width="1" marker-end="url(#arr)"/>
      <rect x="20"  y="133" width="140" height="72" rx="6" fill="rgba(16,185,129,.07)"  stroke="rgba(16,185,129,.3)"  stroke-width="1"/>
      <text x="90"  y="157" fill="#10b981" font-size="10" text-anchor="middle">RazorpayGateway</text>
      <text x="90"  y="171" fill="rgba(255,255,255,.25)" font-size="8.5" text-anchor="middle">POST /v1/orders (paise)</text>
      <rect x="175" y="133" width="140" height="72" rx="6" fill="rgba(96,165,250,.07)"  stroke="rgba(96,165,250,.3)"  stroke-width="1"/>
      <text x="245" y="157" fill="#60a5fa" font-size="10" text-anchor="middle">StripeGateway</text>
      <text x="245" y="171" fill="rgba(255,255,255,.25)" font-size="8.5" text-anchor="middle">Stripe SDK (cents)</text>
      <rect x="405" y="133" width="140" height="72" rx="6" fill="rgba(167,139,250,.07)" stroke="rgba(167,139,250,.3)" stroke-width="1"/>
      <text x="475" y="157" fill="#a78bfa" font-size="10" text-anchor="middle">PhonePeGateway</text>
      <text x="475" y="171" fill="rgba(255,255,255,.25)" font-size="8.5" text-anchor="middle">UPI deep-link</text>
      <rect x="560" y="133" width="140" height="72" rx="6" fill="rgba(244,114,182,.07)" stroke="rgba(244,114,182,.3)" stroke-width="1"/>
      <text x="630" y="157" fill="#f472b6" font-size="10" text-anchor="middle">SimplBNPLGateway</text>
      <text x="630" y="171" fill="rgba(255,255,255,.25)" font-size="8.5" text-anchor="middle">Buy Now Pay Later</text>
    </svg>
  </div>

  <div class="code-wrap">
    <div class="code-header">
      <div class="code-dots"><span></span><span></span><span></span></div>
      <span class="code-lang">C# — Polymorphism · Multi-Gateway Checkout</span>
      <button class="copy-btn" onclick="copyCode(this)">Copy</button>
    </div>
    <pre><code class="language-csharp">public interface IPaymentGateway {
    string GatewayId { get; }
    bool Supports(string currency);
    Task&lt;PaymentResult&gt; ChargeAsync(ChargeRequest request);
}

public record ChargeRequest(decimal Amount, string Currency, string CustomerId, string OrderRef);
public record PaymentResult(bool Success, string TransactionId, string? Error = null);

public class RazorpayGateway : IPaymentGateway {
    public string GatewayId =&gt; "razorpay";
    public bool Supports(string currency) =&gt; currency is "INR";
    public async Task&lt;PaymentResult&gt; ChargeAsync(ChargeRequest req) {
        // Razorpay-specific implementation
        var order = await _client.Order.CreateAsync(new {
            amount = (int)(req.Amount * 100), currency = req.Currency
        });
        return new PaymentResult(true, order["id"].ToString()!);
    }
}

// CheckoutService — NEVER changes when new gateway is added
public class CheckoutService {
    private readonly IEnumerable&lt;IPaymentGateway&gt; _gateways;
    public CheckoutService(IEnumerable&lt;IPaymentGateway&gt; gateways) =&gt; _gateways = gateways;

    public async Task&lt;OrderResult&gt; ProcessAsync(Cart cart, string customerId, string currency) {
        var gateway = _gateways.FirstOrDefault(g =&gt; g.Supports(currency))
            ?? throw new InvalidOperationException($"No gateway supports {currency}");
        var result = await gateway.ChargeAsync(new ChargeRequest(cart.Total, currency, customerId, cart.Id));
        return result.Success
            ? OrderResult.Succeeded(result.TransactionId, gateway.GatewayId)
            : OrderResult.Failed(result.Error!);
    }
}

// Add new gateway = ONE line. Zero other changes.
builder.Services.AddScoped&lt;IPaymentGateway, RazorpayGateway&gt;();
builder.Services.AddScoped&lt;IPaymentGateway, StripeGateway&gt;();
builder.Services.AddScoped&lt;IPaymentGateway, PhonePeGateway&gt;();  // ← just add this</code></pre>
  <hr class="divider"/>

  <!-- Abstraction Deep Dive -->
  <div class="concept-card">
    <div class="concept-label">PILLAR 04 — ABSTRACTION · Decoupling Data Stores</div>
    <div class="concept-title">IOrderRepository — swapping SQL for NoSQL</div>
    <div class="concept-body">
      Abstraction is about hiding <em>how</em> something is done. The domain only cares that it can <code>GetByIdAsync()</code>. Whether it's Entity Framework, Dapper, or a Web API call — the domain logic remains pure and testable.
    </div>
  </div>

  <div class="compare-split">
    <div class="cs-panel cs-bad">
      <div class="cs-title">❌ CONCRETE COUPLING</div>
      <div style="font-family:var(--fm); font-size:11px; color:var(--txt2); line-height:1.6;">
        <code>public class OrderService {</code><br/>
        &nbsp;&nbsp;<code>private readonly AppDbContext _db;</code><br/>
        &nbsp;&nbsp;<code>public void Process() {</code><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<code>var order = _db.Orders.Find(id);</code><br/>
        &nbsp;&nbsp;<code>}</code><br/>
        <code>}</code>
      </div>
      <p style="font-size:10px; color:var(--bad); margin-top:8px;">Stuck with EF Core forever. Cannot unit test without a database.</p>
    </div>
    <div class="cs-panel cs-good">
      <div class="cs-title">✅ ABSTRACTED CONTRACT</div>
      <div style="font-family:var(--fm); font-size:11px; color:var(--txt2); line-height:1.6;">
        <code>public class OrderService {</code><br/>
        &nbsp;&nbsp;<code>private readonly IOrderRepo _repo;</code><br/>
        &nbsp;&nbsp;<code>public void Process() {</code><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;<code>var order = await _repo.GetAsync(id);</code><br/>
        &nbsp;&nbsp;<code>}</code><br/>
        <code>}</code>
      </div>
      <p style="font-size:10px; color:var(--good); margin-top:8px;">Swap SQL for Cosmos in 1 line. Mock the repo for instant tests.</p>
    </div>
  </div>

  <hr class="divider"/>

  <div class="grid-2">
    <div class="concept-card">
      <div class="concept-label">PILLAR 03 — INHERITANCE</div>
      <div class="concept-title">Notification System</div>
      <div class="concept-body">
        <span class="ic">BaseNotification</span> owns retry logic, rate limiting, and audit. Subclasses override only the actual send method. Max 2 levels of depth.
        <div class="callout callout-warn" style="margin-top:10px;font-size:12px;">
          <span class="callout-icon">⚠</span><span><strong>Arch Rule:</strong> Prefer composition over deep inheritance chains.</span>
        </div>
      </div>
    </div>
    <div class="concept-card">
      <div class="concept-label">PILLAR 04 — ABSTRACTION</div>
      <div class="concept-title">IOrderRepository — swap SQL for Cosmos in one line</div>
      <div class="concept-body">
        Domain logic depends on <span class="ic">IOrderRepository</span>. Whether the backing store is EF Core, CosmosDB, or MongoDB — the domain never knows.
        <br/><br/>
        <span class="use-badge use-badge-warn">🗃 EF Core</span>
        <span class="use-badge use-badge-purple">☁ Cosmos DB</span>
        <span class="use-badge use-badge-cyan">⚡ In-Memory Tests</span>
      </div>
    </div>
  </div>

  <div class="quiz-card">
    <div class="quiz-label">ARCHITECT KNOWLEDGE CHECK</div>
    <div class="quiz-q">In a banking system, BankAccount._balance is private with a public Withdraw() method. A junior developer asks "why not just make it a public property with a setter?" What is the correct architect response?</div>
    <div class="quiz-options">
      <button class="quiz-opt" onclick="quiz(this,false,'Performance is not the reason — the concern is correctness and invariant enforcement.')">Accessing fields is faster than methods</button>
      <button class="quiz-opt" onclick="quiz(this,true,'Correct! A public setter bypasses overdraft checks, audit logging, thread locks, and business invariants. Every mutation MUST flow through validated, thread-safe methods.')">A setter bypasses overdraft validation, audit logging, and thread safety — mutations must flow through business logic</button>
      <button class="quiz-opt" onclick="quiz(this,false,'Access control is a separate concern — encapsulation is about behavioral correctness, not visibility alone.')">To prevent other developers from reading the balance</button>
    </div>
    <div class="quiz-feedback"></div>
  </div>

  <div style="display: flex; justify-content: flex-end; margin-top: 40px;">
    <button class="hbtn primary" onclick="show('solid', 'dotnet')">Next Step: SOLID Principles →</button>
  </div>
</section>
`;
