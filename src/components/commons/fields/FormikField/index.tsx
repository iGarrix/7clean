'use client'

import { useField } from 'formik'
import { IFormikField } from './formikfield.types'
import style from './formikfield.module.scss'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Lock, ShieldOff } from 'lucide-react'
import { cn } from '@/lib/utils'

const FormikField: React.FC<IFormikField> = ({
	placeholder,
	type,
	className,
	defValue,
	...props
}) => {
	const [field, meta] = useField(props)

	const [isPassword, setPassState] = useState(() => {
		if (type === 'password') {
			return true
		}
		return false
	})
	return (
		<div className='flex flex-col w-full border rounded-lg bg-transparent px-4 py-2'>
			<div className='flex flex-wrap gap-2'>
				<p className='text-rose-500 text-sm text-normal'>{placeholder} *</p>
			</div>
			<div
				className={`${style.formikfieldWrapper} select-none ${
					meta.error ? style.error : style.success
				}`}>
				<label htmlFor={field.name}>
					{type === 'password' ? (
						isPassword ? (
							<Lock
								className={`${type == 'password' && style.icon}`}
								onClick={() => {
									setPassState(!isPassword)
								}}
							/>
						) : (
							<ShieldOff
								className={`${type == 'password' && style.icon}`}
								onClick={() => {
									setPassState(!isPassword)
								}}
							/>
						)
					) : (
						props.icon
					)}
				</label>
				<Input
					className={cn(
						className,
						'border-0 outline-none focus-visible:ring-0 rounded-none focus-visible:ring-transparent text-base text-dark-full placeholder:text-slate-600 bg-transparent ring-0 p-0'
					)}
					type={type === 'password' ? (isPassword ? type : 'text') : type}
					id={field.name}
					disabled={props.disable}
					defaultValue={defValue ? defValue : field.value}
					placeholder={meta.error ? meta.error : placeholder}
					onChange={field.onChange}
					onBlur={field.onBlur}
					name={field.name}
				/>
			</div>
		</div>
	)
}

export default FormikField
