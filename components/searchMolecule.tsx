import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

interface SearchMoleculeProps {
	onFingerPrint: (fingerprint: string) => void;
}

const SearchMolecule = ({ onFingerPrint }: SearchMoleculeProps) => {
	const [searchString, setSearchString] = useState();
	const mutation = useMutation({
		mutationFn: (searchString) => {
			return Promise.resolve({ fingerprint: "CCC" });
		},
		onSuccess: (data) => {
			// Invalidate and refetch
			onFingerPrint(data.fingerprint);
		},
	});

	return (
		<div className='flex flex-col w-full items-center'>
			<p>Find the molecule you are looking for...</p>
			<form className='w-1/2'>
				<div className='relative'>
					<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
						<svg
							aria-hidden='true'
							className='w-5 h-5 text-gray-500 dark:text-gray-400'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
						</svg>
					</div>
					<input
						type='search'
						value={searchString}
						onChange={(e) => e.target.value}
						id='default-search'
						className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
						placeholder='Search Molecules in SMILES format'
						required
					/>
					<button
						type='button'
						onClick={() => mutation.mutate(searchString)}
						className='text-white absolute right-2.5 bottom-2.5 bg-sky-500 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2'>
						Search
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchMolecule;
