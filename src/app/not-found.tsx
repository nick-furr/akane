import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '40px',
        textAlign: 'center',
      }}
    >
      <div className="grain" />

      {/* Kanji watermark — 迷 "lost / astray" */}
      <div
        style={{
          position: 'absolute',
          fontFamily: "'Shippori Mincho', serif",
          fontSize: 'clamp(280px, 45vw, 520px)',
          lineHeight: 1,
          color: 'var(--red)',
          opacity: 0.06,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        迷
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 560, width: '100%' }}>
        <p
          style={{
            fontSize: 10,
            letterSpacing: '0.42em',
            textTransform: 'uppercase',
            color: 'var(--red)',
            margin: '0 0 48px',
            fontWeight: 500,
          }}
        >
          AKANE 茜
        </p>

        <h1
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: 'clamp(100px, 18vw, 200px)',
            fontWeight: 400,
            lineHeight: 0.9,
            color: 'var(--cream)',
            letterSpacing: '-0.03em',
            margin: '0 0 32px',
          }}
        >
          4<span style={{ fontStyle: 'italic', color: 'var(--red)' }}>0</span>4
        </h1>

        <div
          style={{
            width: 48,
            height: 1,
            background: 'var(--line-strong)',
            margin: '0 auto 32px',
          }}
        />

        <h2
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontStyle: 'italic',
            fontSize: 'clamp(22px, 3.5vw, 36px)',
            fontWeight: 400,
            color: 'var(--cream)',
            margin: '0 0 20px',
          }}
        >
          This path leads nowhere.
        </h2>

        <p
          style={{
            fontSize: 14,
            color: 'var(--fg-muted)',
            lineHeight: 1.8,
            maxWidth: 340,
            margin: '0 auto 44px',
          }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link href="/" className="btn" style={{ justifyContent: 'center' }}>
          Return to AKANE <span>→</span>
        </Link>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 32,
          fontSize: 10,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: 'var(--fg-faint)',
        }}
      >
        148 Franklin Street · Tribeca · New York
      </div>
    </div>
  )
}
