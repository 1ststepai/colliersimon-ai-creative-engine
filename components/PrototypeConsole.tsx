"use client";

import { useState } from "react";

const channels = [
  { name: "Paid Social", count: 18, status: "Needs QA" },
  { name: "CTV", count: 6, status: "Script pass" },
  { name: "Programmatic", count: 24, status: "Ready" },
  { name: "CRM/Lifecycle", count: 10, status: "Review" },
  { name: "Creator Studio", count: 8, status: "Direction set" }
];

type QaStatus = "Ready" | "Needs review" | "Locked" | "Complete";

type QaItem = {
  label: string;
  status: QaStatus;
  clearable: boolean;
};

const initialQaItems: QaItem[] = [
  { label: "Brand voice lock", status: "Ready", clearable: false },
  { label: "Source context present", status: "Ready", clearable: false },
  { label: "Claims reviewed", status: "Needs review", clearable: true },
  { label: "Channel specs matched", status: "Ready", clearable: false },
  { label: "No auto-publish", status: "Locked", clearable: false }
];

function getStatusClass(status: QaStatus) {
  if (status === "Ready") {
    return "qa-status-passed";
  }

  if (status === "Complete") {
    return "qa-status-cleared";
  }

  if (status === "Needs review") {
    return "qa-status-needs";
  }

  return "qa-status-locked";
}

export function PrototypeConsole() {
  const [qaItems, setQaItems] = useState(initialQaItems);
  const hasCompletedClaimsReview = qaItems.some(
    (item) => item.label === "Claims reviewed" && item.status === "Complete"
  );
  const handoffPercent = hasCompletedClaimsReview ? "88%" : "72%";
  const handoffText = hasCompletedClaimsReview
    ? "88% ready. Awaiting final creative approval."
    : "72% ready. Waiting on claims review and final creative approval before packaging.";

  function toggleQaItem(label: string) {
    setQaItems((items) =>
      items.map((item) =>
        item.label === label && item.clearable
          ? { ...item, status: item.status === "Needs review" ? "Complete" : "Needs review" }
          : item
      )
    );
  }

  return (
    <div className="console" aria-label="Campaign Variant Console static prototype">
      <div className="console-topbar">
        <div>
          <span className="console-label">Candidate prototype</span>
          <h3>Campaign Variant Console</h3>
          <p className="console-note">
            Demo interaction: mark a QA checkpoint complete to see handoff readiness update.
          </p>
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

        <section className="console-panel span-4" aria-labelledby="channel-outputs">
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
            <span>
              5 gates
              <small className="qa-hint">Click to mark claims review complete</small>
            </span>
          </div>
          <ul className="qa-list">
            {qaItems.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                {item.clearable ? (
                  <button
                    type="button"
                    className={`qa-status-button ${getStatusClass(item.status)}`}
                    aria-pressed={item.status === "Complete"}
                    aria-label={
                      item.status === "Complete"
                        ? "Claims review complete"
                        : "Click to mark claims review complete"
                    }
                    onClick={() => toggleQaItem(item.label)}
                  >
                    {item.status === "Complete" ? "Claims review complete" : item.status}
                  </button>
                ) : (
                  <strong className={getStatusClass(item.status)}>{item.status}</strong>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section className="console-panel" aria-labelledby="handoff-status">
          <div className="panel-heading">
            <h4 id="handoff-status">Handoff Status</h4>
            <span>Draft</span>
          </div>
          <div className="handoff-meter" aria-label={`Handoff readiness ${handoffPercent}`}>
            <span style={{ width: handoffPercent }} />
          </div>
          <p>{handoffText}</p>
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

        <section className="console-panel span-2" aria-labelledby="variant-preview">
          <div className="panel-heading">
            <h4 id="variant-preview">Variant Preview</h4>
            <span>A01 - Paid Social</span>
          </div>
          <p>Problem-framing hook / Growth audience / No flagged claims</p>
          <ul className="variant-list">
            <li>
              <span>V1</span>
              <p>{"You're generating more content than ever. You're not getting more results. Here's why."}</p>
            </li>
            <li>
              <span>V2</span>
              <p>Most AI tools make more content. This one makes fewer wrong decisions.</p>
            </li>
            <li>
              <span>V3</span>
              <p>Brief in. Variant matrix out. Brand rules, QA gates, and handoff documentation included.</p>
            </li>
          </ul>
          <p className="variant-prompt-meta">
            Prompt v03 / Context: brand rules + campaign brief / Human selection required
          </p>
        </section>
      </div>
    </div>
  );
}
