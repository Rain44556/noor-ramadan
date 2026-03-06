import DuaCorner from "@/src/components/DuaCorner";
import RamadanGoals from "@/src/components/RamadanGoals";
// import CountDown from "../../components/CountDown";
// import { getRamadanCountdown } from "../../services/ramadan.service";

export default async function Home() {
//  const countDownData = await getRamadanCountdown();

  return (
    <div className="bg-gradient-to-br from-black via-purple-950 to-indigo-950">
     {/* <CountDown countDownData={countDownData}></CountDown> */}
     <RamadanGoals></RamadanGoals>
     <DuaCorner></DuaCorner>
    </div>
  );
}
