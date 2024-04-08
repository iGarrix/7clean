'use client'

import { FeedbackCard } from '@/components/commons/cards/feedbackCard/feedback_card.component'
import { FeedbackModal } from '@/components/elements/modals/feedbackModal/feedback_modal.component'
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel'
import { useFeedbackModal } from '@/services/feedbackModalStore/feedback.store'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { Fragment } from 'react'
import { useState } from 'react'

export default function FeedbackBlock() {
	const [api, setApi] = useState<CarouselApi>()
	const feedbackModal = useFeedbackModal()
	const feedbacks = [
		{
			feedback:
				'I hired a cleaning service to clean my apartment and was blown away by the results. The team arrived on time and was very thorough in their cleaning. They paid close attention to details, such as wiping down the baseboards and cleaning the inside of the microwave. I was very pleased with their work and would highly recommend them to anyone looking for a professional cleaning service.',
			stars: 5,
			date: new Date(),
			name: 'John',
			avatarSrc: 'https://7clean.joie.com.ua/wp-content/uploads/r1.png',
		},
		{
			feedback:
				'I recently moved out of my apartment and needed to have it cleaned before I could receive my security deposit back. I hired a cleaning service to take care of it and was impressed with the level of cleanliness they achieved. They did an excellent job scrubbing the bathrooms, vacuuming the carpets, and cleaning the kitchen appliances. The apartment looked better than it did when I first moved in!',
			stars: 5,
			date: new Date(),
			name: 'Elie',
			avatarSrc: 'https://7clean.joie.com.ua/wp-content/uploads/r1.png',
		},
		{
			feedback:
				'I decided to try cleaning my apartment myself and found it to be a very time-consuming and challenging task. Even after hours of cleaning, there were still areas that I couldn’t seem to get clean. I eventually hired a professional cleaning service and was amazed at the difference. They were able to clean areas that I didn’t even think were possible and left my apartment looking spotless. I would highly recommend hiring a professional cleaning service to anyone looking to save time and get a thorough cleaning done.',
			stars: 5,
			date: new Date(),
			name: 'Jack',
			avatarSrc: 'https://7clean.joie.com.ua/wp-content/uploads/r3.png',
		},
		{
			feedback:
				'I hired a cleaning service to clean my apartment and was blown away by the results. The team arrived on time and was very thorough in their cleaning. They paid close attention to details, such as wiping down the baseboards and cleaning the inside of the microwave. I was very pleased with their work and would highly recommend them to anyone looking for a professional cleaning service.',
			stars: 5,
			date: new Date(),
			name: 'John',
			avatarSrc: 'https://7clean.joie.com.ua/wp-content/uploads/r1.png',
		},
		{
			feedback:
				'I recently moved out of my apartment and needed to have it cleaned before I could receive my security deposit back. I hired a cleaning service to take care of it and was impressed with the level of cleanliness they achieved. They did an excellent job scrubbing the bathrooms, vacuuming the carpets, and cleaning the kitchen appliances. The apartment looked better than it did when I first moved in!',
			stars: 5,
			date: new Date(),
			name: 'Elie',
			avatarSrc: 'https://7clean.joie.com.ua/wp-content/uploads/r1.png',
		},
		{
			feedback:
				'I decided to try cleaning my apartment myself and found it to be a very time-consuming and challenging task. Even after hours of cleaning, there were still areas that I couldn’t seem to get clean. I eventually hired a professional cleaning service and was amazed at the difference. They were able to clean areas that I didn’t even think were possible and left my apartment looking spotless. I would highly recommend hiring a professional cleaning service to anyone looking to save time and get a thorough cleaning done.',
			stars: 5,
			date: new Date(),
			name: 'Jack',
			avatarSrc: 'https://7clean.joie.com.ua/wp-content/uploads/r3.png',
		},
	]

	return (
		<Fragment>
			<FeedbackModal />
			<section
				className='pl-[15rem] flex flex-col gap-8 xs:pl-[1rem] sm:pl-[5rem] lg:pl-[2rem] xl:pl-[5rem] 2xl:pl-[10rem] 3xl:pl-[15rem]'
				id='reviews'>
				<div>
					<div className='relative'>
						<div className='bg-white w-[6.3rem] h-full absolute top-0 left-0 mix-blend-difference -translate-x-2'></div>
						<h1 className='uppercase font-black tracking-wide text-3xl text-accent-primary z-10'>
							What{' '}
							<span className='text-dark-full'>customers say about us</span>
						</h1>
					</div>
					<br />
					<h2 className='text-slate-500 font-normal z-[1001]'>
						Every third client orders cleaning from us on an ongoing basis
					</h2>
				</div>
				<div className='flex items-center justify-end gap-3 pr-[15rem] xs:pr-[1rem] sm:pr-[5rem] md:pr-[10rem] lg:pr-[15rem] overflow-hidden'>
					<button
						className='rounded-full border border-accent-primary p-1 w-[32px] h-[32px] text-center flex justify-center items-center text-accent-primary transition-all hover:bg-accent-primary hover:text-light'
						onClick={() => {
							api?.scrollPrev()
						}}>
						<ArrowLeft className='leading-none w-[18px]' />
					</button>
					<button
						className='rounded-full border border-accent-primary p-1 w-[32px] h-[32px] text-center flex justify-center items-center text-accent-primary transition-all hover:bg-accent-primary hover:text-light'
						onClick={() => {
							api?.scrollNext()
						}}>
						<ArrowRight className='leading-none w-[18px]' />
					</button>
				</div>
				<div className='flex pr-[1rem]'>
					<Carousel
						setApi={setApi}
						opts={{ align: 'start' }}
						className='w-full'>
						<CarouselContent>
							{feedbacks.map((item, key) => (
								<CarouselItem
									key={key}
									className='basis-1/4 xs:basis-full md:basis-1/2 xl:basis-1/3 3xl:basis-1/4'>
									<FeedbackCard
										isFull={false}
										{...item}
										id={key}
										onOpen={() => {
											feedbackModal.onOpen(true, {
												...item,
												isFull: false,
												id: key,
											})
										}}
									/>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</section>
		</Fragment>
	)
}
