import { GoalsCardProps } from "../../types/ramadan.types";

const GoalsCard = ({ goal, onToggle }: GoalsCardProps) => {
  
  const isCompleted = goal.missionDone && goal.challengeDone;
  const halfDone = goal.missionDone || goal.challengeDone;

  return (
    <div
      className={`
        group relative flex flex-col gap-4 p-5 rounded-2xl
        border transition-all duration-300 ease-out animate-fade-up
        ${
          isCompleted
            ? "border-emerald-500/40 bg-emerald-950/30 shadow-[0_0_24px_rgba(52,211,153,0.12)]"
            : halfDone
            ? "glass-gold hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "glass hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        }
      `}
    >
      {isCompleted && (
        <div className="animate-check-pop absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
      <div className="flex items-center justify-between">
        <span
          className={`text-xs font-bold tracking-widest uppercase ${
            isCompleted ? "text-emerald-400" : "text-gold"
          }`}
        >
          Day {goal.day}
        </span>
        <div className="flex gap-1">
          <span
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              goal.missionDone ? "bg-teal-400" : "bg-white/10"
            }`}
          />
          <span
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              goal.challengeDone ? "bg-amber-400" : "bg-white/10"
            }`}
          />
        </div>
      </div>
      <div className="flex-1 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400 shrink-0" />
          <span className="text-xs font-semibold text-teal-300 uppercase tracking-wider">
            Mission
          </span>
        </div>
        <p
          className={`text-sm leading-relaxed transition-all duration-300 ${
            goal.missionDone ? "text-slate-500 line-through" : "text-slate-300"
          }`}
        >
          {goal.mission}
        </p>
        <button
          onClick={() => onToggle(goal.id, "mission")}
          className="flex items-center gap-2.5 cursor-pointer group/check w-fit mt-1"
        >
          <span
            className={`
              w-5 h-5 rounded-md border-2 flex items-center justify-center
              transition-all duration-200
              ${
                goal.missionDone
                  ? "bg-teal-500 border-teal-500"
                  : "border-white/20 bg-white/5 group-hover/check:border-teal-400/50"
              }
            `}
          >
            {goal.missionDone && (
              <svg
                className="w-3 h-3 text-white animate-check-pop"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </span>
          <span
            className={`text-xs transition-colors duration-200 ${
              goal.missionDone
                ? "text-teal-400"
                : "text-slate-500 group-hover/check:text-slate-300"
            }`}
          >
            {goal.missionDone ? "Done!" : "Mark done"}
          </span>
        </button>
      </div>

      <div className="h-px bg-white/5" />
      <div className="flex-1 space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
          <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
            Challenge
          </span>
        </div>
        <p
          className={`text-sm leading-relaxed transition-all duration-300 ${
            goal.challengeDone ? "text-slate-500 line-through" : "text-slate-300"
          }`}
        >
          {goal.challenge}
        </p>
        <button
          onClick={() => onToggle(goal.id, "challenge")}
          className="flex items-center gap-2.5 cursor-pointer group/check w-fit mt-1"
        >
          <span
            className={`
              w-5 h-5 rounded-md border-2 flex items-center justify-center
              transition-all duration-200
              ${
                goal.challengeDone
                  ? "bg-amber-500 border-amber-500"
                  : "border-white/20 bg-white/5 group-hover/check:border-amber-400/50"
              }
            `}
          >
            {goal.challengeDone && (
              <svg
                className="w-3 h-3 text-white animate-check-pop"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </span>
          <span
            className={`text-xs transition-colors duration-200 ${
              goal.challengeDone
                ? "text-amber-400"
                : "text-slate-500 group-hover/check:text-slate-300"
            }`}
          >
            {goal.challengeDone ? "Done!" : "Mark done"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default GoalsCard;
