import { Component, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import SearchMolecule from "@/components/searchMolecule";
import MoleculeFingerprint from "@/components/moleculeFingerprint";
import FilterLibrary from "@/components/filterLibrary";
import BestCandidate from "@/components/bestCandidate";
import { ObjectType } from "typescript";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const components = {
  search: <SearchMolecule />,
  fingerprint: <MoleculeFingerprint />,
  filter: <FilterLibrary />,
  result: <BestCandidate />,
};

type ComponentsIds = keyof typeof components;

function FindImage({ id, index }: { id: ComponentsIds; index: number }) {
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
    <section className="w-full">
      <motion.h2 className="px-10">{`${pageHeaders[index]}`}</motion.h2>
      <div ref={ref} className="w-full items-center">
        {components[id]}
      </div>
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
      {["search", "fingerprint", "filter", "result"].map((page, index) => (
        <FindImage id={page} index={index} key={index} />
      ))}
    </>
  );
}
