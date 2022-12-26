import Image from "next/image";
import { GrShare } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import QuickView from "../../components/buttons/quick-view";

export default function Card({
  cardImage,
  handleQuickView,
  title,
  subtitle,
  liveLink,
  githublink,
}) {
  return (
    <div className="border-[1px] border-indigo-100 hover:border-indigo-300 rounded-sm overflow-hidden">
      <div className="relative h-60 w-full group">
        <Image
          priority="low"
          src={cardImage}
          alt="profile"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          className="w-full h-full object-top object-cover"
        />
        <div className="absolute inset-0 opacity-0 backdrop-blur-sm group-hover:opacity-100 group flex justify-center items-center ">
          <QuickView
            onClick={handleQuickView}
            text="Quick View"
          />
        </div>
      </div>
      <div className="py-3 px-3">
        <h4 className="text-lg md:text-xl text-indigo-700 font-semibold">{title}</h4>
        <p className="text-xs sm:text-sm font-normal text-slate-900">{subtitle}</p>
        <div className="flex justify-between items-center mt-3">
          <a
            href={liveLink}
            target="_blank"
            className="text-sm text-indigo-500 flex items-center underline"
          >
            Live
            <span className="ml-2 text-indigo-700">
              <GrShare />
            </span>
          </a>
          <a
            href={githublink}
            target="_blank"
            className="text-sm p-2 bg-indigo-700 rounded-full text-white"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
