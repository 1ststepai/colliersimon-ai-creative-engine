const stages = [
  {
    title: "Brief Intake",
    input: "Objective, audience, channels",
    ai: "Finds asks and gaps",
    human: "Sets strategy",
    output: "Structured brief"
  },
  {
    title: "Brand Context",
    input: "Voice, claims, examples",
    ai: "Builds context pack",
    human: "Approves source truth",
    output: "Reusable rules"
  },
  {
    title: "Variant Production",
    input: "Brief, context, templates",
    ai: "Generates matrix",
    human: "Selects directions",
    output: "Channel variants"
  },
  {
    title: "Human QA",
    input: "Drafts and rules",
    ai: "Flags risks",
    human: "Reviews taste and claims",
    output: "Approved queue"
  },
  {
    title: "Production Handoff",
    input: "Approved variants",
    ai: "Packages notes",
    human: "Confirms readiness",
    output: "Handoff packet"
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
              <dt>Input</dt>
              <dd>{stage.input}</dd>
            </div>
            <div>
              <dt>AI assist</dt>
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
