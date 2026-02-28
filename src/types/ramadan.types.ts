export interface Dates {
    hijriYear: number;
    day: number;
    totalDays: number;
}

export interface countDownProps {
    countDownData : Dates;
}

export interface Goals {
  id: number;
  day: number;
  mission: string;
  challenge: string;
  missionDone: boolean;
  challengeDone: boolean;
}

export interface GoalsCardProps {
    goal : Goals;
    onToggle: (id: number, type: 'mission' | 'challenge') => void;
}