export interface RamadanCountdown {
  status: "active" | "countdown";
  hijriYear: string;
  timezoneOffset: number;
  countdown: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  targetDate: string;
  year: number;
  day?: number;
  totalDays?: number;
}

export interface countDownProps {
  countDownData: RamadanCountdown;
}

export interface Goals {
  id: number;
  day: number;
  mission: string;
  challenge: string;
  missionDone: boolean;
  challengeDone: boolean;
}

export interface GoalProgress {
  id: number;
  missionDone: boolean;
  challengeDone: boolean;
}
export interface GoalsCardProps {
    goal : Goals;
    onToggle: (id: number, type: 'mission' | 'challenge') => void;
}


export interface DuaVideo {
  day: number;
  videoId: string;
  title: string;
  arabicText?: string;
  translation?: string;
}


export type Ibadah = 
  {
    date: string;
    fasting: boolean;
    prayers: {
      fajr: boolean;
      dhuhr: boolean;
      asr: boolean;
      maghrib: boolean;
      isha: boolean;
    };
    quran: boolean;
  }
