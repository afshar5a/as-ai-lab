import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const labTags = ["Computational Economics", "AI Architecture", "Structural Modeling", "Optimization", "Independent Research"];

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const AboutPage = () => (
  <div>
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
      <motion.div {...fade}>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-4">About</p>
        <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
          About the <span className="italic">Lab</span>
        </h1>
        <p className="text-dim text-lg max-w-2xl mb-16">
          Afshar Sanam AI Lab is founded as an independent research space focused on computational economics, AI systems architecture, and structural modeling.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Lab card */}
        <motion.div {...fade} className="border border-border rounded bg-card p-8">
          <h2 className="text-xl font-medium text-foreground mb-5">About the Lab</h2>
          <p className="text-sm text-dim leading-relaxed mb-4">
            The lab's work sits at the intersection of AI systems design and economics. Its core thesis: the margin structure of AI systems is not a business metric — it's an architectural property. Understanding it requires structural modeling, not dashboards.
          </p>
          <p className="text-sm text-dim leading-relaxed mb-8">
            Research is organized around three tracks: AI systems economics, economic signal analysis, and optimization under constraint. Each track is designed to produce frameworks, not products — reusable ways of thinking about cost, margin, and behavior at scale.
          </p>
          <div className="flex flex-wrap gap-2">
            {labTags.map((t) => (
              <span key={t} className="text-[10px] px-2.5 py-1 rounded bg-secondary text-secondary-foreground">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Founder card */}
        <motion.div {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="border border-border rounded bg-card p-8">
          <h2 className="text-xl font-medium text-foreground mb-5">About the Founder</h2>
          <p className="text-sm text-dim leading-relaxed mb-4">
            Afshar Sanam is a technologist and researcher focused on the structural economics of AI systems. His background spans software engineering, data systems, and applied research in computational economics.
          </p>
          <p className="text-sm text-dim leading-relaxed mb-4">
            This lab exists as an independent research project — built outside professional responsibilities, using no employer data or resources. It reflects a long-standing interest in how architectural decisions shape economic outcomes in technology systems.
          </p>
          <p className="text-sm text-dim leading-relaxed mb-8">
            The work is exploratory and research-oriented. It is not affiliated with, endorsed by, or connected to any current or former employer.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="mailto:afshar@afsharsanam.com" className="text-primary hover:underline">Email →</a>
            <a href="https://linkedin.com/in/afsharsanam" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn →</a>
            <a href="https://github.com/afsharsanam" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub →</a>
          </div>
        </motion.div>
      </div>

      {/* Independence note */}
      <motion.div {...fade} className="border-l-2 border-primary pl-6 py-2 text-[12px] text-dim leading-relaxed max-w-xl">
        Independence note: all examples are generic and intended for research illustration only. No proprietary or confidential employer data is used.
      </motion.div>

      <motion.div {...fade} className="mt-12 flex flex-wrap gap-3">
        <Link to="/contact" className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded hover:opacity-90 transition-opacity">
          Connect about research
        </Link>
        <Link to="/policies" className="px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded hover:bg-secondary transition-colors">
          View policies
        </Link>
      </motion.div>
    </section>
  </div>
);

export default AboutPage;
