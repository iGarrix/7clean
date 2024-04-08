'use client'

import { LucideIcon } from 'lucide-react'

//import style from './scss.style.module.scss';

export interface IBenefitCardProps {
	title: string
	content: string
	icon: LucideIcon
}

export const BenefitCard: React.FC<IBenefitCardProps> = ({ ...props }) => {
	return (
		<div className='flex flex-col items-start gap-7'>
			<div className='bg-gradient-to-br from-accent-primary/20 via-accent-primary/20 to-accent-foreign/20 p-3 rounded-xl shadow-xl shadow-accent-primary/20'>
				<props.icon className='text-accent-primary w-[2rem] h-[2rem]' />
			</div>
			<div>
				<h1 className='text-xl font-black tracking-wide'>{props.title}</h1>
				<p className='text-slate-400 font-normal text-justify'>
					{props.content}
				</p>
			</div>
		</div>
	)
}
