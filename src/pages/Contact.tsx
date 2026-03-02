import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["Collaboration", "Speaking", "Media", "OSS", "Other"];

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const ContactPage = () => {
  const [category, setCategory] = useState("Collaboration");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${category}] Research Inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\nCategory: ${category}\n\n${message}`);
    window.location.href = `mailto:afshar@afsharsanam.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
        <motion.div {...fade}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-4">Connect</p>
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            Research <span className="italic">Inquiry</span>
          </h1>
          <p className="text-dim text-lg max-w-2xl mb-4">
            Interested in the lab's research? Reach out for collaboration, speaking, media, or open-source discussions. This is not a consulting or services inquiry form.
          </p>
          <p className="text-sm text-dim mb-12">
            Direct email: <a href="mailto:afshar@afsharsanam.com" className="text-primary hover:underline">afshar@afsharsanam.com</a>
          </p>
        </motion.div>

        <motion.div {...fade} className="max-w-lg">
          {sent ? (
            <div className="border-l-2 border-primary pl-6 py-4">
              <p className="font-medium text-foreground mb-2">Email client opened</p>
              <p className="text-sm text-dim">Your email client should have opened with the inquiry pre-filled. If not, email directly at afshar@afsharsanam.com.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-[11px] uppercase tracking-widest text-dim mb-2 block">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest text-dim mb-2 block">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest text-dim mb-2 block">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-widest text-dim mb-2 block">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  className="w-full px-4 py-2.5 rounded border border-border bg-background text-foreground text-sm resize-none focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <button type="submit" className="px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded hover:opacity-90 transition-opacity">
                Send Research Inquiry
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
