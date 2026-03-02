import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { posts } from "./Writing";

const PostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <p className="text-dim">Post not found.</p>
        <Link to="/writing" className="text-primary text-sm hover:underline mt-4 inline-block">← Back</Link>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <article className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 md:py-28">
        <Link to="/writing" className="inline-flex items-center gap-2 text-sm text-dim hover:text-foreground transition-colors mb-10">
          <ArrowLeft size={14} /> Research Notes
        </Link>

        <div className="max-w-2xl">
          <p className="font-mono text-[12px] text-dim mb-4">{post.date} · Research Note</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">{post.title}</h1>
          <div className="accent-rule w-20 mt-4 mb-12" />

          <div className="space-y-5">
            {post.body.split("\n\n").map((para, i) => (
              <p key={i} className={`leading-relaxed ${
                para.startsWith("CPER") || para.startsWith("Where") ? "font-mono text-sm text-foreground bg-card border border-border rounded p-4" : "text-dim"
              }`}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default PostDetail;
