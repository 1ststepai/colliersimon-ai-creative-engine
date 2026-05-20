import { Guardrails } from "@/components/Guardrails";
import { ModuleCards } from "@/components/ModuleCards";
import { Pipeline } from "@/components/Pipeline";
import { PrototypeConsole } from "@/components/PrototypeConsole";
import { Section } from "@/components/Section";
import Image from "next/image";

const whyCards = [
  {
    title: "Random AI output is not a workflow.",
    body: "AI only becomes useful when it is wrapped in context, constraints, QA, and handoff."
  },
  {
    title: "Performance creative needs controlled speed.",
    body: "Generate variants faster without losing brand judgment or testing discipline."
  },
  {
    title: "The Creative Technologist builds the operating layer.",
    body: "Briefs become inputs. Brand rules become context. Outputs become reviewable and traceable."
  }
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
        <nav aria-label="Page sections">
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
            <p className="eyebrow">Spec concept by Evan Pancis</p>
            <h1 id="hero-title">AI Creative Engine</h1>
            <p className="hero-positioning">
              An AI-enabled production system for turning creative briefs into variant-ready,
              QA-controlled campaign outputs.
            </p>
            <p className="hero-subhead">
              A role-inspired prototype for turning creative briefs into structured context, channel
              variants, human QA, and production-ready handoff.
            </p>
            <div className="hero-actions" aria-label="Primary calls to action">
              <a className="button button-primary" href="#prototype">
                View Prototype
              </a>
              <a className="button button-secondary" href="#workflow">
                See Workflow
              </a>
              <a className="button button-quiet" href="/concept-pdf.pdf">
                Download PDF
              </a>
            </div>
          </div>

          <aside className="hero-art" aria-label="Campaign Variant Console preview">
            <div className="hero-art-top">
              <span>Campaign Variant Console</span>
              <strong>Human approval required</strong>
            </div>
            <div className="signal-map" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="hero-preview-grid">
              <div className="preview-panel preview-panel-large">
                <span>Brief parsed</span>
                <strong>5 channel families</strong>
                <p>Paid Social / CTV / Programmatic / CRM / Creator Studio</p>
              </div>
              <div className="preview-panel">
                <span>Brand Context</span>
                <strong>Loaded</strong>
              </div>
              <div className="preview-panel">
                <span>Claims Review</span>
                <strong>Needs Legal</strong>
              </div>
              <div className="preview-panel">
                <span>Auto-Publish</span>
                <strong>Locked</strong>
              </div>
            </div>
            <div className="qa-strip" aria-label="QA progress 72 percent">
              <div>
                <span />
              </div>
              <strong>Handoff readiness 72%</strong>
            </div>
            <div className="context-chip-row" aria-label="Loaded context chips">
              <span>Voice rules</span>
              <span>Prompt v03</span>
              <span>QA gates</span>
              <span>Handoff packet</span>
            </div>
          </aside>
        </div>
      </section>

      <Section
        id="prototype"
        eyebrow="Prototype interface"
        title="Campaign Variant Console"
        intro="A believable internal tool surface for brief parsing, variant queues, QA gates, and handoff readiness."
        featured
      >
        <PrototypeConsole />
      </Section>

      <Section
        id="why"
        eyebrow="Why this exists"
        title="Useful AI needs an operating system."
        intro="This candidate prototype frames AI as production infrastructure: fast, constrained, reviewable, and ready for handoff."
      >
        <div className="why-grid">
          {whyCards.map((card, index) => (
            <article className="reason-card" key={card.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="workflow"
        eyebrow="The operating model"
        title="From brief to handoff in five controlled moves."
        intro="Context goes in. Variants come out. Humans keep ownership of strategy, taste, and approval."
      >
        <Pipeline />
      </Section>

      <Section
        id="guardrails"
        eyebrow="AI guardrails"
        title="Judgment stays in the loop."
        intro="Guardrails make the system faster without making it reckless."
      >
        <Guardrails />
      </Section>

      <Section
        id="modules"
        eyebrow="What I would prototype first"
        title="A practical roadmap for immediate leverage."
        intro="Three buildable modules that prove the workflow without pretending the whole production system is finished."
      >
        <ModuleCards />
      </Section>

      <Section
        id="why-me"
        eyebrow="Why me"
        title="Why I'm a fit for this kind of work"
        intro="At 1stStep.ai, I build the connective tissue between AI tools and real operating workflows: prompts, context, scripts, APIs, internal tools, documentation, and handoff systems."
      >
        <div className="why-me-layout">
          <aside className="portrait-card" aria-label="Evan Pancis profile">
            <Image
              src="/evan-pancis-selfie.png"
              alt="Evan Pancis, Creative Technologist and AI Workflow Builder"
              width={752}
              height={862}
              sizes="(max-width: 1100px) 100vw, 360px"
            />
            <div>
              <span>Candidate profile</span>
              <strong>Evan Pancis</strong>
              <p>Creative Technologist / AI Workflow Builder</p>
            </div>
          </aside>

          <div className="proof-grid">
            {[
              "Built AI workflow systems and internal tools",
              "Created LLM-connected workflows using prompts, context, scripts, and APIs",
              "Designed documented handoff processes for non-technical users",
              "Translated messy business needs into structured systems",
              "Prioritized useful AI over AI theater"
            ].map((item) => (
              <div className="proof-item" key={item}>
                <span aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="closing-statement">
          I do not see AI as a replacement for creative judgment. I see it as infrastructure for
          better creative operations.
        </p>
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
