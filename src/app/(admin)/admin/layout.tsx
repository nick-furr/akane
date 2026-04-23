import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Sidebar */}
      <aside style={{
        width: 216,
        flexShrink: 0,
        borderRight: '1px solid var(--line)',
        background: 'var(--bg-elev)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Brand */}
        <div style={{ padding: '28px 24px 24px', borderBottom: '1px solid var(--line)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              fontFamily: "'Shippori Mincho', serif",
              color: 'var(--red)',
              fontSize: 22,
              lineHeight: 1,
            }}>茜</span>
            <span style={{
              fontFamily: 'var(--font-serif), serif',
              fontStyle: 'italic',
              letterSpacing: '0.22em',
              fontSize: 13,
              color: 'var(--cream)',
              textTransform: 'uppercase',
            }}>AKANE</span>
          </Link>
        </div>

        {/* Nav */}
        <nav style={{ padding: '20px 12px', flex: 1 }}>
          <p style={{
            fontSize: 9,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'var(--fg-faint)',
            padding: '0 12px',
            marginBottom: 12,
          }}>Admin</p>
          <Link href="/admin" className="admin-sidebar-link">Dashboard</Link>
          <Link href="/admin/reservations" className="admin-sidebar-link">Reservations</Link>
        </nav>

        {/* Footer */}
        <div style={{
          padding: '16px 24px',
          borderTop: '1px solid var(--line)',
          fontSize: 9,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--fg-faint)',
        }}>
          Staff Portal
        </div>
      </aside>

      <main style={{ flex: 1, padding: '48px', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  )
}
