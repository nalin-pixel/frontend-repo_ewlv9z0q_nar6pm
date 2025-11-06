import { Play, ExternalLink } from 'lucide-react';

export default function Row({ title, items = [] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
      <h2 className="text-white text-xl sm:text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item, idx) => (
          <a key={idx} href={item.href || '#'} target={item.href ? '_blank' : undefined} rel={item.href ? 'noreferrer' : undefined} className="group relative rounded-md overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition">
            {/* Poster */}
            <div className="aspect-[16/10] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-purple-500/20" />
            {/* Info */}
            <div className="p-3">
              <div className="flex items-center justify-between gap-2">
                <p className="text-white font-medium truncate">{item.title}</p>
                {item.href && (
                  <ExternalLink size={16} className="text-white/70 group-hover:text-white" />
                )}
              </div>
              <p className="text-xs text-white/60 line-clamp-2 mt-1">{item.desc}</p>
              <div className="mt-3 hidden sm:flex items-center gap-2 text-xs text-white/70">
                <Play size={14} />
                <span>View case study</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
