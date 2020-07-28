import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import htmlStructure from '../../../../img/htmlStructure.jpg'

class AnatomiaHtml extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Duddle</title>
							<title>Anatomia del Html</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1>Anatomia del Html</h1>
						<blockquote>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Un elemento generalmente consiste en
							una etiqueta(tag) de apertura y una etiqueta de cierre, 
							que contiene el nombre del elemento rodeado de corchetes angulares y el contenido
							intermedio:
						</blockquote>
                        <img width="450" height="350" alt="que es html?" src={htmlStructure} />
						<p>
							{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hay algunos elementos HTML que no tienen una etiqueta de cierre ni ningún contenido. Estos se llaman elementos vacíos. Estos son algunos <pre><img>, <meta>, <link> e <input></pre>. */}
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML o Lenguaje de marcado de hipertexto,
							utiliza un sistema de marcado, compuesto de elementos que representan contenido. El marcado
							significa que con HTML declaras lo que se presenta a un espectador, pero no cómo se
							presenta. Las representaciones visuales se definen mediante hojas de estilo en cascada (CSS)
							y se realizan mediante navegadores.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML a veces se llama un lenguaje de
							programación pero no tiene lógica, por lo que es un lenguaje de marcado.{' '}
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Html proporciona estructura al contenido que
							aparece en un sitio web, como imágenes, texto o videos. (Haga clic con el botón derecho en
							cualquier página de Internet, seleccione "Inspeccionar" y verá HTML en un panel de su
							pantalla.)
						</p>
						<div>
                            <img className="materialboxed" width="50" alt="anatomiaHtml" data-caption="La estructura basica en html consta de elementos divisores" src={htmlStructure}></img>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default AnatomiaHtml;
