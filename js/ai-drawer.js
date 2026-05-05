/* ═══════════════════════════════════════════
   ARCHLEARN — AI DRAWER
   Knowledge base + chat UI logic.
═══════════════════════════════════════════ */

const KB = {
  oop: "OOP has 4 pillars: Encapsulation (private _balance + validated Withdraw() — prevents bypassing audit logs), Polymorphism (IPaymentGateway with Razorpay/Stripe/PhonePe — checkout never changes), Inheritance (max 2-3 levels, prefer composition), Abstraction (IOrderRepository — swap SQL for Cosmos in one DI line). In .NET: use sealed classes for value objects, record types for DTOs.",
  solid: "SOLID: S=One reason to change — use MediatR events so OrderService only creates orders, EmailHandler only sends email. O=Open/Closed — add new IDiscountRule implementation, never edit DiscountEngine. L=Penguin can't extend Bird.Fly() — extract IFlyable. I=IWorkable + IFeedable not one fat IWorker. D=Inject IOrderRepository, NEVER AppDbContext — makes tests instant with Moq.",
  patterns: "Key patterns: Singleton (ILogger, IConfiguration via AddSingleton), Strategy (IAuthStrategy — JWT/ApiKey/OAuth swappable), Decorator (ASP.NET middleware IS Decorator chain), Observer (MediatR INotificationHandler for domain events), Repository (IOrderRepository over EF Core), CQRS (write SQL, read Redis via Dapper — no N+1), Chain of Responsibility (Pipeline Behaviors: Log→Validate→Authorize→Handle).",
  microservices: "MS patterns: API Gateway (YARP in .NET — JWT auth, rate limiting, load balance), Saga (choreography via events + compensation — no 2PC), Circuit Breaker (Polly v8 — Closed→Open→Half-Open, 50% failure ratio, 30s break), Outbox (event in same DB transaction, relay publishes — zero message loss), CQRS per service, Database per service (PostgreSQL/MongoDB/Redis per service = team autonomy).",
  saga: "Saga vs 2PC: 2PC locks all services — catastrophic at scale. Saga: each service does local tx + publishes event. Failure = compensating transaction (undo). Choreography = services react to events (decoupled, harder to trace). Orchestration = Saga Orchestrator drives flow (traceable, single point of failure). In .NET use MassTransit + RabbitMQ for choreography.",
  circuitbreaker: "Circuit Breaker 3 states: Closed (normal), Open (failure threshold hit — immediate fallback, no calls), Half-Open (test with one call after BreakDuration). Polly v8: FailureRatio 0.5, MinimumThroughput 5, SamplingDuration 10s, BreakDuration 30s. Add OUTSIDE retry in pipeline. Provide cached fallback in BrokenCircuitException catch.",
  outbox: "Outbox pattern: Write domain event to OutboxMessages table in SAME DB transaction as business data. Relay BackgroundService polls every 5s and publishes to RabbitMQ. RetryCount < 5 for resilience. ProcessedAt marks completion. Idempotent consumers handle duplicates. Guarantees at-least-once delivery even if app crashes before publish.",
  cqrs: "CQRS: Commands write to normalized SQL (EF Core, full validation, domain events). Queries read from denormalized Redis or read replica (Dapper, no change tracking, 5-20x faster). MediatR pipeline: LoggingBehavior → ValidationBehavior → AuthorizationBehavior → Handler. Controller knows nothing about SQL. Pipeline Behaviors handle cross-cutting concerns cleanly.",
  llm: "LLMs: Tokenize (text→int IDs, ~4 chars/token), Embed (token→4096-dim vector), Self-Attention O(n²) — every token attends to all others, FFN layers, Softmax→sample next token. Temperature: 0=deterministic (use for JSON/SQL gen), 0.7=balanced (support), 1.2=creative (copy). Use Semantic Kernel in .NET. Context window = max tokens in+out combined.",
  rag: "RAG: 1) Chunk docs (~500 tokens + 50 overlap), embed with text-embedding-3-small, store in Qdrant/pgvector. 2) Query: embed question, cosine similarity search with minScore 0.75 threshold (critical — prevents bad context). 3) Inject top-5 chunks into system prompt, set temperature 0.1. Return answer + source citations. Raise minScore if getting irrelevant answers."
};

const defaultReply = "I can explain: OOP (Encapsulation, Polymorphism), SOLID (SRP, OCP, DIP), Design Patterns (Strategy, CQRS, Repository, Decorator), Microservices (Saga, Circuit Breaker, Outbox, API Gateway), LLMs, and RAG. Try: 'Explain the Outbox pattern' or 'When to use Saga vs 2PC?'";

let aiOpen = false;

function toggleAI() {
  aiOpen = !aiOpen;
  document.getElementById('ai-drawer').classList.toggle('open', aiOpen);
  document.getElementById('ai-fab').classList.toggle('open', aiOpen);
}

async function sendAI() {
  const inp = document.getElementById('drawerIn');
  const msg = inp.value.trim();
  if (!msg) return;
  inp.value = '';
  addMsg('user', msg);
  const typing = addMsg('bot', '<span class="typing"><span></span><span></span><span></span></span>');
  await new Promise(r => setTimeout(r, 500 + Math.random() * 400));
  const low   = msg.toLowerCase();
  let   reply = defaultReply;
  if      (low.match(/saga|2pc|distributed.?transact|compensat/))  reply = KB.saga;
  else if (low.match(/circuit|polly|breaker|resilience|retry/))     reply = KB.circuitbreaker;
  else if (low.match(/outbox|guaranteed|message.?loss|at.?least/))  reply = KB.outbox;
  else if (low.match(/cqrs|command|query.?handler|read.?model|mediatr/)) reply = KB.cqrs;
  else if (low.match(/oop|encapsul|polymorphism|inherit|abstract|pillar/)) reply = KB.oop;
  else if (low.match(/solid|srp|open.?closed|liskov|interface.?seg|depend/)) reply = KB.solid;
  else if (low.match(/pattern|singleton|strategy|observer|decorator|repository/)) reply = KB.patterns;
  else if (low.match(/microservice|gateway|yarp|rabbit|service.?bus|kafka/)) reply = KB.microservices;
  else if (low.match(/llm|gpt|claude|token|transformer|attention|embed|temperature/)) reply = KB.llm;
  else if (low.match(/rag|retrieval|vector|qdrant|chunk|minscore|hallucin/)) reply = KB.rag;
  typing.innerHTML = reply;
}

function addMsg(role, html) {
  const msgs = document.getElementById('drawerMsgs');
  const d    = document.createElement('div');
  d.className  = 'dmsg ' + role;
  d.innerHTML  = html;
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
  return d;
}
