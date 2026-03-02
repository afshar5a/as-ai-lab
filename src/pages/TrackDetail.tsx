import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const trackData: Record<string, { title: string; num: string; items: string[]; inProgress: string[] }> = {
  "ai-systems-economics": {
    title: "AI Systems Economics",
    num: "01",
    items: [
      "Cost structures of inference, retrieval, and orchestration at scale",
      "CPER (Cost per Effective Request) as a margin diagnostic",
      "Break-even modeling under variable user load",
      "Cache-aware cost modeling and retrieval economics",
    ],
    inProgress: [
      "Multi-model cost comparison framework",
      "Dynamic pricing sensitivity under elastic demand",
      "Real-time CPER monitoring dashboard prototype",
    ],
  },
  "economic-signal-research": {
    title: "Economic Signal Research",
    num: "02",
    items: [
      "Macro sentiment regime detection using NLP on earnings calls, FOMC transcripts, and financial media",
      "Structural break detection in economic language patterns",
      "Mapping language shifts to market regime transitions",
    ],
    inProgress: [
      "Earnings call sentiment corpus construction",
      "FOMC language drift analysis pipeline",
      "Cross-asset regime signal validation",
    ],
  },
  "optimization-structural-modeling": {
    title: "Optimization & Structural Modeling",
    num: "03",
    items: [
      "Constrained optimization under cost and quality bounds",
      "Multi-objective architecture search for AI systems",
      "Structural simulation of margin behavior at scale",
    ],
    inProgress: [
      "Pareto frontier visualization for cost-quality tradeoffs",
      "Constraint relaxation sensitivity analysis",
      "Simulation engine for architecture scenario testing",
    ],
  },
};

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const TrackDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const track = slug ? trackData[slug] : null;

  if (!track) {
    return (
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <p className="text-dim">Track not found.</p>
        <Link to="/research" className="text-primary text-sm hover:underline mt-4 inline-block">← Back</Link>
      </div>
    );
  }

  return (
    <motion.div {...fade}>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
        <Link to="/research" className="inline-flex items-center gap-2 text-sm text-dim hover:text-foreground transition-colors mb-10">
          <ArrowLeft size={14} /> Research Tracks
        </Link>

        <div className="grid lg:grid-cols-[120px_1fr] gap-8 mb-16">
          <p className="font-mono text-6xl text-primary/15 hidden lg:block">{track.num}</p>
          <div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">{track.title}</h1>
            <div className="accent-rule w-24 mt-4 mb-12" />

            <h2 className="text-[11px] uppercase tracking-[0.2em] text-dim mb-6">Research Areas</h2>
            <div className="space-y-4 mb-16">
              {track.items.map((item, i) => (
                <div key={i} className="flex items-start gap-4 border-b border-border pb-4">
                  <span className="font-mono text-sm text-primary/50 mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>

            <h2 className="text-[11px] uppercase tracking-[0.2em] text-dim mb-6">In Progress</h2>
            <div className="space-y-3">
              {track.inProgress.map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-3 px-5 border border-dashed border-border rounded bg-card/50">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded">WIP</span>
                  <p className="text-sm text-dim">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default TrackDetail;
