import React, { Component } from 'react';
import Card from "react-bootstrap/Card";

export  class WhatIsHtml extends Component {
  render() {
    return (
        <Card>
            <IntroHtml 
                posts={posts}
                key={posts.id}
                title={posts.title}
                />     
        </Card> 
    )
  }
}

  function IntroHtml(props) {
    const sidebar = (
        <ul>
        {props.posts.map((post) =>
          <div key={post.id}>
            {/* <h1>{post.title}</h1> */}
        </div>
        )}      
        
        </ul>
    );
    const content = props.posts.map((post) =>
    <Card>
      <div key={post.id}>
       <li>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
       </li>
      </div>
      </Card>
    );

    return (
      <Card style={{ width: '50em' }}>
        {sidebar}
        {/* <hr /> */}
        {content}
      </Card>
    );
  }

  const posts = [
    {id: 'a', title: 'Que es HTML?', content: ' HTML es el esqueleto de todas las páginas web. </hr>A menudo es el primer idioma que aprenden los especialistas en marketing y diseñadores y es fundamental para el trabajo de desarrollo front-end. Aprender HTML es el primer paso para crear sitios web. Puedes ayudarte a crear código en blogs o plantillas de sitios web. A medida que continúa aprendiendo, puedes superponer HTML con CSS y JavaScript para crear sitios web visualmente atractivos y dinámicos. Pero por ahora, nos centraremos en cómo agregar y modificar contenido básico en una página, como texto, imágenes y videos. HTML  o Lenguaje de marcado de hipertexto, utiliza un sistema de marcado, compuesto de elementos que representan contenido. El marcado significa que con HTML declaras lo que se presenta a un espectador, pero no cómo se presenta. Las representaciones visuales se definen mediante hojas de estilo en cascada (CSS) y se realizan mediante navegadores. HTML a veces se llama un lenguaje de programación pero no tiene lógica, por lo que es un lenguaje de marcado. Html proporciona estructura al contenido que aparece en un sitio web, como imágenes, texto o videos. '},
    {id: 'b', title: 'Anatomia HTML', content: 'Un elemento generalmente consiste en una etiqueta(tag) de apertura (<element_name>) y una etiqueta de cierre (</element_name>), que contiene el nombre del elemento rodeado de corchetes angulares y el contenido intermedio: <element_name> ... contenido ... </element_name> Hay algunos elementos HTML que no tienen una etiqueta de cierre ni ningún contenido. Estos se llaman elementos vacíos. Estos son algunos <img>, <meta>, <link> e <input>. Una página HTML puede consistir en potencialmente cientos de elementos que luego son leídos por un navegador web, interpretados y renderizado en contenido legible o audible en la pantalla. Para este documento es importante notar la diferencia entre elementos y etiquetas: Analicemos una etiqueta La etiqueta <p> representa un párrafo común. Los elementos comúnmente tienen una etiqueta de apertura y una etiqueta de cierre. La etiqueta de apertura contiene el nombre del elemento en ángulo paréntesis (<p>). La etiqueta de cierre es idéntica a la etiqueta de apertura con la adición de una barra diagonal (/) entre paréntesis de apertura y el nombre del elemento (</p>). El contenido puede ir entre estas dos etiquetas: <p> Este es un párrafo simple. </p>.'}
  ];

// let count = 1
// for (const post of posts) {
//     count += post.id.title.content
// }

  export default WhatIsHtml