'use client'

import { GreenButton } from '@/components/commons/buttons/GreenButton/greenbutton.component'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { useAskModal } from '@/services/askModalStore/ask.store'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { Link as LinkScroll } from 'react-scroll'

export default function FaqBlock() {
	const data = useAskModal()
	return (
		<section
			className='grid grid-cols-2 gap-10 pl-[15rem] overflow-hidden xs:px-[1rem] sm:px-[5rem] lg:px-[2rem] xl:pl-[5rem] 2xl:pl-[10rem] 3xl:pl-[15rem]'
			id='faq'>
			<aside className='flex flex-col gap-5 xs:col-span-2 xl:col-span-1'>
				<h1 className='uppercase font-black tracking-wide text-3xl'>FAQ</h1>
				<Accordion type='single' collapsible className='gap-2 flex flex-col'>
					<AccordionItem value='1' className='border rounded px-[1rem]'>
						<AccordionTrigger className='data-[state=open]:text-accent-primary hover:no-underline font-bold'>
							How many services we provide?
						</AccordionTrigger>
						<AccordionContent className='text-slate-500'>
							<h4 className='text-dark-less text-lg'>We provide:</h4>
							<ul>
								<li className='flex items-center gap-2'>
									<Check width={16} className='text-accent-primary' />{' '}
									<span>Standart cleaning</span>
								</li>
								<li className='flex items-center gap-2'>
									<Check width={16} className='text-accent-primary' />{' '}
									<span>Deep cleaning</span>
								</li>
								<li className='flex items-center gap-2'>
									<Check width={16} className='text-accent-primary' />{' '}
									<span>Move on/out cleaning</span>
								</li>
								<li className='flex items-center gap-2'>
									<Check width={16} className='text-accent-primary' />{' '}
									<span>Vacation Rental Cleaning</span>
								</li>
								<li className='flex items-center gap-2'>
									<Check width={16} className='text-accent-primary' />{' '}
									<span>Commercial Cleaning</span>
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='2' className='border rounded px-[1rem]'>
						<AccordionTrigger className='data-[state=open]:text-accent-primary hover:no-underline font-bold'>
							How to ask a question?
						</AccordionTrigger>
						<AccordionContent className='text-slate-500'>
							<h4 className='text-dark-less text-lg'>
								You can call or leave a request
							</h4>
							<ul className='text-slate-400 grid grid-cols-2 gap-4 mt-1 xs:grid-cols-1 sm:grid-cols-2'>
								<li className='border rounded flex flex-col px-3 py-2'>
									<p>Phone number</p>
									<p className='text-lg text-dark-full'>+1 (425) 648-9386</p>
								</li>
								<li className='border rounded flex flex-col px-3 py-2'>
									<p>Leave a request</p>
									<GreenButton
										type={'button'}
										className=''
										onClick={() => {
											data.onOpen(true)
										}}>
										Ask about cleaning
									</GreenButton>
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='3' className='border rounded px-[1rem]'>
						<AccordionTrigger className='data-[state=open]:text-accent-primary hover:no-underline font-bold'>
							Where are we cleaning?
						</AccordionTrigger>
						<AccordionContent className='text-dark-less text-lg'>
							Seattle - Washington
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value='4' className='border rounded px-[1rem]'>
						<AccordionTrigger className='data-[state=open]:text-accent-primary hover:no-underline font-bold'>
							Where could we see prices?
						</AccordionTrigger>
						<AccordionContent className='text-slate-500'>
							<div className='text-dark-less'>
								<span>You could</span>{' '}
								<LinkScroll
									to='cost'
									spy
									duration={200}
									offset={-96}
									className='text-blue-500 cursor-pointer'>
									calculate
								</LinkScroll>{' '}
								<span>more or less price individually for you</span>
							</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</aside>
			<aside className='flex relative xs:hidden xl:flex'>
				<div className='absolute w-full h-[400px] bg-gradient-to-br from-accent-primary/40 to-accent-foreign/40 rounded shadow-xl shadow-accent-foreign/20 translate-x-4'></div>
				<div className='w-[500px] h-[500px] relative mx-16 mt-10'>
					<Image
						alt='imgfaq'
						src={
							'https://wecleanthesprings.com/wp-content/uploads/2022/04/cheyenne-mountain-cleaning-services-product-2.jpg'
						}
						width={500}
						height={500}
						className='rounded'
						priority
					/>
				</div>
			</aside>
		</section>
	)
}
