import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import cn from 'classnames';
import { useUI } from './contexts/cursorContext';

export default function CustomCursor() {
  let { cursorSize } = useUI();
  let [visible, setVisible] = useState(false);
  let cursorX = useMotionValue(-cursorSize);
  let cursorY = useMotionValue(-cursorSize);
  let springConfig = { damping: 28, stiffness: 400 };
  let cursorXSpring = useSpring(cursorX, springConfig);
  let cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - cursorSize / 2);
      cursorY.set(e.clientY - cursorSize / 2);
    };
    const mouseEnter = () => {
      setVisible(true);
    };
    const mouseLeave = () => {
      setVisible(false);
    };
    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', mouseEnter);
    document.addEventListener('mouseleave', mouseLeave);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', mouseEnter);
      document.removeEventListener('mouseleave', mouseLeave);
    };
  }, [cursorSize]);

  return (
    <motion.div
      className={cn(
        'custom-cursor pointer-events-none fixed top-0 left-0 z-[1000] h-10 w-10 rounded-full bg-indigo-900 mix-blend-color-burn',
        visible ? 'animate-fadeIn' : 'animate-fadeOut'
      )}
      style={{
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
}
