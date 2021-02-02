import './index.css';
import {useState} from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import Login from './pages/Login';
import Movies from './pages/Movies';
import SingleMovie from './pages/SingleMovie';
import Footer from './components/Footer';
import AllMovies from './components/AllMovies'
import PrivateRoute from './components/PrivateRoute.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
  // Link,
  // NavLink
} from "react-router-dom";

function App() {

  const [loginState, setLoginState] = useState(localStorage.getItem("token") ? true : false)
  const [selectMovie, useSelectMovie] = useState('ass')

console.log(selectMovie)
  return (


    <div className="App">
      <Router>
        <Header loginState={loginState} setLoginState={setLoginState}/>

        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/login">
            <Login loginState={loginState} setLoginState={setLoginState} />
          </Route>
          
          <PrivateRoute exact path="/movies">
            <Movies movie={selectMovie} loginState={loginState}/>
          </PrivateRoute>

          <PrivateRoute exact path="/movies/:id" >
            <SingleMovie/>
          </PrivateRoute>

        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
