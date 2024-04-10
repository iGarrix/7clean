import { Footer } from '@/components/elements/footer/footer.component'
import { Header } from '@/components/elements/header/header.component'
import { AskModal } from '@/components/elements/modals/askModal/ask_modal.component'
import React, { Fragment } from 'react'

export default function ClientLayout(props: {
	children: React.ReactNode
	welcome: React.ReactNode
	aboutus: React.ReactNode
	calc: React.ReactNode
	services: React.ReactNode
	feedback: React.ReactNode
	faq: React.ReactNode
}) {
	return (
		<Fragment>
			<AskModal />
			<div className='bg-light min-h-svh '>
				<Header />
				<div className='mt-[5rem] flex flex-col pb-[6vh] gap-[10vh]'>
					{props.welcome}
					{props.aboutus}
					{props.calc}
					{props.services}
					{props.feedback}
					{props.faq}
					{/* {props.children} */}
				</div>
			</div>
			<Footer />
		</Fragment>
	)
}
