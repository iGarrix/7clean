import AboutUsBlock from './aboutus'
import CalculatorBlock from './calc'
import FaqBlock from './faq'
import FeedbackBlock from './feedback'
import { ServicesBlock } from './services'
import WelcomeBlock from './welcome'

export default function ClientPage() {
	return (
		<main className='flex flex-col pb-[6vh] gap-[10vh]'>
			<WelcomeBlock />
			<AboutUsBlock />
			<CalculatorBlock />
			<ServicesBlock />
			<FeedbackBlock />
			<FaqBlock />
		</main>
	)
}
