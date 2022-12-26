import cn from "classnames";
import { CURSOR_SIZE_MEDIUM, CURSOR_SIZE_DEFAULT } from "../contexts/cursorConstants";
import { useUI } from "../contexts/cursorContext";
import { useRouter } from "next/router";

export default function ContactBtn({ text, icon, onClick }) {
  let { setCursorSize } = useUI();
  let router = useRouter();
  return (
    <button
      className={cn(className.default)}
      onClick={() => router.push("/contact")}
      onMouseEnter={() => setCursorSize(CURSOR_SIZE_MEDIUM)}
      onMouseLeave={() => setCursorSize(CURSOR_SIZE_DEFAULT)}
    >
      {icon && <span className="mr-5 text-2xl">{icon}</span>}
      {text}
    </button>
  );
}

const className = {
  default:
    "border-2 border-indigo-700 py-3 px-10 xmd:py-4 xmd:px-12 rounded-full flex items-center text-sm xmd:text-[16px] capitalize font-semibold tracking-wider text-white bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-700/50 hover:shadow-none",
};
