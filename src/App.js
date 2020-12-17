import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import GlobalStyles from './assets/GlobalStyles';
import { MainPage, NewExamForm } from './pages';
import Header from './components/Header';

export default function App() {
    return (
        <Router>
            <GlobalStyles />
            <Header />
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/postar-prova' exact component={NewExamForm} />
            </Switch>
        </Router>
    );
}