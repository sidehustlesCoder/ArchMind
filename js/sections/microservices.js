/* ═══════════════════════════════════════════
   SECTION: Microservices Architecture (The Master Guide)
═══════════════════════════════════════════ */
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS['microservices'] = `
<section id="microservices">
    <div class="section-header">
      <div class="section-eyebrow"><span class="eyebrow-line"></span>DISTRIBUTED SYSTEMS</div>
      <h1 class="section-title">Microservices Mastery</h1>
      <p class="section-subtitle">Scaling complexity through decomposition. Learn why we need them, and master the core architectural patterns.</p>
    </div>

    <!-- MASTER TOPOLOGY -->
    <div class="concept-card" onclick="openMS('Master Topology')">
        <div class="concept-label">MASTER ARCHITECTURE</div>
        <div class="concept-title">The Microservices Ecosystem</div>
        <div class="concept-body">
            A production-grade distributed system blueprint. This diagram illustrates the interaction between API Gateways, Identity Services, and the core Microservices mesh.
        </div>
        <div class="diagram-img-wrap" style="margin-top: 20px; display: flex; justify-content: center;">
            <img src="diagrams/Microservicescomponent.jpeg" alt="Microservices Topology" style="width:100%; max-width:700px; border-radius:12px; border:1px solid var(--brd2); cursor:zoom-in;" onclick="zoomImg(this.src)">
        </div>
        <div class="expand-hint">Click to expand deep dive →</div>
    </div>

    <hr class="divider"/>

    <!-- WHY & WHEN -->
    <div class="grid-2">
        <div class="concept-card">
            <div class="concept-label">THE BUSINESS CASE</div>
            <div class="concept-title">Why Microservices?</div>
            <ul class="concept-list" style="font-size:12px; line-height:1.8;">
                <li><strong>Independent Scalability:</strong> Scale high-traffic services without wasting resources.</li>
                <li><strong>Team Autonomy:</strong> Parallelize development across multiple specialized teams.</li>
                <li><strong>Fault Isolation:</strong> Prevent a bug in one feature from crashing the entire app.</li>
                <li><strong>Continuous Delivery:</strong> Deploy small changes faster with less risk.</li>
            </ul>
        </div>
        <div class="concept-card">
            <div class="concept-label">THE ARCHITECT'S RULE</div>
            <div class="concept-title">When to use?</div>
            <ul class="concept-list" style="font-size:12px; line-height:1.8;">
                <li><strong>Large Domains:</strong> When a single codebase becomes too complex to grasp.</li>
                <li><strong>High Velocity:</strong> When you need to deploy different features at different cycles.</li>
                <li><strong>Scale:</strong> When you have millions of users and high throughput requirements.</li>
            </ul>
        </div>
    </div>

    <hr class="divider"/>

    <div class="section-eyebrow" style="margin-bottom:20px;"><span class="eyebrow-line"></span>CORE ARCHITECTURAL PATTERNS</div>
    
    <div class="pattern-grid">
        <!-- KAFKA -->
        <div class="concept-card" onclick="openMS('Event-Driven')">
            <div class="concept-label">PATTERN 01</div>
            <div class="concept-title">Event-Driven (Kafka)</div>
            <div class="concept-body">Decouple services using an asynchronous message backbone.</div>
            <img src="diagrams/kafkaMicroservicePattern.jpeg" alt="Kafka Pattern" style="width:100%; margin-top:15px; border-radius:8px;">
            <div class="expand-hint">Click to expand →</div>
        </div>

        <!-- SAGA PATTERN -->
        <div class="concept-card" onclick="openMS('Saga Pattern')">
            <div class="concept-label">PATTERN 02</div>
            <div class="concept-title">Saga Pattern</div>
            <div class="concept-body">Managing consistency across services using Choreography or Orchestration.</div>
            <img src="diagrams/SAGAPatternFlow.jpeg" alt="Saga Pattern" style="width:100%; margin-top:15px; border-radius:8px;">
            <div class="expand-hint">Click to expand →</div>
        </div>

        <!-- CIRCUIT BREAKER -->
        <div class="concept-card" onclick="openMS('Circuit Breaker')">
            <div class="concept-label">PATTERN 03</div>
            <div class="concept-title">Circuit Breaker</div>
            <div class="concept-body">Preventing cascading failures when a dependency is down.</div>
            <img src="diagrams/CircuitBreakerPattern.jpeg" alt="Circuit Breaker" style="width:100%; margin-top:15px; border-radius:8px;">
            <div class="expand-hint">Click to expand →</div>
        </div>

        <!-- CQRS -->
        <div class="concept-card" onclick="openMS('CQRS')">
            <div class="concept-label">PATTERN 04</div>
            <div class="concept-title">CQRS Pattern</div>
            <div class="concept-body">Separating Read and Write models for blazingly fast data access.</div>
            <img src="diagrams/CQRSMicroservices.jpeg" alt="CQRS Pattern" style="width:100%; margin-top:15px; border-radius:8px;">
            <div class="expand-hint">Click to expand →</div>
        </div>

        <!-- EVENT SOURCING -->
        <div class="concept-card" onclick="openMS('Event Sourcing')">
            <div class="concept-label">PATTERN 05</div>
            <div class="concept-title">Event Sourcing</div>
            <div class="concept-body">Reconstructing state by replaying every change event.</div>
            <img src="diagrams/MicroservicesCQRSandEventSourceing.jpeg" alt="Event Sourcing" style="width:100%; margin-top:15px; border-radius:8px;">
            <div class="expand-hint">Click to expand →</div>
        </div>
    </div>

    <hr class="divider"/>

    <div class="scene-3d-wrap">
      <div class="scene-label"><span>Distributed 3D Mesh (drag to rotate)</span><span class="scene-3d-badge">● 3D TOPOLOGY</span></div>
      <canvas class="canvas-3d" id="msCanvas"></canvas>
    </div>

    <div style="display: flex; justify-content: flex-end; margin-top: 40px;">
        <button class="hbtn primary" onclick="setTrack('ai')">Final Track: AI & LLM Architecture →</button>
    </div>
</section>
`;

window.MS_DETAILS = {
  'Master Topology': {
    type: 'ARCHITECTURE',
    concept: 'The complete enterprise microservices ecosystem including API Gateways, Security, and Service Discovery.',
    usage: ['Large scale web/mobile apps.', 'Teams needing independent deployment cycles.', 'High traffic loads requiring specialized scaling.'],
    code: 'Cloud Native / K8s Deployment',
    diag: `<img src="diagrams/Microservicescomponent.jpeg" style="width:100%; border-radius:8px;">`
  },
  'Event-Driven': {
    type: 'DECOUPLING',
    concept: 'Asynchronous communication between services using a persistent message log (Kafka).',
    usage: ['Order Processing', 'Real-time Analytics', 'Cross-service Notifications'],
    code: 'Tool: Kafka / RabbitMQ',
    diag: `<img src="diagrams/kafkaMicroservicePattern.jpeg" style="width:100%; border-radius:8px;">`
  },
  'Saga Pattern': {
    type: 'CONSISTENCY',
    concept: 'Coordinating distributed transactions across multiple services using compensation logic.',
    usage: ['E-Commerce Checkouts', 'Hotel/Flight Bookings', 'Financial Transactions'],
    code: 'Choreography vs Orchestration',
    diag: `<img src="diagrams/SAGAPatternFlow.jpeg" style="width:100%; border-radius:8px;">`
  },
  'Circuit Breaker': {
    type: 'RESILIENCE',
    concept: 'Failing fast to protect the system from slow or down dependencies.',
    usage: ['3rd Party API Calls', 'Internal Service Communication', 'Heavy DB Queries'],
    code: 'Tool: Polly (.NET)',
    diag: `<img src="diagrams/CircuitBreakerPattern.jpeg" style="width:100%; border-radius:8px;">`
  },
  'CQRS': {
    type: 'PERFORMANCE',
    concept: 'Separating the models for reading and writing data to optimize each independently.',
    usage: ['High-traffic Read systems', 'Complex Business Write logic', 'ElasticSearch/Redis Read models'],
    code: 'Command vs Query',
    diag: `<img src="diagrams/CQRSMicroservices.jpeg" style="width:100%; border-radius:8px;">`
  },
  'Event Sourcing': {
    type: 'DATA INTEGRITY',
    concept: 'Storing every change to the state as a sequence of immutable events.',
    usage: ['Financial Auditing', 'Versioned State systems', 'Complex Business Workflows'],
    code: 'CQRS + Event Store',
    diag: `<img src="diagrams/MicroservicesCQRSandEventSourceing.jpeg" style="width:100%; border-radius:8px;">`
  }
};
