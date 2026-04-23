import Link from 'next/link'

export default function ContactPage() {
  return (
    <main className="fade-in">
      {/* Hero */}
      <section className="menu-hero" style={{ borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="eyebrow">Find Us</div>
          <h1 className="menu-hero-title">
            <em>Contact.</em>
          </h1>
        </div>
        <div className="menu-hero-jp">場所</div>
      </section>

      {/* Details */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 60,
            }}
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}>Address</div>
              <address
                style={{
                  fontStyle: 'normal',
                  fontSize: 15,
                  lineHeight: 1.9,
                  color: 'var(--fg-muted)',
                }}
              >
                148 Franklin Street<br />
                Tribeca, New York<br />
                NY 10013
              </address>
            </div>

            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}>Contact</div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.9,
                  color: 'var(--fg-muted)',
                }}
              >
                <a href="mailto:reserve@akane.nyc" style={{ transition: 'color 0.2s' }}>
                  reserve@akane.nyc
                </a>
                <br />
                <a href="tel:+12125550142" style={{ transition: 'color 0.2s' }}>
                  +1 (212) 555 0142
                </a>
                <br />
                <a href="#" style={{ transition: 'color 0.2s' }}>@akane.nyc</a>
              </p>
            </div>

            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}>Hours</div>
              <dl style={{ fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.9 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginBottom: 4 }}>
                  <dt>Tuesday – Saturday</dt>
                  <dd>5:30 – 9:30 pm</dd>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
                  <dt>Sun &amp; Mon</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--fg-faint)',
                }}
              >
                Two seatings nightly · Counter seats limited
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="cta-left cta">
          <div className="eyebrow">Reservations</div>
          <div>
            <h3>
              Ready to join us<br />
              <em>for an evening?</em>
            </h3>
            <p style={{ marginTop: 20 }}>
              Counter seats and dining room tables available. Reservations open thirty
              days ahead at ten AM Eastern.
            </p>
          </div>
          <Link href="/booking" className="btn btn-red" style={{ alignSelf: 'flex-start' }}>
            Reserve a Table →
          </Link>
        </div>

        <div className="cta-right cta">
          <div className="kanji-bg">茜</div>
          <div className="eyebrow" style={{ color: 'var(--cream)' }}>Getting Here</div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3>
              <em>6 minutes</em> from<br />Franklin St [1]
            </h3>
            <p style={{ marginTop: 20 }}>
              Between Hudson and Varick. A black door, unmarked but for a single red lantern.
              Valet parking available after 6 PM.
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
            Tribeca · New York · NY 10013
          </div>
        </div>
      </section>
    </main>
  )
}
