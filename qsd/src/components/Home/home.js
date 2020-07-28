import React, { Fragment, Component } from 'react';
import Manual from '../Manual/manual';

export default class Home extends Component {
  render() {
    return (
        <Fragment>
        {/* // <Header /> */}
                <div>
                    <h1>Home</h1>
                </div>
            <Manual />
        </Fragment>
    )
  }
}
