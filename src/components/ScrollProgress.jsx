import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] h-1 origin-left bg-blue-500"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}

export default ScrollProgress;
