/* ═══════════════════════════════════════════
   SECTION: 8 Week Architect Plan
   Registers HTML into global SECTIONS map.
═══════════════════════════════════════════ */
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS['roadmap'] = `
<section id="roadmap">
    <div class="section-header">
      <div class="section-eyebrow"><span class="eyebrow-line"></span>MASTER PLAN</div>
      <h1 class="section-title">8 Week Architect Plan</h1>
      <p class="section-subtitle">A structured, high-intensity roadmap to transform from Senior Developer to Software Architect.</p>
    </div>

    <!-- WEEK SELECTOR -->
    <div class="track-switcher" style="margin-bottom: 40px; justify-content: center; gap: 10px; flex-wrap: wrap; background: rgba(255,255,255,0.03); padding: 15px; border-radius: 12px; border: 1px solid var(--brd);">
        <button class="track-btn active-dotnet" id="btn-w1" onclick="switchWeek(1)">WEEK 01</button>
        <button class="track-btn" id="btn-w2" onclick="switchWeek(2)">WEEK 02</button>
        <button class="track-btn" id="btn-w3" onclick="switchWeek(3)">WEEK 03</button>
        <button class="track-btn" id="btn-w4" onclick="switchWeek(4)">WEEK 04</button>
        <button class="track-btn" id="btn-w5" onclick="switchWeek(5)">WEEK 05</button>
        <button class="track-btn" id="btn-w6" onclick="switchWeek(6)">WEEK 06</button>
        <button class="track-btn" id="btn-w7" onclick="switchWeek(7)">WEEK 07</button>
        <button class="track-btn" id="btn-w8" onclick="switchWeek(8)">WEEK 08</button>
    </div>

    <div id="week-content-area" style="animation: fadeIn 0.4s ease;">
        <!-- Weekly content injected here -->
    </div>

    <hr class="divider"/>

    <div class="scene-3d-wrap">
      <div class="scene-label"><span>Plan Trajectory Visualization (drag to rotate)</span><span class="scene-3d-badge">● MASTER MAP</span></div>
      <canvas class="canvas-3d" id="ftCanvas"></canvas>
    </div>

    <div style="display: flex; justify-content: flex-end; margin-top: 40px;">
        <button class="hbtn primary" onclick="show('mvc', 'dotnet')">Start Foundations: ASP.NET MVC →</button>
    </div>
</section>
`;

window.WEEK_DATA = {
  1: `
    <div class="concept-card" style="border-left: 4px solid var(--dotnet); padding: 30px;">
        <div class="concept-label">PHASE 1: STRATEGY</div>
        <div class="concept-title">Week 01: Architectural Thinking & Trade-offs</div>
        
        <div style="margin-top:25px; margin-bottom:15px; font-size:12px; color:var(--txt3); font-weight:700; text-transform:uppercase; letter-spacing:1.5px; opacity:0.8;">📚 Study Roadmap Topics</div>
        
        <!-- TOPIC TABS -->
        <div class="track-switcher" style="margin-bottom: 25px; justify-content: flex-start; gap: 10px; flex-wrap: wrap;">
            <button class="track-btn active-dotnet" id="ft-cap" onclick="switchFT('cap')">CAP THEOREM</button>
            <button class="track-btn" id="ft-fallacies" onclick="switchFT('fallacies')">8 FALLACIES</button>
            <button class="track-btn" id="ft-tradeoffs" onclick="switchFT('tradeoffs')">TRADE-OFFS</button>
            <button class="track-btn" id="ft-monolith" onclick="switchFT('monolith')">MOD-MONO</button>
            <button class="track-btn" id="ft-fitness" onclick="switchFT('fitness')">FITNESS</button>
            <button class="track-btn" id="ft-adr" onclick="switchFT('adr')">ADR GUIDE</button>
        </div>

        <!-- DETAIL AREA -->
        <div id="ft-content-area" class="solid-detail" style="min-height:300px; padding:30px; background:rgba(255,255,255,0.02); border-radius:12px;">
            <!-- Initial content (CAP Theorem) -->
        </div>

        <hr class="divider" style="margin: 40px 0; opacity: 0.1;"/>

        <div class="grid-2" style="gap: 40px;">
            <div>
                <h4 style="color:var(--good); margin-bottom:15px; font-size:16px;">✅ PROGRESS CHECKLIST</h4>
                <div class="checklist" style="display: flex; flex-direction: column; gap: 14px; font-size:15px;">
                    <label class="check-item"><input type="checkbox"> Explain CAP theorem in plain English</label>
                    <label class="check-item"><input type="checkbox"> Name 3 conditions where microservices are wrong</label>
                    <label class="check-item"><input type="checkbox"> Write your first ADR draft</label>
                    <label class="check-item"><input type="checkbox"> Complete architecture kata</label>
                    <label class="check-item"><input type="checkbox"> Start trade-off journal (2 entries)</label>
                    <label class="check-item"><input type="checkbox"> 1-page trade-off document reviewed</label>
                </div>
            </div>
            <div style="padding: 25px; background: rgba(255,255,255,0.03); border-radius: 10px; border: 1px dashed var(--brd);">
                <h4 style="color:var(--ai); margin-bottom:12px; font-size:15px;">🏆 WEEKLY DELIVERABLE</h4>
                <p style="font-size:14px; color:var(--txt2); line-height:1.7;">Write a 1-page comparison: <strong>Monolith vs Microservices</strong> for a system you know at work. Justify the choice with explicit trade-offs.</p>
                <div style="margin-top:25px;">
                    <h4 style="color:var(--txt3); margin-bottom:12px; font-size:12px; text-transform:uppercase;">📖 Resources</h4>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        <span class="use-badge">Fundamentals of Architecture</span>
                        <span class="use-badge">DDIA Ch.1-2</span>
                        <span class="use-badge">adr.github.io</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,
  2: `<div class="concept-card" style="padding:40px; text-align:center;"><h2 style="color:var(--txt3);">Week 02 Curriculum</h2><p>Coming Soon: .NET Advanced Foundations & Domain Modeling.</p></div>`,
  3: `<div class="concept-card" style="padding:40px; text-align:center;"><h2 style="color:var(--txt3);">Week 03 Curriculum</h2><p>Coming Soon: Design Patterns for Enterprise Scale.</p></div>`,
  4: `<div class="concept-card" style="padding:40px; text-align:center;"><h2 style="color:var(--txt3);">Week 04 Curriculum</h2><p>Coming Soon: Distributed Systems & Communication.</p></div>`,
  5: `<div class="concept-card" style="padding:40px; text-align:center;"><h2 style="color:var(--txt3);">Week 05 Curriculum</h2><p>Coming Soon: Event-Driven Architecture & Kafka.</p></div>`,
  6: `<div class="concept-card" style="padding:40px; text-align:center;"><h2 style="color:var(--txt3);">Week 06 Curriculum</h2><p>Coming Soon: Observability & Cloud-Native DevOps.</p></div>`,
  7: `<div class="concept-card" style="padding:40px; text-align:center;"><h2 style="color:var(--txt3);">Week 07 Curriculum</h2><p>Coming Soon: AI Integration & LLM Architectures.</p></div>`,
  8: `<div class="concept-card" style="padding:40px; text-align:center;"><h2 style="color:var(--txt3);">Week 08 Curriculum</h2><p>Coming Soon: Final Capstone Project & Certification.</p></div>`
};

window.FT_PAGES = {
  'cap': `
    <h3 style="color:var(--dotnet); margin-bottom:15px; font-size:24px;">CAP Theorem — Explained Simply</h3>
    <p style="font-size:16px; color:var(--txt2); margin-bottom:25px;">Imagine you have a distributed system (multiple servers/nodes talking to each other). CAP theorem says you can only guarantee 2 out of these 3 properties at the same time:</p>
    
    <div style="margin-bottom:35px;">
        <h4 style="color:var(--txt3); font-size:14px; margin-bottom:15px; text-transform:uppercase;">The 3 properties</h4>
        <div style="display:flex; flex-direction:column; gap:15px;">
            <div style="background:rgba(255,255,255,0.04); padding:18px; border-radius:8px; border-left:3px solid var(--ai);">
                <strong style="color:var(--ai); font-size:16px;">C — Consistency</strong>
                <p style="font-size:14px; margin-top:8px; color:var(--txt2);">Every read gets the most recent write. All nodes see the same data at the same time. Think of it like: <em>"no matter which server you ask, you always get the same answer."</em></p>
            </div>
            <div style="background:rgba(255,255,255,0.04); padding:18px; border-radius:8px; border-left:3px solid var(--good);">
                <strong style="color:var(--good); font-size:16px;">A — Availability</strong>
                <p style="font-size:14px; margin-top:8px; color:var(--txt2);">Every request gets a response — even if some nodes are down. The system never refuses to answer, but the answer might not be the latest data.</p>
            </div>
            <div style="background:rgba(255,255,255,0.04); padding:18px; border-radius:8px; border-left:3px solid var(--blue);">
                <strong style="color:var(--blue); font-size:16px;">P — Partition Tolerance</strong>
                <p style="font-size:14px; margin-top:8px; color:var(--txt2);">The system keeps working even when network communication between nodes breaks (a "partition"). In real distributed systems, network failures will happen — so P is essentially non-negotiable.</p>
            </div>
        </div>
    </div>

    <div style="padding:25px; background:rgba(255,255,255,0.02); border-radius:12px; border:1px solid var(--brd); margin-bottom:30px;">
        <h4 style="color:var(--txt3); font-size:13px; margin-bottom:15px; text-transform:uppercase; letter-spacing:1px;">🚀 .NET / Azure Implementation</h4>
        <p style="font-size:13px; color:var(--txt2); margin-bottom:20px;">The real choice you make as an architect is: <strong>CP or AP — which do you sacrifice when the network breaks?</strong> Click below to see how specific tools handle this.</p>
        
        <!-- NESTED IMPLEMENTATION TABS -->
        <div class="track-switcher" style="margin-bottom: 20px; justify-content: flex-start; gap: 8px; flex-wrap: wrap;">
            <button class="track-btn active-dotnet" style="font-size:9px; padding:6px 12px;" id="cap-sql" onclick="switchCAP('sql')">CP — SQL SERVER</button>
            <button class="track-btn" style="font-size:9px; padding:6px 12px;" id="cap-redis" onclick="switchCAP('redis')">AP — REDIS CACHE</button>
            <button class="track-btn" style="font-size:9px; padding:6px 12px;" id="cap-cosmos" onclick="switchCAP('cosmos')">TUNABLE — COSMOS DB</button>
            <button class="track-btn" style="font-size:9px; padding:6px 12px;" id="cap-polly" onclick="switchCAP('polly')">PARTITION — POLLY</button>
        </div>

        <!-- SUB-CONTENT AREA -->
        <div id="cap-impl-area" style="background:rgba(0,0,0,0.15); padding:20px; border-radius:8px; border:1px solid var(--brd); min-height:120px; margin-bottom:25px;">
            <!-- Impl details injected here -->
        </div>

        <div style="padding:25px; background:rgba(255,255,255,0.03); border-radius:10px; border: 1px solid rgba(255,255,255,0.05); margin-bottom:30px;">
            <h4 style="color:var(--txt1); font-size:16px; margin-bottom:15px; border-bottom:1px solid var(--brd); padding-bottom:10px;">🚀 ARCHITECT'S KEY TAKEAWAYS</h4>
            <div style="display:flex; flex-direction:column; gap:14px; font-size:14px; line-height:1.7;">
                <p><strong style="color:var(--ai);">Tab 1 — SQL Server (CP):</strong> The <b>IsolationLevel.Serializable</b> transaction is the classic CP pattern. If the network breaks mid-commit, it throws rather than leaving data in a half-written state. <b>Use this for anything financial.</b></p>
                <p><strong style="color:var(--good);">Tab 2 — Redis (AP):</strong> The cache-aside pattern is AP by nature. The <b>TimeSpan.FromMinutes(5)</b> TTL is literally your consistency slider — shorten it for fresher data, lengthen it for more availability. The fallback to the DB is the <b>"keep serving even during partition"</b> behaviour.</p>
                <p><strong style="color:var(--purple);">Tab 3 — Cosmos DB (Tunable):</strong> ConsistencyLevel.Session is the <b>sweet spot for 90% of user-facing flows</b> — the user who wrote the data always reads it back correctly, while other users may briefly lag. <b>Only pay the Strong cost when correctness is truly non-negotiable.</b></p>
                <p><strong style="color:var(--blue);">Tab 4 — Polly (Partition handling):</strong> The <b>catch (BrokenCircuitException)</b> block is where you explicitly make your CAP decision in code — every time you choose to throw vs return a fallback, you are <b>choosing CP or AP.</b> That comment in the code is worth remembering for interviews.</p>
            </div>
        </div>
    </div>

    <h4 style="color:var(--txt3); font-size:13px; margin-bottom:10px; text-transform:uppercase; letter-spacing:1px;">A simple real-life analogy</h4>
    <p style="font-size:13px; color:var(--txt2); margin-bottom:10px;">Think of a bank ATM network:</p>
    <ul style="font-size:12px; color:var(--txt2); line-height:1.6; margin-bottom:25px;">
        <li>During a network outage, some ATMs go <strong>CP</strong> — they refuse transactions entirely rather than risk inconsistency ("sorry, system unavailable"). Your balance is always correct when it works.</li>
        <li>Some systems go <strong>AP</strong> — the ATM lets you withdraw, but two ATMs might briefly show different balances. Consistency is fixed later (eventual consistency).</li>
    </ul>

    <div style="padding:30px; border-top:1px solid var(--brd); text-align:center; background:rgba(245,158,11,0.03); border-radius:0 0 12px 12px;">
        <h4 style="color:var(--txt3); font-size:11px; text-transform:uppercase; margin-bottom:10px;">The one sentence you need to remember</h4>
        <div style="font-size:16px; font-weight:700; color:var(--ai); font-family:var(--fh);">
            "In a distributed system, when the network fails — and it will — you must choose: do you want correct data or do you want a response?"
        </div>
    </div>
  `,
  'fallacies': `<h3>8 Fallacies of Distributed Computing</h3><p>Coming soon...</p>`,
  'tradeoffs': `<h3>Trade-off Analysis</h3><p>Coming soon...</p>`,
  'monolith': `<h3>Modular Monolith</h3><p>Coming soon...</p>`,
  'fitness': `<h3>Fitness Functions</h3><p>Coming soon...</p>`,
  'adr': `<h3>ADRs</h3><p>Coming soon...</p>`
};

window.CAP_IMPL = {
  'sql': `
    <h4 style="color:var(--ai); margin-bottom:10px;">CP — Consistency + Partition Tolerance</h4>
    <p style="font-size:12px; color:var(--txt2); margin-bottom:15px;"><strong>Scenario:</strong> Bank balance update. SQL Server with a transaction — it will REFUSE the operation if it cannot guarantee consistency. Availability is sacrificed.</p>
    
    <pre><code class="language-csharp">// CP behaviour — SQL Server with transactions
// If the network partitions, this THROWS — it never
// returns stale or inconsistent data silently.

public class BankAccountService
{
    private readonly SqlConnection _connection;

    public async Task TransferFundsAsync(
        int fromAccountId, int toAccountId, decimal amount)
    {
        await _connection.OpenAsync();

        // Transaction ensures C — both updates succeed or both fail
        using var tx = await _connection
            .BeginTransactionAsync(IsolationLevel.Serializable);

        try {
            await DebitAsync(fromAccountId, amount, tx);
            await CreditAsync(toAccountId, amount, tx);

            await tx.CommitAsync();
            // SUCCESS — both nodes updated atomically
        }
        catch (Exception) {
            await tx.RollbackAsync();

            // CP behaviour: if network partitions during commit,
            // we THROW — caller gets an error (unavailable),
            // but data is NEVER left inconsistent.
            throw; // <-- sacrifices A, keeps C
        }
    }
}</code></pre>

    <div style="margin-top:20px; font-size:14px; line-height:1.7;">
        <div style="background:rgba(255,255,255,0.05); padding:18px; border-radius:8px; border-left:4px solid var(--ai); margin-bottom:15px;">
            <strong style="color:#ffffff; font-size:15px; display:block; margin-bottom:5px;">⚠️ WHAT HAPPENS DURING A PARTITION?</strong>
            <p style="color:#e2e4ea;">SQL Server refuses the commit and throws. Your API returns 503. The user sees an error — but the balance is <strong>NEVER wrong.</strong> Consistency wins, availability loses.</p>
        </div>
        <div style="background:rgba(245,158,11,0.08); padding:18px; border-radius:8px; border:1px solid rgba(245,158,11,0.2);">
            <strong style="color:var(--dotnet); font-size:15px; display:block; margin-bottom:5px;">💡 ARCHITECT WATCH-OUT</strong>
            <p style="color:#ffffff;">Long-running transactions under <code>Serializable</code> isolation cause lock contention at scale. Use <code>ReadCommitted</code> for reads and <code>Serializable</code> only for critical writes.</p>
        </div>
    </div>
  `,
  'redis': `
    <h4 style="color:var(--good); margin-bottom:10px;">AP — Availability + Partition Tolerance</h4>
    <p style="font-size:12px; color:var(--txt2); margin-bottom:15px;"><strong>Scenario:</strong> Product catalogue reads. Redis cache returns data even if it's slightly stale. The system stays available — but you may serve a 5-minute-old price during a partition.</p>
    
    <pre><code class="language-csharp">// AP behaviour — Redis cache-aside pattern
// Returns stale data rather than failing. Availability wins.

public class ProductCatalogueService
{
    private readonly IDatabase _redis;
    private readonly IProductRepository _db;

    public async Task&lt;Product&gt; GetProductAsync(int id)
    {
        var key = $"product:{id}";
        try {
            var cached = await _redis.StringGetAsync(key);
            if (cached.HasValue) {
                // AP: returns cached (possibly stale) data
                return JsonSerializer.Deserialize&lt;Product&gt;(cached);
            }
        }
        catch (RedisConnectionException) {
            // AP: if Redis itself partitions, fall through
            // to DB — still available, just slower
        }

        var product = await _db.GetByIdAsync(id);
        await _redis.StringSetAsync(
            key, 
            JsonSerializer.Serialize(product), 
            TimeSpan.FromMinutes(5) // TTL = staleness window
        );
        return product;
    }
}</code></pre>

    <div style="margin-top:20px; font-size:14px; line-height:1.7;">
        <div style="background:rgba(255,255,255,0.05); padding:18px; border-radius:8px; border-left:4px solid var(--good); margin-bottom:15px;">
            <strong style="color:#ffffff; font-size:15px; display:block; margin-bottom:5px;">⚠️ WHAT HAPPENS DURING A PARTITION?</strong>
            <p style="color:#e2e4ea;">Redis serves cached data — user sees a product price that may be up to 5 minutes old. <strong>System stays UP.</strong> Availability wins, perfect consistency loses.</p>
        </div>
        <div style="background:rgba(16,185,129,0.08); padding:18px; border-radius:8px; border:1px solid rgba(16,185,129,0.2);">
            <strong style="color:var(--good); font-size:15px; display:block; margin-bottom:5px;">💡 ARCHITECT WATCH-OUT</strong>
            <p style="color:#ffffff;">TTL is your consistency knob. Short TTL = more consistent, more DB load. Long TTL = more available, more stale. For financial data, use CP (SQL). For catalogue/content, AP is fine.</p>
        </div>
    </div>
  `,
  'cosmos': `
    <h4 style="color:var(--purple); margin-bottom:10px;">Tunable Consistency — The Power of Choice</h4>
    <p style="font-size:12px; color:var(--txt2); margin-bottom:15px;"><strong>Scenario:</strong> Cosmos DB lets you choose your CAP position per-operation — from Strong (CP) to Eventual (AP). This is the most powerful pattern to understand as an architect.</p>
    
    <pre><code class="language-csharp">// Cosmos DB — tunable consistency per operation
// You control the CP vs AP trade-off at the call site

public class OrderService
{
    private readonly Container _container;

    // STRONG consistency — CP behaviour
    // Use for: order confirmations, payment records
    public async Task&lt;Order&gt; GetOrderForPaymentAsync(string id) {
        var options = new ItemRequestOptions {
            ConsistencyLevel = ConsistencyLevel.Strong
        };
        var resp = await _container.ReadItemAsync&lt;Order&gt;(id, new PartitionKey(id), options);
        return resp.Resource;
    }

    // EVENTUAL consistency — AP behaviour
    // Use for: dashboard stats, activity feeds
    public async Task&lt;Order&gt; GetOrderForDashboardAsync(string id) {
        var options = new ItemRequestOptions {
            ConsistencyLevel = ConsistencyLevel.Eventual
        };
        var resp = await _container.ReadItemAsync&lt;Order&gt;(id, new PartitionKey(id), options);
        return resp.Resource;
    }

    // SESSION consistency — Balanced (Recommended)
    public async Task&lt;Order&gt; GetOrderForConfirmationAsync(string id) {
        var options = new ItemRequestOptions {
            ConsistencyLevel = ConsistencyLevel.Session
        };
        var resp = await _container.ReadItemAsync&lt;Order&gt;(id, new PartitionKey(id), options);
        return resp.Resource;
    }
}</code></pre>

    <div style="margin-top:20px; font-size:14px; line-height:1.7;">
        <div style="background:rgba(255,255,255,0.05); padding:18px; border-radius:8px; border-left:4px solid var(--purple); margin-bottom:15px;">
            <strong style="color:#ffffff; font-size:15px; display:block; margin-bottom:5px;">🎯 THE ARCHITECT'S SWEET SPOT</strong>
            <p style="color:#e2e4ea;"><strong>Session consistency</strong> is the ideal for most user-facing flows. The user who just wrote data always reads their own writes. Other users may lag slightly. 90% of scenarios are solved with Session.</p>
        </div>
        <div style="background:rgba(167,139,250,0.08); padding:18px; border-radius:8px; border:1px solid rgba(167,139,250,0.2);">
            <strong style="color:var(--purple); font-size:15px; display:block; margin-bottom:5px;">💡 ARCHITECT WATCH-OUT</strong>
            <p style="color:#ffffff;">Strong consistency increases RU (Request Unit) cost and latency. Use it only where correctness is non-negotiable — payments, inventory, compliance records.</p>
        </div>
    </div>
  `,
  'polly': `
    <h4 style="color:var(--blue); margin-bottom:10px;">Partition Handling — Polly Circuit Breaker</h4>
    <p style="font-size:12px; color:var(--txt2); margin-bottom:15px;"><strong>Scenario:</strong> Your .NET API calls a downstream service. When a network partition happens, without a circuit breaker your thread pool fills with timeouts. Polly detects the partition and "opens the circuit" — fast-failing instead of hanging.</p>
    
    <pre><code class="language-csharp">// Polly circuit breaker — handles the P in CAP
// Detects partitions early and fails fast

static IAsyncPolicy&lt;HttpResponseMessage&gt; GetCircuitBreakerPolicy() {
    return Policy
        .HandleResult&lt;HttpResponseMessage&gt;(r => !r.IsSuccessStatusCode)
        .Or&lt;HttpRequestException&gt;() // Network failures
        .Or&lt;TimeoutException&gt;()    // Partition timeouts
        .CircuitBreakerAsync(
            handledEventsAllowedBeforeBreaking: 3, 
            durationOfBreak: TimeSpan.FromSeconds(30),
            onBreak: (res, dur) => Log.Warning("Circuit OPEN"),
            onReset: () => Log.Information("Circuit CLOSED")
        );
}

// In your service — the circuit breaker is transparent
public async Task&lt;PaymentResult&gt; ChargeAsync(decimal amount) {
    try {
        return await _httpClient.PostAsync("/charge", ...);
    }
    catch (BrokenCircuitException) {
        // Circuit is OPEN — partition detected
        // AP choice: return fallback (available but stale)
        // CP choice: rethrow (unavailable but consistent)
        throw new ServiceUnavailableException(); // CP choice
    }
}</code></pre>

    <div style="margin-top:20px; font-size:14px; line-height:1.7;">
        <div style="background:rgba(255,255,255,0.05); padding:18px; border-radius:8px; border-left:4px solid var(--blue); margin-bottom:15px;">
            <strong style="color:#ffffff; font-size:15px; display:block; margin-bottom:5px;">🛡️ WHAT THE CIRCUIT BREAKER DOES</strong>
            <p style="color:#e2e4ea;">After 3 failures, all requests fail immediately for 30 seconds instead of waiting for timeout. This prevents <strong>cascade failures</strong> — the partition is isolated rather than spreading.</p>
        </div>
        <div style="background:rgba(96,165,250,0.08); padding:18px; border-radius:8px; border:1px solid rgba(96,165,250,0.2);">
            <strong style="color:var(--blue); font-size:15px; display:block; margin-bottom:5px;">⚖️ CAP CHOICE IN CATCH</strong>
            <p style="color:#ffffff;">When you catch <code>BrokenCircuitException</code> you make a real CAP choice — throw (CP, unavailable) or return cached fallback (AP, possibly stale). <strong>This logic defines your system's survival strategy.</strong></p>
        </div>
    </div>
  `,
};
