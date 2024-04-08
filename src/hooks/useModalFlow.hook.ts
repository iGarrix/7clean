'use client'

import { useEffect } from 'react'

//import style from './scss.style.module.scss';

export const useModalFlow = (props: any) => {
	useEffect(() => {
		if (props) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}

		return () => {
			document.body.classList.remove('overflow-hidden')
		}
	}, [props])
}
