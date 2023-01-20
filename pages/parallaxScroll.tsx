import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function FindImage({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const pageHeaders = [
    "Search for Molecule",
    "Select Molecule Fingerprint",
    "Filter the Molecule similarities",
    "Best candidate",
  ];

  return (
    <section>
      <div ref={ref}>
        <Image
          src={`/logo.svg`}
          alt="A London skyscraper"
          width={300}
          height={300}
        />
      </div>
      <motion.h2 style={{ y }}>{`${pageHeaders[id]}`}</motion.h2>
    </section>
  );
}

export default function ScrollPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      {[0, 1, 2, 3].map((image) => (
        <FindImage id={image} key={image} />
      ))}
    </>
  );
}
