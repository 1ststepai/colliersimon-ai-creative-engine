const stages = [
  {
    title: "Brief Intake",
    inputs: "Campaign objective, audience, offer, channels, timing",
    ai: "Extracts requirements, unknowns, mandatories, and testable angles",
    human: "Confirms strategy, audience nuance, and creative ambition",
    output: "Structured creative brief with risks and open questions"
  },
  {
    title: "Context System",
    inputs: "Brand rules, prior work, voice notes, channel specs",
    ai: "Organizes reusable context packs and flags missing source material",
    human: "Approves what becomes source-of-truth context",
    output: "Brand and campaign context pack"
  },
  {
    title: "AI Production Layer",
    inputs: "Approved brief, context pack, prompt patterns, channel templates",
    ai: "Generates variant directions, copy matrices, and asset prompts",
    human: "Selects directions worth developing",
    output: "Channel-specific creative variant queue"
  },
  {
    title: "Human QA",
    inputs: "Variants, brand rules, compliance notes, channel constraints",
    ai: "Checks consistency, claims, formatting, and missing rationale",
    human: "Reviews taste, strategy, accuracy, and final creative fit",
    output: "Approved variants with QA status"
  },
  {
    title: "Production Handoff",
    inputs: "Approved variants, notes, specs, owners, next steps",
    ai: "Packages documentation and handoff summaries",
    human: "Confirms production readiness and ownership",
    output: "Production-ready handoff packet"
  }
];

export function Pipeline() {
  return (
    <div className="pipeline" role="list">
      {stages.map((stage, index) => (
        <article className="pipeline-stage" key={stage.title} role="listitem">
          <div className="stage-index">{String(index + 1).padStart(2, "0")}</div>
          <h3>{stage.title}</h3>
          <dl>
            <div>
              <dt>Inputs</dt>
              <dd>{stage.inputs}</dd>
            </div>
            <div>
              <dt>What AI helps with</dt>
              <dd>{stage.ai}</dd>
            </div>
            <div>
              <dt>Human checkpoint</dt>
              <dd>{stage.human}</dd>
            </div>
            <div>
              <dt>Output</dt>
              <dd>{stage.output}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
