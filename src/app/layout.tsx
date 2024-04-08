import './globals.css'
// import { Toaster } from '@/components/ui/sonner'
import { ReactQueryProvider } from '@/providers/react-query-provider/react-query.provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'], variable: '--inter' })

const proxima = localFont({
	variable: '--proxima',
	src: [
		{
			path: '../assets/fonts/proximanova/ProximaNova-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../assets/fonts/proximanova/ProximaNova-LightIt.woff2',
			weight: '300',
			style: 'italic',
		},
		{
			path: '../assets/fonts/proximanova/ProximaNova-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/proximanova/ProximaNova-RegularIt.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../assets/fonts/proximanova/ProximaNova-Semibold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../assets/fonts/proximanova/ProximaNova-SemiboldIt.woff2',
			weight: '600',
			style: 'italic',
		},
		{
			path: '../assets/fonts/proximanova/ProximaNova-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../assets/fonts/proximanova/ProximaNova-BoldIt.woff2',
			weight: '700',
			style: 'italic',
		},
		{
			path: '../assets/fonts/proximanova/ProximaNova-Extrabld.woff2',
			weight: '800',
			style: 'normal',
		},
		{
			path: '../assets/fonts/proximanova/ProximaNova-ExtrabldIt.woff2',
			weight: '800',
			style: 'italic',
		},
		{
			path: '../assets/fonts/proximanova/ProximaNova-Black.woff2',
			weight: '900',
			style: 'normal',
		},
		{
			path: '../assets/fonts/proximanova/ProximaNova-BlackIt.woff2',
			weight: '900',
			style: 'italic',
		},
	],
})

export const metadata: Metadata = {
	title: '7 Clean',
	description: 'Professional cleaning services Seattle area',
}

export default function RootLayout(props: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body
				className={`${proxima.className} ${proxima.variable} ${inter.variable} font-semibold`}>
				{props.children}
				{/* <Toaster
					visibleToasts={1}
					className='text-red-500 bg-slate-800 dark:bg-slate-800 border-none outline-none'
				/> */}
			</body>
		</html>
	)
}
