'use client'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import * as Yup from 'yup'
import { useAskModal } from '@/services/askModalStore/ask.store'
import { Form, Formik } from 'formik'
import FormikField from '@/components/commons/fields/FormikField'
import { GreenButton } from '@/components/commons/buttons/GreenButton/greenbutton.component'
import { useState } from 'react'
import { AtSign, Text, User } from 'lucide-react'
import Link from 'next/link'

//import style from './scss.style.module.scss';

export interface IAskModalProps {}

export type AskType = {
	name: string
	email: string
	message: string
}

export const AskScheme = Yup.object({
	email: Yup.string().email('Email is incorrect').required('Email is required'),
	name: Yup.string().required('Name is required'),
	message: Yup.string()
		.min(10, 'Message must be at least 10 charapters')
		.required('Message is requires'),
})

export const AskModal: React.FC<IAskModalProps> = ({ ...props }) => {
	const data = useAskModal()
	const [isSended, setSend] = useState(false)
	const askState: AskType = {
		name: '',
		email: '',
		message: '',
	}

	const handleSubmit = async (values: AskType) => {
		setSend(true)
		setTimeout(() => {
			data.onOpen(false)
		}, 1000)
	}

	return (
		<Dialog open={data.isOpen} onOpenChange={data.onOpen}>
			<DialogContent className='bg-light'>
				<DialogHeader>
					<DialogTitle>
						Email us{' '}
						<Link
							href={'#faq'}
							onClick={() => {
								data.onOpen(false)
							}}>
							fggfg
						</Link>
					</DialogTitle>
				</DialogHeader>
				<Formik
					initialValues={askState}
					validationSchema={AskScheme}
					onSubmit={handleSubmit}>
					<Form className='w-full'>
						<FormikField
							className=''
							type='text'
							icon={<User />}
							name='name'
							placeholder={'Enter your name'}
						/>
						<br />
						<FormikField
							className='bg-light-200 dark:bg-slate-800 autofill:bg-slate-800 outline-none border-none rounded'
							type='email'
							icon={<AtSign />}
							name='email'
							placeholder={'Enter email'}
						/>
						<br />
						<FormikField
							className='bg-light-200 dark:bg-slate-800 autofill:bg-slate-800 outline-none border-none rounded'
							type='text'
							icon={<Text />}
							name='message'
							placeholder={'Enter short message'}
						/>
						<br />
						<GreenButton
							type='submit'
							className='w-full rounded bg-light-200 hover:bg-dark/20 dark:bg-slate-800/60 dark:text-slate-400 dark:hover:bg-slate-800'>
							{isSended ? 'Ask sended' : 'Send'}
						</GreenButton>
					</Form>
				</Formik>
			</DialogContent>
		</Dialog>
	)
}
