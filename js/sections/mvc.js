/* ═══════════════════════════════════════════
   SECTION: ASP.NET MVC (Masterclass)
   Registers HTML into global SECTIONS map.
═══════════════════════════════════════════ */
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS['mvc'] = `
<section id="mvc">
    <div class="section-header">
      <div class="section-eyebrow"><span class="eyebrow-line"></span>WEB FOUNDATIONS</div>
      <h1 class="section-title">ASP.NET MVC Masterclass</h1>
      <p class="section-subtitle">MVC is a design pattern that separates application concerns into Model, View, and Controller to improve maintainability, testability, and scalability.</p>
    </div>

    <!-- ARCHITECTURE VISUAL -->
    <div class="concept-card">
        <div class="concept-label">CORE ARCHITECTURE</div>
        <div class="concept-title">MVC Flow Diagram</div>
        <div class="diagram-img-wrap" style="margin-top: 20px; display: flex; justify-content: center;">
            <img src="diagrams/MVC.jpeg" alt="MVC Architecture" style="width:100%; max-width:700px; border-radius:12px; border:1px solid var(--brd2); cursor:zoom-in;" onclick="zoomImg(this.src)">
        </div>
        <div class="expand-hint" style="text-align:center;">Click image to expand fullscreen →</div>
    </div>

    <hr class="divider"/>

    <!-- THE MVC PILLARS -->
    <div class="grid-3">
        <div class="concept-card">
            <div class="concept-label">M — MODEL</div>
            <div class="concept-title">Data & Rules</div>
            <div class="concept-body">Handles business logic and database interactions.</div>
        </div>
        <div class="concept-card">
            <div class="concept-label">V — VIEW</div>
            <div class="concept-title">UI & Presentation</div>
            <div class="concept-body">The user interface, rendered using Razor engines.</div>
        </div>
        <div class="concept-card">
            <div class="concept-label">C — CONTROLLER</div>
            <div class="concept-title">Logic & Routing</div>
            <div class="concept-body">Orchestrates the flow between Model and View.</div>
        </div>
    </div>

    <hr class="divider"/>

    <div class="section-eyebrow" style="margin-bottom:20px;"><span class="eyebrow-line"></span>CORE CONCEPTS CATALOG</div>

    <div class="pattern-grid">
        <!-- 1. CONTROLLERS -->
        <div class="concept-card" onclick="openMVC('Controllers')">
            <div class="concept-label">LOGIC</div>
            <div class="concept-title">Controllers & Actions</div>
            <div class="concept-body">Base vs API Controllers, IActionResult return types.</div>
            <div class="expand-hint">View Details →</div>
        </div>

        <!-- 2. ROUTING -->
        <div class="concept-card" onclick="openMVC('Routing')">
            <div class="concept-label">NAVIGATION</div>
            <div class="concept-title">Routing Systems</div>
            <div class="concept-body">Conventional vs Attribute Routing (Preferred).</div>
            <div class="expand-hint">View Details →</div>
        </div>

        <!-- 3. MODEL BINDING -->
        <div class="concept-card" onclick="openMVC('ModelBinding')">
            <div class="concept-label">DATA</div>
            <div class="concept-title">Binding & Validation</div>
            <div class="concept-body">Maps HTTP to C# objects with Data Annotations.</div>
            <div class="expand-hint">View Details →</div>
        </div>

        <!-- 4. DI -->
        <div class="concept-card" onclick="openMVC('DI')">
            <div class="concept-label">INFRASTRUCTURE</div>
            <div class="concept-title">Dependency Injection</div>
            <div class="concept-body">Transient, Scoped, and Singleton lifetimes.</div>
            <div class="expand-hint">View Details →</div>
        </div>

        <!-- 5. RAZOR -->
        <div class="concept-card" onclick="openMVC('Razor')">
            <div class="concept-label">UI LAYER</div>
            <div class="concept-title">Razor Views</div>
            <div class="concept-body">Combining C# + HTML in .cshtml files.</div>
            <div class="expand-hint">View Details →</div>
        </div>

        <!-- 6. STATE MANAGEMENT -->
        <div class="concept-card" onclick="openMVC('State')">
            <div class="concept-label">STATE</div>
            <div class="concept-title">State Management</div>
            <div class="concept-body">Session, TempData, and ViewData/ViewBag.</div>
            <div class="expand-hint">View Details →</div>
        </div>

        <!-- 7. SECURITY -->
        <div class="concept-card" onclick="openMVC('Security')">
            <div class="concept-label">SECURITY</div>
            <div class="concept-title">Security (AuthN/AuthZ)</div>
            <div class="concept-body">JWT, Roles, Policies, and CSRF Protection.</div>
            <div class="expand-hint">View Details →</div>
        </div>
    </div>

    <hr class="divider"/>

    <!-- COMPARISON TABLE -->
    <div class="concept-card">
        <div class="concept-label">MODERNIZATION</div>
        <div class="concept-title">Framework vs Core MVC</div>
        <div style="overflow-x:auto; margin-top:20px;">
            <table style="width:100%; border-collapse: collapse; font-size:13px; color:var(--txt2);">
                <tr style="border-bottom:2px solid var(--brd); text-align:left; color:var(--dotnet);">
                    <th style="padding:12px;">Feature</th>
                    <th style="padding:12px;">ASP.NET MVC (Framework)</th>
                    <th style="padding:12px;">ASP.NET Core MVC</th>
                </tr>
                <tr style="border-bottom:1px solid var(--brd2);">
                    <td>Platform</td>
                    <td>Windows only</td>
                    <td style="color:var(--good);">Cross-platform</td>
                </tr>
                <tr style="border-bottom:1px solid var(--brd2);">
                    <td>Performance</td>
                    <td>Slower</td>
                    <td style="color:var(--good);">High performance</td>
                </tr>
                <tr style="border-bottom:1px solid var(--brd2);">
                    <td>DI</td>
                    <td>Limited</td>
                    <td style="color:var(--good);">Built-in</td>
                </tr>
                <tr>
                    <td>Hosting</td>
                    <td>IIS only</td>
                    <td style="color:var(--good);">Kestrel + IIS/Nginx</td>
                </tr>
            </table>
        </div>
    </div>

    <div class="scene-3d-wrap" style="margin-top:40px;">
      <div class="scene-label"><span>MVC 3D Topology (drag to rotate)</span><span class="scene-3d-badge">● 3D MAPPING</span></div>
      <canvas class="canvas-3d" id="mvcCanvas"></canvas>
    </div>

    <div style="display: flex; justify-content: flex-end; margin-top: 40px;">
        <button class="hbtn primary" onclick="show('oop', 'dotnet')">Next Step: OOP Concepts →</button>
    </div>
</section>
`;

window.MVC_DETAILS = {
  'Controllers': {
    type: 'LOGIC',
    concept: 'Handles incoming HTTP requests. The controller processes data from the model and selects a view.',
    usage: [
      'Base Controller: Traditional web UI controllers.',
      'API Controller: Using [ApiController] for RESTful services.',
      'IActionResult: The flexible return type for any action result.',
      'ViewResult, JsonResult: Specialized return types.'
    ],
    code: 'public class ProductController : Controller {\n    public IActionResult Index() => View();\n    public JsonResult GetData() => Json(new { id = 1 });\n}'
  },
  'Routing': {
    type: 'NAVIGATION',
    concept: 'Determines how an HTTP request maps to a specific controller action.',
    usage: [
      'Conventional Routing: Defined in Startup/Program.cs.',
      'Attribute Routing (Preferred): Defined directly on controllers/actions.',
      '[Route("api/orders")]: Explicitly maps the URL path.'
    ],
    code: '[Route("api/[controller]")]\npublic class OrdersController : Controller {\n    [HttpGet("{id}")]\n    public IActionResult Get(int id) => Ok();\n}'
  },
  'ModelBinding': {
    type: 'DATA',
    concept: 'Automatically maps HTTP request data (query strings, forms, body) to C# action parameters.',
    usage: [
      'Model Binding: FromBody, FromQuery, FromRoute.',
      'Data Annotations: [Required], [StringLength], [Range].',
      'ModelState.IsValid: Checking if input meets constraints.'
    ],
    code: 'public class User {\n    [Required]\n    public string Name { get; set; }\n}'
  },
  'DI': {
    type: 'INFRASTRUCTURE',
    concept: 'Built-in support for Dependency Injection in ASP.NET Core.',
    usage: [
      'Transient: Created every time they are requested.',
      'Scoped (Most Used): Created once per client request.',
      'Singleton: Created once and shared for the entire app lifetime.'
    ],
    code: 'services.AddScoped&lt;IOrderService, OrderService&gt;();'
  },
  'Razor': {
    type: 'UI LAYER',
    concept: 'The templating engine for generating dynamic HTML using C# syntax.',
    usage: [
      '.cshtml: Files combining HTML and C#.',
      '@model: Strong typing for the view.',
      'Tag Helpers: asp-for, asp-action, etc.'
    ],
    code: '@model Order\n<h1>@Model.CustomerName</h1>'
  },
  'State': {
    type: 'STATE',
    concept: 'Managing data across multiple requests or between controller and view.',
    usage: [
      'Session: Server-side storage for the user session.',
      'TempData: Persistent only for the next request (Redirects).',
      'ViewData / ViewBag: Passing small data from Controller to View.'
    ],
    code: 'ViewData["Title"] = "Welcome";\nTempData["Msg"] = "Saved!";'
  },
  'Security': {
    type: 'SECURITY',
    concept: 'Protecting your application from unauthorized access and common attacks.',
    usage: [
      'Authentication: Identity or JWT for verifying user identity.',
      'Authorization: Roles and Policies for controlling access.',
      'CSRF Protection: Using Anti-forgery tokens in forms.'
    ],
    code: '[Authorize(Roles = "Admin")]\npublic class AdminController : Controller { }'
  }
};
