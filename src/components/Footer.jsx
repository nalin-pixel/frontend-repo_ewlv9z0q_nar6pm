export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/60 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 items-center">
        <div>
          <p className="text-lg font-semibold">Thanks for watching.</p>
          <p className="text-white/70">Let’s create something binge‑worthy together.</p>
        </div>
        <div className="sm:text-right text-white/70 text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
