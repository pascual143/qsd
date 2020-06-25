import React, { Fragment, Component } from 'react';
import Nav from '../Layouts/nav';
import Footer from '../Layouts/footer';
import Manual from '../Manual/manual';

export default class Home extends Component {
  render() {
    return (
        <Fragment>
            <Nav />
        {/* // <Header /> */}
                <div>
                    <h1>Home</h1>
                </div>
            <Manual />
            <Footer />
        </Fragment>
    )
  }
}
