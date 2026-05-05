/* ═══════════════════════════════════════════
   SECTION: Design Patterns (GoF Master Edition)
   Registers ALL 23 GoF Patterns into SECTIONS.
═══════════════════════════════════════════ */
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS['patterns'] = `
<section id="patterns">
    <div class="section-header">
      <div class="section-eyebrow"><span class="eyebrow-line"></span>FULL GoF CATALOG</div>
      <h1 class="section-title">Design Patterns Mastery</h1>
      <p class="section-subtitle">Click each pattern below to see a crystal-clear production example in C#.</p>
    </div>

    <!-- Category Tabs -->
    <div class="track-switcher" style="margin-bottom: 30px; justify-content: center; gap: 10px; flex-wrap: wrap;">
      <button class="track-btn active-dotnet" id="btn-p-creational" onclick="switchPatternCat('creational')">CREATIONAL</button>
      <button class="track-btn" id="btn-p-structural" onclick="switchPatternCat('structural')">STRUCTURAL</button>
      <button class="track-btn" id="btn-p-behavioural" onclick="switchPatternCat('behavioural')">BEHAVIOURAL</button>
    </div>

    <div id="pattern-content-area" class="pattern-grid" style="animation: fadeIn 0.4s ease;"></div>

    <hr class="divider"/>

    <div class="scene-3d-wrap">
      <div class="scene-label"><span>GoF Architecture Hub — 23 Patterns (drag to rotate)</span><span class="scene-3d-badge">● INTERACTIVE 3D</span></div>
      <canvas class="canvas-3d" id="patternCanvas"></canvas>
    </div>
</section>
`;

// Helper to generate cards
const card = (type, name, desc) => `
    <div class="pattern-card pc-${type.toLowerCase()}" onclick="openPattern('${name}')">
        <div class="pattern-type">${type}</div>
        <div class="pattern-name">${name}</div>
        <div class="pattern-real">${desc}</div>
        <div class="expand-hint">Click to see example →</div>
    </div>
`;

window.PATTERN_CATS = {
  creational: [
    ['CREATIONAL', 'Factory Method', 'Let subclasses decide which class to instantiate.'],
    ['CREATIONAL', 'Abstract Factory', 'Create families of related objects.'],
    ['CREATIONAL', 'Builder', 'Construct complex objects step-by-step.'],
    ['CREATIONAL', 'Prototype', 'Clone existing objects.'],
    ['CREATIONAL', 'Singleton', 'One instance, global access.']
  ].map(p => card(...p)).join(''),

  structural: [
    ['STRUCTURAL', 'Adapter', 'Match incompatible interfaces.'],
    ['STRUCTURAL', 'Bridge', 'Separate abstraction from implementation.'],
    ['STRUCTURAL', 'Composite', 'Tree structures of objects.'],
    ['STRUCTURAL', 'Decorator', 'Add responsibilities dynamically.'],
    ['STRUCTURAL', 'Facade', 'One interface for a whole subsystem.'],
    ['STRUCTURAL', 'Flyweight', 'Share objects to save memory.'],
    ['STRUCTURAL', 'Proxy', 'Control access to an object.']
  ].map(p => card(...p)).join(''),

  behavioural: [
    ['BEHAVIOURAL', 'Chain of Responsibility', 'Pass requests along a chain.'],
    ['BEHAVIOURAL', 'Command', 'Encapsulate a request as an object.'],
    ['BEHAVIOURAL', 'Interpreter', 'Define a grammar for a language.'],
    ['BEHAVIOURAL', 'Iterator', 'Sequentially access elements.'],
    ['BEHAVIOURAL', 'Mediator', 'Simplify object communication.'],
    ['BEHAVIOURAL', 'Memento', 'Capture and restore state.'],
    ['BEHAVIOURAL', 'Observer', 'Notify state changes.'],
    ['BEHAVIOURAL', 'State', 'Change behavior with state.'],
    ['BEHAVIOURAL', 'Strategy', 'Interchangeable algorithms.'],
    ['BEHAVIOURAL', 'Template Method', 'Algorithm skeleton in a method.'],
    ['BEHAVIOURAL', 'Visitor', 'Add operations without changing classes.']
  ].map(p => card(...p)).join('')
};

window.PATTERN_DETAILS = {
  'Factory Method': { 
    type: 'CREATIONAL', 
    concept: 'Defines an interface for creating an object, but lets subclasses decide which class to instantiate.', 
    usage: ['When a class cannot anticipate the class of objects it must create.'], 
    code: 'public abstract class DocumentFactory {\n    public abstract IDocument Create();\n}\n\npublic class PdfFactory : DocumentFactory {\n    public override IDocument Create() => new PdfDocument();\n}' 
  },
  'Abstract Factory': { 
    type: 'CREATIONAL', 
    concept: 'Interface for creating families of related objects without specifying their concrete classes.', 
    usage: ['When a system needs to be independent of how its products are created.'], 
    code: 'public interface IUIFactory {\n    IButton CreateButton();\n    ITextbox CreateTextbox();\n}\n\npublic class MacFactory : IUIFactory {\n    public IButton CreateButton() => new MacButton();\n    public ITextbox CreateTextbox() => new MacTextbox();\n}' 
  },
  'Builder': { 
    type: 'CREATIONAL', 
    concept: 'Separates the construction of a complex object from its representation.', 
    usage: ['When the process of creating a complex object should be independent of the parts.'], 
    code: 'var email = new EmailBuilder()\n    .From("hr@archlearn.io")\n    .To("dev@archlearn.io")\n    .WithSubject("Welcome")\n    .WithBody("Hello!")\n    .Build();' 
  },
  'Prototype': { 
    type: 'CREATIONAL', 
    concept: 'Creating new objects by copying an existing instance.', 
    usage: ['When the cost of creating a new instance from scratch is high.'], 
    code: 'public class Config : ICloneable {\n    public object Clone() => this.MemberwiseClone();\n}' 
  },
  'Singleton': { 
    type: 'CREATIONAL', 
    concept: 'Ensures a class has only one instance and provides a global access point.', 
    usage: ['Logging, Caching, or Configuration managers.'], 
    code: 'public sealed class Cache {\n    private static readonly Lazy&lt;Cache&gt; _lazy = \n        new(() => new Cache());\n    public static Cache Instance => _lazy.Value;\n    private Cache() {}\n}' 
  },
  'Adapter': { 
    type: 'STRUCTURAL', 
    concept: 'Converts the interface of a class into another that clients expect.', 
    usage: ['Integrating legacy code or 3rd party libraries.'], 
    code: 'public class PaymentAdapter : INewPaymentSystem {\n    public void Process() => _legacySystem.ExecutePayment();\n}' 
  },
  'Bridge': { 
    type: 'STRUCTURAL', 
    concept: 'Decouples an abstraction from its implementation.', 
    usage: ['When both the abstraction and implementation should be extensible independently.'], 
    code: 'public abstract class Remote(IDevice device) {\n    public void TurnOn() => device.PowerOn();\n}' 
  },
  'Composite': { 
    type: 'STRUCTURAL', 
    concept: 'Treats individual objects and compositions of objects uniformly.', 
    usage: ['File systems, UI component trees.'], 
    code: 'public class Folder : IItem {\n    private List&lt;IItem&gt; _children = new();\n    public void Display() => _children.ForEach(c => c.Display());\n}' 
  },
  'Decorator': { 
    type: 'STRUCTURAL', 
    concept: 'Attaches additional responsibilities to an object dynamically.', 
    usage: ['Adding Logging or Caching to a repository without changing it.'], 
    code: 'public class LoggingRepo(IRepo inner) : IRepo {\n    public void Save() {\n        Console.Log("Saving...");\n        inner.Save();\n    }\n}' 
  },
  'Facade': { 
    type: 'STRUCTURAL', 
    concept: 'Provides a unified interface to a set of interfaces in a subsystem.', 
    usage: ['Simplifying complex APIs for a client.'], 
    code: 'public class OrderFacade {\n    public void Checkout() {\n        _inventory.Check();\n        _payment.Charge();\n        _shipping.Ship();\n    }\n}' 
  },
  'Flyweight': { 
    type: 'STRUCTURAL', 
    concept: 'Uses sharing to support large numbers of fine-grained objects.', 
    usage: ['Memory optimization in text editors or game engines.'], 
    code: 'var style = _styleFactory.GetStyle("Bold-Red-12pt");\n// Style object is shared across 1000 characters' 
  },
  'Proxy': { 
    type: 'STRUCTURAL', 
    concept: 'Provides a surrogate or placeholder for another object to control access.', 
    usage: ['Lazy loading, Security, or Logging.'], 
    code: 'public class SecureRepo : IRepo {\n    public void Delete() {\n        if(User.IsAdmin) _realRepo.Delete();\n    }\n}' 
  },
  'Chain of Responsibility': { 
    type: 'BEHAVIOURAL', 
    concept: 'Avoids coupling sender to receiver by passing the request along a chain.', 
    usage: ['Middleware in ASP.NET Core or Logger levels.'], 
    code: 'public void Handle(Request req) {\n    if(CanHandle) Process();\n    else _next?.Handle(req);\n}' 
  },
  'Command': { 
    type: 'BEHAVIOURAL', 
    concept: 'Encapsulates a request as an object, letting you parameterize clients.', 
    usage: ['Undo/Redo, Queuing, or Remote control logic.'], 
    code: 'public class SaveCommand : ICommand {\n    public void Execute() => _repo.Save();\n    public void Undo() => _repo.Delete();\n}' 
  },
  'Interpreter': { 
    type: 'BEHAVIOURAL', 
    concept: 'Defines a grammar for a language and an interpreter to deal with it.', 
    usage: ['Parsing SQL-like strings or math expressions.'], 
    code: 'public int Interpret(Context context) => _left.Eval() + _right.Eval();' 
  },
  'Iterator': { 
    type: 'BEHAVIOURAL', 
    concept: 'Accesses elements of an aggregate object sequentially.', 
    usage: ['Traversing custom data structures.'], 
    code: 'foreach(var item in myCustomCollection) { ... }' 
  },
  'Mediator': { 
    type: 'BEHAVIOURAL', 
    concept: 'Defines how a set of objects interact without referring to each other.', 
    usage: ['MediatR in .NET to decouple Controllers from Logic.'], 
    code: 'public async Task&lt;Result&gt; Handle(CreateOrder cmd) {\n    // Mediator calls this handler automatically\n}' 
  },
  'Memento': { 
    type: 'BEHAVIOURAL', 
    concept: 'Captures an object\'s internal state so it can be restored later.', 
    usage: ['Checkpoint/Restore logic in editors.'], 
    code: 'public Memento SaveState() => new Memento(_state);\npublic void Restore(Memento m) => _state = m.GetState();' 
  },
  'Observer': { 
    type: 'BEHAVIOURAL', 
    concept: 'Defines a one-to-many dependency where state changes notify dependents.', 
    usage: ['Pub/Sub systems or UI Data Binding.'], 
    code: 'public void Notify() => _observers.ForEach(o => o.Update(this));' 
  },
  'State': { 
    type: 'BEHAVIOURAL', 
    concept: 'Allows an object to alter its behavior when its internal state changes.', 
    usage: ['Order statuses (Pending, Shipped, Delivered).'], 
    code: 'public void Ship() => _state.HandleShipment(this);' 
  },
  'Strategy': { 
    type: 'BEHAVIOURAL', 
    concept: 'Defines a family of algorithms and makes them interchangeable.', 
    usage: ['Switching between Fedex/UPS/DHL shipping logic.'], 
    code: 'public void SetStrategy(IShipping s) => _shipping = s;' 
  },
  'Template Method': { 
    type: 'BEHAVIOURAL', 
    concept: 'Defines the skeleton of an algorithm, deferring some steps to subclasses.', 
    usage: ['Base Export logic where PDF/CSV implement the actual write.'], 
    code: 'public void Export() { Init(); WriteData(); Close(); } // WriteData is abstract' 
  },
  'Visitor': { 
    type: 'BEHAVIOURAL', 
    concept: 'Adds a new operation to an object structure without changing it.', 
    usage: ['Exporting or Auditing complex object graphs.'], 
    code: 'public void Accept(IVisitor v) => v.Visit(this);' 
  }
};
