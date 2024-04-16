'use client'

import { navbar_data } from '../header/header.component'
import InstagramIcon from '@/assets/icons/instagram.png'
import FacebookIcon from '@/assets/icons/facebook.png'
import { Link as LinkScroll } from 'react-scroll'
import Link from 'next/link'
import Image from 'next/image'
import { GreenButton } from '@/components/commons/buttons/GreenButton/greenbutton.component'
import { SquareArrowOutUpRight } from 'lucide-react'
import { useAskModal } from '@/services/askModalStore/ask.store'
import { useEffect, useState } from 'react'
//import style from './scss.style.module.scss';

export interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = ({ ...props }) => {
	const [year, setYear] = useState(new Date().getFullYear())
	useEffect(() => {
		// Update the year when the component mounts
		setYear(new Date().getFullYear())
	}, [])
	const data = useAskModal()
	return (
		<footer className='flex flex-col bg-dark-full text-white px-[15rem] py-[3rem] gap-6 xs:px-[1rem] sm:px-[5rem] lg:px-[2rem] xl:px-[5rem] 2xl:px-[10rem] 3xl:px-[15rem]'>
			<aside className='flex justify-between items-center gap-10'>
				<section className='flex gap-16 items-center xs:flex-col md:flex-row'>
					<h1 className='text-3xl'>
						<span className=''>7</span>
						<span className='text-accent-foreign'>Clean</span>
					</h1>
					<menu className='text-slate-400 flex gap-8 xs:hidden lg:flex'>
						{navbar_data.map((item, key) => (
							<LinkScroll
								key={key}
								spy
								duration={200}
								to={item.path}
								offset={-96}>
								<li className='transition-all hover:text-accent-foreign cursor-pointer'>
									{item.title}
								</li>
							</LinkScroll>
						))}
					</menu>
				</section>
				<section className='flex gap-[2rem] items-center xs:flex-col'>
					<div className='flex flex-col items-end gap-2'>
						<h3 className='tracking-wide text-lg'>+1 (425) 648-9386</h3>
						<div className='flex items-center gap-3'>
							<Link
								href={'https://www.instagram.com/7clean.cleaning/'}
								target='_blank'>
								<Image
									alt='instagram'
									src={InstagramIcon}
									width={20}
									height={20}
								/>
							</Link>
							<Link
								href={'https://www.facebook.com/7clean.me/'}
								target='_blank'>
								<Image
									alt='facebook'
									src={FacebookIcon}
									width={20}
									height={20}
								/>
							</Link>
						</div>
					</div>
					<GreenButton
						type={'button'}
						className='xs:hidden lg:block'
						onClick={() => {
							data.onOpen(true)
						}}>
						Ask about cleaning
					</GreenButton>
				</section>
			</aside>
			<menu className='text-slate-400 flex items-center gap-4 flex-col xs:flex sm:flex-row sm:justify-center lg:hidden'>
				{navbar_data.map((item, key) => (
					<LinkScroll key={key} spy duration={200} to={item.path} offset={-96}>
						<li className='transition-all hover:text-accent-foreign cursor-pointer'>
							{item.title}
						</li>
					</LinkScroll>
				))}
			</menu>
			<section className='flex text-neutral-400 items-center gap-16 xs:flex-col-reverse xs:gap-2 lg:flex-row lg:gap-16'>
				<p>{`© 2022 - ${year}. All Rights Reserved.`}</p>
				<Link
					href={'https://webcraft.rivne.ua/'}
					target='_blank'
					className='transition-all hover:text-blue-500 flex gap-1'>
					<p className='font-normal'>developed by webcraft</p>{' '}
					<SquareArrowOutUpRight width={14} className='-translate-y-1' />
				</Link>
			</section>
		</footer>
	)
}
