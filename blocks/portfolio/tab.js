import cn from "classnames";
import { useEffect, useState } from "react";
import { tabs } from "../../cms/portfolio.data";
import { AnimatePresence, motion } from "framer-motion";
import { currentTab } from "../../hooks/useAtom";
import { useAtom } from "jotai";

export default function Tab() {
  const [selectedTab, setSelectedTab] = useAtom(currentTab);
  useEffect(() => {
    setSelectedTab(tabs[0]);
  }, [tabs]);
  return (
    <div className="flex justify-center items-center my-10 sm:my-20">
      {tabs.map((item) => (
        <button
          key={item.id}
          className={cn(
            "text-xs sm:text-lg capitalize px-4 sm:px-8 lg:px-12 py-2 relative flex",
            item === selectedTab && "text-white",
            item !== selectedTab && "text-indigo-500"
          )}
          onClick={() => setSelectedTab(item)}
        >
          <span className="z-10">{item.text}</span>
          <AnimatePresence>
            {item === selectedTab ? (
              <motion.div
                className="absolute inset-0 bg-indigo-700 rounded-sm"
                layoutId="underline"
              >
                <span className="hidden sm:block absolute left-1/2 top-full -translate-x-1/2 border-[10px] border-t-indigo-700 border-r-transparent border-b-transparent border-l-transparent"></span>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </button>
      ))}
    </div>
  );
}
