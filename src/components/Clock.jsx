import Countdown from "react-countdown";
export function Clock() {
  return (
    <div className="my-2 flex w-screen justify-center lg:mb-8 ">
      <div className="border-gray/50 z-[10] flex w-[100] flex-col items-center justify-center pb-5 font-clash text-[3rem] tracking-[1rem] text-white md:border md:text-[4rem] xl:w-[35rem] xl:pb-10">
        <Countdown
          date={new Date("2024-05-28T00:00:00")}
          className="text-[2rem] xl:text-[4rem]"
        />

        <div className="relative bottom-0 text-[.8rem] -tracking-tight md:text-lg">
          <span className="text-primary font-bold absolute left-[-9.5rem] md:left-[-13.5rem]">
            DAY
          </span>
          <span className="text-primary font-bold absolute left-[-4.5rem] md:left-[-7.5rem]">
            HOURS
          </span>
          <span className="text-primary font-bold absolute left-[.8rem] md:left-[.3rem]">
            MINUTES
          </span>
          <span className="text-primary font-bold absolute left-[6.5rem] md:left-[9rem]">
            SECONDS
          </span>
        </div>
      </div>

      <div className="min-w-min-[3rem] border-gray/50 hidden  border p-3 pl-4 text-white xl:block">
        <div className="flex h-[100%] flex-col items-center justify-center gap-2">
          <span className=" text-[1.8rem]">
            2024 <span className="font-clash">May</span>
          </span>
          <span className=" text-primary flex gap-2 text-[2rem] font-bold">
            28
            <b className="text-[12px]">TH</b>
            29
            <b className="text-[12px]">TH</b>
          </span>
        </div>
      </div>
    </div>
  );
}
