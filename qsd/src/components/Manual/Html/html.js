import React, { Fragment, Component } from 'react';
import './../styles.css';
// import './scripts.js';
// Capitulos
import QueEsHtml from './Capitulos/queEsHtml.js';
import AnatomiaHtml from './Capitulos/anatomiaHtml.js';

// bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

import './arrows.js';

// import htmlpic from '../../../img/htmlpic.jpg';

export default class IntroHtml extends Component {
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
			dots: true,
			arrows: true,
			infinite: false,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			appendDots: (dots) => {
				return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={20} />;
			}
		};
		// function Arrow(props) {
		// 	let className = props.type === 'next' ? 'nextArrow' : 'prevArrow';
		// 	className += ' arrow';
		// 	const char = props.type === 'next' ? '👉' : '👈';
		// 	return (
		// 		<span className={className} onClick={props.onClick}>
		// 			{char}
		// 		</span>
		// 	);
		// }
		return (
			<Fragment>
				{/* <div className="carousel">
					<a className="carousel-item" href="#one!">
						<img width="450" height="350" alt="html" src={htmlpic} />
					</a>
					<a className="carousel-item" href="#two!">
						<img src={html} alt="css" />
					</a>
					<a className="carousel-item" href="#three!">
						<img src={html} alt="javascript" />
					</a>
					<a className="carousel-item" href="#four!">
						<img src={html} alt="jquery" />
					</a>
					<a className="carousel-item" href="#five!">
						<img src={html} alt="Bootstrap" />
					</a>
				</div> */}
				<div>
					<h1>
						{title} {recursosHtml} {ejercicios}
					</h1>
				</div>
				<div style={{ textAlign: 'center' }}>
					<Button className="button" onClick={this.previous}>
						Previous
					</Button>
					<Button className="button" onClick={this.next}>
						Next
					</Button>
				</div>
				<div>
					{/* <Button
						className="slick-arrow slick-prev  buttonPrev"
						style={{ width: '10px' }}
						onClick={this.previous}
					>
						Previous
					</Button> */}
				</div>
				<Slider
					ref={(c) => (this.slider = c)}
					{...settings}
					className="cardHtml"
					// nextArrow={<Arrow type="next" />}
					// prevArrow={<Arrow type="prev" />}
				>
					{/* <div style={{ textAlign: 'center' }}>
						<Button className="button" onClick={this.previous}>
							Previous
						</Button>
						<Button className="button" onClick={this.next}>
							Next
						</Button>
					</div> */}
					<div />
					{/* <button type="button" data-role="none" class="slick-arrow slick-prev" style={{display: 'block'}}> Previous</button>				 */}
					{/* <button className="prevNextDotClassName">Next</button> */}
					<div>
						<div>
							<Button className="buttonPrev float-left" onClick={this.previous}>
								Previous
							</Button>
							<Button className="buttonNext float-right" onClick={this.next}>
								Next
							</Button>
							<Card className="cardHtmlInside">
								<QueEsHtml />
							</Card>
						</div>
					</div>
					<div>
						<Button className="buttonPrev float-left" onClick={this.previous}>
							Previous
						</Button>
						<Button className="buttonNext float-right" onClick={this.next}>
							Next
						</Button>
						<Card className="cardHtmlInside">
							<AnatomiaHtml />
						</Card>
					</div>
					<div>
						<Button className="buttonPrev float-left" onClick={this.previous}>
							Previous
						</Button>
						<Button className="buttonNext float-right" onClick={this.next}>
							Next
						</Button>
						<h3>3</h3>
					</div>
					<div>
						<Button className="buttonPrev float-left" onClick={this.previous}>
							Previous
						</Button>
						<Button className="buttonNext float-right" onClick={this.next}>
							Next
						</Button>
						<h3>4</h3>
					</div>
					<div>
						<Button className="buttonPrev float-left" onClick={this.previous}>
							Previous
						</Button>
						<Button className="buttonNext float-right" onClick={this.next}>
							Next
						</Button>
						<h3>5</h3>
					</div>
					<div>
						<Button className="buttonPrev float-left" onClick={this.previous}>
							Previous
						</Button>
						<Button className="buttonNext float-right" onClick={this.next}>
							Next
						</Button>
						<h3>6</h3>
					</div>
				</Slider>
				<div />
			</Fragment>
		);
	}
}

const title = <div>HTML</div>;

const recursosHtml = <div>Recursos</div>;

const ejercicios = <div>Ejercicios</div>;
