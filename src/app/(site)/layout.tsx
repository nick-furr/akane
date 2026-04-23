import NavBar from './_components/NavBar'
import Link from 'next/link'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg)' }}>
      <div className="grain" />
      <NavBar />
      <div className="flex-1">{children}</div>

      <footer className="ak-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-brand-mark">茜</div>
              <div className="footer-brand-name">AKANE</div>
              <p>
                Eight seats at the counter.<br />
                Ten tables in the room.<br />
                One kitchen.
              </p>
            </div>

            <div className="footer-col">
              <h4>Visit</h4>
              <p>
                148 Franklin Street<br />
                Tribeca, New York<br />
                NY 10013
              </p>
            </div>

            <div className="footer-col">
              <h4>Hours</h4>
              <p>
                Tuesday — Saturday<br />
                Seatings 5:30 — 9:30<br />
                Closed Sun &amp; Mon
              </p>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <p>
                <a href="mailto:reserve@akane.nyc">reserve@akane.nyc</a><br />
                <a href="tel:+12125550142">+1 (212) 555 0142</a><br />
                <a href="#">@akane.nyc</a>
              </p>
            </div>
          </div>

          <div className="footer-bot">
            <span>© 2026 AKANE 茜</span>
            <span style={{ color: 'var(--fg-faint)', fontSize: 11, letterSpacing: '0.16em' }}>
              Built by{' '}
              <Link
                href="https://nickfurr.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}
              >
                Nick Furr
              </Link>
            </span>
            <span>Designed in Tribeca</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
