import React, { Component } from 'react';
// import logo from './logo.svg';
import GitHub from './GitHub';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Auth0Lock from 'auth0-lock'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      idToken: '',
      profile: {}
    };
  }

  static defaultProps = {
    clientID: 'UjzwCunhiMxjK6Sm3hjTZcDYS081xWYm',
    domain: 'somsubhra.auth0.com'
  }

  componentWillMount() {
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);
    this.lock.on('authenticated', (authResult) => {
      // console.log(authResult);
      this.lock.getProfile(authResult.accessToken, (error, profile) => {
        if(error) {
          console.log(error);
          return;
        }
        // console.log(profile);
        this.setProfile(authResult.idToken, profile);
      });
    });

    this.getProfile();
  }

  showLock() {
    this.lock.show();
  }


  setProfile(idToken, profile) {
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({
      idToken: localStorage.getItem('idToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    }, function() {
      // console.log(this.state);
    });
  }

  getProfile() {
    if(localStorage.getItem('idToken') != null) {
      this.setState({
        idToken: localStorage.getItem('idToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, () => {
        // console.log(this.state);
      });
    }
  }

  logout() {
    this.setState({
      idToken: "",
      profile: {}
    }, () => {
      localStorage.removeItem('idToken');
      localStorage.removeItem('profile');
    });


  }

  render() {
    var isLoggedIn;

    if (this.state.idToken) {
      isLoggedIn = <GitHub />
    }
    else {
      isLoggedIn = <h2 className="notLoggedIn">Click on login to open GitHub Searcher</h2>;
    }

    return (
      <div className="App">
        <Header onLogin={this.showLock.bind(this)} onLogout={this.logout.bind(this)} idToken={this.state.idToken} lock={this.lock}/>
        {isLoggedIn}
      </div>
    );
  }
}

export default App;
