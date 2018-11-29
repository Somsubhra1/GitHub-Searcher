import React, {Component} from 'react';

class Profile extends Component {

  render(){

    var userdata = this.props.userData;
    var followers = `${userdata.homeURL}/followers`;
    var following = `${userdata.homeURL}/following`;
    var repos = `${userdata.homeURL}/repositories`;

    if (userdata.notFound === 'Not Found') {
      return(
        <div className="notfound">
          <h2>Hey</h2>
          <p>Are you sure, for whom you are looking for???</p>
        </div>
      );
    }

    else {
      return(
          <section className="github-profile">
            <div className="github-profile-info">
              <a href={userdata.homeURL} rel="noopener noreferrer" target="_blank" title={userdata.name || userdata.username}>
                <img src={userdata.avatar} alt="" className="img-fluid img-thumbnail"/>
              </a>
              <h2>
                <a href={userdata.homeURL} title={userdata.username} rel="noopener noreferrer" target="_blank">
                  {userdata.name || userdata.username}</a>
              </h2>
              <h3>{userdata.location}</h3>
            </div>

            <div className="github-profile-state">
              <ul>
                <li>
                  <a href={followers} target="_blank" rel="noopener noreferrer" title="Number of followers">
                    <i>{userdata.followers}</i>
                    <span>Followers</span>
                  </a>
                </li>

                <li>
                  <a href={repos} target="_blank" rel="noopener noreferrer" title="Number of Repositories">
                    <i>{userdata.repos}</i>
                    <span>Repositories</span>
                  </a>
                </li>

                <li>
                  <a href={following} target="_blank" rel="noopener noreferrer" title="Number of following">
                    <i>{userdata.following}</i>
                    <span>Following</span>
                  </a>
                </li>
              </ul>
            </div>

          </section>
      );

    }


  }
}

export default Profile;
