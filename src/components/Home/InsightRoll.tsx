import React from "react";

const InsightRoll = ({ lang, insights }:any) => {
  return (
    <div className="w-full bg-zinc-100 dark:bg-slate-800 text-black dark:text-white whitespace-nowrap overflow-hidden mb-5">
      <div className="animate-roll w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base">
        {insights.filter((data:any) => data.lang === lang).map((data:any) => (
          <div key={data.id}>
            {data.title} <span className="px-4">|</span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;
