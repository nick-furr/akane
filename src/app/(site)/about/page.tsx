import Link from 'next/link'

const TIMELINE = [
  { year: '2012', title: 'Tokyo', body: 'Kenji Watanabe begins his apprenticeship at Sushi Saito, Ginza.' },
  { year: '2017', title: 'Paris', body: 'Seven years in Tokyo. One year in Paris, reconciling the two kitchens.' },
  { year: '2021', title: 'Founding', body: 'AKANE opens with eight counter seats. Ten tables follow six months later.' },
  { year: '2024', title: 'Second Star', body: 'Awarded a second Michelin star. Named "Restaurant of the Year" by Robb Report.' },
]

export default function AboutPage() {
  return (
    <main className="fade-in">
      {/* ── About Hero ── */}
      <section className="about-hero">
        <div>
          <div className="eyebrow">Our Story</div>
          <h1>
            A red<br />
            <em>line</em> in<br />
            the dark.
          </h1>
        </div>
        <div>
          <p className="lede">
            AKANE began with a single idea: that the very best sushi is <em>quiet.</em>
            No spectacle, no theater — only the fish, the rice, the hour.
          </p>
          <p className="lede-sub">
            We built a small room with a long counter and lit it like a lantern. Four years later,
            the idea is still the same. Every night we cut, press, torch, and serve — twice, then the
            door closes, and we begin again in the morning.
          </p>
        </div>
      </section>

      {/* ── Chef Block ── */}
      <section className="chef-block">
        <div className="chef-portrait">
          <span className="portrait-label">CHEF PORTRAIT · B&amp;W 35MM</span>
          <div className="stripes" />
          <span className="kanji-big">渡</span>
        </div>

        <div>
          <div className="eyebrow">The Chef</div>
          <h2>
            Kenji<br />
            <em>Watanabe.</em>
          </h2>
          <p>
            Kenji trained for seven years under Master Takashi Saito in Ginza, where he learned
            to cut, press, and serve without ever raising his voice. A year in Paris taught him
            that restraint travels.
          </p>
          <p>
            He opened AKANE in 2021 with a knife his teacher gave him and a single rule: if it
            isn&apos;t the best of its kind that morning, it isn&apos;t served. Four years on,
            the rule has not changed.
          </p>

          <div className="chef-stats">
            <div>
              <div className="chef-stat-n">★★</div>
              <div className="chef-stat-l">Michelin, 2024</div>
            </div>
            <div>
              <div className="chef-stat-n">18</div>
              <div className="chef-stat-l">Counter courses</div>
            </div>
            <div>
              <div className="chef-stat-n">14</div>
              <div className="chef-stat-l">Years behind the bar</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="timeline">
        <div className="container">
          <div className="timeline-head">
            <div>
              <div className="eyebrow">Chronology</div>
              <h2>A <em>short</em> history.</h2>
            </div>
            <div
              style={{
                fontFamily: "'Shippori Mincho', serif",
                fontSize: 22,
                color: 'var(--fg-faint)',
              }}
            >
              沿革
            </div>
          </div>

          <div className="tl-grid">
            {TIMELINE.map((entry) => (
              <div key={entry.year} className="tl-cell">
                <div className="tl-year">{entry.year}</div>
                <div className="tl-title">{entry.title}</div>
                <div className="tl-body">{entry.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="cta-strip">
        <div className="cta-left cta">
          <div className="eyebrow">The Invitation</div>
          <div>
            <h3>Come once. <em>Return</em> often.</h3>
            <p style={{ marginTop: 20 }}>
              The menu changes as the sea does. There is always a reason to sit again.
            </p>
          </div>
          <Link href="/booking" className="btn btn-red" style={{ alignSelf: 'flex-start' }}>
            Reserve a Seat →
          </Link>
        </div>

        <div className="cta-right cta">
          <div className="kanji-bg">茜</div>
          <div className="eyebrow" style={{ color: 'var(--cream)' }}>Press</div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3>
              <em>&ldquo;The most disciplined</em><br />sushi bar in New York.&rdquo;
            </h3>
            <p
              style={{
                marginTop: 20,
                fontSize: 12,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(242,236,226,0.85)',
              }}
            >
              — The New York Times · 2024
            </p>
          </div>
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              fontSize: 10,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: 'rgba(242,236,226,0.7)',
            }}
          >
            Michelin ★★ · Robb Report 2024 · The World&apos;s 50 Best (#31)
          </div>
        </div>
      </section>
    </main>
  )
}
