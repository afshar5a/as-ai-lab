import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const pills = ["AI Systems Economics", "Economic Signals", "Optimization", "Structural Modeling"];

const definitions = [
  { name: "CPER", eq: "CPER = (TokenCost + Overhead) / EffectiveRequests", label: "Cost per Effective Request" },
  { name: "ER", eq: "EffectiveRequests = TotalRequests × (1 − CacheHitRate)", label: "Effective Requests" },
  { name: "RPU", eq: "RPU_be = MonthlyCost / MAU", label: "Break-even Revenue per User" },
];

const frameworkCards = [
  { num: "01", title: "Architecture → Cost Map", desc: "Map every architectural decision — model selection, retrieval layers, orchestration depth — to its cost footprint.", tags: ["Input/Output tokens", "Overhead per request", "Cache economics"] },
  { num: "02", title: "Margin Resilience", desc: "Test how margins respond to shifts in usage volume, input complexity, and retrieval depth.", tags: ["Sensitivity analysis", "Break-even thresholds", "Risk levels"] },
  { num: "03", title: "Optimization Levers", desc: "Define the constraint space — cost ceilings, latency bounds, quality floors — and identify architectural moves.", tags: ["Constraint modeling", "Cost guardrails", "Architecture tactics"] },
];

const tracks = [
  { title: "AI Systems Economics", to: "/research/ai-systems-economics", items: ["Cost structures of inference at scale", "CPER as a margin diagnostic", "Break-even modeling", "Cache-aware cost modeling"] },
  { title: "Economic Signal Research", to: "/research/economic-signal-research", items: ["Macro sentiment regime detection", "Structural break detection", "Language-to-regime mapping"] },
  { title: "Optimization & Structural Modeling", to: "/research/optimization-structural-modeling", items: ["Constrained optimization", "Multi-objective architecture search", "Structural simulation"] },
];

const audiences = [
  "Technical leaders evaluating AI system economics at scale",
  "Engineering teams building cost-aware AI architectures",
  "Researchers at the intersection of economics and AI systems",
  "Product leaders modeling margin risk in AI-integrated products",
];

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
};

const Index = () => {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-32">
          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-start">
            {/* Left */}
            <div>
              <motion.p {...fade} className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-6">
                Independent Research Lab
              </motion.p>
              <motion.h1 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-8">
                AI systems scale.
                <br />
                <span className="italic text-primary">Margins don't.</span>
              </motion.h1>
              <motion.p {...fade} transition={{ ...fade.transition, delay: 0.2 }} className="text-lg md:text-xl text-dim leading-relaxed max-w-xl mb-10">
                As AI adoption grows, inference cost, retrieval depth, and orchestration overhead quietly reshape economic viability. Most organizations measure capability. Few quantify structural margin risk.
              </motion.p>
              <motion.div {...fade} transition={{ ...fade.transition, delay: 0.3 }} className="flex flex-wrap gap-3 mb-10">
                <Link to="/framework" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded hover:opacity-90 transition-opacity">
                  View the framework <ArrowRight size={14} />
                </Link>
                <Link to="/research" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium text-sm rounded hover:bg-secondary transition-colors">
                  Explore research <ArrowRight size={14} />
                </Link>
              </motion.div>
              <motion.div {...fade} transition={{ ...fade.transition, delay: 0.35 }} className="flex flex-wrap gap-2">
                {pills.map((p) => (
                  <span key={p} className="inline-flex px-3 py-1 rounded-full text-[11px] font-medium bg-secondary text-secondary-foreground">{p}</span>
                ))}
              </motion.div>
            </div>

            {/* Right — equations panel */}
            <motion.div {...fade} transition={{ ...fade.transition, delay: 0.4 }} className="space-y-3 lg:mt-16">
              {definitions.map((d) => (
                <div key={d.name} className="border border-border rounded p-4 bg-card">
                  <p className="text-[10px] uppercase tracking-widest text-dim mb-2">{d.label}</p>
                  <p className="font-mono text-sm text-foreground">{d.eq}</p>
                </div>
              ))}
              <div className="border-l-2 border-primary pl-4 py-2 mt-4">
                <p className="text-[11px] font-medium text-foreground mb-1">Working principle</p>
                <p className="text-[13px] text-dim leading-relaxed">
                  Margin is an architectural property. If architecture ignores economics, growth amplifies inefficiency.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Independence note */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-12">
          <motion.div {...fade} transition={{ ...fade.transition, delay: 0.5 }} className="border border-border rounded p-4 bg-card text-[12px] text-dim leading-relaxed max-w-xl">
            Built independently as personal research and experimentation. Developed outside professional responsibilities. No confidential or employer data is used.
          </motion.div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="border-y border-border py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, ri) => (
            <div key={ri} className="flex items-center gap-8 mr-8">
              {["CPER", "Margin Resilience", "Architecture Economics", "Retrieval Cost", "Break-even Analysis", "Constraint Optimization", "Regime Detection"].map((t) => (
                <span key={`${ri}-${t}`} className="text-[11px] font-mono uppercase tracking-widest text-dim">
                  {t} <span className="text-primary mx-2">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ─── FRAMEWORK ─── */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
        <motion.div {...fade} className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-3">01</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground">Framework</h2>
          </div>
          <Link to="/framework" className="hidden md:inline-flex items-center gap-1 text-sm text-dim hover:text-foreground transition-colors">
            Full framework <ArrowUpRight size={14} />
          </Link>
        </motion.div>
        <motion.p {...fade} className="text-dim max-w-xl mb-12">
          A modeling approach that treats AI systems as economic systems — linking architectural choices to cost, break-even thresholds, and margin resilience under scale.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-px bg-border rounded overflow-hidden">
          {frameworkCards.map((c, i) => (
            <motion.div key={c.num} {...fade} transition={{ ...fade.transition, delay: i * 0.1 }} className="bg-card p-6 md:p-8 flex flex-col">
              <p className="font-mono text-3xl text-primary/30 mb-4">{c.num}</p>
              <h3 className="font-medium text-foreground text-lg mb-3">{c.title}</h3>
              <p className="text-sm text-dim leading-relaxed mb-6 flex-1">{c.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── RESEARCH TRACKS ─── */}
      <section className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <motion.div {...fade}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-3">02</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Research Tracks</h2>
            <p className="text-dim max-w-xl mb-14">
              Three parallel tracks connecting AI architecture, economics, and structural behavior under constraint.
            </p>
          </motion.div>
          <div className="space-y-4">
            {tracks.map((t, i) => (
              <motion.div key={t.title} {...fade} transition={{ ...fade.transition, delay: i * 0.1 }}>
                <Link to={t.to} className="group block border border-border rounded bg-card p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors mb-4">
                        {t.title}
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
                        {t.items.map((item, j) => (
                          <p key={j} className="text-sm text-dim">→ {item}</p>
                        ))}
                      </div>
                    </div>
                    <ArrowUpRight size={20} className="shrink-0 text-dim group-hover:text-primary transition-colors mt-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ─── */}
      <section className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fade}>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-3">03</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Who it's for</h2>
              <p className="text-dim leading-relaxed mb-8">
                This research is aimed at practitioners and researchers who think structurally about AI systems economics.
              </p>
              <ul className="space-y-4">
                {audiences.map((a, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <span className="font-mono text-primary text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[15px]">{a}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fade} transition={{ ...fade.transition, delay: 0.15 }} className="flex flex-col justify-center">
              <div className="border border-border rounded p-8 bg-card">
                <p className="text-sm text-dim mb-6">
                  Engagement is research-led and advisory in nature.
                </p>
                <ul className="space-y-2 text-sm text-dim mb-8">
                  <li>• Independent research collaboration</li>
                  <li>• Speaking and research presentations</li>
                  <li>• Open-source contributions</li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded hover:opacity-90 transition-opacity">
                    Connect about research
                  </Link>
                  <Link to="/about" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded hover:bg-secondary transition-colors">
                    About the founder
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─── */}
      <section className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
          <motion.div {...fade} className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-3">04</p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">About</h2>
              <p className="text-dim leading-relaxed">
                Afshar Sanam AI Lab is founded as an independent research space focused on computational economics, AI systems architecture, and structural modeling.
              </p>
            </div>
            <div className="border-l border-border pl-8 lg:pl-12">
              <p className="text-dim leading-relaxed mb-6">
                The lab's work sits at the intersection of AI systems design and economics. Its core thesis: the margin structure of AI systems is not a business metric — it's an architectural property.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
