import { motion } from "framer-motion";
import Image from "next/image";

const BestCandidate = () => {
  return (
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
      <div className="m-5 p-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
        <h3 className="font-bold text-gray-700">Candidate 1</h3>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Filtered candidate
        </p>
      </div>
      <div className="m-5 p-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
        <h3 className="font-bold text-gray-700">Candidate 2</h3>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Filtered candidate
        </p>
      </div>
      <div className="m-5 p-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
        <h3 className="font-bold text-gray-700">Candidate 3</h3>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Filtered candidate
        </p>
      </div>
    </motion.div>
  );
};

export default BestCandidate;
