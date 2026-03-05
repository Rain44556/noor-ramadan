"use client";

import GoalsCard from "./GoalsCard";
import Image from "next/image";
import goalImg from "../../public/images/ramadan-goals.jpg";
import useRamadanGoalsLogic from "../services/useRamadanGoalsLogic"


const RamadanGoals = () => {
  const { activeWeek, setActiveWeek, filteredGoals, handleToggle } = useRamadanGoalsLogic();
 
  return (
    <main className="min-h-screen p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-purple-300">Ramadan Goals</h1>
          <p className="text-purple-500 mt-2">
            Track your daily spiritual growth
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-5">
          <div className="col-span-1">
            <Image src={goalImg} alt="goal-image"></Image>
          </div>

          <div className="lg:col-span-2">
            <div className="flex gap-4 border-b border-gray-100 pb-4 overflow-x-auto">
              {[1, 2, 3, 4, 5].map((week) => (
                <button
                  key={week}
                  onClick={() => setActiveWeek(week)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeWeek === week
                      ? "bg-purple-900 text-purple-100 shadow-sm"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  🌙 Week {week}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
              {filteredGoals.map((goal) => (
                <GoalsCard key={goal.id} goal={goal} onToggle={handleToggle} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RamadanGoals;
