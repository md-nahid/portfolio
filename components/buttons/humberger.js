import { motion } from "framer-motion";
import { CURSOR_SIZE_MEDIUM, CURSOR_SIZE_DEFAULT } from "../contexts/cursorConstants";
import { useUI } from "../contexts/cursorContext";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#ffffff"
    strokeLinecap="round"
    {...props}
  />
);

export default function Humberger({ toggle }) {
  let { setCursorSize } = useUI();
  return (
    <button
      onClick={toggle}
      className="fixed left-10 top-10 transform -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-indigo-700 hover:shadow-lg hover:shadow-indigo-400 flex justify-center items-center"
      onMouseEnter={() => setCursorSize(CURSOR_SIZE_MEDIUM)}
      onMouseLeave={() => setCursorSize(CURSOR_SIZE_DEFAULT)}
    >
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}
