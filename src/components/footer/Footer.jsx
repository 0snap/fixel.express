import React, { Component } from 'react';

import './Footer.scss';

const lightGrey = '#EDEDED';

export default class Footer extends Component {
	
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<footer>
				<div className='social'>
					<a className='social__link' href='https://www.xing.com/profile/Felix_Ortmann2' target='_blank'>
						<svg className='social__svg' viewBox='0 0 16 16'>
							<title>XING</title>
							<path className='animated__white' d="M2.431 3.159c-0.138 0-0.256 0.050-0.316 0.144-0.059 0.1-0.050 0.225 0.013 0.353l1.559 2.7c0.003 0.006 0.003 0.009 0 0.013l-2.45 4.331c-0.063 0.128-0.059 0.256 0 0.353 0.059 0.094 0.163 0.156 0.3 0.156h2.306c0.344 0 0.513-0.234 0.628-0.447 0 0 2.397-4.241 2.491-4.406-0.009-0.016-1.588-2.766-1.588-2.766-0.116-0.203-0.287-0.431-0.644-0.431h-2.3z"></path>
							<path className='xing__animated__green' d="M12.125 0c-0.344 0-0.494 0.216-0.619 0.441 0 0-4.972 8.816-5.134 9.106 0.009 0.016 3.278 6.016 3.278 6.016 0.116 0.203 0.291 0.441 0.644 0.441h2.306c0.137 0 0.247-0.053 0.306-0.147 0.063-0.1 0.059-0.228-0.006-0.356l-3.25-5.947c-0.003-0.006-0.003-0.009 0-0.016l5.109-9.034c0.063-0.128 0.066-0.256 0.006-0.356-0.059-0.094-0.169-0.147-0.306-0.147h-2.334z"></path>
						</svg>
					</a>
					<a className='social__link' href='https://de.linkedin.com/in/felix-ortmann' target='_blank'>
						<svg className='social__svg' viewBox='0 0 32 32'>
							<title>Linked In</title>
							<path className='linkedin__animated__blue' d="M32,30c0,1.104-0.896,2-2,2H2c-1.104,0-2-0.896-2-2V2c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V30z"></path>
							<g>
								<rect className='animated__white' fill={lightGrey} height="14" width="4" x="7" y="11" />
								<path className='animated__white' fill={lightGrey} d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z" fill="#FFFFFF" />
								<circle className='animated__white' fill={lightGrey} cx="9" cy="8" fill="#FFFFFF" r="2" />
							</g>
						</svg>
					</a>
					<a className='social__link' href='https://github.com/0ortmann' target='_blank'>
						<svg className='social__svg' preserveAspectRatio='none'  viewBox='0 0 16 16'>
							<title>Github</title>
							<path className='github__animated__blue' d='M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z'></path>
						</svg>
					</a>
					<a className='social__link' href='https://facebook.com/fixelexpress' target='_blank'>
						<svg className='social__svg' preserveAspectRatio='none'  viewBox='0 0 255 255'>
							<title>Facebook</title>
							<path className='facebook__animated__blue' d="M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812 c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225 H248.082z"/>
							<path className='animated__white' fill={lightGrey} d="M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935 l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585 v99.803H182.409z"/>
						</svg>
					</a>
				</div>
			</footer>
		);
	}
}