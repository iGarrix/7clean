'use client'

import Image from 'next/image'

//import style from './scss.style.module.scss';

export interface IServiceCardProps {
	title: string
	src: string
}

export const ServiceCard: React.FC<IServiceCardProps> = ({ ...props }) => {
	return (
		<div className='flex flex-col relative rounded overflow-hidden bg-slate-200 items-center'>
			<Image
				src={props.src}
				alt='clean_roomshouses'
				width={500}
				height={600}
				priority
			/>
			<div className='absolute bottom-0 left-0 w-full py-[1rem] bg-dark-full/30 text-white backdrop-blur-[2px] px-[2rem]'>
				<h1 className='text-lg tracking-wide'>{props.title}</h1>
			</div>
		</div>
	)
}
