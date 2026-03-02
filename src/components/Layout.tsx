import { Outlet } from "react-router-dom";
import { Topbar } from "./Topbar";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Framework", to: "/framework" },
  { label: "Research", to: "/research" },
  { label: "Demos", to: "/demos" },
  { label: "Writing", to: "/writing" },
  { label: "About", to: "/about" },
  { label: "Policies", to: "/policies" },
  { label: "Contact", to: "/contact" },
];

export const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <Topbar />
    <main className="flex-1 pt-16">
      <Outlet />
    </main>
    <footer className="border-t border-border mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Top strip */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-primary-foreground">AS</span>
              </div>
              <span className="font-medium text-foreground text-sm">Afshar Sanam AI Lab</span>
            </div>
            <p className="text-sm text-dim leading-relaxed max-w-xs">
              Computational Economics, AI Systems Architecture & Structural Modeling
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-widest text-dim mb-4">Navigate</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {footerLinks.map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-widest text-dim mb-4">Contact</p>
            <a href="mailto:afshar@afsharsanam.com" className="text-sm text-primary hover:underline block mb-2">
              afshar@afsharsanam.com
            </a>
            <div className="flex gap-4 mt-3">
              <a href="https://linkedin.com/in/afsharsanam" target="_blank" rel="noopener noreferrer" className="text-sm text-dim hover:text-foreground transition-colors">LinkedIn</a>
              <a href="https://github.com/afshar5a" target="_blank" rel="noopener noreferrer" className="text-sm text-dim hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="border-t border-border py-5 flex items-center justify-between text-[11px] text-dim">
          <span>© {new Date().getFullYear()} Afshar Sanam AI Lab. Independent research.</span>
          <Link to="/policies" className="hover:text-foreground transition-colors">Policies</Link>
        </div>
      </div>
    </footer>
  </div>
);
