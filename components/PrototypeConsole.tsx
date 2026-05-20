const channels = [
  { name: "Paid Social", count: 18, status: "Needs QA" },
  { name: "CTV", count: 6, status: "Script pass" },
  { name: "Programmatic", count: 24, status: "Ready" },
  { name: "CRM/Lifecycle", count: 10, status: "Review" },
  { name: "Creator Studio", count: 8, status: "Direction set" }
];

const qaItems = [
  ["Brand Context", "Loaded"],
  ["Claims Review", "Needs Legal"],
  ["Human Approval", "Required"],
  ["Handoff Packet", "Drafting"],
  ["Auto-Publish", "Locked"]
];

const matrix = [
  ["A01", "Problem hook", "Paid Social", "Needs QA"],
  ["B04", "Proof-led angle", "CRM", "Review"],
  ["C02", "Creator prompt", "Creator", "Direction set"],
  ["D09", "Offer frame", "Programmatic", "Ready"]
];

export function PrototypeConsole() {
  return (
    <div className="console" aria-label="Campaign Variant Console static prototype">
      <div className="console-topbar">
        <div>
          <span className="console-label">Role-inspired prototype</span>
          <h3>Campaign Variant Console</h3>
        </div>
        <div className="status-pill">Human approval required</div>
      </div>

      <div className="console-grid">
        <section className="console-panel console-brief span-2" aria-labelledby="brief-summary">
          <div className="panel-heading">
            <h4 id="brief-summary">Campaign Brief Parsed</h4>
            <span>Source checked</span>
          </div>
          <p>
            Performance campaign system for generating channel-native variants with approved
            context, QA status, and handoff notes.
          </p>
          <div className="brief-tags">
            <span>Goal: Variant velocity</span>
            <span>Audience: Growth teams</span>
            <span>Risk: Unsupported claims</span>
            <span>No auto-publish</span>
          </div>
        </section>

        <section className="console-panel" aria-labelledby="brand-rules">
          <div className="panel-heading">
            <h4 id="brand-rules">Brand Context Loaded</h4>
            <span>7 rules</span>
          </div>
          <ul className="rule-list">
            <li>Direct voice, no hype</li>
            <li>Approved claims only</li>
            <li>Campaign terms locked</li>
            <li>CTA hierarchy preserved</li>
          </ul>
        </section>

        <section className="console-panel" aria-labelledby="qa-gates">
          <div className="panel-heading">
            <h4 id="qa-gates">QA Gates</h4>
            <span>5 active</span>
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

        <section className="console-panel span-2" aria-labelledby="channel-outputs">
          <div className="panel-heading">
            <h4 id="channel-outputs">Channel Output Queue</h4>
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

        <section className="console-panel span-2" aria-labelledby="variant-matrix">
          <div className="panel-heading">
            <h4 id="variant-matrix">Variant Matrix</h4>
            <span>Live queue</span>
          </div>
          <div className="matrix-table" role="table" aria-label="Variant matrix">
            {matrix.map(([id, angle, channel, status]) => (
              <div className="matrix-row" role="row" key={id}>
                <span role="cell">{id}</span>
                <strong role="cell">{angle}</strong>
                <em role="cell">{channel}</em>
                <b role="cell">{status}</b>
              </div>
            ))}
          </div>
        </section>

        <section className="console-panel" aria-labelledby="handoff-status">
          <div className="panel-heading">
            <h4 id="handoff-status">Handoff Readiness</h4>
            <span>Drafting</span>
          </div>
          <div className="handoff-meter" aria-label="Handoff readiness 72 percent">
            <span />
          </div>
          <p>72% ready. Claims review and final creative approval remain open.</p>
        </section>

        <section className="console-panel" aria-labelledby="documentation-notes">
          <div className="panel-heading">
            <h4 id="documentation-notes">Documentation Trail</h4>
            <span>Auto-drafted</span>
          </div>
          <p>Prompt v03, context source, QA status, owner, and production notes attached.</p>
        </section>
      </div>
    </div>
  );
}
