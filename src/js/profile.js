import React from 'react';
import ReactDOM from "react-dom";
import $ from "./jQuery";
import moment from "moment";

class Profile extends React.Component {
  constructor(props){

    super(props);

    this.state = {
      hasLoaded: false,
      profile: {},
      starred: 0,
      orgs: []
    }
  }

  getProfile(){
    $.ajax("https://api.github.com/users/TimGass")
     .then(response => {
      this.setState({
       hasLoaded: true,
       profile: response
     });
   });
 }

   getStarred(){
     $.ajax("https://api.github.com/users/TimGass/starred").then(response => {
       this.setState({
         starred: response.length
       });
     });
   }

   getOrgs(){
     $.ajax("https://api.github.com/users/TimGass/orgs").then(response => {
       this.setState({
         orgs: response
       });
     });
   }

   componentDidMount(){
     this.getProfile();
     this.getStarred();
     this.getOrgs();
     setInterval(() => {
     this.getProfile();
     this.getStarred();
     this.getOrgs();
   }, 10000);
   }

  render () {
    let profile = this.state.profile;
    let created = moment(profile.created_at).format("MMMM Do YYYY");

    if (!this.state.profile.length && !this.state.hasLoaded) {
      return (<img className="loading" src="Assets/ajax-loader.gif" alt="loading..."/>);
    }

    return (
      <div id="profileWrapper">
        <img src={profile.avatar_url} alt="a picture of Timothy Gass smiling"/>
        <h1>{profile.name}</h1>
        <h2>{profile.login}</h2>
        <h6>{profile.location}</h6>
        <h6> Joined on {created}</h6>
        <a href="#">
          <strong>{profile.followers}</strong>
          Followers
        </a>
        <a href="#">
          <strong>
            {this.state.starred}
          </strong>
          starred
        </a>
        <a href="#">
          <strong>
            {profile.following}
          </strong>
          Following
        </a>
        <h4>
          Organizations
          {this.state.orgs}
        </h4>
      </div>
    );
  }
}

ReactDOM.render(
  <Profile/>,
  document.getElementById("profile")
);

export default Profile;
