import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Search, BarChart3 } from "lucide-react";

const safetyNote = "No proprietary or confidential employer data is used. Use only public or self-provided text.";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

// --- Prompt Playground ---
const PromptPlayground = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const demoResponses: Record<string, string> = {
    cost: "Demo: At 1M requests/month with a 40% cache hit rate, CPER = ($0.002 + $0.0005) / 600,000 ≈ $0.0000042 per effective request. Margin pressure emerges above 2M requests if RPU stays flat.",
    margin: "Demo: Margin resilience depends on the ratio of variable cost growth to revenue growth. If inference cost grows linearly with users but revenue grows sub-linearly, structural margin erosion is inevitable.",
    default: "Demo: This is a placeholder response. In production, this would connect to an LLM API. Try typing 'cost' or 'margin' for themed demo outputs.",
  };

  const handleSubmit = () => {
    if (!input.trim()) return;
    const key = input.toLowerCase().includes("cost") ? "cost" : input.toLowerCase().includes("margin") ? "margin" : "default";
    setOutput(demoResponses[key]);
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
          <MessageSquare size={14} className="text-primary" />
        </div>
        <h3 className="font-medium text-foreground text-lg">Prompt Playground</h3>
      </div>
      <p className="text-sm text-dim mb-6">
        Demo-mode placeholder outputs. Type a prompt related to AI systems economics. Try "cost" or "margin" for themed responses.
      </p>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g., What drives CPER at scale?"
        className="w-full h-28 p-4 rounded border border-border bg-background text-foreground text-sm resize-none focus:outline-none focus:ring-1 focus:ring-ring font-mono"
      />
      <button onClick={handleSubmit} className="mt-3 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded hover:opacity-90 transition-opacity">
        Run (Demo)
      </button>
      {output && (
        <div className="mt-6 border-l-2 border-primary pl-5 py-2">
          <p className="text-[10px] uppercase tracking-widest text-dim mb-2">Response</p>
          <p className="text-sm text-foreground font-mono leading-relaxed">{output}</p>
        </div>
      )}
      <p className="text-[11px] text-dim mt-4">Limitations: No real LLM connected. Outputs are hardcoded demo strings.</p>
    </div>
  );
};

// --- Retrieval Demo ---
const RetrievalDemo = () => {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ passage: string; score: number }[]>([]);

  const handleRetrieve = () => {
    if (!text.trim() || !query.trim()) return;
    const sentences = text.split(/[.!?\n]+/).filter((s) => s.trim().length > 10);
    const queryTerms = query.toLowerCase().split(/\s+/);
    const scored = sentences.map((s) => {
      const lower = s.toLowerCase();
      const score = queryTerms.reduce((acc, term) => acc + (lower.includes(term) ? 1 : 0), 0);
      return { passage: s.trim(), score };
    });
    scored.sort((a, b) => b.score - a.score);
    setResults(scored.slice(0, 5).filter((r) => r.score > 0));
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
          <Search size={14} className="text-primary" />
        </div>
        <h3 className="font-medium text-foreground text-lg">Retrieval Demo</h3>
      </div>
      <p className="text-sm text-dim mb-6">
        Paste text, then query it. Simple client-side keyword matching shows top passages.
      </p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste a paragraph or document text here..."
        className="w-full h-32 p-4 rounded border border-border bg-background text-foreground text-sm resize-none focus:outline-none focus:ring-1 focus:ring-ring mb-3"
      />
      <div className="flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search query..."
          className="flex-1 px-4 py-2.5 rounded border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring"
        />
        <button onClick={handleRetrieve} className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded hover:opacity-90 transition-opacity">
          Retrieve
        </button>
      </div>
      {results.length > 0 && (
        <div className="mt-6 space-y-3">
          {results.map((r, i) => (
            <div key={i} className="flex items-start gap-4 border-b border-border pb-3">
              <span className="font-mono text-xs text-primary/60 mt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm text-foreground">{r.passage}</p>
            </div>
          ))}
        </div>
      )}
      <p className="text-[11px] text-dim mt-4">Limitations: Keyword-based only. No embeddings or semantic search.</p>
    </div>
  );
};

// --- Evaluation Dashboard ---
const evalData = [
  { model: "GPT-4o", costPer1kTokens: 0.005, quality: 92, latencyMs: 420, cper: 0.0042 },
  { model: "Claude 3.5 Sonnet", costPer1kTokens: 0.003, quality: 90, latencyMs: 380, cper: 0.0031 },
  { model: "GPT-4o-mini", costPer1kTokens: 0.00015, quality: 78, latencyMs: 210, cper: 0.00018 },
  { model: "Llama 3 70B", costPer1kTokens: 0.0008, quality: 82, latencyMs: 350, cper: 0.0009 },
  { model: "Mixtral 8x7B", costPer1kTokens: 0.0006, quality: 76, latencyMs: 290, cper: 0.0007 },
];

const EvalDashboard = () => {
  const [sortKey, setSortKey] = useState<keyof typeof evalData[0]>("cper");
  const sorted = [...evalData].sort((a, b) => {
    const av = a[sortKey], bv = b[sortKey];
    return typeof av === "number" && typeof bv === "number" ? av - bv : 0;
  });

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
          <BarChart3 size={14} className="text-primary" />
        </div>
        <h3 className="font-medium text-foreground text-lg">Evaluation Dashboard</h3>
      </div>
      <p className="text-sm text-dim mb-6">
        Static built-in data comparing cost, quality, and CPER across models. Click column headers to sort.
      </p>
      <div className="overflow-x-auto border border-border rounded">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/50">
              {[
                { key: "model", label: "Model" },
                { key: "costPer1kTokens", label: "$/1k tokens" },
                { key: "quality", label: "Quality" },
                { key: "latencyMs", label: "Latency" },
                { key: "cper", label: "CPER" },
              ].map((col) => (
                <th
                  key={col.key}
                  onClick={() => setSortKey(col.key as keyof typeof evalData[0])}
                  className={`text-left py-3 px-4 font-medium cursor-pointer hover:text-primary transition-colors text-[12px] uppercase tracking-wider ${
                    sortKey === col.key ? "text-primary" : "text-dim"
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((row) => (
              <tr key={row.model} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                <td className="py-3 px-4 font-mono text-foreground text-[13px]">{row.model}</td>
                <td className="py-3 px-4 text-dim">${row.costPer1kTokens}</td>
                <td className="py-3 px-4 text-dim">{row.quality}%</td>
                <td className="py-3 px-4 text-dim">{row.latencyMs}ms</td>
                <td className="py-3 px-4 font-mono text-primary">${row.cper}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[11px] text-dim mt-4">Limitations: Data is illustrative and static. Not sourced from live benchmarks.</p>
    </div>
  );
};

const tabs = [
  { id: "prompt", label: "Prompt Playground", icon: MessageSquare },
  { id: "retrieval", label: "Retrieval Demo", icon: Search },
  { id: "eval", label: "Eval Dashboard", icon: BarChart3 },
];

const DemosPage = () => {
  const [active, setActive] = useState("prompt");

  return (
    <div>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
        <motion.div {...fade}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-4">Demos</p>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            Interactive <span className="italic">Demos</span>
          </h1>
          <p className="text-dim text-lg max-w-2xl mb-4">
            Explore interactive prototypes that illustrate the lab's research themes. All demos run client-side with no external API calls by default.
          </p>
          <div className="border-l-2 border-primary pl-4 py-1 text-[12px] text-dim mb-12 max-w-xl">
            {safetyNote}
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div {...fade} className="flex gap-1 mb-8 bg-secondary rounded p-1 max-w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded text-sm transition-all ${
                active === tab.id
                  ? "bg-primary text-primary-foreground font-medium shadow-sm"
                  : "text-dim hover:text-foreground"
              }`}
            >
              <tab.icon size={14} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        <motion.div {...fade} className="border border-border rounded bg-card p-6 md:p-10">
          {active === "prompt" && <PromptPlayground />}
          {active === "retrieval" && <RetrievalDemo />}
          {active === "eval" && <EvalDashboard />}
        </motion.div>
      </section>
    </div>
  );
};

export default DemosPage;
