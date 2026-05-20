import { Guardrails } from "@/components/Guardrails";
import { ModuleCards } from "@/components/ModuleCards";
import { Pipeline } from "@/components/Pipeline";
import { PrototypeConsole } from "@/components/PrototypeConsole";
import { Section } from "@/components/Section";

const anchors = [
  { href: "#prototype", label: "Prototype" },
  { href: "#workflow", label: "Workflow" },
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
            <p className="eyebrow">Spec concept / Evan Pancis / Creative Technologist candidate</p>
            <h1 id="hero-title">AI Creative Engine</h1>
            <p className="hero-subhead">
              Brief goes in. Brand-controlled, QA-gated, handoff-documented creative variants come
              out. This is what an AI production operating system looks like.
            </p>
            <div className="hero-actions" aria-label="Primary calls to action">
              <a className="button button-primary" href="#prototype">
                View Prototype
              </a>
              <a className="button button-secondary" href="#workflow">
                See the Workflow
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
        id="prototype"
        eyebrow="Prototype interface"
        title="Campaign Variant Console"
        intro="A static mockup of the internal tool surface a creative team could use to review context, generate channel-specific variants, track QA, and package handoff notes."
      >
        <PrototypeConsole />
      </Section>

      <Section
        id="workflow"
        eyebrow="The operating model"
        title="A repeatable path from messy brief to production-ready creative variants."
        intro="AI only becomes a production asset when it's wrapped in real constraints: a structured brief, approved context, QA gates, and a handoff trail. This workflow makes those constraints explicit at every step."
      >
        <Pipeline />
      </Section>

      <Section
        id="guardrails"
        eyebrow="AI guardrails"
        title="The constraints are the feature."
        intro="Fast AI production only earns trust when the guardrails are visible. These aren't workarounds - they're the operating model."
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
        intro="At 1stStep.ai I've been building the operating layer that makes AI useful for creative teams - not the AI itself, but the system around it: prompts, context, review gates, documentation, and handoff."
      >
        <div className="proof-grid">
          {[
            "At 1stStep.ai, built internal AI workflow systems that replaced manual production steps - with human review gates still in place.",
            "Designed context packs and prompt architectures that made LLM output consistent enough for non-technical team members to QA and approve.",
            "Translated ambiguous production briefs into structured system specs with documented inputs, outputs, and ownership.",
            "Built handoff documentation so the tools I prototype can be run by someone other than me - without a training call.",
            "My bias: AI as production infrastructure, not AI as spectacle. If it can't be reviewed, handed off, and measured, it's not ready to ship."
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
          <a href="/concept-pdf.pdf">Download concept PDF</a>
        </address>
      </footer>
    </main>
  );
}
