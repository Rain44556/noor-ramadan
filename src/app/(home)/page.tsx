import DuaCorner from "@/src/components/sections/DuaCorner";
import RamadanGoals from "@/src/components/sections/RamadanGoals";
import CountDown from "../../components/sections/CountDown";
import { getRamadanCountdown } from "../../services/ramadan.service";

export default async function Home() {
  const countDownData = await getRamadanCountdown();

  return (
    <main className="min-h-screen">
      {/* Divider between sections */}
      <CountDown countDownData={countDownData} />

      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mx-8" />

      <RamadanGoals />

      <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mx-8" />

      <DuaCorner />
    </main>
  );
}
