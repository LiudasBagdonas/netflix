import './index.css';
import { useState } from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import Login from './pages/Login';
import Movies from './pages/Movies';
import SingleMovie from './pages/SingleMovie';
import Footer from './components/Footer';
import AllMovies from './components/AllMovies'
import PrivateRoute from './components/PrivateRoute.js';
import ContentContext from './contexts/ContentContext';
import AuthContext from './contexts/AuthContext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
  // Link,
  // NavLink
} from "react-router-dom";

function App() {

  return (


    <div className="App">
      <Router>
        <AuthContext.Provider>
          <ContentContext.Provider>
            <Header />
            <Switch>
              
              <Route exact path="/">
                <Main />
              </Route>

              <Route exact path="/login">
                <Login />
              </Route>

              <PrivateRoute exact path="/movies">
                <Movies />
              </PrivateRoute>

              <Route exact path="/movies/:id" >
                <SingleMovie />
              </Route>

            </Switch>
          </ContentContext.Provider>
        </AuthContext.Provider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
