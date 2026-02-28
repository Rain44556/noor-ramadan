import { GoalsCardProps } from "../types/ramadan.types";


const GoalsCard = ({goal, onToggle} : GoalsCardProps) => {
const isCompleted = goal.missionDone && goal.challengeDone;

return (
    <div 
className={`flex flex-col gap-5 h-72 lg:w-48 p-4 rounded-xl border shadow-sm transition-all duration-300 transform
  ${
    isCompleted
      ? "bg-gray-600 border-green-300 scale-105 shadow-lg"
      : "bg-white/10 backdrop-blur-xl border border-purple-400/20 hover:-translate-y-2 hover:shadow-md"
  }`}    >
      <h2 className="text-lg text-purple-400 font-medium">Day {goal.day}</h2>

    
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="font-bold text-purple-300 text-xs">The Mission:</span>
        </div>
        <p 
        className="text-purple-300 text-xs leading-relaxed min-h-[40px]"
        >
          {goal.mission}
        </p>
        <label className="flex items-center gap-2 cursor-pointer group w-fit">
          <input
            type="checkbox"
            checked={goal.missionDone}
            onChange={() => onToggle(goal.id, 'mission')}
            className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
          />
          <span className="text-xs text-purple-200">Done</span>
        </label>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="font-bold text-purple-300 text-xs">The Challenge:</span>
        </div>
        <p className="text-purple-300 text-xs leading-relaxed min-h-[40px]">
          {goal.challenge}
        </p>
        <label className="flex items-center gap-2 cursor-pointer group w-fit">
          <input
            type="checkbox"
            checked={goal.challengeDone}
            onChange={() => onToggle(goal.id, 'challenge')}
            className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
          />
          <span className="text-xs text-purple-200">Done</span>
        </label>
      </div>
    </div>
  );
}

export default GoalsCard;