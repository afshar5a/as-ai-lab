import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const tracks = [
  {
    title: "AI Systems Economics",
    to: "/research/ai-systems-economics",
    num: "01",
    items: [
      "Cost structures of inference, retrieval, and orchestration at scale",
      "CPER (Cost per Effective Request) as a margin diagnostic",
      "Break-even modeling under variable user load",
      "Cache-aware cost modeling and retrieval economics",
    ],
  },
  {
    title: "Economic Signal Research",
    to: "/research/economic-signal-research",
    num: "02",
    items: [
      "Macro sentiment regime detection using NLP on earnings calls, FOMC transcripts, and financial media",
      "Structural break detection in economic language patterns",
      "Mapping language shifts to market regime transitions",
    ],
  },
  {
    title: "Optimization & Structural Modeling",
    to: "/research/optimization-structural-modeling",
    num: "03",
    items: [
      "Constrained optimization under cost and quality bounds",
      "Multi-objective architecture search for AI systems",
      "Structural simulation of margin behavior at scale",
    ],
  },
];

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const ResearchPage = () => (
  <div>
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
      <motion.div {...fade}>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-4">Research</p>
        <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">Research Tracks</h1>
        <p className="text-dim text-lg max-w-2xl mb-16">
          Three parallel tracks connecting AI architecture, economics, and structural behavior under constraint.
        </p>
      </motion.div>

      <div className="space-y-6">
        {tracks.map((t, i) => (
          <motion.div key={t.title} {...fade} transition={{ ...fade.transition, delay: i * 0.1 }}>
            <Link to={t.to} className="group block border border-border rounded bg-card hover:border-primary/30 transition-all duration-300 overflow-hidden">
              <div className="grid md:grid-cols-[100px_1fr] min-h-[180px]">
                {/* Number column */}
                <div className="hidden md:flex items-center justify-center border-r border-border">
                  <span className="font-mono text-3xl text-primary/25">{t.num}</span>
                </div>
                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <h2 className="text-2xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {t.title}
                    </h2>
                    <ArrowUpRight size={20} className="shrink-0 text-dim group-hover:text-primary transition-colors mt-1" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-10 gap-y-2">
                    {t.items.map((item, j) => (
                      <p key={j} className="text-sm text-dim leading-relaxed">
                        <span className="text-primary/60 mr-1.5">→</span>{item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default ResearchPage;
