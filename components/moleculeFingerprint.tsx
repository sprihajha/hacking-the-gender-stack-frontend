import { motion } from "framer-motion";

const MoleculeFingerprint = ({ fingerprint }: any) => {
	return (
		<motion.div
			className='flex flex-row items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-md'
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
			}}>
			<div className='p-5'>
				<p className='text-gray-700 font-semibold'>{fingerprint}</p>
				<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
					Search database for for similar molecules based on ECFP4 fingerprints
					and Tanimito similarity.
				</p>
				<a
					href='#'
					className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>
					Filter candidates
					<svg
						aria-hidden='true'
						className='w-4 h-4 ml-2 -mr-1'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fill-rule='evenodd'
							d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
							clip-rule='evenodd'></path>
					</svg>
				</a>
			</div>
		</motion.div>
	);
};

export default MoleculeFingerprint;
