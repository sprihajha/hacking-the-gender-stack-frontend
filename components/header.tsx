import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
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
        <div className="pt-5">
          <Link href="/homePage">
            <button className="heroButton">Home</button>
          </Link>
          <Link href="/fingerprintPage">
            <button className="heroButton">Molecule Fingerprint</button>
          </Link>
          <Link href="/searchPage">
            <button className="heroButton">Filter Candidates</button>
          </Link>
          <Link href="/bestCandidate">
            <button className="heroButton">Best Candidate</button>
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
