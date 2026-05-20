const guardrails = [
  {
    title: "Brand Voice Lock",
    description: "Generated work is constrained to approved language, tone, and campaign terminology before it reaches a human reviewer. No freeform output.",
    accent: "green",
  },
  {
    title: "Source Context Required",
    description: "No source material, no confident output. The system halts and flags missing context rather than inventing answers.",
    accent: "green",
  },
  {
    title: "Human Creative Approval",
    description: "AI proposes directions. Humans choose them. Strategy, taste, and final judgment are not delegable.",
    accent: "pink",
  },
  {
    title: "Legal / Compliance Review",
    description: "Outputs containing performance claims or regulated language are flagged before entering client-facing or paid media workflows.",
    accent: "yellow",
  },
  {
    title: "No Auto-Publish",
    description: "The system cannot push output directly to production. Every distribution step requires human confirmation. Full stop.",
    accent: "yellow",
  },
  {
    title: "QA Before Handoff",
    description: "Variants move through a documented checklist - brand, claims, channel specs - before packaging. Incomplete QA blocks handoff.",
    accent: "green",
  },
  {
    title: "Documentation Required",
    description: "Every output carries prompt version, context source, QA status, approval owner, and production notes. No undocumented outputs move forward.",
    accent: "muted",
  },
];

const accentMap: Record<string, string> = {
  green: "var(--accent)",
  pink: "var(--accent-2)",
  yellow: "var(--warning)",
  muted: "var(--muted)",
};

export function Guardrails() {
  return (
    <div className="guardrail-grid">
      {guardrails.map((g) => (
        <article className="guardrail-card" key={g.title}>
          <span aria-hidden="true" style={{ background: accentMap[g.accent] }} />
          <h3>{g.title}</h3>
          <p>{g.description}</p>
        </article>
      ))}
    </div>
  );
}
