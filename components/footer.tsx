import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Footer = () => {
	return (
		<footer className='p-5 flex items-center justify-center'>
			<motion.div
				className='flex flex-row items-center'
				initial={{
					y: +500,
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
				<div>
					<SocialIcon
						url='https://github.com/sprihajha/hacking-the-gender-stack-red'
						fgColor='white'
						bgColor='transparent'
					/>
				</div>
				<div className='text-center text-slate-100 p-4'>
					© 2023 Copyright: Team Red
				</div>
			</motion.div>
		</footer>
	);
};

export default Footer;
