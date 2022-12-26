import { useEffect, useState } from "react";
import Card from "./card";
import { projectQuickView } from "../../hooks/useAtom";
import { useAtom } from "jotai";
import { currentTab } from "../../hooks/useAtom";
// import data
import { getData } from "../../cms/portfolio.data";
import { motion } from "framer-motion";
// motion varients
import { portfolioCard } from "../../components/motionVarients/portfolioMotionVarients";
// import custom hook
import { useScrollhidden } from "../../hooks/useScrollhidden";

export default function Portfolios() {
  let [quickview, setQuickview] = useAtom(projectQuickView);
  const [ctab, setCtab] = useAtom(currentTab);
  const [state, setState] = useState([]);
  let [setFreezescroll] = useScrollhidden();
  // get data by filter
  useEffect(() => {
    setState(getData(ctab));
  }, [ctab]);

  return (
    <div className="px-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 md:gap-x-6 gap-y-6 pb-14 md:pb-32">
      {state.map((d) => (
        <motion.div
          key={d.id}
          initial="exit"
          animate="enter"
          exit="exit"
          variants={portfolioCard}
        >
          <Card
            cardImage={d.img}
            title={d.title}
            subtitle={d.subtitle}
            liveLink={d.liveLink}
            githublink={d.githubrepo}
            handleQuickView={() => {
              setQuickview(d);
              setFreezescroll(true);
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
