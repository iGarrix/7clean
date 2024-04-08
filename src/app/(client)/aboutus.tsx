'use client'

import { BenefitCard } from '@/components/commons/cards/benefitCard/benefit-card.component'
import { ChevronsRight, Clock, ShieldCheck, UserCheck } from 'lucide-react'

export default function AboutUsBlock() {
	return (
		<div
			className='px-[15rem] flex flex-col relative gap-10 xs:px-[1rem] sm:px-[5rem] lg:px-[2rem] xl:px-[5rem] 2xl:px-[10rem] 3xl:px-[15rem]'
			id='about'>
			<div className='z-10'>
				<h1 className='uppercase font-black tracking-wide text-3xl text-dark-full z-10'>
					Why people come back to us
				</h1>
				<br />
				<p className='text-slate-500 font-normal z-[1001]'>
					We remove as ourselves! We understand the desire of the client and
					always work for the result
				</p>
				<br />
				<p className='text-slate-500 font-normal pr-[15rem] xs:pr-[1rem] lg:pr-[15rem] z-[1001]'>
					We are cleaning professionals in the Great Seattle Area. Our story
					started in August 2022 when our founder moved from Ukraine. For us it
					doesn’t matter how much (x) sales we do, we love people and love what
					we do. We don’t do business, we do service. Our mission – “Whatever
					you do, work heartily, as for the Lord and not for men, knowing that
					from the Lord, you’ll receive the inheritance as your reward. You are
					serving the Lord Christ.” – Colossians 3:23–24
				</p>
			</div>
			<div className='grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 z-10 gap-8'>
				<BenefitCard
					icon={ShieldCheck}
					title='Quality assurance'
					content='The quality of work is controlled by a checklist of each object'
				/>
				<BenefitCard
					icon={UserCheck}
					title='Reliable employees'
					content='Each employee is selected and tested to get a work'
				/>
				<BenefitCard
					icon={ChevronsRight}
					title='Immediate orders'
					content={`We will start to work through hour time' after you call for us`}
				/>
				<BenefitCard
					icon={Clock}
					title='Work 24/7'
					content={`Adjusting to your schedule, evening and night shifts`}
				/>
			</div>
		</div>
	)
}
