import {duas, dhikr} from "../../data/ibadat"

const DuaCorner = () => {
  const videoId = "jcMHYZO5-_4";

  return (
    <section className="relative py-20 px-4 md:px-8 pb-32 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full bg-teal-900/20 blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[250px] rounded-full bg-purple-900/15 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-light">
            Noor e Dua
          </h2>
          <p className="text-slate-500 mt-3 text-sm md:text-base">
            Du'a is the weapon of the believer — call upon your Lord with humility.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6 animate-fade-up stagger-1">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-lg">🤍</span>
                <h3 className="text-base font-bold text-slate-200">
                  Duas Close to My Heart
                </h3>
              </div>
              <ul className="space-y-3">
                {duas.map((dua, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed"
                  >
                    <span className="text-base shrink-0 mt-0.5">🤲</span>
                    <span>{dua.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-teal rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-lg">📿</span>
                <h3 className="text-base font-bold text-teal-200">
                  Daily Dhikr
                </h3>
              </div>
              <div className="space-y-3">
                {dhikr.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-3 py-2 border-b border-white/5 last:border-0"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="font-arabic text-base text-teal-200 text-right">
                        {item.arabic}
                      </span>
                      <span className="text-xs text-slate-500">{item.latin}</span>
                    </div>
                    <span className="text-teal-400 font-bold text-sm shrink-0 tabular-nums">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 animate-fade-up stagger-2">
            <div className="glass rounded-3xl overflow-hidden shadow-2xl">
              {/* Video header */}
              <div className="px-5 pt-5 pb-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-teal-400 font-medium tracking-wider uppercase mb-0.5">
                    Ramadan Recitation
                  </p>
                  <h3 className="text-slate-200 font-semibold text-sm">
                    Today's Spiritual Reflection
                  </h3>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/60" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
                </div>
              </div>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="Ramadan Dua"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <p className="text-xs text-slate-600 font-arabic">
                  بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                </p>
                <a
                  href={`https://youtu.be/${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-teal-500 hover:text-teal-300 transition-colors duration-200 flex items-center gap-1"
                >
                  Watch on YouTube
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="glass-gold rounded-2xl p-6 mt-6">
              <p className="text-right font-arabic text-xl text-amber-200 leading-loose mb-3">
                وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ
              </p>
              <p className="text-slate-400 text-sm leading-relaxed text-center italic">
                "And when My servants ask you about Me — indeed I am near. I respond
                to the call of the one who calls upon Me."
              </p>
              <p className="text-amber-400/60 text-xs text-center mt-2 font-medium">
                — Al-Baqarah 2:186
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DuaCorner;
