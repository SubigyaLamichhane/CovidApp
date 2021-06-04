import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import SymptomsPage from './pages/Symptoms';
import PreventionsPage from './pages/Preventions';
import history from '../history';

const App = () =>{
    return (
        <div>
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/symptoms" exact component={SymptomsPage}/>
                        <Route path="/preventions" exact component={PreventionsPage}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
