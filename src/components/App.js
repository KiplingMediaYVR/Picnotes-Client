import React, { Component } from 'react';
import '../App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import {
  NoteIndexPage,
  NoteShowPage,
  NoteNewPage,
  SignInPage,
} from './pages';

import {AuthRoute} from './AuthRoute';
import {NavBar} from './NavBar';
import jwtDecode from 'jwt-decode';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: null,
    }
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  isAuth(){
    return !!this.state.user
  }

  signOut() {
    localStorage.removeItem('jwt');
    this.setState({user: null});
  }

  signIn() {
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      const payload = jwtDecode(jwt);
      this.setState({user: payload});
    }
    else {

    }
  }
  componentDidMount () {
    this.signIn();
  }

  render() {
    const {user} = this.state;

    return (
      <Router>
        <div>
          <NavBar
            user = {user}
            onSignOutClick={this.signOut}
          />
          <Switch>

            <Route exact path="/" component={NoteIndexPage} />

            <Route
              path="/signin"
              render = {props => {
                return <SignInPage {...props} onSignIn={this.signIn} />
              }}
            />

            <AuthRoute
              isAuthenticated = {this.isAuth()}
              path = '/notes/new'
              component = {NoteNewPage}
            />

            <Route
              path="/notes/:id"
              component={NoteShowPage}
            />

          </Switch>
          </div>
      </Router>

    );
  }
}

export default App;
