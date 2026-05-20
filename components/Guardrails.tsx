const guardrails = [
  "Brand voice lock",
  "Source context required",
  "Human creative approval",
  "Legal/compliance review where needed",
  "No auto-publish",
  "QA before handoff",
  "Documentation required"
];

export function Guardrails() {
  return (
    <div className="guardrail-grid">
      {guardrails.map((guardrail) => (
        <article className="guardrail-card" key={guardrail}>
          <span aria-hidden="true" />
          <h3>{guardrail}</h3>
          <p>
            Built into the workflow as a visible checkpoint so generated work remains reviewable,
            attributable, and production-safe.
          </p>
        </article>
      ))}
    </div>
  );
}
