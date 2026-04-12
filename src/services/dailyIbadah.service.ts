import { addDays, format, isBefore, startOfDay } from "date-fns";
import { Ibadah } from "../types/ramadan.types";


const generateRamadanData = (startDate: Date): Ibadah[] => {
  return Array.from({ length: 30 }).map((_, i) => {
    const currentDate = addDays(startDate, i);
    return {
      date: format(currentDate, "MMMM d, yyyy"),
      fasting: false,
      prayers: { fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false },
      quran: false,
    };
  });
};

const RAMADAN_START = new Date(2026, 1, 18);
export const initialData = generateRamadanData(RAMADAN_START);

export default generateRamadanData;