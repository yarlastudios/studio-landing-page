export function Services() {
  return (
<section className="services" id="services">
  <div className="section-head">
    <div className="section-tag"><span className="tag-num">/04</span><span>What we do</span></div>
    <h2 className="big-heading reveal-on-scroll">Six disciplines, one team. <em>No hand-offs.</em></h2>
  </div>

  <div className="services-grid">
    <article className="svc" data-cursor="card">
      <div className="svc-num">01</div>
      <h3 className="svc-title">Brand & Identity</h3>
      <p className="svc-desc">Positioning, naming, visual identity, and the systems that scale them across every surface.</p>
      <ul className="svc-list">
        <li>Strategy &amp; narrative</li>
        <li>Logo &amp; wordmark</li>
        <li>Type &amp; color systems</li>
        <li>Brand guidelines</li>
      </ul>
      <div className="svc-art">
        <div className="art-ring"></div>
        <div className="art-ring r2"></div>
        <div className="art-dot"></div>
      </div>
    </article>

    <article className="svc" data-cursor="card">
      <div className="svc-num">02</div>
      <h3 className="svc-title">Website Design</h3>
      <p className="svc-desc">Marketing sites that load fast, convert, and feel inevitable. From sitemap to launch.</p>
      <ul className="svc-list">
        <li>UX architecture</li>
        <li>Art direction</li>
        <li>Copy &amp; tone</li>
        <li>Conversion design</li>
      </ul>
      <div className="svc-art">
        <div className="art-window"><i></i><i></i><i></i></div>
      </div>
    </article>

    <article className="svc" data-cursor="card">
      <div className="svc-num">03</div>
      <h3 className="svc-title">Engineering</h3>
      <p className="svc-desc">Webflow, headless, Next.js, custom CMS — pick a stack, we&apos;ll ship it without compromise.</p>
      <ul className="svc-list">
        <li>Webflow &amp; CMS</li>
        <li>Next.js / Astro</li>
        <li>Sanity, Contentful</li>
        <li>Performance budgets</li>
      </ul>
      <div className="svc-art">
        <div className="art-code">
          <span>&#123; </span><span className="c-tag">design</span><span>: </span><span className="c-str">&quot;engineering&quot;</span><span> &#125;</span>
        </div>
      </div>
    </article>

    <article className="svc" data-cursor="card">
      <div className="svc-num">04</div>
      <h3 className="svc-title">Product UX</h3>
      <p className="svc-desc">Dashboards, onboarding, and complex flows for early‑stage products that need to feel obvious.</p>
      <ul className="svc-list">
        <li>Discovery &amp; research</li>
        <li>Design systems</li>
        <li>Prototyping</li>
        <li>Usability testing</li>
      </ul>
      <div className="svc-art">
        <div className="art-stack">
          <div className="ast"></div><div className="ast"></div><div className="ast"></div>
        </div>
      </div>
    </article>

    <article className="svc" data-cursor="card">
      <div className="svc-num">05</div>
      <h3 className="svc-title">Motion &amp; 3D</h3>
      <p className="svc-desc">Hero animations, scroll narratives, and lightweight 3D — built natively in the browser.</p>
      <ul className="svc-list">
        <li>WebGL / R3F</li>
        <li>GSAP / Lottie</li>
        <li>Cinemagraphs</li>
        <li>Interaction prototypes</li>
      </ul>
      <div className="svc-art">
        <div className="art-wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
      </div>
    </article>

    <article className="svc" data-cursor="card">
      <div className="svc-num">06</div>
      <h3 className="svc-title">Care &amp; Growth</h3>
      <p className="svc-desc">Most projects don&apos;t end at launch. Retainers for iteration, A/B, and content velocity.</p>
      <ul className="svc-list">
        <li>Quarterly roadmaps</li>
        <li>Experiments &amp; testing</li>
        <li>Content production</li>
        <li>Analytics</li>
      </ul>
      <div className="svc-art">
        <div className="art-graph">
          <svg viewBox="0 0 100 50" preserveAspectRatio="none">
            <polyline points="0,40 15,30 30,34 45,18 60,22 75,8 100,12" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>
    </article>
  </div>
</section>
  );
}