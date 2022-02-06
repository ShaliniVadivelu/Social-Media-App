import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
//Redux, getting provider from react-redux
import { Provider } from 'react-redux';
//import store (store file)
import store from './store';

import './App.css';

const App = () => (
    //passing provider inthe store
    <Provider store= {store} >
    <Router>
        <Fragment>
            <Navbar />
            <Route exact path='/' component={ Landing } />
            <section className="container">
                <Switch>
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                </Switch>
            </section>
        </Fragment>
    </Router>
    </Provider>
);

export default App;                                                