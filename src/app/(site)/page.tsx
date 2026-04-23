import Link from 'next/link'

const SIGNATURE = [
  {
    name: 'Otoro Nigiri',
    jp: '大トロ 握り',
    desc: 'Ten-day aged bluefin belly, torched with koji salt over warm akazu rice. The dish that defines us.',
    price: '$32',
    kanji: '鮪',
    chef: true,
  },
  {
    name: 'A5 Wagyu Robata',
    jp: '和牛 炉端',
    desc: 'Miyazaki tenderloin over binchotan, burnt miso glaze, wasabi leaf, pickled ramp.',
    price: '$68',
    kanji: '牛',
    chef: false,
  },
  {
    name: 'Uni Toast',
    jp: '雲丹 トースト',
    desc: 'Santa Barbara uni, brown butter brioche, cured yolk, chive oil. For two hands only.',
    price: '$28',
    kanji: '雲',
    chef: true,
  },
]

const TICKER_ITEMS = [
  'TOYOSU MORNING CATCH',
  '·',
  'HOKKAIDO UNI',
  '·',
  'AKAZU AGED RICE',
  '·',
  'BINCHOTAN CHARCOAL',
  '·',
  'BLUEFIN, AGED TEN DAYS',
  '·',
  'SANTA BARBARA UNI',
  '·',
  'DASSAI 23 POUR',
  '·',
]

const BAND_ITEMS = [
  'いらっしゃいませ',
  '✦',
  'Welcome to AKANE',
  '✦',
  '本日の握り',
  '✦',
  "Tonight's Counter",
  '✦',
  '大トロ · 雲丹 · 和牛',
  '✦',
]

export default function HomePage() {
  return (
    <main className="fade-in">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-left">
          <div>
            <div className="eyebrow">Est. Tribeca · MMXXI</div>
            <h1 className="hero-title" style={{ marginTop: 40 }}>
              Eight seats.<br />
              <span className="em">One</span> kitchen.<br />
              <span style={{ fontStyle: 'italic' }}>Zero</span> compromise.
            </h1>
            <p className="hero-sub">
              AKANE is a counter-first sushi restaurant on Franklin Street. Chef Kenji Watanabe
              serves eighteen courses in two and a half hours — precisely, quietly, every night.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
              <Link href="/booking" className="btn btn-red">
                Reserve a Seat <span>→</span>
              </Link>
              <Link href="/menu" className="btn">
                View the Menu
              </Link>
            </div>
          </div>
          <div className="hero-meta">
            <div>
              Michelin
              <b>★★ 2024</b>
            </div>
            <div>
              Seats
              <b>8 counter · 10 tables</b>
            </div>
            <div>
              Evenings
              <b>Tue — Sat</b>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-kanji-bg">茜</div>
          <div className="hero-plate">
            <svg
              width="240"
              height="240"
              viewBox="0 0 240 240"
              style={{ position: 'relative', zIndex: 3 }}
            >
              <circle
                cx="120" cy="120" r="118"
                fill="none"
                stroke="#F2ECE2"
                strokeOpacity="0.18"
                strokeDasharray="2 6"
              />
              <circle
                cx="120" cy="120" r="80"
                fill="none"
                stroke="#F2ECE2"
                strokeOpacity="0.25"
              />
              <circle cx="120" cy="120" r="40" fill="#E0142E" />
            </svg>
          </div>
        </div>

        <div className="hero-ticker">
          <div className="hero-ticker-track">
            {[0, 1].map((pass) =>
              TICKER_ITEMS.map((item, i) => (
                <span key={`${pass}-${i}`}>{item}</span>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="section">
        <div className="container">
          <div className="phi">
            <div className="phi-left">
              <div className="phi-kanji">
                茜<span className="red">.</span>
              </div>
              <div className="eyebrow">Philosophy</div>
              <h2 style={{ marginTop: 24 }}>
                <em>Akane</em> is the red of a sky{' '}
                <br />the moment it burns.
              </h2>
              <p>
                A single color. The instant before night. We cook to that moment — the quick
                flame, the first clean bite, the one gesture that can&apos;t be taken back.
              </p>
            </div>

            <div>
              {[
                {
                  num: '01',
                  title: 'The Fish',
                  body: 'We buy from three dealers, all in Toyosu, all before six AM. Anything that doesn\'t pass the counter is returned. No exceptions, no second-best.',
                },
                {
                  num: '02',
                  title: 'The Rice',
                  body: 'Koshihikari, one single-farm source, aged 18 months. Seasoned with akazu — red vinegar pressed from sake lees, 45 years old.',
                },
                {
                  num: '03',
                  title: 'The Knife',
                  body: "Every cut by hand. Chef Kenji's yanagiba was made in Sakai in 1998 by Keijiro Doi. He has used no other knife for twenty years.",
                },
                {
                  num: '04',
                  title: 'The Hour',
                  body: 'Two seatings a night. 5:30 and 8:00. The counter is never rushed, never doubled. When you sit, the evening is yours.',
                },
              ].map((row) => (
                <div key={row.num} className="divider-row">
                  <div className="num">{row.num}</div>
                  <div className="title">{row.title}</div>
                  <div className="body">{row.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Red Marquee Band ── */}
      <div className="band">
        <div className="band-track">
          {[0, 1].map((pass) =>
            BAND_ITEMS.map((item, i) => (
              <span key={`${pass}-${i}`} className={item === '✦' ? 'dot' : undefined}>
                {item}
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── Signature Selections ── */}
      <section className="section">
        <div className="container">
          <div className="sig-head">
            <div>
              <div className="eyebrow">Signature Selections</div>
              <h2>
                Dishes that<br />
                <em>define</em> the room.
              </h2>
            </div>
            <Link href="/menu" className="btn">
              Full Menu <span>→</span>
            </Link>
          </div>

          <div className="sig-grid">
            {SIGNATURE.map((dish, i) => (
              <Link key={i} href="/menu" className="sig-card">
                <div className="sig-plate">
                  <span className="plate-label">PLATE · {String(i + 1).padStart(2, '0')}</span>
                  <div className="stripes" />
                  <span className="kanji-mark">{dish.kanji}</span>
                </div>
                <div className="sig-head-row">
                  <div>
                    <div className="sig-name">{dish.name}</div>
                    <div className="sig-name-jp">{dish.jp}</div>
                  </div>
                  <div className="sig-price">{dish.price}</div>
                </div>
                <div className="sig-desc">{dish.desc}</div>
                <div className="sig-tag">
                  <span>No. {String(i + 1).padStart(2, '0')} / 18</span>
                  {dish.chef && <span className="chef">Chef&apos;s Table</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section className="cta-strip">
        <div className="cta-left cta">
          <div className="eyebrow">Visit</div>
          <div>
            <h3>
              148 Franklin Street,<br />
              <em>Tribeca.</em>
            </h3>
            <p style={{ marginTop: 24 }}>
              Between Hudson and Varick. A black door, unmarked but for a single red lantern.
              Arrive a few minutes early — we begin the moment everyone is seated.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              gap: 20,
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--fg-muted)',
            }}
          >
            <span>6 MIN · FRANKLIN ST [1]</span>
            <span>·</span>
            <span>VALET AFTER 6 PM</span>
          </div>
        </div>

        <div className="cta-right cta">
          <div className="kanji-bg">予</div>
          <div className="eyebrow" style={{ color: 'var(--cream)' }}>Reserve</div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3>
              The counter seats<br />
              <em>eight.</em> Book early.
            </h3>
            <p style={{ marginTop: 24 }}>
              We open the reservation book thirty days ahead, at ten AM Eastern. Counter seats
              are held for six days. After that, they move.
            </p>
          </div>
          <Link
            href="/booking"
            className="btn"
            style={{
              alignSelf: 'flex-start',
              borderColor: 'var(--cream)',
              color: 'var(--cream)',
              position: 'relative',
              zIndex: 2,
            }}
          >
            Open the Book <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
