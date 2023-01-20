import { motion } from "framer-motion";
import Image from "next/image";

const FilterLibrary = () => {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-center z-20">
      <motion.div
        className="flex flex-row items-center"
        initial={{
          y: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="pt-5">HII</div>
      </motion.div>
    </header>
  );
};

export default FilterLibrary;
