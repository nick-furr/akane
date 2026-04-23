import { createClient } from '@/lib/supabase/server'
import MenuClient from './MenuClient'

type MenuItem = {
  id: string
  name: string
  description: string | null
  price: string | number
  category: string
}

const CATEGORY_CONFIG: Record<
  string,
  { label: string; jp: string; tagline: string; order: number }
> = {
  appetizer: { label: 'Small Plates', jp: '小皿', tagline: 'For the start. For sharing.', order: 0 },
  main: { label: 'Main Courses', jp: '主菜', tagline: 'The heart of the menu.', order: 1 },
  dessert: { label: 'Desserts', jp: '甘味', tagline: 'The quiet end.', order: 2 },
  drink: { label: 'Sake & Drinks', jp: '酒', tagline: '120-label program. Pairings by the glass.', order: 3 },
}

export default async function MenuPage() {
  const supabase = await createClient()
  const { data: items } = await supabase
    .from('menu_items')
    .select('id, name, description, price, category')
    .eq('available', true)
    .order('category')
    .order('display_order')

  const allItems: MenuItem[] = items ?? []

  const categoryKeys = Object.keys(CATEGORY_CONFIG).sort(
    (a, b) => CATEGORY_CONFIG[a].order - CATEGORY_CONFIG[b].order
  )

  const categories = categoryKeys
    .map((key) => ({
      key,
      ...CATEGORY_CONFIG[key],
      items: allItems.filter((item) => item.category === key),
    }))
    .filter((cat) => cat.items.length > 0)

  return (
    <main>
      <section className="menu-hero">
        <div className="container">
          <div className="eyebrow">Evening Menu · Spring 2026</div>
          <h1 className="menu-hero-title">
            The <em>Menu.</em>
          </h1>
          <div
            style={{
              marginTop: 20,
              maxWidth: 560,
              color: 'var(--fg-muted)',
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            What follows is the à la carte room. The counter is a different affair — eighteen
            courses, chosen by Chef Kenji the morning of your seating.
          </div>
        </div>
        <div className="menu-hero-jp">品書き</div>
      </section>

      {categories.length > 0 ? (
        <MenuClient categories={categories} />
      ) : (
        <div style={{ padding: '120px 40px', textAlign: 'center' }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--fg-faint)',
            }}
          >
            Menu coming soon
          </p>
        </div>
      )}
    </main>
  )
}
