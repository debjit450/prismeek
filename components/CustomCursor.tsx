import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [hoverState, setHoverState] = useState<'default' | 'link' | 'text'>('default');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      
      const target = e.target as HTMLElement;
      
      const isLink = target.closest('a') || target.closest('button') || target.getAttribute('role') === 'button';
      const isText = target.tagName === 'P' || target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'SPAN';
      
      if (isLink) {
        setHoverState('link');
      } else if (isText) {
        setHoverState('text');
      } else {
        setHoverState('default');
      }
    };

    const mouseDown = () => setClicked(true);
    const mouseUp = () => setClicked(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          body, a, button, input, textarea { cursor: none; }
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div 
            animate={{
                scale: clicked ? 0.8 : hoverState === 'link' ? 2.5 : hoverState === 'text' ? 1.5 : 1,
                opacity: hoverState === 'text' ? 0.5 : 1
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={`w-8 h-8 rounded-full border border-p-cream flex items-center justify-center ${hoverState === 'link' ? 'bg-p-cream' : ''}`}
        >
             {hoverState === 'default' && (
                <div className="w-1 h-1 bg-p-gold rounded-full" />
             )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;