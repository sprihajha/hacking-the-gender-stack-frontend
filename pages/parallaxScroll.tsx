import { useEffect, useRef, useState } from "react";
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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

const components = {
	search: (props: JSX.IntrinsicAttributes & { onFingerPrint: any }) => (
		<SearchMolecule {...props} />
	),
	fingerprint: (props: JSX.IntrinsicAttributes & { fingerprint: any }) => (
		<MoleculeFingerprint {...props} />
	),
	filter: (props: JSX.IntrinsicAttributes) => <FilterLibrary {...props} />,
	result: (props: JSX.IntrinsicAttributes) => <BestCandidate {...props} />,
};

type ComponentsIds = "search" | "fingerprint" | "filter" | "result";

function FindImage({
	id,
	index,
	componentProps,
}: {
	id: ComponentsIds;
	index: number;
	componentProps: any;
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
		<section className='w-full'>
			<motion.h2 className='px-10'>{`${pageHeaders[index]}`}</motion.h2>
			<div ref={ref} className='w-full items-center'>
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
		<QueryClientProvider client={queryClient}>
			<motion.div className='progress' style={{ scaleX }} />
			{Object.keys(components).map((page, index) => (
				<FindImage
					id={page as ComponentsIds}
					index={index}
					key={index}
					componentProps={{
						onFingerPrint: setFingerprint,
						fingerprint: fingerprint,
					}}
				/>
			))}
		</QueryClientProvider>
	);
}
