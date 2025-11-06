import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to full-time roles
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            A Netflix‑style resume showcasing projects, skills, and impact
          </h1>
          <p className="mt-4 text-white/80 text-lg max-w-xl">
            I craft delightful, performant products. Explore my work like browsing your favorite shows.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-2.5 font-medium hover:bg-white/90 transition">
              Browse Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-5 py-2.5 font-medium hover:bg-white/20 transition border border-white/20">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
    </section>
  );
}
