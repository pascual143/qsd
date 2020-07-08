import React, { Fragment, Component } from 'react';
import './styleHtml.css';
import QueEsHtml from './Capitulos/queEsHtml.js';
import AnatomiaHtml from './Capitulos/anatomiaHtml.js';

export default class IntroHtml extends Component {
	render() {
		return (
			<Fragment>
				{/* Carousel */}
				<div>
					<h1>
						{title} {recurosHtml} {ejercicios}{' '}
					</h1>
				</div>
				<QueEsHtml />
				<AnatomiaHtml />
			</Fragment>
		);
	}
}

const title = <div>HTML</div>;

const recurosHtml = <div>Recursos</div>;

const ejercicios = <div>Ejercicios</div>;


