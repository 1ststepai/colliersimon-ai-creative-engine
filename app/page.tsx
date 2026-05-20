import { Guardrails } from "@/components/Guardrails";
import { ModuleCards } from "@/components/ModuleCards";
import { Pipeline } from "@/components/Pipeline";
import { PrototypeConsole } from "@/components/PrototypeConsole";
import { Section } from "@/components/Section";

const whyCards = [
  "Creative teams do not need random AI outputs. They need controlled systems with context, constraints, and review gates.",
  "Performance creative needs speed, variation, testing discipline, and brand consistency moving in the same direction.",
  "A Creative Technologist turns ambiguity into repeatable workflows that teams can actually run, measure, and hand off."
];

const anchors = [
  { href: "#workflow", label: "Workflow" },
  { href: "#prototype", label: "Prototype" },
  { href: "#guardrails", label: "Guardrails" },
  { href: "#modules", label: "Modules" },
  { href: "#why-me", label: "Why Me" }
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="AI Creative Engine home">
          ACE
        </a>
        <nav>
          {anchors.map((anchor) => (
            <a key={anchor.href} href={anchor.href}>
              {anchor.label}
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              Spec concept by Evan Pancis for Creative Technologist role consideration.
            </p>
            <h1 id="hero-title">AI Creative Engine</h1>
            <p className="hero-subhead">
              A spec prototype for turning creative briefs into repeatable, QA-ready AI production
              workflows.
            </p>
            <div className="hero-actions" aria-label="Primary calls to action">
              <a className="button button-primary" href="#workflow">
                View Workflow System
              </a>
              <a className="button button-secondary" href="#prototype">
                View Prototype Interface
              </a>
              <a className="button button-quiet" href="/concept-pdf.pdf">
                Download Concept PDF
              </a>
            </div>
          </div>

          <aside className="hero-art" aria-label="Spec prototype system snapshot">
            <div className="system-card system-card-main">
              <span>Campaign Input</span>
              <strong>Creative brief parsed into reusable production context</strong>
            </div>
            <div className="signal-row">
              <span>Brand Voice</span>
              <span>Channel Rules</span>
              <span>QA Gates</span>
            </div>
            <div className="variant-stack" aria-hidden="true">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="system-card">
              <span>Ready for handoff</span>
              <strong>Variants, rationale, risks, and production notes documented.</strong>
            </div>
          </aside>
        </div>
      </section>

      <Section
        id="why"
        eyebrow="Why this exists"
        title="AI output is only useful when the system around it is useful."
        intro="This candidate prototype is inspired by the role requirements: build AI-enabled workflows that help creative teams move faster without surrendering taste, brand judgment, or production discipline."
      >
        <div className="why-grid">
          {whyCards.map((card, index) => (
            <article className="reason-card" key={card}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{card}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="workflow"
        eyebrow="The operating model"
        title="A repeatable path from messy brief to production-ready creative variants."
        intro="The engine treats AI as one layer in a controlled production system: context goes in, structured variants come out, and humans make the judgment calls that matter."
      >
        <Pipeline />
      </Section>

      <Section
        id="prototype"
        eyebrow="Prototype interface"
        title="Campaign Variant Console"
        intro="A static mockup of the internal tool surface a creative team could use to review context, generate channel-specific variants, track QA, and package handoff notes."
      >
        <PrototypeConsole />
      </Section>

      <Section
        id="guardrails"
        eyebrow="AI guardrails"
        title="The system is built around judgment, not autopilot."
        intro="The prototype makes the boundaries explicit so AI accelerates production without becoming an unmanaged publishing layer."
      >
        <Guardrails />
      </Section>

      <Section
        id="modules"
        eyebrow="What I would prototype first"
        title="Three modules that create immediate leverage for a performance creative team."
        intro="Each module is intentionally small enough to build, test, document, and hand off while still proving the core operating model."
      >
        <ModuleCards />
      </Section>

      <Section
        id="why-me"
        eyebrow="Why me"
        title="I build the connective tissue between creative intent and working AI systems."
        intro="At 1stStep.ai, my work has centered on practical AI workflow systems: prompts, context, scripts, APIs, internal tools, documentation, and handoff processes that help non-technical teams use AI with more confidence."
      >
        <div className="proof-grid">
          {[
            "Built AI workflow systems and internal tools for repeatable production tasks.",
            "Created LLM-connected workflows using prompts, context, scripts, and APIs.",
            "Designed documented handoff processes so prototypes can become team-ready systems.",
            "Translated non-technical production needs into working tools and clear operating steps.",
            "Kept a strong bias toward useful AI: measurable, reviewable, and grounded in real constraints."
          ].map((item) => (
            <div className="proof-item" key={item}>
              <span aria-hidden="true" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <footer className="site-footer">
        <div>
          <strong>Evan Pancis</strong>
          <p>Creative Technologist / AI Workflow Builder</p>
        </div>
        <address>
          <a href="mailto:epancis12@gmail.com">epancis12@gmail.com</a>
          <a href="https://1ststep.ai">1ststep.ai</a>
          <a href="https://github.com/1ststepai">github.com/1ststepai</a>
        </address>
      </footer>
    </main>
  );
}
