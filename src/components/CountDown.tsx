import { countDownProps } from "../types/ramadan.types";
import moon from "../../public/images/ramadan-moon-2.png"
import Image from "next/image";

const CountDown = ({countDownData} : countDownProps ) => {

    return (
       <div className="min-h-screen flex flex-col items-center justify-center">
     
     <div className="flex items-center mb-5 relative">
      <Image src={moon} alt="title" width={130} className="absolute z-10 lg:-left-45 -left-25 lg:-top-9 -top-9 -rotate-20" />
       <h1 className="tracking-wide lg:text-5xl text-3xl  text-purple-200 drop-shadow-[0_0_10px_rgba(200,160,255,0.5)]">
        Noor Ramadan 2026
      </h1>
     </div>

      <div className=" bg-white/10 backdrop-blur-xl border border-purple-400/20 px-16 py-14 rounded-3xl shadow-[0_0_70px_rgba(168,85,247,0.4)] text-center w-2/3">

        <div className="text-sm tracking-[0.4em] text-purple-300 mb-6">
          RAMADAN {countDownData?.hijriYear}
        </div>

        <div className="flex items-end justify-center">
          <span className="text-[120px] font-bold bg-gradient-to-b from-purple-200 to-purple-500 bg-clip-text text-transparent">
            {countDownData?.day}
          </span>
          <span className="text-3xl ml-3 mb-6 text-purple-300">
            / {countDownData?.totalDays}
          </span>
        </div>

        <div className="mt-6 text-2xl text-purple-200">
          Day of Ramadan
        </div>
      </div>

    </div>
    );
};

export default CountDown;