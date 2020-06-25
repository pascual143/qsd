import React, { Fragment, Component } from 'react';
import './styleHtml.css';
import WhatIsHtml from './htmlData.js';


export default class IntroHtml extends Component {
    render() {
      return (
          <Fragment>
              {/* Carousel */}
              <div>
                  <h1>{title}  {recurosHtml} {ejercicios} </h1>
              </div>
                    <WhatIsHtml />
          </Fragment>
      )
    }
  }

const title = <div>HTML</div>

const recurosHtml =<div>Recursos</div>

const ejercicios = <div>Ejercicios</div>


  
 




















//   const titleHtml = () => {  
//       return(
//       <Introduccion />
//       )
//   }
//   titleHtml();
  
//   function Introduccion() {
//     return (
//         <div>{"Introduccion a HTML"}</div>
//     )
//   }
