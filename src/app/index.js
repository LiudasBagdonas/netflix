import './index.css';
import { useState } from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import Login from './pages/Login';
import Movies from './pages/Movies';
import SingleMovie from './pages/SingleMovie';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
  // Link,
  // NavLink
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (


    <div className="App">
      <Provider store={store}>
        <Router>
          <Header/>

          <Switch>

            <Route exact path="/">
              <Main />
            </Route>

            <Route exact path="/login">
              <Login/>
            </Route>

            <PrivateRoute exact path="/movies">
              <Movies/>
            </PrivateRoute>

            <Route exact path="/movies/:id" >
              <SingleMovie />
            </Route>

          </Switch>
        </Router>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
