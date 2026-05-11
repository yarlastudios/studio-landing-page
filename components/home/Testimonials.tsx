"use client";

import { useCarousel } from "@/hooks/useCarousel";

export function Testimonials() {
  useCarousel();

  return (
    <>
      <section className="testimonials" id="testimonials">
        <div className="section-head">
          <div className="section-tag">
            <span className="tag-num">/06</span>
            <span>Words from clients</span>
          </div>
        </div>

        <div className="quote-stage">
          <button
            className="q-arrow q-prev"
            type="button"
            aria-label="Previous quote"
            data-cursor="link"
          >
            ←
          </button>
          <div className="quote-frame">
            <blockquote className="quote active" data-q="0">
              <p>
                Yarla is the rare studio that treats design and
                engineering as the same craft. Our marketing site shipped in 9
                weeks, and three of the components became the foundation of our
                product.
              </p>
              <footer>
                <span className="q-name">Asha Menon</span>
                <span className="q-role">Co-founder, Helio Banking</span>
              </footer>
            </blockquote>
            <blockquote className="quote" data-q="1">
              <p>
                They pushed us harder than any agency we&apos;ve worked
                with. The visual system they built is now used across our app,
                our investor decks, and our office walls.
              </p>
              <footer>
                <span className="q-name">Marcus Liu</span>
                <span className="q-role">VP Brand, Northwind Energy</span>
              </footer>
            </blockquote>
            <blockquote className="quote" data-q="2">
              <p>
                Most studios send you a deck. Yarla sent us a working
                prototype on day four. That set the tone for everything that came
                after.
              </p>
              <footer>
                <span className="q-name">Priya Shah</span>
                <span className="q-role">Founder, Pareto.fund</span>
              </footer>
            </blockquote>
          </div>
          <button
            className="q-arrow q-next"
            type="button"
            aria-label="Next quote"
            data-cursor="link"
          >
            →
          </button>
        </div>
        <div className="quote-dots" id="quoteDots">
          <button
            className="qd active"
            type="button"
            data-q="0"
            aria-label="Show quote 1"
            data-cursor="link"
          />
          <button
            className="qd"
            type="button"
            data-q="1"
            aria-label="Show quote 2"
            data-cursor="link"
          />
          <button
            className="qd"
            type="button"
            data-q="2"
            aria-label="Show quote 3"
            data-cursor="link"
          />
        </div>
      </section>
    </>
  );
}