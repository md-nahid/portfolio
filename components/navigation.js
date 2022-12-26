import { navData } from "../cms/nav.data";
import Humberger from "./buttons/humberger";
import Link from "next/link";
import { motion, useCycle } from "framer-motion";
import { sidebar, variantsul, variantsli } from "./motionVarients/navMotionVarients";

export default function MainNavigation() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const data = navData;

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="fixed inset-0 bg-indigo-700 overflow-hidden pt-32 z-20"
      variants={sidebar}
    >
      <Humberger toggle={() => toggleOpen()} />
      <Navigation
        toggle={() => toggleOpen()}
        navItems={data.nav}
      />
    </motion.nav>
  );
}

// navigation menu
const Navigation = ({ navItems, toggle }) => (
  <motion.ul
    variants={variantsul}
    className="w-full pl-6 sm:pl-24"
  >
    {navItems.map((i) => (
      <motion.li
        key={i.title}
        variants={variantsli}
        className="w-full text-white mt-10 first:mt-0"
      >
        <Link
          href={i.path}
          className="capitalize block text-5xl md:text-8xl font-thin tracking-wide"
          onClick={toggle}
        >
          {i.title}
        </Link>
      </motion.li>
    ))}
  </motion.ul>
);
