import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import './App.css';
import SideMenu from "./components/sideMenu";
import Home from "./components/home";
import * as constant from './constant'
import NavBar from "./components/navbar";

class App extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <div className="row">
                    <div className="col-3">
                        <SideMenu/>
                    </div>
                    <div className="col">
                        <main className="container">
                            <Switch>
                                <Route path="/home" component={Home}/>
                                {constant.activities.map(({path, component}) =>
                                    <Route path={path} component={component}/>)}
                                <Redirect from="/" exact to="/home"/>
                            </Switch>
                        </main>
                    </div>
                </div>

            </>
        );
    }
}

export default App;
