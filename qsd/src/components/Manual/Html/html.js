import React, { Fragment, Component } from 'react';
import './styleHtml.css';
import QueEsHtml from './Capitulos/queEsHtml.js';
import AnatomiaHtml from './Capitulos/anatomiaHtml.js';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';


export default class IntroHtml extends Component {
	  
	  render(){	
		  const settings = {
		dots: true,
		arrows: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendDots: (dots) => {
		  return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} />
		}
	  };
	  function Arrow(props) {
		let className = props.type === "next" ? "nextArrow" : "prevArrow";
		className += " arrow";
		const char = props.type === "next" ? "👉" : "👈";
		return (
		  <span className={className} onClick={props.onClick}>
			{char}
		  </span>
		);
	  }	
	  return (
		<Fragment>
			<Slider 
			{...settings}
			nextArrow={<Arrow type="next" />}
			prevArrow={<Arrow type="prev" />}

			>
				<div>
				<h1>
						{title} {recurosHtml} {ejercicios}{' '}
					</h1>
				</div>
				<button className="prevNextDotClassName">
					Next
				</button>
              <div>
                <QueEsHtml />
              </div>
              <div>
                <AnatomiaHtml />
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