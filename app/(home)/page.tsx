import Link from 'next/link';
import type { ReactNode } from 'react';

const features = [
  {
    title: 'Lightning Addresses',
    description:
      'Give your users lightning addresses under your domain. LUD-16 compliant, with NIP-05 Nostr identity.',
    icon: 'zap',
  },
  {
    title: 'Progressive Self-Custody',
    description:
      'Start with a simple alias, graduate to courtesy NWC, then bring your own wallet. Four stages of sovereignty.',
    icon: 'shield',
  },
  {
    title: 'Nostr Wallet Connect',
    description:
      'NIP-47 native. Connect any NWC-compatible wallet as your payment backend.',
    icon: 'link',
  },
  {
    title: 'Self-Hostable',
    description:
      'Deploy on Vercel, Docker, Umbrel, or Start9. Three independent services, zero shared infrastructure.',
    icon: 'server',
  },
  {
    title: 'SDK & React Hooks',
    description:
      'TypeScript client SDK and 11 React hooks with caching, loading states, and type safety.',
    icon: 'code',
  },
  {
    title: '100% Open Source',
    description:
      'MIT licensed. Funded by OpenSats. Built for communities, companies, and circular economies.',
    icon: 'heart',
  },
];

const protocols = [
  { name: 'NIP-47', label: 'Nostr Wallet Connect' },
  { name: 'NIP-05', label: 'Nostr Identity' },
  { name: 'NIP-57', label: 'Zaps' },
  { name: 'LUD-16', label: 'Lightning Address' },
  { name: 'LUD-21', label: 'Payment Verification' },
  { name: 'LUD-22', label: 'Webhooks' },
];

const icons: Record<string, ReactNode> = {
  zap: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
  ),
  shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ),
  link: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
  ),
  server: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1"/><circle cx="6" cy="18" r="1"/></svg>
  ),
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  ),
  heart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
  ),
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 pt-20 pb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-4 py-1.5 text-sm text-fd-muted-foreground mb-6">
          Funded by OpenSats &middot; Fifteenth Wave
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          LaWallet NWC
        </h1>
        <p className="text-fd-muted-foreground text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
          Open-source Lightning + Nostr CRM for communities and companies.
          Connect your domain, deploy in minutes, and give your users lightning
          addresses, wallets, and Nostr identity under your brand.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-lg bg-fd-primary px-8 py-3 text-sm font-medium text-fd-primary-foreground shadow-lg transition-all hover:bg-fd-primary/90 hover:shadow-xl"
          >
            Get Started
          </Link>
          <Link
            href="/docs/guides/sdk"
            className="inline-flex items-center justify-center rounded-lg border border-fd-border px-8 py-3 text-sm font-medium shadow-sm transition-all hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            SDK Reference
          </Link>
          <Link
            href="https://github.com/lawalletio/lawallet-nwc"
            className="inline-flex items-center justify-center rounded-lg border border-fd-border px-8 py-3 text-sm font-medium shadow-sm transition-all hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            GitHub
          </Link>
        </div>
      </section>

      {/* Protocol badges */}
      <section className="flex flex-wrap items-center justify-center gap-3 px-4 pb-16">
        {protocols.map((p) => (
          <span
            key={p.name}
            className="inline-flex items-center gap-1.5 rounded-md border border-fd-border bg-fd-card px-3 py-1.5 text-xs font-mono"
          >
            <span className="font-semibold text-fd-primary">{p.name}</span>
            <span className="text-fd-muted-foreground">{p.label}</span>
          </span>
        ))}
      </section>

      {/* Features grid */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-fd-border bg-fd-card p-6 transition-all hover:border-fd-primary/50 hover:shadow-md"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-fd-primary/10 text-fd-primary mb-4">
                {icons[f.icon]}
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-fd-muted-foreground leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture overview */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-center mb-8">
          Three Independent Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: 'lawallet-web',
              port: '3000',
              desc: 'Next.js app serving frontend, API, dashboards, and address resolution.',
            },
            {
              name: 'lawallet-listener',
              port: '3001/3002',
              desc: 'Monitors NWC relays for payments, dispatches LUD-22 webhooks.',
            },
            {
              name: 'lawallet-nwc-proxy',
              port: '3003/3004',
              desc: 'Provisions temporary NWC connections from external providers.',
            },
          ].map((s) => (
            <div
              key={s.name}
              className="rounded-lg border border-fd-border bg-fd-card p-5"
            >
              <div className="font-mono text-sm font-semibold text-fd-primary mb-1">
                {s.name}
              </div>
              <div className="text-xs text-fd-muted-foreground font-mono mb-3">
                Port {s.port}
              </div>
              <p className="text-sm text-fd-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-fd-muted-foreground mt-6">
          No shared database. No shared filesystem. Each service deploys, scales,
          and updates independently.{' '}
          <Link
            href="/docs/architecture"
            className="text-fd-primary hover:underline"
          >
            Learn more
          </Link>
        </p>
      </section>
    </main>
  );
}
