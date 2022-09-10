import {Fragment} from 'react';
import Cards from '../components/Card';

export default function Experience () {

	const experience1 = {
		title: 'Backend Specialist',
		sub: 'Key Role:',
		content1: 'Coordinate and provide analytical report on status of MD/NMD AMR/AMI meters of over 1,000,000',
		content2: 'Design and deployed a tool to get the Year-To-Date consumption, vending and energy balance trend of our customers with meters.',
		content3: 'Manage the onboarding POC test of all meters and Intelligent Data Box vendors',
		content4: 'Drive the performance of our AMI meters in the network',
		content5: 'Coordinate with Power Allocation Team in measuring supply availability on feeder meters'
	}

const experience2 = {
		title: 'Telecoms Transmission Engineer',
		sub: 'Key Role:',
		content1: 'Integration of radio network (Fiber Optix and Microwave)',
		content2: 'Technical Site Survey of microwave links and LOS analysis for greenfield and colo sites',
		content3: 'Using WebLCT for NMS configuration and iManager U2000 for radio link configuration',
		content4: 'Integration of radio network (Fiber Optix and Microwave)'
	}

	const experience3 = {
		title: 'Freelance - Full Stack Developer',
		sub: 'Key Role:',
		content1: 'Designed e-commerce website for clothing line - LeeAnnTheLabel',
		content2: 'Built an API integration platform',
		content3: 'Build a food order app'
	}

	return (
		<Fragment>
			<Cards details={experience1}/>
			<Cards details={experience2}/>
			<Cards details={experience3}/>
		</Fragment>

	)
}