import { Link } from "@tanstack/react-router";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Header() {
  const isMobile = useMediaQuery("(min-width: 768px)");

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl border-b border-b-slate-100 bg-slate-50/50">
      <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <h2>Logo</h2>
        {isMobile && <DesktopView />}
        {!isMobile && <MobileView />}
      </nav>
    </header>
  );
}

const MobileView = () => {
  return (
    <div>
      <p>Mobile view</p>
    </div>
  );
};

const DesktopView = () => {
  return (
    <div className="flex items-center space-x-3">
      <Link to="/about">About</Link>
      <Link to="/discussion">Discusstion</Link>
    </div>
  );
};
