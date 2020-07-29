import React, { Fragment, Component } from 'react';
import IntroHtml from './Html/html';

// import bootstrap
import Card from 'react-bootstrap/Card';

// import carousel
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import images
import htmlpic from '../../img/htmlpic.jpg';
import csspic from '../../img/csspic.jpg';
import javascriptpic from '../../img/javascriptpic.jpg';
import jquerypic from '../../img/jquerypic.jpg';
import bootstrappic from '../../img/bootstrappic.jpg';
import reactpic from '../../img/reactpic.jpg';

export default class Manual extends Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
	}

	next() {
		this.slider.slickNext();
	}
	previous() {
		this.slider.slickPrev();
	}

	render() {
		const settings = {
			dots: false,
			arrows: true,
			infinite: false,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 3
		};
		function Arrow(props) {
			let className = props.type === 'next' ? 'nextArrow' : 'prevArrow';
			className += ' arrow';
			const char = props.type === 'next' ? '👉' : '👈';
			return (
				<span className={className} onClick={props.onClick}>
					{char}
				</span>
			);
		}
		return (
			<Fragment>
				<div>
					<h1>Manual</h1>
					<Slider
						ref={(c) => (this.slider = c)}
						{...settings}
						className="cardHtml2"
						nextArrow={<Arrow type="next" />}
						prevArrow={<Arrow type="prev" />}
					>
						{/* <button className="prevNextDotClassName">Next</button> */}
						<div>
							<Card className="cardHtmlInside2">
								<img width="200" height="200" alt="que es html?" src={htmlpic} />
							</Card>
						</div>
						<div>
							<Card className="cardHtmlInside2">
								<img width="200" height="200" alt="que es html?" src={csspic} />
							</Card>
						</div>
						<div>
							<Card className="cardHtmlInside2">
								<img width="200" height="200" alt="que es html?" src={javascriptpic} />
							</Card>
						</div>
						<div>
							<Card className="cardHtmlInside2">
								<img width="200" height="200" alt="que es html?" src={jquerypic} />
							</Card>{' '}
						</div>
						<div>
							<Card className="cardHtmlInside2">
								<img width="200" height="200" alt="que es html?" src={bootstrappic} />
							</Card>{' '}
						</div>
						<div>
							<Card className="cardHtmlInside2">
								<img width="200" height="200" alt="que es html?" src={reactpic} />
							</Card>{' '}
						</div>
					</Slider>
					<IntroHtml />
					{/* <Css /> */}
					{/* <Javascript /> */}
					{/* <Jquery /> */}
				</div>
			</Fragment>
		);
	}
}
