import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import GlobalStyles from './assets/GlobalStyles';
import { MainPage } from './pages';
import Header from './components/Header';

export default function App() {
    return (
        <Router>
            <GlobalStyles />
            <Header />
            <Switch>
                <Route path='/' exact component={MainPage} />
            </Switch>
        </Router>
    );
}