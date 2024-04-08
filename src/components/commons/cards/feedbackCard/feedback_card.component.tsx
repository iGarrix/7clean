'use client'

import { Star } from 'lucide-react'
import Image from 'next/image'
import moment from 'moment'
import { motion as m } from 'framer-motion'
//import style from './scss.style.module.scss';

export interface IFeedbackCardDetail {
	feedback: string
	stars: number
	date: Date
	avatarSrc: string
	name: string
	id: number
	isFull: boolean
}

export interface IFeedbackCardProps extends IFeedbackCardDetail {
	onOpen: () => void
}

export const FeedbackCard: React.FC<IFeedbackCardProps> = ({
	isFull = false,
	...props
}) => {
	return (
		<m.button
			layout
			layoutId={`${props.id}`}
			className='rounded bg-white shadow-lg shadow-dark-full/5 px-4 py-5 border border-slate-200/40 flex flex-col gap-3 cursor-pointer'
			onClick={props.onOpen}>
			<div className='flex gap-1'>
				{[...Array(props.stars)].map((item, key) => (
					<Star
						key={key}
						className='text-accent-primary fill-accent-primary w-[18px]'
					/>
				))}
				{props.stars < 5 &&
					[...Array(5 - props.stars)].map((item, key) => (
						<Star
							key={key}
							className='text-slate-400 fill-slate-400 w-[18px]'
						/>
					))}
			</div>
			<p
				className={`text-justify ${
					!isFull ? 'line-clamp-4' : 'line-clamp-[20]'
				}`}>
				{props.feedback}
			</p>
			<div className='mt-4 flex gap-3'>
				<Image
					alt={props.avatarSrc}
					src={props.avatarSrc}
					width={64}
					height={64}
					className='rounded-full w-[42px] h-[42px] object-cover bg-center'
				/>
				<div className='text-start'>
					<p className='text-accent-primary'>{props.name}</p>
					<p className='text-slate-400 font-normal leading-none'>
						{moment(new Date(props.date)).format('DD.MM.YYYY')}
					</p>
				</div>
			</div>
		</m.button>
	)
}
