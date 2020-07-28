import React, { Fragment, Component } from 'react';
import './../styles.css';

import Card from 'react-bootstrap/Card';

import QueEsHtml from './Capitulos/queEsHtml.js';
import AnatomiaHtml from './Capitulos/anatomiaHtml.js';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';

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
					<h1>
						{title} {recurosHtml} {ejercicios}{' '}
					</h1>
				</div>
				<div style={{ textAlign: 'center' }}>
					<button className="button" onClick={this.previous}>
						Previous
					</button>
					<button className="button" onClick={this.next}>
						Next
					</button>
					
				</div>
				<Slider
					ref={(c) => (this.slider = c)}
					{...settings}
					nextArrow={<Arrow type="next" />}
					prevArrow={<Arrow type="prev" />}
				>
					{/* <button className="prevNextDotClassName">Next</button> */}
					<div>
						<Card className="cardHtml">
							<QueEsHtml />
						</Card>
					</div>
					<div>
						<Card className="cardHtml">
							<AnatomiaHtml />
						</Card>
					</div>
					<div>
						<h3>3</h3>
					</div>
					<div>
						<h3>4</h3>
					</div>
					<div>
						<h3>5</h3>
					</div>
					<div>
						<h3>6</h3>
					</div>
				</Slider>
				
			</Fragment>
		);
	}
}

const title = <div>HTML</div>;

const recurosHtml = <div>Recursos</div>;

const ejercicios = <div>Ejercicios</div>;
