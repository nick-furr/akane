export default function DashboardPage() {
  return (
    <div>
      <div className="eyebrow" style={{ marginBottom: 16 }}>Overview</div>
      <h1 style={{
        fontFamily: 'var(--font-serif), serif',
        fontSize: 'clamp(36px, 4vw, 56px)',
        fontWeight: 400,
        color: 'var(--cream)',
        margin: '0 0 24px',
        lineHeight: 1,
      }}>
        Good <em style={{ fontStyle: 'italic', color: 'var(--red)' }}>evening.</em>
      </h1>
      <p style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.8 }}>
        Summary stats and quick actions coming soon.
      </p>
    </div>
  )
}
