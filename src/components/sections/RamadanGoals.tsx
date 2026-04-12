"use client";

import GoalsCard from "./GoalsCard";
import useRamadanGoalsLogic from "../../services/ramadanGoalsLogic.service";

const RamadanGoals = () => {
  const WEEK_LABELS = ["", "Repentance", "Devotion", "Gratitude", "Charity", "Reflection"];
  const { activeWeek, setActiveWeek, filteredGoals, handleToggle } =
    useRamadanGoalsLogic();

  const completedCount = filteredGoals.filter(
    (g) => g.missionDone && g.challengeDone
  ).length;
  const totalCount = filteredGoals.length;
  const weekProgressPct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-indigo-900/20 blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-light">
            Ramadan Goals
          </h2>
          <p className="text-slate-500 mt-3 text-sm md:text-base">
            Small consistent acts are more beloved to Allah than occasional large ones.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-3 mb-8 flex-wrap animate-fade-up stagger-1">
          {[1, 2, 3, 4, 5].map((week) => (
            <button
              key={week}
              onClick={() => setActiveWeek(week)}
              className={`
                relative px-4 py-2.5 rounded-xl text-sm font-medium
                transition-all duration-200 ease-out
                ${
                  activeWeek === week
                    ? "glass-gold text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.15)]"
                    : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                }
              `}
            >
              {activeWeek === week && (
                <span className="absolute inset-0 rounded-xl border border-amber-400/30" />
              )}
              <span className="relative flex items-center gap-1.5">
                <span>
                  🌙 Week {week}
                  {WEEK_LABELS[week] && (
                    <span className="hidden md:inline text-xs opacity-60 ml-1">
                      · {WEEK_LABELS[week]}
                    </span>
                  )}
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="max-w-md mx-auto mb-10 animate-fade-up stagger-2">
          <div className="flex justify-between items-center mb-2 text-xs text-slate-500">
            <span>
              Week {activeWeek} — {WEEK_LABELS[activeWeek]}
            </span>
            <span className="font-medium text-amber-400">
              {completedCount}/{totalCount} completed
            </span>
          </div>
          <div className="progress-bar-track h-2">
            <div
              className="progress-bar-fill"
              style={
                {
                  "--progress-width": `${weekProgressPct}%`,
                } as React.CSSProperties
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredGoals.map((goal, idx) => (
            <div
              key={goal.id}
              className={`stagger-${Math.min(idx + 1, 7)}`}
            >
              <GoalsCard goal={goal} onToggle={handleToggle} />
            </div>
          ))}
        </div>

        {weekProgressPct === 100 && totalCount > 0 && (
          <div className="mt-10 text-center animate-fade-up">
            <div className="inline-block glass-gold rounded-2xl px-8 py-5">
              <p className="text-2xl mb-1">🎉</p>
              <p className="text-amber-300 font-semibold">Week {activeWeek} Complete!</p>
              <p className="text-slate-400 text-sm mt-1">
                MashaAllah — keep up this beautiful consistency.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RamadanGoals;
