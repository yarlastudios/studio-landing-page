"use client";

import { useCountUp } from "@/hooks/useCountUp";

export function Stats() {
  useCountUp();

  return (
    <>
      <section className="stats">
        <div className="stat" data-count="62">
          <div className="stat-num">
            <span className="counter" data-to="62">
              0
            </span>
          </div>
          <div className="stat-label">Engagements shipped</div>
        </div>
        <div className="stat" data-count="14">
          <div className="stat-num">
            <span className="counter" data-to="14">
              0
            </span>
          </div>
          <div className="stat-label">People in the studio</div>
        </div>
        <div className="stat" data-count="98">
          <div className="stat-num">
            <span className="counter" data-to="98">
              0
            </span>
            <span className="stat-suf">%</span>
          </div>
          <div className="stat-label">Avg. Lighthouse score</div>
        </div>
        <div className="stat" data-count="7">
          <div className="stat-num">
            <span className="counter" data-to="7">
              0
            </span>
            <span className="stat-suf">y</span>
          </div>
          <div className="stat-label">Years independent</div>
        </div>
      </section>
    </>
  );
}