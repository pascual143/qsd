import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';

class queEsHtml extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<div>
						<Helmet>
							<meta charSet="utf-8" />
							<title>Duddle</title>
							<title>Que es Html ?</title>
							{/* <link rel="canonical" href="http://mysite.com/example" /> */}
						</Helmet>
					</div>
					<div>
						<h1>Que es Html?</h1>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML es el esqueleto de todas las páginas
							web. A menudo es el primer idioma que aprenden los especialistas en marketing y diseñadores
							y es fundamental para el trabajo de desarrollo front-end.
						</p>
						<p>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aprender HTML es el primer paso para crear
							sitios web. Puedes ayudarte a crear código en blogs o plantillas de sitios web. A medida que
							continúa aprendiendo, puedes superponer HTML con CSS y JavaScript para crear sitios web
							visualmente atractivos y dinámicos. Pero por ahora, nos centraremos en cómo agregar y
							modificar contenido básico en una página, como texto, imágenes y videos.
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
							<img width={300} height={300} alt="La estructura basica en html consta de elementos divisores" src="../../img/htmlStructure.jpg" />
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default queEsHtml;
