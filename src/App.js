import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import GlobalStyles from './assets/GlobalStyles';
import { MainPage, NewExamForm, UrlInsertion, FilterSelection, ProfessorsList } from './pages';
import Header from './components/Header';
import NewExamDataProvider from './contexts/NewExamDataContext';
import CoursesProvider from './contexts/CoursesContext';

export default function App() {
    return (
        <CoursesProvider>
            <NewExamDataProvider>
                <Router>
                    <GlobalStyles />
                    <Header />
                    <Switch>
                        <Route path='/' exact component={MainPage} />
                        <Route path='/inserir-dados' exact component={NewExamForm} />
                        <Route path='/inserir-link' exact component={UrlInsertion} />
                        <Route path='/escolha-de-filtragem' exact component={FilterSelection} />
                        <Route path='/professores/lista' exact component={ProfessorsList} />
                    </Switch>
                </Router>
            </NewExamDataProvider>
        </CoursesProvider>
    );
}