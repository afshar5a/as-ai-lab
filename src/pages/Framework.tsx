import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const definitions = [
  { name: "Cost per Effective Request (CPER)", eq: "CPER = (TokenCost + Overhead) / EffectiveRequests", desc: "Captures the true unit cost of every request that actually requires model computation — factoring out cached or redundant calls." },
  { name: "Effective Requests", eq: "EffectiveRequests = TotalRequests × (1 − CacheHitRate)", desc: "Separates the requests that hit the model from those served by cache, revealing the real computational demand." },
  { name: "Break-even Revenue per User", eq: "RPU_be = MonthlyCost / MAU", desc: "The minimum revenue each active user must generate for the system to break even at current cost levels." },
];

const frameworkCards = [
  { num: "01", title: "Architecture → Cost Map", desc: "Map every architectural decision — model selection, retrieval layers, orchestration depth — to its cost footprint. No decision is cost-neutral.", tags: ["Input/Output tokens", "Overhead per request", "Cache economics"] },
  { num: "02", title: "Margin Resilience", desc: "Test how margins respond to shifts in usage volume, input complexity, and retrieval depth. Identify fragility before it scales.", tags: ["Sensitivity analysis", "Break-even thresholds", "Risk levels"] },
  { num: "03", title: "Optimization Levers", desc: "Define the constraint space — cost ceilings, latency bounds, quality floors — and identify architectural moves that improve margin without sacrificing output quality.", tags: ["Constraint modeling", "Cost guardrails", "Architecture tactics"] },
];

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const FrameworkPage = () => (
  <div>
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
      <motion.div {...fade}>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-4">Framework</p>
        <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
          AI systems as<br /><span className="italic text-primary">economic systems</span>
        </h1>
        <p className="text-dim text-lg max-w-2xl mb-16">
          A modeling approach that treats AI systems as economic systems — linking architectural choices to cost, break-even thresholds, and margin resilience under scale.
        </p>
      </motion.div>

      {/* Framework steps */}
      <div className="grid md:grid-cols-3 gap-px bg-border rounded overflow-hidden mb-20">
        {frameworkCards.map((c, i) => (
          <motion.div key={c.num} {...fade} transition={{ ...fade.transition, delay: i * 0.1 }} className="bg-card p-8 flex flex-col">
            <p className="font-mono text-4xl text-primary mb-6">{c.num}</p>
            <h3 className="font-medium text-foreground text-xl mb-3">{c.title}</h3>
            <p className="text-sm text-dim leading-relaxed mb-8 flex-1">{c.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {c.tags.map((t) => (
                <span key={t} className="text-[10px] px-2.5 py-1 rounded bg-secondary text-secondary-foreground">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Core Definitions */}
      <motion.div {...fade}>
        <h2 className="font-display text-3xl text-foreground mb-10">Core Definitions</h2>
      </motion.div>
      <div className="space-y-8 mb-12">
        {definitions.map((d, i) => (
          <motion.div key={d.name} {...fade} transition={{ ...fade.transition, delay: i * 0.08 }} className="grid md:grid-cols-[280px_1fr] gap-6 items-start border-b border-border pb-8">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-dim mb-2">{d.name}</p>
              <p className="font-mono text-foreground">{d.eq}</p>
            </div>
            <p className="text-sm text-dim leading-relaxed">{d.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Working principle */}
      <motion.div {...fade} className="border-l-2 border-primary pl-6 py-2 max-w-xl">
        <p className="text-sm font-medium text-foreground mb-1">Working principle</p>
        <p className="text-sm text-dim leading-relaxed">
          Margin is an architectural property. If architecture ignores economics, growth amplifies inefficiency.
        </p>
      </motion.div>

      <div className="mt-14">
        <Link to="/research" className="text-sm text-primary hover:underline font-medium">
          → Explore research tracks
        </Link>
      </div>
    </section>
  </div>
);

export default FrameworkPage;
