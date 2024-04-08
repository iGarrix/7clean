'use client'
import { FeedbackCard } from '@/components/commons/cards/feedbackCard/feedback_card.component'

import { useFeedbackModal } from '@/services/feedbackModalStore/feedback.store'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { motion as m } from 'framer-motion'
import { Minimize2 } from 'lucide-react'
import { useModalFlow } from '@/hooks/useModalFlow.hook'
//import style from './scss.style.module.scss';

export interface IFeedbackModalProps {}

export const FeedbackModal: React.FC<IFeedbackModalProps> = ({ ...props }) => {
	const data = useFeedbackModal()
	// useEffect(() => {
	// 	if (data.data) {
	// 		document.body.classList.add('overflow-hidden')
	// 	} else {
	// 		document.body.classList.remove('overflow-hidden')
	// 	}

	// 	return () => {
	// 		document.body.classList.remove('overflow-hidden')
	// 	}
	// }, [data.data])

	useModalFlow(data.data)

	return (
		<AnimatePresence>
			{data.data && (
				<m.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='fixed top-0 left-0 w-full h-svh bg-dark-full/10 backdrop-blur-3xl z-[501]'
					onClick={() => {
						data.onOpen(false, undefined)
					}}>
					<button
						className='absolute top-4 right-4 bg-dark-less/80 p-1 rounded'
						onClick={() => {
							data.onOpen(false, undefined)
						}}>
						<Minimize2 className='fill-transparent text-white' />
					</button>
					<div className='w-full h-full flex items-center justify-center py-[5vh] px-[1rem]'>
						<div className='w-[35rem] scale-105'>
							<FeedbackCard {...data.data} isFull onOpen={() => {}} />
						</div>
					</div>
				</m.div>
			)}
		</AnimatePresence>
	)
}
