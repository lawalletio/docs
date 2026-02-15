import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

const features = [
  {
    title: 'Lightning Addresses',
    description:
      'Give your users lightning addresses under your domain. LUD-16 compliant, with NIP-05 Nostr identity.',
    icon: 'zap',
    color: 'gold',
  },
  {
    title: 'Progressive Self-Custody',
    description:
      'Start with a simple alias, graduate to courtesy NWC, then bring your own wallet. Four stages of sovereignty.',
    icon: 'shield',
    color: 'teal',
  },
  {
    title: 'Nostr Wallet Connect',
    description:
      'NIP-47 native. Connect any NWC-compatible wallet as your payment backend.',
    icon: 'link',
    color: 'gold',
  },
  {
    title: 'Self-Hostable',
    description:
      'Deploy on Vercel, Docker, Umbrel, or Start9. Three independent services, zero shared infrastructure.',
    icon: 'server',
    color: 'teal',
  },
  {
    title: 'SDK & React Hooks',
    description:
      'TypeScript client SDK and 11 React hooks with caching, loading states, and type safety.',
    icon: 'code',
    color: 'gold',
  },
  {
    title: '100% Open Source',
    description:
      'MIT licensed. Funded by OpenSats. Built for communities, companies, and circular economies.',
    icon: 'heart',
    color: 'coral',
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

const iconColors: Record<string, string> = {
  gold: 'text-[#F5A623]',
  teal: 'text-[#26A69A]',
  coral: 'text-[#E53935]',
};

const iconBgColors: Record<string, string> = {
  gold: 'bg-[#F5A623]/10',
  teal: 'bg-[#26A69A]/10',
  coral: 'bg-[#E53935]/10',
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col grid-pattern">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 pt-24 pb-20 overflow-hidden">
        {/* Subtle glow behind hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#F5A623]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="inline-flex items-center gap-2 rounded-full border border-[#F5A623]/20 bg-[#F5A623]/5 px-4 py-1.5 text-sm text-[#FFD580] mb-8">
          Funded by OpenSats &middot; Fifteenth Wave
        </div>

        <Image
          src="/logos/lawallet.svg"
          alt="LaWallet"
          width={280}
          height={52}
          className="mb-4"
          priority
        />

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-2 text-gradient-gold">
          NWC
        </h1>

        <p className="text-fd-muted-foreground text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
          Open-source Lightning + Nostr CRM for communities and companies.
          Connect your domain, deploy in minutes, and give your users lightning
          addresses, wallets, and Nostr identity under your brand.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-lg bg-[#F5A623] px-8 py-3 text-sm font-semibold text-[#0A0A0F] shadow-lg shadow-[#F5A623]/20 transition-all hover:bg-[#FFD580] hover:shadow-xl hover:shadow-[#F5A623]/30"
          >
            Get Started
          </Link>
          <Link
            href="/docs/guides/sdk"
            className="inline-flex items-center justify-center rounded-lg border border-[#26A69A]/30 px-8 py-3 text-sm font-medium text-[#26A69A] transition-all hover:bg-[#26A69A]/10 hover:border-[#26A69A]/50"
          >
            SDK Reference
          </Link>
          <Link
            href="https://github.com/lawalletio/lawallet-nwc"
            className="inline-flex items-center justify-center rounded-lg border border-fd-border px-8 py-3 text-sm font-medium transition-all hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            GitHub
          </Link>
        </div>
      </section>

      {/* Protocol badges */}
      <section className="flex flex-wrap items-center justify-center gap-3 px-4 pb-20">
        {protocols.map((p) => (
          <span
            key={p.name}
            className="inline-flex items-center gap-1.5 rounded-md border border-fd-border bg-fd-card px-3 py-1.5 text-xs font-mono transition-colors hover:border-[#F5A623]/30"
          >
            <span className="font-semibold text-[#F5A623]">{p.name}</span>
            <span className="text-fd-muted-foreground">{p.label}</span>
          </span>
        ))}
      </section>

      {/* Features grid */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-fd-border bg-fd-card p-6 transition-all hover:border-[#F5A623]/30 hover:shadow-lg hover:shadow-[#F5A623]/5"
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${iconBgColors[f.color]} ${iconColors[f.color]} mb-4`}>
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
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <h2 className="text-2xl font-bold text-center mb-2">
          Three Independent Services
        </h2>
        <p className="text-center text-sm text-fd-muted-foreground mb-8">
          No shared database. No shared filesystem. Each deploys, scales, and updates independently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              name: 'lawallet-web',
              port: '3000',
              desc: 'Next.js app serving frontend, API, dashboards, and address resolution.',
              color: '#F5A623',
            },
            {
              name: 'lawallet-listener',
              port: '3001/3002',
              desc: 'Monitors NWC relays for payments, dispatches LUD-22 webhooks.',
              color: '#26A69A',
            },
            {
              name: 'lawallet-nwc-proxy',
              port: '3003/3004',
              desc: 'Provisions temporary NWC connections from external providers.',
              color: '#4DB6AC',
            },
          ].map((s) => (
            <div
              key={s.name}
              className="rounded-lg border border-fd-border bg-fd-card p-5 transition-all hover:border-[color:var(--hover-color)] hover:shadow-md"
              style={{ '--hover-color': `${s.color}40` } as React.CSSProperties}
            >
              <div className="font-mono text-sm font-semibold mb-1" style={{ color: s.color }}>
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
          <Link
            href="/docs/architecture"
            className="text-[#F5A623] hover:text-[#FFD580] hover:underline transition-colors"
          >
            Learn more about the architecture
          </Link>
        </p>
      </section>
    </main>
  );
}
