import React, {Component} from 'react';
import Profile from './Components/Profile';
import Search from './Components/Search';

const API = 'https://api.github.com/users'

class Github extends Component {

  constructor(props){
    super(props);

    this.state = {
      username: 'github',
      name: '',
      avatar: '',
      repos: '',
      followers: '',
      following: '',
      homeURL: '',
      location: '',
      notFound: '',
    };
  }

  getProfile(username) {
    var finalURL = `${API}/${username}`;

    fetch(finalURL)
    .then((result) => result.json())
    .then((data) => {
      this.setState({
        username: data.login,
        name: data.name,
        avatar: data.avatar_url,
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        homeURL: data.html_url,
        location: data.location,
        notFound: data.message,
      }, () => {
        // console.log(this.state)
      });
    })
    .catch((error) => {
      console.log('There was a problem in fetching data');
    })

  }

  componentDidMount() {
    this.getProfile(this.state.username);
  }

  render(){
    return(
      <div>
        <section id="card">
          <Search searchProfile={this.getProfile.bind(this)}/>
          <Profile userData={this.state}/>
        </section>
      </div>
    );
  }
}

export default Github;
