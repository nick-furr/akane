import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

async function updateStatus(formData: FormData) {
  'use server'
  const id = formData.get('id') as string
  const status = formData.get('status') as string
  const supabase = await createClient()
  await supabase.from('reservations').update({ status }).eq('id', id)
  revalidatePath('/admin/reservations')
}

const STATUS_STYLE: Record<string, { color: string; borderColor: string }> = {
  confirmed:  { color: 'var(--cream)',   borderColor: 'var(--line-strong)' },
  pending:    { color: 'var(--red)',     borderColor: 'var(--red)'         },
  cancelled:  { color: 'var(--fg-faint)', borderColor: 'var(--line)'      },
  no_show:    { color: 'var(--fg-faint)', borderColor: 'var(--line)'      },
}

const TH_STYLE: React.CSSProperties = {
  padding: '14px 16px',
  fontFamily: 'var(--font-mono), monospace',
  fontSize: 9,
  letterSpacing: '0.28em',
  textTransform: 'uppercase',
  color: 'var(--fg-faint)',
  textAlign: 'left',
  fontWeight: 500,
  whiteSpace: 'nowrap',
  borderBottom: '1px solid var(--line-strong)',
}

const TD_STYLE: React.CSSProperties = {
  padding: '16px',
  fontSize: 13,
  color: 'var(--fg-muted)',
  verticalAlign: 'top',
}

export default async function ReservationsPage() {
  const supabase = await createClient()
  const { data: reservations } = await supabase
    .from('reservations')
    .select('id, guest_name, guest_email, reservation_date, reservation_time, party_size, status, special_requests')
    .order('reservation_date', { ascending: false })

  return (
    <div>
      {/* Page header */}
      <div style={{ marginBottom: 40 }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>Reservations</div>
        <h1 style={{
          fontFamily: 'var(--font-serif), serif',
          fontSize: 'clamp(36px, 4vw, 56px)',
          fontWeight: 400,
          color: 'var(--cream)',
          margin: 0,
          lineHeight: 1,
        }}>
          Guest <em style={{ fontStyle: 'italic', color: 'var(--red)' }}>Book</em>
        </h1>
      </div>

      {/* Table */}
      <div style={{
        border: '1px solid var(--line)',
        background: 'var(--bg-elev)',
        overflowX: 'auto',
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ background: 'var(--bg-panel)' }}>
            <tr>
              <th style={TH_STYLE}>Guest</th>
              <th style={TH_STYLE}>Email</th>
              <th style={TH_STYLE}>Date</th>
              <th style={TH_STYLE}>Time</th>
              <th style={TH_STYLE}>Party</th>
              <th style={TH_STYLE}>Status</th>
              <th style={TH_STYLE}>Notes</th>
              <th style={TH_STYLE}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations?.map((r) => {
              const badge = STATUS_STYLE[r.status] ?? STATUS_STYLE.pending
              return (
                <tr key={r.id} className="admin-table-row" style={{ borderTop: '1px solid var(--line)' }}>
                  <td style={{ ...TD_STYLE, color: 'var(--cream)', fontFamily: 'var(--font-serif), serif', fontSize: 15 }}>
                    {r.guest_name}
                  </td>
                  <td style={TD_STYLE}>{r.guest_email}</td>
                  <td style={{ ...TD_STYLE, fontFamily: 'var(--font-mono), monospace', fontSize: 12, letterSpacing: '0.06em' }}>
                    {r.reservation_date}
                  </td>
                  <td style={{ ...TD_STYLE, fontFamily: 'var(--font-mono), monospace', fontSize: 12, letterSpacing: '0.06em' }}>
                    {r.reservation_time}
                  </td>
                  <td style={{ ...TD_STYLE, textAlign: 'center' }}>{r.party_size}</td>
                  <td style={TD_STYLE}>
                    <span style={{
                      display: 'inline-block',
                      fontSize: 9,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      border: `1px solid ${badge.borderColor}`,
                      color: badge.color,
                      fontFamily: 'var(--font-mono), monospace',
                    }}>
                      {r.status}
                    </span>
                  </td>
                  <td style={{ ...TD_STYLE, maxWidth: 200 }}>{r.special_requests ?? '—'}</td>
                  <td style={TD_STYLE}>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <form action={updateStatus}>
                        <input type="hidden" name="id" value={r.id} />
                        <input type="hidden" name="status" value="confirmed" />
                        <button
                          type="submit"
                          className="admin-btn-confirm"
                          disabled={r.status === 'confirmed'}
                        >
                          Confirm
                        </button>
                      </form>
                      <form action={updateStatus}>
                        <input type="hidden" name="id" value={r.id} />
                        <input type="hidden" name="status" value="cancelled" />
                        <button
                          type="submit"
                          className="admin-btn-cancel"
                          disabled={r.status === 'cancelled'}
                        >
                          Cancel
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              )
            })}
            {(!reservations || reservations.length === 0) && (
              <tr>
                <td
                  colSpan={8}
                  style={{
                    ...TD_STYLE,
                    textAlign: 'center',
                    padding: '60px 16px',
                    color: 'var(--fg-faint)',
                    fontFamily: 'var(--font-serif), serif',
                    fontStyle: 'italic',
                    fontSize: 18,
                    borderTop: '1px solid var(--line)',
                  }}
                >
                  No reservations yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Count */}
      {reservations && reservations.length > 0 && (
        <p style={{
          marginTop: 16,
          fontSize: 10,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--fg-faint)',
          fontFamily: 'var(--font-mono), monospace',
        }}>
          {reservations.length} reservation{reservations.length !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  )
}
