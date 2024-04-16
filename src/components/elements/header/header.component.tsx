'use client'

import { GreenButton } from '@/components/commons/buttons/GreenButton/greenbutton.component'
import Image from 'next/image'
import { Link as LinkScroll } from 'react-scroll'
import InstagramIcon from '@/assets/icons/instagram.png'
import FacebookIcon from '@/assets/icons/facebook.png'
import { useAskModal } from '@/services/askModalStore/ask.store'
import Link from 'next/link'
import { ExternalLink, Menu, X } from 'lucide-react'
import { Fragment, useState } from 'react'
import { useModalFlow } from '@/hooks/useModalFlow.hook'
import { AnimatePresence, motion as m } from 'framer-motion'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
//import style from './scss.style.module.scss';

export interface IHeaderProps {}

export const navbar_data = [
	{
		title: 'Clean cost',
		path: 'cost',
	},
	{
		title: 'About company',
		path: 'about',
	},
	{
		title: 'Services',
		path: 'services',
	},
	{
		title: 'Reviews',
		path: 'reviews',
	},
	{
		title: 'FAQ',
		path: 'faq',
	},
]

export const Header: React.FC<IHeaderProps> = ({ ...props }) => {
	const ask = useAskModal()
	const [isOpen, setOpen] = useState(false)
	useModalFlow(isOpen)
	return (
		<Fragment>
			<header className='flex h-[5rem] w-full font-semibold backdrop-blur fixed top-0 left-0 px-[15rem] z-[500] bg-light/80 xs:px-[1rem] sm:px-[5rem] lg:px-[2rem] xl:px-[5rem] 2xl:px-[10rem] 3xl:px-[15rem]'>
				<aside className='flex items-center grow'>
					<h1 className='text-2xl'>
						<span className='text-dark-less'>7</span>
						<span className='text-accent-foreign'>Clean</span>
					</h1>
					<div className='flex grow justify-center xs:hidden lg:flex'>
						<menu className='flex gap-[2.5rem] select-none'>
							{navbar_data.map((item, key) => (
								<LinkScroll
									key={key}
									spy
									duration={200}
									to={item.path}
									offset={-96}>
									<li className='transition-all cursor-pointer flex items-center hover:text-accent-primary '>
										{item.title}
									</li>
								</LinkScroll>
							))}
						</menu>
					</div>
				</aside>
				<aside className='flex gap-[2rem] items-center xs:hidden lg:flex'>
					<div className='flex flex-col items-end'>
						<h3 className='text-dark-full tracking-wide text-lg'>
							+1 (425) 648-9386
						</h3>
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
						className=''
						onClick={() => {
							ask.onOpen(true)
						}}>
						Ask us
					</GreenButton>
				</aside>
				<button
					className='xs:block lg:hidden'
					onClick={() => {
						setOpen(!isOpen)
					}}>
					{isOpen ? <X /> : <Menu />}
				</button>
			</header>
			<AnimatePresence>
				{isOpen && (
					<m.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { opacity: { delay: 0.1 } } }}
						transition={{ duration: 0.15, ease: 'linear' }}
						className='xs:flex lg:hidden fixed top-0 left-0 w-full h-full bg-light/80 backdrop-blur z-[499] mt-[5rem] px-[1rem] flex flex-col overflow-hidden'>
						<menu className='text-dark-full flex flex-col gap-8 select-none'>
							<GreenButton
								type={'button'}
								className=''
								onClick={() => {
									ask.onOpen(true)
								}}>
								Ask about cleaning
							</GreenButton>
							{navbar_data.map((item, key) => (
								<LinkScroll
									key={key}
									spy
									duration={200}
									to={item.path}
									offset={-96}>
									<li
										className='transition-all cursor-pointer flex items-center justify-between'
										onClick={() => {
											setTimeout(() => {
												setOpen(false)
											}, 200)
										}}>
										<p>{item.title}s</p>
										<ExternalLink />
									</li>
								</LinkScroll>
							))}
						</menu>
					</m.div>
				)}
			</AnimatePresence>
		</Fragment>
	)
}
