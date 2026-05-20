const guardrails = [
  {
    title: "Brand Voice Lock",
    body: "Keeps generated work tied to approved language, tone, claims, and examples."
  },
  {
    title: "Source Context Required",
    body: "No source material, no confident output. The system flags missing context before generation."
  },
  {
    title: "Human Creative Approval",
    body: "AI can draft and organize. A human owns taste, strategy, and final judgment."
  },
  {
    title: "Claims / Compliance Review",
    body: "Risky claims are flagged before they move into client-facing or paid media workflows."
  },
  {
    title: "No Auto-Publish",
    body: "The system never pushes AI output directly to production without review."
  },
  {
    title: "Documentation Trail",
    body: "Each output carries context, prompt/version notes, QA status, owner, and handoff notes."
  }
];

export function Guardrails() {
  return (
    <div className="guardrail-grid">
      {guardrails.map((guardrail) => (
        <article className="guardrail-card" key={guardrail.title}>
          <span aria-hidden="true" />
          <h3>{guardrail.title}</h3>
          <p>{guardrail.body}</p>
        </article>
      ))}
    </div>
  );
}
