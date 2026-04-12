import { countDownProps } from "../types/ramadan.types";


export const getCountdownState = (countDownData: countDownProps["countDownData"]) => {
  const isActive = countDownData?.status === "active";

  const progress =
    isActive && countDownData?.day && countDownData?.totalDays
      ? Math.round((countDownData.day / countDownData.totalDays) * 100)
      : 0;

  const { days = 0, hours = 0, minutes = 0 } =
    countDownData?.countdown ?? {};

  const remainingDays =
    (countDownData?.totalDays ?? 0) - (countDownData?.day ?? 0);

  return {
    isActive,
    progress,
    days,
    hours,
    minutes,
    remainingDays,
  };
};