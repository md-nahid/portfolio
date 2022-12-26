import ContactBtn from "../components/buttons/contactBtn";
import { TbSend } from "react-icons/tb";
import { GrGithub, GrTwitter, GrLinkedin } from "react-icons/gr";
import Image from "next/image";
import { useState } from "react";
import cn from "classnames";

export default function HeroBlock() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[auto_80px_auto] gap-6 items-center">
      <div className="flex justify-center sm:order-2 lg:order-3">
        <div className="w-64 h-64 xmd:w-96 xmd:h-96 bg-indigo-100 rounded-full overflow-hidden border-8 border-indigo-600 relative transition-all duration-300">
          <Image
            priority={true}
            src="/images/nahid.png"
            alt="profile"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <HeroSocial />
      <div className="text-center sm:text-left lg:order-1 h-full sm:flex sm:justify-center">
        <div className="h-full inline-block">
          <h5 className="text-sm capitalize text-slate-700 font-semibold flex justify-center  sm:justify-start items-center before:content-[''] before:w-10 before:h-0 before:mr-3 before:border-t-2 before:border-indigo-700 xmd:text-lg">
            hello world
          </h5>
          <h1 className="text-6xl xmd:text-8xl uppercase font-bold text-indigo-700 mt-6 drop-shadow-lg">
            ui ux <br />
            expert
          </h1>
          <div className="flex justify-center sm:justify-start mt-6 xmd:mt-14">
            <ContactBtn
              icon={<TbSend />}
              text="Contact me"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// center social media icons
function HeroSocial() {
  const [github, setGithub] = useState(false);
  const [twitter, setTwitter] = useState(false);
  const [linkedin, setLinkedin] = useState(false);
  return (
    <div className="h-full hidden lg:block lg:order-2">
      <ul className="w-full h-full flex justify-around items-center flex-col text-3xl">
        <li>
          <a
            href="https://github.com"
            target="_blank"
            className="inline-block text-indigo-900 relative text-4xl"
            onMouseEnter={() => setGithub(true)}
            onMouseLeave={() => setGithub(false)}
            title="Github"
          >
            <span
              className={cn(
                "absolute -inset-1 block border-2 -z-0 opacity-0",
                github &&
                  "hover:animate-ping bg-transparent border-[#333333] opacity-50 rounded-full"
              )}
            ></span>
            <GrGithub />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com"
            className="inline-block text-[#1DA1F2] relative"
            onMouseEnter={() => setTwitter(true)}
            onMouseLeave={() => setTwitter(false)}
            title="Twitter"
          >
            <span
              className={cn(
                "absolute -inset-1 block border-2 -z-0 opacity-0",
                twitter &&
                  "hover:animate-ping bg-transparent border-[#1DA1F2] opacity-50 rounded-full"
              )}
            ></span>
            <GrTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com"
            className="inline-block text-[#0a66c2] relative"
            onMouseEnter={() => setLinkedin(true)}
            onMouseLeave={() => setLinkedin(false)}
            title="LinkedIn"
          >
            <span
              className={cn(
                "absolute -inset-0 block border-2 -z-0 opacity-0",
                linkedin && "hover:animate-ping bg-transparent border-[#0a66c2] opacity-50"
              )}
            ></span>
            <GrLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}
