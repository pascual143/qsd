import React, { Fragment } from 'react';

//Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Layout
import Nav from './components/Layouts/nav.js';
import Footer from './components/Layouts/footer.js';

//Componentes
import Home from './components/Home/home.js';
import Course from './components/Course/course.js';
import Manual from './components/Manual/manual.js';
import Recursos from './components/Recursos/recursos.js';
import Ejercicios from './components/Ejercicios/ejercicios.js';
import Blog from './components/Blog/blog.js';

function App() {
	return (
		<Router>
			<Fragment>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
          <Route exact path="/Course" component={Course} />
					<Route exact path="/Manual" component={Manual} />
          <Route exact path="/Recursos" component={Recursos} />
					<Route exact path="/Ejercicios" component={Ejercicios} />
					<Route exact path="/Blog" component={Blog} />
				</Switch>
        <Footer />
			</Fragment>
		</Router>
	);
}

export default App;
