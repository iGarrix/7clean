'use client'

import { ServiceCard } from '@/components/commons/cards/serviceCard/service_card.components'

//import style from './scss.style.module.scss';

export default function ServicesBlock() {
	return (
		<section
			className='px-[15rem] flex flex-col gap-[2rem] xs:px-[1rem] sm:px-[5rem] lg:px-[2rem] xl:px-[5rem] 2xl:px-[10rem] 3xl:px-[15rem]'
			id='services'>
			<div>
				<h1 className='uppercase font-black tracking-wide text-3xl text-dark-full z-10'>
					Kind of cleaning
				</h1>
				<br />
				<h2 className='text-slate-500 font-normal z-[1001]'>
					7Clean - has a lot of kind of services that we can order as daily or
					once <br />
					from daily cleaning room to general cleaning houses
				</h2>
			</div>
			<div className='grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
				<ServiceCard
					src='https://factorymattresstexas.com/wp-content/uploads/bedroom-cleaning-e1552417834435.jpg'
					title='Standart Cleaning'
				/>
				<ServiceCard
					src='https://cleaningspaces.net/wp-content/uploads/2020/11/how-to-deep-clean-your-house.jpg'
					title='Deep Cleaning'
				/>
				<ServiceCard
					src='https://nextdaycleaning.com/wp-content/uploads/2021/01/Move-In-Move-Out-Cleaning-Checklist-Latest-2021-Update.jpg'
					title='Move in/out Cleaning'
				/>
				<ServiceCard
					src='https://thecleanestroomnj.com/wp-content/uploads/2022/05/142982531_s.jpg'
					title='Vacation Rental Cleaning'
				/>
				<ServiceCard
					src='https://janiking.co.uk/wp-content/uploads/2022/05/young-cleaner-washing-floor-in-open-space-office.jpg'
					title='Commercial Cleaning'
				/>
				<ServiceCard
					src='https://www.makedonasgcs.com/wp-content/uploads/2020/01/general-cleaning-com.jpg'
					title='General Cleaning'
				/>
			</div>
		</section>
	)
}
