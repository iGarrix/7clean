import { Footer } from '@/components/elements/footer/footer.component'
import { Header } from '@/components/elements/header/header.component'
import { AskModal } from '@/components/elements/modals/askModal/ask_modal.component'
import { Fragment } from 'react'

export default function ClientLayout(props: { children: React.ReactNode }) {
	return (
		<Fragment>
			<AskModal />
			<div className='bg-light min-h-svh'>
				<Header />
				<div className='mt-[5rem]'>{props.children}</div>
			</div>
			<Footer />
		</Fragment>
	)
}
