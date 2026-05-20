const channels = [
  { name: "Paid Social", count: 18, status: "Needs QA" },
  { name: "CTV", count: 6, status: "Script pass" },
  { name: "Programmatic", count: 24, status: "Ready" },
  { name: "CRM/Lifecycle", count: 10, status: "Review" },
  { name: "Creator Studio", count: 8, status: "Direction set" }
];

const qaItems = [
  ["Brand voice lock", "Passed"],
  ["Source context present", "Passed"],
  ["Claims reviewed", "Needs legal"],
  ["Channel specs matched", "Passed"],
  ["No auto-publish", "Locked"]
];

export function PrototypeConsole() {
  return (
    <div className="console" aria-label="Campaign Variant Console static prototype">
      <div className="console-topbar">
        <div>
          <span className="console-label">Candidate prototype</span>
          <h3>Campaign Variant Console</h3>
        </div>
        <div className="status-pill">Human approval required</div>
      </div>

      <div className="console-grid">
        <section className="console-panel span-2" aria-labelledby="brief-summary">
          <div className="panel-heading">
            <h4 id="brief-summary">Brief Summary</h4>
            <span>Parsed</span>
          </div>
          <p>
            Launch a high-velocity test matrix for a performance creative campaign. Generate
            channel-native variants while preserving approved voice, source context, and handoff
            documentation.
          </p>
          <div className="brief-tags">
            <span>Audience: growth-minded teams</span>
            <span>Goal: faster variant production</span>
            <span>Risk: unsupported claims</span>
          </div>
        </section>

        <section className="console-panel" aria-labelledby="brand-rules">
          <div className="panel-heading">
            <h4 id="brand-rules">Brand Rules Loaded</h4>
            <span>7 rules</span>
          </div>
          <ul className="rule-list">
            <li>Direct, useful, never breathless</li>
            <li>No unsupported performance claims</li>
            <li>Preserve campaign terminology</li>
            <li>Keep CTA hierarchy consistent</li>
          </ul>
        </section>

        <section className="console-panel span-2" aria-labelledby="channel-outputs">
          <div className="panel-heading">
            <h4 id="channel-outputs">Channel Outputs</h4>
            <span>66 variants</span>
          </div>
          <div className="channel-grid">
            {channels.map((channel) => (
              <div className="channel-card" key={channel.name}>
                <strong>{channel.name}</strong>
                <span>{channel.count} drafts</span>
                <em>{channel.status}</em>
              </div>
            ))}
          </div>
        </section>

        <section className="console-panel" aria-labelledby="variant-queue">
          <div className="panel-heading">
            <h4 id="variant-queue">Variant Queue</h4>
            <span>Active</span>
          </div>
          <ol className="queue-list">
            <li>
              <span>A01</span>
              <p>Problem-framing hook set</p>
            </li>
            <li>
              <span>B04</span>
              <p>Proof-led conversion angle</p>
            </li>
            <li>
              <span>C02</span>
              <p>Creator prompt direction</p>
            </li>
          </ol>
        </section>

        <section className="console-panel" aria-labelledby="qa-checklist">
          <div className="panel-heading">
            <h4 id="qa-checklist">QA Checklist</h4>
            <span>5 gates</span>
          </div>
          <ul className="qa-list">
            {qaItems.map(([item, status]) => (
              <li key={item}>
                <span>{item}</span>
                <strong>{status}</strong>
              </li>
            ))}
          </ul>
        </section>

        <section className="console-panel" aria-labelledby="handoff-status">
          <div className="panel-heading">
            <h4 id="handoff-status">Handoff Status</h4>
            <span>Draft</span>
          </div>
          <div className="handoff-meter" aria-label="Handoff readiness 72 percent">
            <span />
          </div>
          <p>72% ready. Waiting on claims review and final creative approval before packaging.</p>
        </section>

        <section className="console-panel span-2" aria-labelledby="documentation-notes">
          <div className="panel-heading">
            <h4 id="documentation-notes">Documentation Notes</h4>
            <span>Auto-drafted</span>
          </div>
          <p>
            Include prompt version, context sources, selected variants, rejected directions,
            approval owner, legal notes, and production specs. No output moves forward without a
            documented human review trail.
          </p>
        </section>
      </div>
    </div>
  );
}
