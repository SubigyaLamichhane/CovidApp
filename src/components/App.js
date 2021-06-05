import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import SymptomsPage from './pages/Symptoms';
import PreventionsPage from './pages/Preventions';
import DisplayCountryPage from './pages/DiaplayCountryPage';
// import ErrorBoundary from './ErrorBoundry';
import history from '../history';
import NotFound from './NotFound';

// const ErrorBoudriedDisplayCountryPage = <ErrorBoundary><DisplayCountryPage/></ErrorBoundary>

const App = () =>{
    return (
        <div>
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/home" exact component={HomePage}/>
                        <Route path="/country/:searchTerm" component={DisplayCountryPage}/>
                        <Route path="/symptoms" exact component={SymptomsPage}/>
                        <Route path="/preventions" exact component={PreventionsPage}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
