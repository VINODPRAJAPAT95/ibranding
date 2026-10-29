import { useState, useEffect } from 'react'

const HERO_IMAGES = ['/images/hero-1.jpg', '/images/hero-2.jpg']

const NAV = [
  ['About', '#about'], ['Services', '#services'], ['Work', '#work'], ['Team', '#team'],
  ['Reviews', '#reviews'], ['FAQ', '#faq'],
]

const SERVICES = [
  { t: 'Design work', d: 'Social posts, brochures, packaging and campaign visuals that look like one brand everywhere.', icon: 'M4 4h16v16H4z M4 15l5-5 4 4 3-3 4 4' },
  { t: 'Branding work', d: 'Strategy, voice, colors and guidelines so customers recognise you before they read your name.', icon: 'M12 3l9 5v8l-9 5-9-5V8z M12 12l9-4 M12 12v9 M12 12L3 8' },
  { t: 'Logo design', d: 'Simple, memorable marks delivered in every format you need, from favicon to billboard.', icon: 'M12 3a9 9 0 100 18 9 9 0 000-18z M8 12h8 M12 8v8' },
  { t: 'Website design', d: 'Fast, responsive websites built in React that turn visitors into enquiries.', icon: 'M3 5h18v14H3z M3 9h18 M7 7h.01 M10 7h.01' },
]

const TEAM = [
  { n: 'Graphic Expert', r: 'Leads visual design', b: 'Turns your idea into logos, layouts and brand kits with a sharp eye for detail.', c: 'bg-brand text-ink' },
  { n: 'AI Design Expert', r: 'Leads AI-assisted creative', b: 'Uses AI tools to explore more concepts in less time, then refines them by hand.', c: 'bg-paper text-ink' },
  { n: 'Development Expert', r: 'Leads website builds', b: 'Builds clean, fast websites and apps that work on every screen and every browser.', c: 'bg-coal text-brand border border-brand' },
]

const REVIEWS = [
  { n: 'Rahul Deshmukh', t: '2 weeks ago', q: 'They redesigned our whole brand and built the website in under a month. Enquiries went up almost immediately.' },
  { n: 'Priya Kulkarni', t: '1 month ago', q: 'Clear communication, quick revisions and a logo we actually love. Would hire again without thinking twice.' },
  { n: 'Amit Joshi', t: '2 months ago', q: 'The site loads fast and looks great on my phone. The team explained every step in simple words.' },
]

const FAQS = [
  ['How long does a logo take?', 'Most logos are ready for review in 3 to 5 working days. Revisions are included until you are happy.'],
  ['How long does a website take?', 'A standard business website takes 2 to 4 weeks, depending on pages and content.'],
  ['Do you work with new startups and local businesses?', 'Yes. As freelancers in Pune we build affordable starter packages for new businesses that cover logo, brand colors and a simple website.'],
  ['Will my website work on mobile?', 'Every site we build is tested on phones, tablets, laptops and large desktop screens.'],
  ['Can you update my site after launch?', 'Yes. We offer freelance support by the month for edits, new pages and performance checks.'],
]

const LOGOS = [
  { n: 'Nova Café', c: 'Food and drink', bg: 'bg-brand text-ink', mark: <><circle cx="32" cy="32" r="20" fill="currentColor" /><circle cx="40" cy="26" r="8" fill="#FFB020" className="opacity-0" /><path d="M22 36c4 8 16 8 20 0" stroke="#FFB020" strokeWidth="5" fill="none" /></> },
  { n: 'Peak Fit', c: 'Fitness', bg: 'bg-paper text-ink', mark: <><path d="M8 50L28 14l10 18 6-10 12 28z" fill="currentColor" /><circle cx="48" cy="14" r="5" fill="#FFB020" /></> },
  { n: 'Urban Nest', c: 'Real estate', bg: 'bg-coal text-paper border border-white/15', mark: <><path d="M10 30L32 10l22 20v24H10z" fill="none" stroke="currentColor" strokeWidth="5" /><rect x="26" y="34" width="12" height="20" fill="#FFB020" /></> },
  { n: 'Kite Pay', c: 'Fintech', bg: 'bg-coal text-brand border border-white/15', mark: <><path d="M32 6l24 26-24 26L8 32z" fill="currentColor" /><path d="M32 18v28M20 32h24" stroke="#000" strokeWidth="4" /></> },
  { n: 'Shivar Agro', c: 'Agriculture', bg: 'bg-brand text-ink', mark: <><circle cx="32" cy="14" r="7" fill="#000" /><path d="M32 58V28 M32 40C20 40 14 32 14 22c12 0 18 6 18 18 M32 34c0-10 6-16 18-16 0 10-6 16-18 16" stroke="currentColor" strokeWidth="5" fill="none" /></> },
  { n: 'Tathastu Decor', c: 'Interiors', bg: 'bg-paper text-ink', mark: <><path d="M12 56V28a20 20 0 0140 0v28z" fill="currentColor" /><path d="M24 56V30a8 8 0 0116 0v26z" fill="#FFB020" /></> },
]

const BROCHURES = [
  { n: 'Corporate profile', c: 'Tri-fold brochure', d: 'Clean three-panel layout for a consulting firm, with bold numbers and a clear contact panel.', img: '/images/brochure-1.png' },
  { n: 'Real estate launch', c: 'Bi-fold brochure', d: 'Large photo spreads, floor plan panels and a pricing page that fits one printed sheet.', img: '/images/brochure-2.png' },
  { n: 'Product catalogue', c: 'Multi-page brochure', d: 'Grid based product pages with consistent spacing so buyers compare items at a glance.', img: '/images/brochure-3.png' },
]

function Work() {
  return (
    <section id="work" className="py-20 lg:py-32 bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight max-w-3xl">Selected brand work.</h2>
        <p className="mt-5 text-lg text-neutral-600 max-w-2xl">A look at the kind of logos and brochures we design for startups and local businesses. Sample concepts for demo.</p>

        <h3 className="mt-16 text-2xl lg:text-3xl font-semibold">Logo design projects</h3>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {LOGOS.map((l) => (
            <article key={l.n} className="group">
              <div className={`${l.bg} aspect-square flex flex-col items-center justify-center gap-4 overflow-hidden`}>
                <svg viewBox="0 0 64 64" className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-500 group-hover:scale-110" aria-hidden="true">{l.mark}</svg>
                <span className="font-bold text-lg sm:text-2xl tracking-tight">{l.n}</span>
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-2">
                <h4 className="font-semibold">{l.n}</h4>
                <span className="text-sm text-neutral-500">{l.c}</span>
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-20 text-2xl lg:text-3xl font-semibold">Brochure design projects</h3>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {BROCHURES.map((b) => (
            <article key={b.n} className="bg-ink text-paper">
              <img src={b.img} alt={`${b.n} brochure design`} loading="lazy" className="w-full aspect-[16/10] object-cover" />
              <div className="p-6">
                <p className="text-brand text-sm">{b.c}</p>
                <h4 className="mt-1 text-xl font-semibold">{b.n}</h4>
                <p className="mt-3 text-white/60">{b.d}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-neutral-500">Sample concepts shown. Replace with your own project images anytime.</p>
      </div>
    </section>
  )
}

const Icon = ({ d, className = 'w-7 h-7' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="miter" className={className} aria-hidden="true">
    <path d={d} />
  </svg>
)

const Star = () => (
  <svg viewBox="0 0 20 20" className="w-4 h-4 fill-brand" aria-hidden="true">
    <path d="M10 1l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 14.5 4.6 17.5l1.2-6L1.3 7.3l6.1-.7z" />
  </svg>
)

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5 h-20 lg:h-24 flex items-center justify-between">
        <a href="#top" className="block" aria-label="iBranding Designs home">
          <span className="relative block w-16 h-16 lg:w-20 lg:h-20 overflow-hidden">
            <img src="/logo.png" alt="iBranding Designs" className="absolute max-w-none" style={{ width: '273%', left: '-84.9%', top: '-57.8%' }} />
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="text-sm text-white/70 hover:text-brand transition-colors">{l}</a>
          ))}
          <a href="#contact" className="bg-brand text-ink px-5 py-2.5 text-sm font-semibold hover:bg-paper transition-colors">Get a quote</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-ink border-t border-white/10 px-5 py-4 flex flex-col" aria-label="Mobile">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="py-3 border-b border-white/10 text-white/80">{l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-4 bg-brand text-ink text-center py-3 font-semibold">Get a quote</a>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setSlide((n) => (n + 1) % HERO_IMAGES.length), 6000)
    return () => clearInterval(t)
  }, [])
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-24">
      <div className="absolute inset-0 bg-ink">
        {HERO_IMAGES.map((src, k) => (
          <img key={k} src={src} alt="" className={`hero-img absolute inset-0 w-full h-full object-cover transition-opacity duration-[1600ms] ${slide === k ? 'opacity-100' : 'opacity-0'}`} />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" />
      <div className="relative mx-auto max-w-7xl px-5 w-full">
        <div className="hero-in max-w-4xl">
          <p className="inline-block border-l-4 border-brand pl-3 text-white/80">Freelance website, branding and development studio in Pune</p>
          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-[0.98] tracking-tight">
            We build brands people remember.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            iBranding Designs is a Pune-based freelance team creating logos, brand identities and fast websites for startups and local businesses.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-brand text-ink px-8 py-4 font-semibold text-center hover:bg-paper transition-colors">Start your project</a>
            <a href="#services" className="border border-white/40 px-8 py-4 font-semibold text-center hover:border-brand hover:text-brand transition-colors">See our services</a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {HERO_IMAGES.map((_, k) => (
          <button key={k} onClick={() => setSlide(k)} aria-label={`Show image ${k + 1}`} className={`h-1.5 transition-all ${slide === k ? 'w-12 bg-brand' : 'w-6 bg-white/40 hover:bg-white/70'}`} />
        ))}
      </div>
    </section>
  )
}

function Marquee() {
  const items = ['Website', 'Branding', 'Development', 'Logo design', 'Design work']
  const row = [...items, ...items, ...items, ...items]
  return (
    <div className="bg-brand text-ink overflow-hidden py-4" aria-hidden="true">
      <div className="marquee flex w-max gap-12 text-2xl font-bold whitespace-nowrap">
        {row.concat(row).map((t, i) => <span key={i} className="flex items-center gap-12">{t}<span className="w-2 h-2 bg-ink" /></span>)}
      </div>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <h2 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">A small studio with a big focus on your brand.</h2>
        <div className="text-lg text-neutral-700 space-y-6 max-w-xl">
          <p>iBranding Designs is a freelance studio based in Pune, Maharashtra. We help new and growing businesses get a clear identity and a website that works.</p>
          <p>We combine human design skill with AI tools, so you get more ideas, faster delivery and a result that still feels personal.</p>
          <dl className="grid grid-cols-3 gap-4 pt-6 border-t border-ink/15">
            {[['50+', 'Projects'], ['30+', 'Clients'], ['Pune', 'Based in']].map(([a, b]) => (
              <div key={b}><dt className="text-3xl lg:text-4xl font-bold text-ink">{a}</dt><dd className="text-sm text-neutral-600">{b}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight max-w-3xl">Everything your brand needs, under one roof.</h2>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-white/15">
          {SERVICES.map((s) => (
            <article key={s.t} className="group border-r border-b border-white/15 p-8 hover:bg-brand hover:text-ink transition-colors duration-300">
              <Icon d={s.icon} className="w-10 h-10 text-brand group-hover:text-ink transition-colors" />
              <h3 className="mt-10 text-2xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-white/60 group-hover:text-ink/80">{s.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section id="team" className="py-20 lg:py-32 bg-coal">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight max-w-3xl">Freelance experts behind your project.</h2>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TEAM.map((m) => (
            <article key={m.n} className="bg-ink border border-white/10">
              <div className={`aspect-[4/3] flex items-end p-6 ${m.c}`}>
                <span className="text-6xl font-extrabold leading-none">{m.n.split(' ').map((w) => w[0]).join('')}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{m.n}</h3>
                <p className="text-brand text-sm mt-1">{m.r}</p>
                <p className="mt-4 text-white/60">{m.b}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const GoogleG = () => (
  <svg viewBox="0 0 48 48" className="w-5 h-5" aria-label="Google">
    <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.2 5.5-4.7 7.2l7.6 5.9c4.4-4.1 6.9-10.1 6.9-17.6z" />
    <path fill="#FBBC05" d="M10.5 28.7A14.5 14.5 0 019.5 24c0-1.6.3-3.2.8-4.7l-7.9-6.1A24 24 0 000 24c0 3.9.9 7.5 2.6 10.8l7.9-6.1z" />
    <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2.1 1.4-4.9 2.3-8.3 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
  </svg>
)

const REVIEW_LIST = [
  ...REVIEWS,
  { n: 'Sneha Patil', t: '3 months ago', q: 'Our brochure and logo were delivered before the deadline. Printing quality was excellent and clients noticed.' },
  { n: 'Vikram Shinde', t: '4 months ago', q: 'Professional team that listens. They understood our startup idea quickly and turned it into a strong brand.' },
  { n: 'Neha Jadhav', t: '5 months ago', q: 'Great value for money. The new website is fast, and the design looks far better than our competitors.' },
]

function ReviewCard({ r }) {
  return (
    <figure className="w-full bg-paper text-ink p-6 flex flex-col">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 bg-ink text-brand flex items-center justify-center font-bold">{r.n[0]}</div>
        <div className="flex-1">
          <figcaption className="font-semibold leading-tight">{r.n}</figcaption>
          <span className="text-xs text-neutral-500">{r.t}</span>
        </div>
        <GoogleG />
      </div>
      <div className="flex mt-4" aria-label="5 out of 5 stars">{[...Array(5)].map((_, i) => <Star key={i} />)}</div>
      <blockquote className="mt-3 text-neutral-700 flex-1">{r.q}</blockquote>
    </figure>
  )
}

function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight max-w-2xl">What our clients say.</h2>
          <div className="flex items-center gap-3 bg-paper text-ink px-4 py-3 w-fit">
            <GoogleG />
            <span className="text-2xl font-bold">5.0</span>
            <span className="flex">{[...Array(5)].map((_, i) => <Star key={i} />)}</span>
            <span className="text-sm text-neutral-600">Google reviews</span>
          </div>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEW_LIST.map((r) => <ReviewCard key={r.n} r={r} />)}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="py-20 lg:py-32 bg-coal">
      <div className="mx-auto max-w-7xl px-5 grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">Questions, answered.</h2>
        <div className="border-t border-white/15">
          {FAQS.map(([q, a], i) => (
            <div key={q} className="border-b border-white/15">
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="w-full flex items-center justify-between gap-4 py-6 text-left text-lg lg:text-xl font-medium hover:text-brand transition-colors">
                {q}
                <span className={`text-3xl text-brand leading-none transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}>
                <p className="overflow-hidden text-white/60 max-w-xl">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-brand text-ink">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-10">
        <h2 className="text-4xl sm:text-5xl lg:text-8xl font-extrabold tracking-tight leading-none">Let’s build your brand.</h2>
        <a href="mailto:contact@ibrandingdesigns.work.gd" className="mt-8 inline-block bg-ink text-paper px-8 py-4 font-semibold hover:bg-paper hover:text-ink transition-colors">contact@ibrandingdesigns.work.gd</a>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-ink/30 pt-10">
          <div>
            <p className="font-bold text-xl">ibrandingdesigns</p>
            <p className="mt-2 text-ink/70">Freelance website, branding and development in Pune.</p>
          </div>
          <div>
            <p className="font-semibold mb-3">Pages</p>
            <ul className="space-y-2 text-ink/80">{NAV.map(([l, h]) => <li key={h}><a href={h} className="hover:underline">{l}</a></li>)}</ul>
          </div>
          <div>
            <p className="font-semibold mb-3">Services</p>
            <ul className="space-y-2 text-ink/80">{SERVICES.map((s) => <li key={s.t}>{s.t}</li>)}</ul>
          </div>
          <div>
            <p className="font-semibold mb-3">Contact</p>
            <ul className="space-y-2 text-ink/80"><li>contact@ibrandingdesigns.work.gd</li><li>+91 6366952927</li><li>Pune, Maharashtra, India</li></ul>
          </div>
        </div>
        <p className="mt-12 text-sm text-ink/70">© {new Date().getFullYear()} iBranding Designs. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Work />
        <Team />
        <Reviews />
        <Faq />
      </main>
      <Footer />
    </>
  )
}