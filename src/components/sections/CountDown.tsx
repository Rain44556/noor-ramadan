import type React from "react";
import { countDownProps } from "../../types/ramadan.types";
import moon from "../../../public/images/ramadan-moon-2.png";
import Image from "next/image";
import { getCountdownState } from "../../utils/countdown";

const CountDown = ({ countDownData }: countDownProps) => {
  const {
    isActive,
    progress,
    days,
    hours,
    minutes
  } = getCountdownState(countDownData);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-purple-900/40 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-teal-900/25 blur-[100px]" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[200px] rounded-full bg-amber-900/10 blur-[80px]" />
      </div>

      <div className="animate-float mb-6 relative">
        <div className="absolute inset-0 rounded-full bg-amber-400/10 blur-2xl scale-150" />
        <Image
          src={moon}
          alt="Ramadan crescent moon"
          width={110}
          className="relative drop-shadow-[0_0_24px_rgba(251,191,36,0.45)]"
        />
      </div>
      <div className="text-center mb-10 animate-fade-up">
        <p className="text-xs tracking-[0.5em] text-teal-400 uppercase mb-3 font-medium">
          بسم الله الرحمن الرحيم
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text-light leading-tight">
          Noor Ramadan
        </h1>
        <p className="text-amber-400 text-lg md:text-xl mt-2 font-medium tracking-wide">
          {countDownData?.hijriYear}
        </p>
      </div>
      <div className="glass animate-glow-pulse rounded-3xl px-8 py-10 md:px-16 md:py-12 text-center w-full max-w-lg shadow-2xl animate-fade-up stagger-2">
        {isActive ? (
          <>
            <div className="flex items-end justify-center gap-3 mb-2">
              <span className="text-[100px] md:text-[130px] font-bold leading-none gradient-gold tabular-nums">
                {countDownData.day ?? "—"}
              </span>
              <div className="flex flex-col items-start mb-4 gap-1">
                <span className="text-2xl text-slate-500">/</span>
                <span className="text-2xl font-semibold text-slate-400">
                  {countDownData.totalDays ?? 30}
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-lg mb-8 tracking-wide">
              Days of Ramadan completed
            </p>

            <div className="mb-6">
              <div className="progress-bar-track h-2.5 mb-2">
                <div
                  className="progress-bar-fill"
                  style={{ "--progress-width": `${progress}%` } as React.CSSProperties}
                />
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>Day 1</span>
                <span className="text-amber-400 font-semibold">{progress}% complete</span>
                <span>Day {countDownData.totalDays ?? 30}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="glass-teal rounded-2xl p-4 text-center">
                <p className="text-2xl font-bold text-teal tabular-nums">
                  {(countDownData.totalDays ?? 0) - (countDownData.day ?? 0)}
                </p>
                <p className="text-xs text-slate-500 mt-1">Days remaining</p>
              </div>
              <div className="glass-gold rounded-2xl p-4 text-center">
                <p className="text-2xl font-bold text-gold tabular-nums">{progress}%</p>
                <p className="text-xs text-slate-500 mt-1">Journey complete</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <p className="text-slate-400 text-sm uppercase tracking-widest mb-6">
              Ramadan {countDownData?.year} begins in
            </p>

            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="glass-gold rounded-2xl p-4 text-center">
                <p className="text-4xl md:text-5xl font-bold text-gold tabular-nums">{days}</p>
                <p className="text-xs text-slate-500 mt-1">Days</p>
              </div>
              <div className="glass rounded-2xl p-4 text-center">
                <p className="text-4xl md:text-5xl font-bold gradient-text-light tabular-nums">{hours}</p>
                <p className="text-xs text-slate-500 mt-1">Hours</p>
              </div>
              <div className="glass-teal rounded-2xl p-4 text-center">
                <p className="text-4xl md:text-5xl font-bold text-teal tabular-nums">{minutes}</p>
                <p className="text-xs text-slate-500 mt-1">Minutes</p>
              </div>
            </div>

            <div className="glass rounded-2xl px-5 py-3 text-center">
              <p className="text-xs text-slate-500">Target date</p>
              <p className="text-amber-400 font-semibold mt-0.5">
                {new Date(countDownData?.targetDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </>
        )}
      </div>

      <p className="mt-10 text-center text-sm text-slate-500 max-w-sm animate-fade-up stagger-3">
        <span className="text-gold animate-shimmer inline-block">"</span>
        Whoever fasts in Ramadan out of faith and seeking reward, his previous sins will be forgiven.
        <span className="text-gold animate-shimmer inline-block">"</span>
        <br />
        <span className="text-slate-600 text-xs mt-1 block">— Sahih al-Bukhari</span>
      </p>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-amber-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
      </div>
    </section>
  );
};

export default CountDown;
