import Cookies from "js-cookie";
import { GoalProgress, Goals } from "../types/ramadan.types";
import { useState } from "react";
import goalsData from "@/src/data/goals.json";

const useRamadanGoalsLogic = () => {
  const [activeWeek, setActiveWeek] = useState(1);

  const mappedGoals: Goals[] = goalsData.map((goal) => ({
    ...goal,
    missionDone: false,
    challengeDone: false,
  }));

  const [goals, setGoals] = useState<Goals[]>(() => {
    const data = Cookies.get("ramadan-progress");

    if (!data) return mappedGoals;

    try {
      const parsed: GoalProgress[] = JSON.parse(data);

      return mappedGoals.map((goal) => {
        const saved = parsed.find((p) => p.id === goal.id);

        return {
          ...goal,
          missionDone: saved?.missionDone ?? false,
          challengeDone: saved?.challengeDone ?? false,
        };
      });
    } catch {
      return mappedGoals;
    }
  });

  const handleToggle = (id: number, type: "mission" | "challenge") => {
    setGoals((prev) => {
      const updated = prev.map((goal) =>
        goal.id === id
          ? { ...goal, [`${type}Done`]: !goal[`${type}Done` as keyof Goals] }
          : goal,
      );

      const progress = updated.map(({ id, missionDone, challengeDone }) => ({
        id,
        missionDone,
        challengeDone,
      }));

      Cookies.set("ramadan-progress", JSON.stringify(progress), {
        expires: 10,
        path: "/",
      });

      return updated;
    });
  };

  const filteredGoals = goals.filter((goal) => {
    const startDay = (activeWeek - 1) * 7 + 1;
    const endDay = activeWeek * 7;
    return goal.day >= startDay && goal.day <= endDay;
  });

  return {
    activeWeek,
    setActiveWeek,
    filteredGoals,
    handleToggle,
  };
};

export default useRamadanGoalsLogic;
