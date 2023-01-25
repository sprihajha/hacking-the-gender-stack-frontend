import { Component, useEffect, useRef, useState } from "react";
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
  search: (props) => <SearchMolecule {...props} />,
  fingerprint: (props) => <MoleculeFingerprint {...props} />,
  filter: (props) => <FilterLibrary {...props} />,
  result: (props) => <BestCandidate {...props} />,
};

type ComponentsIds = keyof typeof components;

function FindImage({
  id,
  index,
  componentProps,
}: {
  id: ComponentsIds;
  index: number;
}) {
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
        {components[id](componentProps)}
      </div>
    </section>
  );
}

export default function ScrollPage() {
  const { scrollYProgress } = useScroll();
  const [fingerprint, setFingerprint] = useState();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => console.log(fingerprint), [fingerprint]);

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      {["search", "fingerprint", "filter", "result"].map((page, index) => (
        <FindImage
          id={page}
          index={index}
          key={index}
          componentProps={{
            onFingerPrint: setFingerprint,
            fingerprint: fingerprint,
          }}
        />
      ))}
    </>
  );
}
