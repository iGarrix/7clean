'use client'

import { cn } from '@/lib/utils'
import { HTMLProps } from 'react'

//import style from './scss.style.module.scss';

export interface IGreenButtonProps extends HTMLProps<HTMLButtonElement> {
	type: 'submit' | 'reset' | 'button' | undefined
}

export const GreenButton: React.FC<IGreenButtonProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<button
			className={cn(
				'text-light bg-gradient-to-br from-accent-primary via-accent-primary to-accent-foreign px-[1rem] rounded-lg py-[0.5rem] transition-all hover:shadow-xl hover:shadow-accent-foreign/30',
				className
			)}
			{...props}>
			{children}
		</button>
	)
}
