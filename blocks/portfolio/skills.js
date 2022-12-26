import { skills } from "../../cms/portfolio.data";
import Skillcard from "./skillcard";

export default function Skills() {
  return (
    <div className="px-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 md:gap-x-6 gap-y-6 pb-14 md:pb-40 mt-10 md:mt-32">
      {skills.map((s) => (
        <Skillcard
          key={s.title}
          title={s.title}
          number={s.skill}
          text={s.text}
        />
      ))}
    </div>
  );
}
