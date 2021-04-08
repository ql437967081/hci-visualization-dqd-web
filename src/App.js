//import logo from './logo.svg';
import React from 'react';
//import './App.css';
import 'antd/dist/antd.css';
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import MainLayout from './component/MainLayout';
import UserMap from './component/user-map/UserMap';

function App() {
    return (
        <HashRouter>
            <MainLayout>
                <Switch>
                    <Route path={'/user-map'}>
                        <UserMap />
                    </Route>
                    <Redirect to={'/user-map'} />
                </Switch>
            </MainLayout>
        </HashRouter>
    );
}


export default App;

/*
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
);
*/
