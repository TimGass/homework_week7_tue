import React from 'react';
import ReactDOM from "react-dom";
import $ from "./jQuery";

class Header extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      hasLoaded: false,
      profile: {}
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

 componentDidMount(){
   this.getProfile();
 }

  render () {
    let profile = this.state.profile;

    if (!this.state.profile.length && !this.state.hasLoaded) {
      return (<img className="loading" src="../Assets/ajax-loader.gif" alt="loading..."/>);
    }

    return (
      <a href="#">
        <img src={profile.avatar_url}/>
        <span id='last' className='octicon octicon-triangle-down'>
        </span>
      </a>
  );}
}

ReactDOM.render(
  <Header/>,
  document.getElementById("reactHeader")
);

export default Header;
