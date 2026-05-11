export function Process() {
  return (
<section className="process" id="process">
  <div className="section-head">
    <div className="section-tag"><span className="tag-num">/05</span><span>How we work</span></div>
    <h2 className="big-heading reveal-on-scroll">A four-phase rhythm. <em>Roughly</em> twelve weeks.</h2>
  </div>

  <ol className="process-list">
    <li className="step">
      <div className="step-side">
        <span className="step-num">01</span>
        <span className="step-week">Week 1-2</span>
      </div>
      <div className="step-body">
        <h3>Discover</h3>
        <p>
          Stakeholder interviews, audits, competitive teardowns, and a written
          narrative we both agree on. We don&apos;t open Figma until this is
          signed off.
        </p>
        <div className="step-tags">
          <span>Workshops</span><span>Audit</span><span>Narrative doc</span>
        </div>
      </div>
      <div className="step-line"><i></i></div>
    </li>
    <li className="step">
      <div className="step-side">
        <span className="step-num">02</span>
        <span className="step-week">Week 3-5</span>
      </div>
      <div className="step-body">
        <h3>Direction</h3>
        <p>Two distinct visual territories, each with art direction, type, motion, and one hero page fully art‑directed. You pick one. We refine.</p>
        <div className="step-tags">
          <span>Moodboards</span><span>Type studies</span><span>Hero pages</span>
        </div>
      </div>
      <div className="step-line"><i></i></div>
    </li>
    <li className="step">
      <div className="step-side">
        <span className="step-num">03</span>
        <span className="step-week">Week 6-10</span>
      </div>
      <div className="step-body">
        <h3>Design &amp; Build</h3>
        <p>Designers and engineers work in the same Figma + repo. Weekly demos. No 200‑page decks. The site builds itself page‑by‑page in staging.</p>
        <div className="step-tags">
          <span>Design system</span><span>CMS</span><span>Animation</span>
        </div>
      </div>
      <div className="step-line"><i></i></div>
    </li>
    <li className="step">
      <div className="step-side">
        <span className="step-num">04</span>
        <span className="step-week">Week 11-12</span>
      </div>
      <div className="step-body">
        <h3>Launch &amp; Care</h3>
        <p>QA across devices, performance audit, content load, soft launch, hard launch. Then a 30‑day care window where we live in your Slack.</p>
        <div className="step-tags">
          <span>QA</span><span>Perf</span><span>Care window</span>
        </div>
      </div>
      <div className="step-line"><i></i></div>
    </li>
  </ol>
</section>
  );
}