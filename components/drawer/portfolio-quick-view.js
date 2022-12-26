import Image from "next/image";
import { projectQuickView } from "../../hooks/useAtom";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import SocialMedia from "../buttons/social-media";
// import icons
import { IoMdClose } from "react-icons/io";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
// drawer show motion
import { drawerShow } from "../motionVarients/drawerMotionVarients";
import CopyBtn from "../buttons/copyBtn";
// custom hook
import useScrollhidden from "../../hooks/useScrollhidden";

export default function PortfolioQuickView() {
  let [obj, setObj] = useAtom(projectQuickView);

  return (
    obj && (
      <motion.div
        initial="exit"
        animate="enter"
        exit="exit"
        variants={drawerShow}
        className="fixed inset-0 h-full bg-indigo-300 bg-opacity-20 backdrop-blur-sm z-50 sm:p-2 overflow-y-auto"
      >
        <div className="max-w-7xl w-full m-auto text-white sm:rounded-md overflow-hidden shadow-lg">
          <div className="flex justify-between items-center bg-slate-900 px-3 py-3 sm:px-5 md:py-6">
            <h3 className="text-sm sm:text-xl font-medium">{obj.title}</h3>
            <button
              className="text-xl sm:text-2xl"
              onClick={() => {
                useScrollhidden(false);
                setObj();
              }}
            >
              <IoMdClose />
            </button>
          </div>
          <div className="bg-slate-700 p-3 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5">
            <div className="relative h-60 rounded-sm overflow-hidden">
              <Image
                priority="low"
                src={obj.img}
                alt="profile"
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs sm:text-sm tracking-wide font-light text-gray-100 pb-5">
                {obj.subtitle}
              </p>
              <div className="py-5 border-t-1 border-slate-500">
                <CopyBtn copyItem="Copy to clipboard." />
              </div>
              <div className="py-5 border-t-1 border-slate-500 flex justify-center items-center gap-5">
                <SocialMedia text={<FaThumbsUp />} />
                <SocialMedia text={<FaThumbsDown />} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  );
}
