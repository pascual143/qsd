import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import './layouts.css';


export default class Nav extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<nav>
						<div className="nav-wrapper rojo">
							<a href="#!" className="center brand-logo">
								Duddle
							</a>
							<a href="#!" data-target="mobile-demo" className="right sidenav-trigger">
								<i className="material-icons">menu</i>
							</a>
							<ul className="left hide-on-med-and-down">
								<li>
									<Link to={"/Home"} >Home</Link>
								</li>
								<li>
									<Link to={"/Manual"}>Manual</Link>
								</li>
								<li>
									<Link to={"/Course"}>Curso</Link>
								</li>
								<li>
									<Link to={"/Blog"}>Blog</Link>
								</li>
								<li>
									<Link to={"/Otros"}>Otros</Link>
								</li>
								<li>
									<a
										href="#!"
										className="fixed-action-btn btn-floating btn-large halfway-fab waves-effect waves-light teal"
									>
										<i className="material-icons">add</i>
									</a>{' '}
								</li>
							</ul>
						</div>
					</nav>
				</div>	
				</Fragment>
		);
	}
}
