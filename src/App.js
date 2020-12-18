import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import GlobalStyles from './assets/GlobalStyles';
import { MainPage, NewExamForm, UrlInsertion } from './pages';
import Header from './components/Header';

export default function App() {
    return (
        <Router>
            <GlobalStyles />
            <Header />
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/inserir-dados' exact component={NewExamForm} />
                <Route path='/inserir-link' exact component={UrlInsertion} />
            </Switch>
        </Router>
    );
}