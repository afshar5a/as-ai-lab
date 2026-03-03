import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const PoliciesPage = () => (
  <div>
    <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
      <motion.div {...fade}>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-4">Policies</p>
        <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
          Independence &<br /><span className="italic">Data Policy</span>
        </h1>
        <p className="text-dim text-lg max-w-2xl mb-16">
          Transparency about how this research is conducted, what data is used, and the lab's independence.
        </p>
      </motion.div>

      <div className="max-w-2xl space-y-12">
        {/* Independence */}
        <motion.div {...fade}>
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-dim mb-6">Independence Statement</h2>
          <div className="space-y-4 text-sm text-dim leading-relaxed border-l-2 border-border pl-6">
            <p>AS AI Lab is an independent, personal research project. It is not affiliated with, endorsed by, or connected to any current or former employer.</p>
            <p>All work is conducted outside professional responsibilities and work hours. No employer resources, data, systems, or proprietary information are used in any capacity.</p>
            <p>All examples, figures, and illustrations are generic and intended for research purposes only. Any resemblance to specific company data or systems is coincidental.</p>
          </div>
        </motion.div>

        {/* Data Policy */}
        <motion.div {...fade}>
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-dim mb-6">Data Policy</h2>
          <div className="space-y-4 text-sm text-dim leading-relaxed">
            <p>This research uses only the following categories of data:</p>
            <div className="space-y-4 border-l-2 border-primary pl-6">
              <div>
                <p className="font-medium text-foreground mb-1">Public data</p>
                <p>Government publications (FOMC transcripts, BLS data), publicly filed earnings call transcripts, and openly available financial media.</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Open-licensed data</p>
                <p>Academic datasets, open-source corpora, and Creative Commons licensed content.</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Self-generated data</p>
                <p>Synthetic datasets, simulations, and illustrative examples created specifically for this research.</p>
              </div>
            </div>
            <p className="mt-4">No proprietary, confidential, or employer-sourced data is used at any point in the research process.</p>
          </div>
        </motion.div>

        {/* Interactive tools */}
        <motion.div {...fade}>
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-dim mb-6">Interactive Tools & Demos</h2>
          <div className="space-y-4 text-sm text-dim leading-relaxed border-l-2 border-border pl-6">
            <p>All interactive demos on this site run client-side. No user input is stored, transmitted, or logged.</p>
            <p>Users are responsible for ensuring they do not input proprietary or confidential data into any demo tool.</p>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default PoliciesPage;
