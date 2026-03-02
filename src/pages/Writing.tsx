import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const posts = [
  {
    slug: "unit-economics-ai-inference",
    title: "Unit Economics of AI Inference at Scale",
    date: "2026-02-15",
    summary: "Why per-request cost metrics fail at scale, and how CPER offers a more structural view of AI system economics.",
    body: `Most teams track inference cost as a single number: cost per API call. This works at prototype scale. It breaks at production scale.

The issue is that a "request" isn't a uniform unit. Some requests hit cache. Some trigger multi-step retrieval chains. Some invoke orchestration layers that multiply compute well beyond the initial prompt.

CPER — Cost per Effective Request — was designed to address this. It separates requests that actually require model computation from those absorbed by caching or deduplication layers. The formula is straightforward:

CPER = (TokenCost + Overhead) / EffectiveRequests

Where EffectiveRequests = TotalRequests × (1 − CacheHitRate).

The insight is structural: as cache hit rates improve, CPER drops — but only if overhead doesn't scale with total volume. Many architectures have overhead components (logging, routing, pre-processing) that scale with total requests, not effective requests. This creates a hidden floor on cost reduction.

At the lab, we model these dynamics to identify where architectural choices create cost leverage — and where they create cost traps.

This is a research note. Numbers are illustrative, not sourced from production systems.`,
  },
  {
    slug: "macro-sentiment-regime-detection",
    title: "Macro Sentiment Regimes: Language as Leading Indicator",
    date: "2026-02-01",
    summary: "Exploring how shifts in economic language — across FOMC transcripts, earnings calls, and financial media — can signal macro regime transitions before traditional indicators.",
    body: `Traditional macro indicators — GDP, unemployment, CPI — are lagging by design. They measure what already happened. But language often shifts before the numbers do.

FOMC transcripts, for example, contain measurable sentiment patterns. When the Fed's language shifts from "accommodative" framing to "vigilance" framing, it often precedes formal policy changes by 1-2 meetings. This isn't news — but quantifying the shift structurally is underexplored.

The research approach here is to treat economic language as a time series. We extract sentiment features from transcripts using NLP — not simple positive/negative scoring, but regime-aware embeddings that capture the structural tone of economic discourse.

The hypothesis: language regime transitions are detectable 2-6 weeks before they manifest in market behavior or policy action. If validated, this creates a leading signal channel that complements (not replaces) traditional quantitative indicators.

Current work focuses on three corpus types:
1. FOMC meeting transcripts and minutes
2. S&P 500 earnings call transcripts
3. Major financial media editorials

Each corpus has different signal characteristics. FOMC language is precise and slow-moving. Earnings calls are noisy but high-frequency. Media sits in between.

This research is exploratory. All data sources are publicly available. No employer resources are used.`,
  },
];

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const WritingPage = () => (
  <div>
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
      <motion.div {...fade}>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-4">Writing</p>
        <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">Research Notes</h1>
        <p className="text-dim text-lg max-w-2xl mb-16">
          Working notes and essays on AI systems economics, margin resilience, and macro sentiment research. Clearly labeled as research — not production analysis.
        </p>
      </motion.div>

      <div className="space-y-0 border-t border-border">
        {posts.map((post, i) => (
          <motion.div key={post.slug} {...fade} transition={{ ...fade.transition, delay: i * 0.1 }}>
            <Link
              to={`/writing/${post.slug}`}
              className="group block border-b border-border py-8 md:py-10 hover:bg-card/50 transition-colors px-2 -mx-2 rounded"
            >
              <div className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-8">
                <p className="font-mono text-[12px] text-dim md:pt-1">{post.date}</p>
                <div>
                  <h2 className="text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-sm text-dim leading-relaxed max-w-xl">{post.summary}</p>
                  <span className="inline-block mt-4 text-[12px] text-primary font-mono uppercase tracking-wider">
                    Read note →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default WritingPage;
export { posts };
