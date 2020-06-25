import React, { Fragment, Component } from 'react';
import IntroHtml from './Html/html';

export default class Manual extends Component {
  render() {
    return (
        <Fragment>
            <div>
                <h1>Manual</h1>
                <IntroHtml />
            </div>
        </Fragment>
    )
  }
}
