'use client'

import { useState } from 'react'
import Link from 'next/link'

type FormState = {
  reservationDate: string
  reservationTime: string
  partySize: number
  guestName: string
  guestEmail: string
  guestPhone: string
  specialRequests: string
}

const INITIAL: FormState = {
  reservationDate: '',
  reservationTime: '',
  partySize: 2,
  guestName: '',
  guestEmail: '',
  guestPhone: '',
  specialRequests: '',
}

const TIMES = [
  '17:30', '18:00', '18:30', '19:00',
  '19:30', '20:00', '20:30', '21:00',
]

const STEP_LABELS = ['Date & Time', 'Your Details', 'Confirm']

function todayString() {
  return new Date().toISOString().split('T')[0]
}

function formatDate(dateStr: string) {
  if (!dateStr) return '—'
  const [y, m, d] = dateStr.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BookingPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormState>(INITIAL)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [reservationId, setReservationId] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((prev) => ({ ...prev, [k]: v }))

  const stepValid = [
    !!form.reservationDate && !!form.reservationTime,
    !!form.guestName && form.guestEmail.includes('@'),
    true,
  ]

  const next = () => setStep((s) => Math.min(s + 1, 2))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  async function handleConfirm() {
    setError(null)
    setLoading(true)

    const body: Record<string, unknown> = {
      guestName: form.guestName,
      guestEmail: form.guestEmail,
      restaurantId: process.env.NEXT_PUBLIC_RESTAURANT_ID,
      reservationDate: form.reservationDate,
      reservationTime: form.reservationTime,
      partySize: form.partySize,
    }

    if (form.guestPhone.trim()) body.guestPhone = form.guestPhone.trim()
    if (form.specialRequests.trim()) body.specialRequests = form.specialRequests.trim()

    try {
      const res = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.')
        return
      }

      setReservationId(data.id)
    } catch {
      setError('Could not reach the server. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  if (reservationId) {
    const ref = reservationId.slice(0, 8).toUpperCase()

    function handleCopy() {
      navigator.clipboard.writeText(ref).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }

    return (
      <main>
        <div className="book-wrap" style={{ display: 'block', padding: '120px 40px' }}>
          <div className="confirm-screen">
            <div className="confirm-mark">有難う</div>
            <h2>
              Thank you, <em>{form.guestName.split(' ')[0] || 'friend'}.</em>
            </h2>
            <p style={{ color: 'var(--fg-muted)', fontSize: 14, lineHeight: 1.7 }}>
              We&apos;ve sent a confirmation to{' '}
              <span style={{ color: 'var(--cream)' }}>{form.guestEmail}</span>.
              Your seat for {form.partySize} is held for {formatDate(form.reservationDate)} at{' '}
              {form.reservationTime}.
            </p>

            <button
              onClick={handleCopy}
              className="confirm-ref"
              style={{ position: 'relative', display: 'block', margin: '20px auto 0' }}
            >
              <span
                style={{
                  display: 'block',
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--fg-muted)',
                  marginBottom: 6,
                }}
              >
                Booking Reference — tap to copy
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 18, color: 'var(--red)', letterSpacing: '0.25em' }}>
                {ref}
              </span>
              {copied && (
                <span
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: 16,
                    transform: 'translateY(-50%)',
                    fontSize: 10,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--red)',
                  }}
                >
                  Copied!
                </span>
              )}
            </button>

            <p
              style={{
                marginTop: 20,
                fontStyle: 'italic',
                color: 'var(--fg-faint)',
                fontSize: 14,
              }}
            >
              いらっしゃいませ — we&apos;ll be watching for you at the door.
            </p>

            <Link href="/" className="btn btn-red" style={{ marginTop: 30, display: 'inline-flex' }}>
              Back to Home →
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main>
      <div className="book-wrap">
        {/* Left side */}
        <div className="book-left">
          <div className="book-kanji">予約</div>
          <div className="eyebrow">Reserve</div>
          <h1>
            An evening at<br />
            <em>AKANE.</em>
          </h1>
          <p>
            Reservations open thirty days in advance at ten AM Eastern. Counter seats move
            quickly. Tables hold for two hours; the counter, two and a half. A card on file
            secures the seating — we only charge if you don&apos;t arrive.
          </p>
          <div
            style={{
              marginTop: 40,
              padding: '20px 0',
              borderTop: '1px solid var(--line)',
              fontSize: 12,
              letterSpacing: '0.16em',
              color: 'var(--fg-muted)',
              textTransform: 'uppercase',
            }}
          >
            <div style={{ marginBottom: 8 }}>
              Questions?{' '}
              <span style={{ color: 'var(--red)' }}>reserve@akane.nyc</span>
            </div>
            <div>
              Or call us ·{' '}
              <span style={{ color: 'var(--cream)' }}>+1 (212) 555 0142</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div>
          <div className="book-steps">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`book-step-dot${i < step ? ' done' : i === step ? ' active' : ''}`}
              />
            ))}
          </div>
          <div className="book-step-labels">
            {STEP_LABELS.map((label, i) => (
              <span
                key={i}
                className={i < step ? 'done' : i === step ? 'active' : undefined}
              >
                {String(i + 1).padStart(2, '0')} · {label}
              </span>
            ))}
          </div>

          <div className="book-panel">
            {/* Step 0 — Date, Time, Party */}
            {step === 0 && (
              <div className="fade-in">
                <h2>When shall we <em>expect you?</em></h2>
                <p className="book-lead">Party size, then date and time.</p>

                <div className="field">
                  <label>Party size</label>
                  <div className="party-grid">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <button
                        key={n}
                        className={`pill${form.partySize === n ? ' selected' : ''}`}
                        onClick={() => set('partySize', n)}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label>Date</label>
                  <input
                    type="date"
                    min={todayString()}
                    value={form.reservationDate}
                    onChange={(e) => set('reservationDate', e.target.value)}
                  />
                </div>

                <div className="field">
                  <label>Time</label>
                  <div className="time-grid">
                    {TIMES.map((t) => (
                      <button
                        key={t}
                        className={`pill${form.reservationTime === t ? ' selected' : ''}`}
                        onClick={() => set('reservationTime', t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: 11,
                      color: 'var(--fg-faint)',
                      letterSpacing: '0.12em',
                    }}
                  >
                    Tuesday – Saturday seatings only.
                  </p>
                </div>
              </div>
            )}

            {/* Step 1 — Guest Details */}
            {step === 1 && (
              <div className="fade-in">
                <h2>Your <em>details.</em></h2>
                <p className="book-lead">For confirmation and in case we need to reach you.</p>

                <div className="field">
                  <label>Full name</label>
                  <input
                    type="text"
                    autoComplete="name"
                    value={form.guestName}
                    onChange={(e) => set('guestName', e.target.value)}
                    placeholder="Sasha Mori"
                  />
                </div>

                <div className="field">
                  <div className="field-row">
                    <div>
                      <label>Email</label>
                      <input
                        type="email"
                        autoComplete="email"
                        value={form.guestEmail}
                        onChange={(e) => set('guestEmail', e.target.value)}
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label>Phone <span style={{ letterSpacing: 0, textTransform: 'none', opacity: 0.5 }}>(optional)</span></label>
                      <input
                        type="tel"
                        autoComplete="tel"
                        value={form.guestPhone}
                        onChange={(e) => set('guestPhone', e.target.value)}
                        placeholder="+1 (212) 555 0000"
                      />
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label>Allergies, occasions, notes <span style={{ letterSpacing: 0, textTransform: 'none', opacity: 0.5 }}>(optional)</span></label>
                  <textarea
                    rows={3}
                    value={form.specialRequests}
                    onChange={(e) => set('specialRequests', e.target.value)}
                    placeholder="Shellfish allergy, celebrating our 10th anniversary."
                  />
                </div>
              </div>
            )}

            {/* Step 2 — Confirm */}
            {step === 2 && (
              <div className="fade-in">
                <h2>Please <em>confirm.</em></h2>
                <p className="book-lead">A card is placed on file. No charge unless you don&apos;t arrive.</p>

                <div style={{ marginTop: 20 }}>
                  <div className="summary-row">
                    <div className="summary-label">Date</div>
                    <div className="summary-value">{formatDate(form.reservationDate)}</div>
                  </div>
                  <div className="summary-row">
                    <div className="summary-label">Time</div>
                    <div className="summary-value">{form.reservationTime}</div>
                  </div>
                  <div className="summary-row">
                    <div className="summary-label">Party</div>
                    <div className="summary-value">
                      {form.partySize} {form.partySize === 1 ? 'guest' : 'guests'}
                    </div>
                  </div>
                  <div className="summary-row">
                    <div className="summary-label">Guest</div>
                    <div className="summary-value">{form.guestName}</div>
                  </div>
                  <div className="summary-row">
                    <div className="summary-label">Contact</div>
                    <div className="summary-value" style={{ fontSize: 14 }}>{form.guestEmail}</div>
                  </div>
                  {form.specialRequests && (
                    <div className="summary-row">
                      <div className="summary-label">Notes</div>
                      <div className="summary-value" style={{ fontSize: 14, maxWidth: 280, textAlign: 'right' }}>
                        {form.specialRequests}
                      </div>
                    </div>
                  )}
                </div>

                {error && (
                  <p
                    role="alert"
                    style={{
                      marginTop: 20,
                      fontSize: 13,
                      color: '#f87171',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {error}
                  </p>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="book-actions">
              {step > 0 ? (
                <button className="btn btn-ghost" onClick={back} disabled={loading}>
                  ← Back
                </button>
              ) : (
                <span style={{ flex: 1 }} />
              )}

              {step < 2 ? (
                <button
                  className="btn btn-red"
                  disabled={!stepValid[step]}
                  style={!stepValid[step] ? { opacity: 0.4, cursor: 'not-allowed' } : {}}
                  onClick={() => stepValid[step] && next()}
                >
                  Continue →
                </button>
              ) : (
                <button
                  className="btn btn-red"
                  disabled={loading}
                  style={loading ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
                  onClick={handleConfirm}
                >
                  {loading ? 'Confirming…' : 'Confirm Reservation →'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
