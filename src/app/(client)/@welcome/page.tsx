'use client'

import { GreenButton } from '@/components/commons/buttons/GreenButton/greenbutton.component'
import Image from 'next/image'
import Cleaner from '@/assets/images/cleaner.png'
import { Link as LinkScroll } from 'react-scroll'
export default function WelcomeBlock() {
	return (
		<section className='min-h-[calc(100svh-10rem)] xs:min-h-[calc(90svh)] sm:min-h-[calc(100svh-10rem)] px-[15rem] grid grid-cols-2 xs:grid-cols-1 xl:grid-cols-2 gap-10 xs:px-[1rem] sm:px-[5rem] lg:px-[2rem] xl:px-[5rem] 2xl:px-[10rem] 3xl:px-[15rem]'>
			<div className='flex flex-col justify-center gap-[2rem] items-start xs:items-center xl:items-start'>
				<div className='relative'>
					<div className='absolute top-[-8rem] left-[-8rem] rotate-12 w-[18rem] h-[16rem] bg-gradient-to-br from-accent-primary/80 to-accent-foreign/80 rounded-3xl shadow-2xl shadow-accent-foreign '></div>
					<h1 className='sticky tracking-wide text-6xl z-10 xs:text-center xl:text-start'>
						Available cleaning <br /> services <br /> at{' '}
						<span className='text-transparent bg-gradient-to-r from-accent-primary to-accent-foreign bg-clip-text font-black'>
							Seattle
						</span>
					</h1>
				</div>
				<p className='font-normal text-[17px] xs:text-center xl:text-start'>
					<span>Clean up flats, houses, commercial rooms, offices.</span>
					<br />
					<span>
						All kind of maintaining clarity after feasts, repairs and bit
						pollution
					</span>
				</p>
				<LinkScroll to='cost' spy duration={200} offset={-96}>
					<GreenButton
						type={'button'}
						className='px-16 py-3 text-lg rounded-3xl rounded-tr-none'>
						Get a qoute
					</GreenButton>
				</LinkScroll>
			</div>
			<div className='flex justify-end xs:hidden xl:flex'>
				<div className='w-[80%] ml-auto bg-gradient-to-br from-accent-foreign to-accent-primary rounded-[7rem] rounded-tl-[18rem] flex items-end rounded-tr-[6rem] shadow-2xl shadow-accent-primary/40'>
					<Image
						src={Cleaner}
						alt={'cleaner'}
						priority
						width={600}
						height={600}
						className='-translate-x-[100px]'
					/>
				</div>
			</div>
		</section>
	)
}
