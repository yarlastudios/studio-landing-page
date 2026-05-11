export function Journal() {
  return (
    <>
      <section className="journal" id="journal">
        <div className="section-head">
          <div className="section-tag">
            <span className="tag-num">/07</span>
            <span>Journal</span>
          </div>
          <h2 className="big-heading reveal-on-scroll">Notes from the studio.</h2>
        </div>

        <div className="journal-grid">
          <a href="#" className="post" data-cursor="link">
            <div className="post-meta">Essay · 6 min · Apr 2026</div>
            <h3>Why we stopped pitching with decks.</h3>
            <p>
              Three years ago we replaced our pitch decks with working
              prototypes. Here&apos;s what changed.
            </p>
            <span className="post-arrow">→</span>
          </a>
          <a href="#" className="post" data-cursor="link">
            <div className="post-meta">Field note · 3 min · Mar 2026</div>
            <h3>A studio retainer that actually retains.</h3>
            <p>
              Most retainers die in month four. We rebuilt ours around outcomes
              instead of hours.
            </p>
            <span className="post-arrow">→</span>
          </a>
          <a href="#" className="post" data-cursor="link">
            <div className="post-meta">Talk · Recording · Feb 2026</div>
            <h3>Designing systems that survive the team.</h3>
            <p>
              Our talk at Config 2026 on writing brand systems for the
              engineering team, not just the brand team.
            </p>
            <span className="post-arrow">→</span>
          </a>
        </div>
      </section>
    </>
  );
}