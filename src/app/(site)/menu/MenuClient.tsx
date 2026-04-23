'use client'

import { useState } from 'react'
import Link from 'next/link'

type MenuItem = {
  id: string
  name: string
  description: string | null
  price: string | number
  category: string
}

type CategoryData = {
  key: string
  label: string
  jp: string
  tagline: string
  items: MenuItem[]
}

export default function MenuClient({ categories }: { categories: CategoryData[] }) {
  const [active, setActive] = useState('all')

  const visible = active === 'all' ? categories : categories.filter((c) => c.key === active)
  const totalCount = categories.reduce((n, c) => n + c.items.length, 0)

  return (
    <div className="fade-in">
      <div className="menu-tabs">
        <button
          className={`menu-tab${active === 'all' ? ' active' : ''}`}
          onClick={() => setActive('all')}
        >
          All <span className="count">{totalCount}</span>
        </button>
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`menu-tab${active === cat.key ? ' active' : ''}`}
            onClick={() => setActive(cat.key)}
          >
            {cat.label} <span className="count">{cat.items.length}</span>
          </button>
        ))}
      </div>

      <div className="menu-body">
        <div className="container">
          {visible.map((cat) => (
            <section key={cat.key} className="menu-section fade-in">
              <div className="menu-section-head">
                <div>
                  <div className="eyebrow">{cat.tagline}</div>
                  <h2>
                    {cat.label.split(' ')[0]}{' '}
                    {cat.label.includes(' ') && (
                      <em>{cat.label.split(' ').slice(1).join(' ')}</em>
                    )}
                  </h2>
                </div>
                <div className="menu-section-jp">{cat.jp}</div>
              </div>

              <div className="menu-list">
                {cat.items.map((item) => (
                  <div key={item.id} className="menu-row">
                    <div style={{ gridColumn: '1 / -1' }}>
                      <div className="menu-row-top">
                        <span className="menu-name">{item.name}</span>
                      </div>
                    </div>
                    {item.description && (
                      <div className="menu-desc">{item.description}</div>
                    )}
                    <div className="menu-price">${Number(item.price).toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className="omakase">
            <div>
              <div className="eyebrow" style={{ color: 'var(--cream)' }}>The Counter</div>
              <h3>
                Omakase <em>お任せ</em>
              </h3>
              <p>
                Eighteen courses at the eight-seat counter. Chef Kenji chooses the morning of
                your seating, based on what arrives from Toyosu. Two and a half hours.
                Wine and sake pairings available at the table.
              </p>
              <Link
                href="/booking"
                className="btn"
                style={{ borderColor: 'var(--cream)', color: 'var(--cream)', marginTop: 20, display: 'inline-flex' }}
              >
                Reserve the Counter →
              </Link>
            </div>
            <div className="omakase-right">
              <div className="price-big">
                $245
                <small>PER GUEST · BEVERAGES SEPARATE</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
