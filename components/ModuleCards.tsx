const modules = [
  {
    title: "Brief-to-Variant Generator",
    problem: "Creative teams need more angles without losing the original strategy.",
    workflow: "Parse brief inputs into channel templates, generate structured variant sets, and tag each output by angle, audience, and risk.",
    output: "A reviewable matrix of copy, visual direction, prompt notes, and rationale.",
    time: "Reduces blank-page time and makes testing directions easier to compare."
  },
  {
    title: "Brand Context Pack Builder",
    problem: "AI output drifts when teams rely on scattered source material.",
    workflow: "Collect approved voice rules, examples, claims, forbidden language, channel specs, and campaign-specific context into a reusable pack.",
    output: "A source-controlled context bundle with version notes and missing-context flags.",
    time: "Cuts repeated setup work and improves consistency across makers and channels."
  },
  {
    title: "Creative QA + Handoff Checklist",
    problem: "Fast production creates risk when approval criteria live in someone’s head.",
    workflow: "Run each variant through brand, claims, format, accessibility, and handoff checks before final packaging.",
    output: "A documented approval trail with owners, unresolved risks, and production notes.",
    time: "Speeds review by making issues visible before assets reach production."
  }
];

export function ModuleCards() {
  return (
    <div className="module-grid">
      {modules.map((module) => (
        <article className="module-card" key={module.title}>
          <h3>{module.title}</h3>
          <dl>
            <div>
              <dt>Problem</dt>
              <dd>{module.problem}</dd>
            </div>
            <div>
              <dt>Workflow</dt>
              <dd>{module.workflow}</dd>
            </div>
            <div>
              <dt>Output</dt>
              <dd>{module.output}</dd>
            </div>
            <div>
              <dt>Why it saves time</dt>
              <dd>{module.time}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
