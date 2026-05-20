const modules = [
  {
    title: "Brief-to-Variant Generator",
    problem: "Teams need more campaign angles without losing the original strategy.",
    build: "Parse briefs into channel templates and structured generation inputs.",
    output: "A variant matrix with copy, angle, audience, risk, and rationale.",
    impact: "Cuts blank-page time and makes testing directions easier to compare."
  },
  {
    title: "Brand Context Pack Builder",
    problem: "AI output drifts when source material is scattered or implied.",
    build: "Convert voice, claims, examples, and do-not rules into reusable context.",
    output: "A versioned context pack with source notes and missing-context flags.",
    impact: "Improves consistency across makers, channels, and review cycles."
  },
  {
    title: "Creative QA + Handoff Checklist",
    problem: "Fast production creates risk when approval criteria live in someone's head.",
    build: "Score variants against brand, claims, format, accessibility, and handoff needs.",
    output: "A review trail with owners, unresolved risks, and production notes.",
    impact: "Surfaces issues before assets reach paid media or production teams."
  }
];

export function ModuleCards() {
  return (
    <div className="module-grid">
      {modules.map((module) => (
        <article className="module-card" key={module.title}>
          <div className="module-kicker">Roadmap module</div>
          <h3>{module.title}</h3>
          <dl>
            <div>
              <dt>Problem</dt>
              <dd>{module.problem}</dd>
            </div>
            <div>
              <dt>Build</dt>
              <dd>{module.build}</dd>
            </div>
            <div>
              <dt>Output</dt>
              <dd>{module.output}</dd>
            </div>
            <div>
              <dt>Impact</dt>
              <dd>{module.impact}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
