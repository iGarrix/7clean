'use client'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { useState } from 'react'

export default function CalculatorBlock() {
	const [dropdowns, setDropdowns] = useState({
		bedrooms: `1`,
		bathrooms: `1`,
		sqft: '0',
	})
	const [selects, setSelects] = useState({
		fridge: false,
		wipedownblinds: false,
		windows: false,
		havepets: false,
		cabinets: false,
		patio: false,
		oven: false,
	})
	const [radio, setRadio] = useState(0)

	function getTotalSelects(_sel: typeof selects) {
		let total = 0
		total += _sel.fridge ? 40 : 0
		total += _sel.wipedownblinds ? 35 : 0
		total += _sel.windows ? 40 : 0
		total += _sel.havepets ? 40 : 0
		total += _sel.cabinets ? 25 : 0
		total += _sel.patio ? 30 : 0
		total += _sel.oven ? 40 : 0
		return total
	}

	return (
		<section
			id='cost'
			className='px-[15rem] bg-gradient-to-br from-accent-primary/20 via-accent-primary/20 to-accent-foreign/20 py-[2rem] grid grid-cols-3 xs:flex xs:flex-col 2xl:grid gap-[2rem] xs:px-[1rem] sm:px-[1rem] md:px-[5rem] lg:px-[2rem] xl:px-[5rem] 2xl:px-[10rem] 3xl:px-[15rem]'>
			<div className='flex flex-col justify-start gap-[1rem]'>
				<div className='grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 gap-[1rem]'>
					<Select
						onValueChange={(e: any) => {
							setDropdowns(f => {
								f.bedrooms = `${e}`
								return { ...f }
							})
						}}>
						<SelectTrigger className=''>
							<SelectValue placeholder='Bedrooms' />
						</SelectTrigger>
						<SelectContent>
							{[...Array(9)].map((item, key) => (
								<SelectItem key={key} value={`${key + 1}`}>
									{key + 1} {key + 1 === 1 ? 'bedroom' : 'bedrooms'}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<Select
						onValueChange={(e: any) => {
							setDropdowns(f => {
								f.bathrooms = `${e}`
								return { ...f }
							})
						}}>
						<SelectTrigger className=''>
							<SelectValue placeholder='Bathrooms' />
						</SelectTrigger>
						<SelectContent>
							{[...Array(9)].map((item, key) => (
								<SelectItem key={key} value={`${key + 1}`}>
									{key + 1} {key + 1 === 1 ? 'Bathroom' : 'Bathrooms'}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<Select
					onValueChange={(e: any) => {
						setDropdowns(f => {
							f.sqft = `${e}`
							return { ...f }
						})
					}}>
					<SelectTrigger className=''>
						<SelectValue placeholder='SQFT' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value={`0`}>0-1000</SelectItem>
						<SelectItem value={`20`}>1001-1500</SelectItem>
						<SelectItem value={`40`}>1501-2000</SelectItem>
						<SelectItem value={`60`}>2001-2500</SelectItem>
						<SelectItem value={`90`}>2501-3000</SelectItem>
						<SelectItem value={`125`}>3001-3500</SelectItem>
						<SelectItem value={`165`}>3501-4000</SelectItem>
						<SelectItem value={`200`}>4001-4500</SelectItem>
						<SelectItem value={`235`}>4501-5000</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className='grid grid-cols-3 col-span-2 xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3 gap-[1rem] '>
				<div className='flex items-center space-x-2'>
					<Switch
						id='fridge'
						onCheckedChange={(e: boolean) => {
							setSelects(f => {
								f.fridge = e
								return { ...f }
							})
						}}
					/>
					<label htmlFor='fridge'>Inside Fridge $40.00</label>
				</div>
				<div className='flex items-center space-x-2'>
					<Switch
						id='downblinds'
						onCheckedChange={(e: boolean) => {
							setSelects(f => {
								f.fridge = e
								return { ...f }
							})
						}}
					/>
					<label htmlFor='downblinds'>Wipe Down Blinds $35.00</label>
				</div>
				<div className='flex items-center space-x-2'>
					<Switch
						id='windows'
						onCheckedChange={(e: boolean) => {
							setSelects(f => {
								f.fridge = e
								return { ...f }
							})
						}}
					/>
					<label htmlFor='windows'>Inside Windows $40.00</label>
				</div>
				<div className='flex items-center space-x-2'>
					<Switch
						id='pets'
						onCheckedChange={(e: boolean) => {
							setSelects(f => {
								f.fridge = e
								return { ...f }
							})
						}}
					/>
					<label htmlFor='pets'>We Have Pets $40.00</label>
				</div>
				<div className='flex items-center space-x-2'>
					<Switch
						id='cabinets'
						onCheckedChange={(e: boolean) => {
							setSelects(f => {
								f.fridge = e
								return { ...f }
							})
						}}
					/>
					<label htmlFor='cabinets'>Inside Cabinets $25.00</label>
				</div>
				<div className='flex items-center space-x-2'>
					<Switch
						id='patio'
						onCheckedChange={(e: boolean) => {
							setSelects(f => {
								f.fridge = e
								return { ...f }
							})
						}}
					/>
					<label htmlFor='patio'>Sweep Front & Back Patio $30.00</label>
				</div>
				<div className='flex items-center space-x-2'>
					<Switch
						id='oven'
						onCheckedChange={(e: boolean) => {
							setSelects(f => {
								f.fridge = e
								return { ...f }
							})
						}}
					/>
					<label htmlFor='oven'>Inside the Oven $40.00</label>
				</div>
			</div>
			<div className='col-span-3'>
				<RadioGroup
					defaultValue='option-one'
					className='flex justify-between gap-3 xs:flex-col sm:flex-row flex-wrap'
					onValueChange={(e: string) => {
						setRadio(Number.parseInt(e))
					}}>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='0' id='1' className='scale-125' />
						<label htmlFor='1'>One time</label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='40' id='2' className='scale-125' />
						<label htmlFor='2'>Weekly 40$ off</label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='30' id='3' className='scale-125' />
						<label htmlFor='3'>Biweekly 30$ off</label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='25' id='4' className='scale-125' />
						<label htmlFor='4'>Every 3 weeks 25$ off</label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='20' id='5' className='scale-125' />
						<label htmlFor='5'>Monthly 20$ off</label>
					</div>
				</RadioGroup>
			</div>
			<div className='col-span-3'>
				<h1 className='tracking-wide text-2xl uppercase font-black xs:text-center sm:text-start'>
					Avarage price:{' '}
					{170 +
						Number.parseInt(dropdowns.bedrooms) * 5 +
						Number.parseInt(dropdowns.bathrooms) * 15 +
						Number.parseInt(dropdowns.sqft) +
						getTotalSelects(selects) -
						radio}{' '}
					usd
				</h1>
			</div>
		</section>
	)
}
