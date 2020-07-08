import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';

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
						<Card>
							<Card.Title>
								<h1>Anatomia del Html</h1>
							</Card.Title>
								<Card.Text>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Un elemento generalmente consiste en 
                                    {/* una etiqueta(tag) de apertura (<element_name>) y una etiqueta de cierre (</element_name>),  */}
                                    que contiene el nombre del elemento rodeado de corchetes angulares y el contenido intermedio:
                                    <img alt="que es html?" src={"public/img/anatomia.jpg"}/>
                                </Card.Text>
                                    
								<Card.Text>
									{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hay algunos elementos HTML que no tienen una etiqueta de cierre ni ningún contenido. Estos se llaman elementos vacíos. Estos son algunos <pre><img>, <meta>, <link> e <input></pre>. */}
								</Card.Text>
                                <Card.Text>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML o Lenguaje de marcado de
									hipertexto, utiliza un sistema de marcado, compuesto de elementos que representan
									contenido. El marcado significa que con HTML declaras lo que se presenta a un
									espectador, pero no cómo se presenta. Las representaciones visuales se definen
									mediante hojas de estilo en cascada (CSS) y se realizan mediante navegadores.
                                </Card.Text>
                                <Card.Text>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML a veces se llama un lenguaje de
									programación pero no tiene lógica, por lo que es un lenguaje de marcado.{' '}
                                </Card.Text>
                                <Card.Text>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Html proporciona estructura al
									contenido que aparece en un sitio web, como imágenes, texto o videos. (Haga clic con
									el botón derecho en cualquier página de Internet, seleccione "Inspeccionar" y verá
									HTML en un panel de su pantalla.)
                                </Card.Text>
							<Figure>
								<FigureImage width={300} height={300} alt="que es html?" src='src/img/htmlStructure.jpg' />
								<Figure.Caption>
									La estructura basica en html consta de elementos divisores
								</Figure.Caption>
							</Figure>
						</Card>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default AnatomiaHtml;
