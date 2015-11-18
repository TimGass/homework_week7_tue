import React from 'react';
import ReactDOM from 'react-dom';
import $ from "./jquery";

import Repos from "./repos";

$.ajax("https://api.github.com/users/TimGass/repos").done(data => console.log(data));
class App extends React.Component {

  constructor(props) {

   super(props);

   this.state = {
     hasLoaded: false,
     repos: []
   };
 }

  getRepos(){
    $.ajax('https://api.github.com/users/TimGass/repos')
          .then( response => {
            this.setState({
              hasLoaded: true,
              repos: response
            });
            console.log(response);
          });
  }

  componentDidMount() {
    setInterval(() => {
      this.getRepos();
    }, 3000);
  }

  render(){
    return (<Repos repos={this.state.repos}/>);
  }

}

ReactDOM.render(
  <App/>,
  document.getElementById("repos")
);

ReactDOM.render(
  <h1>Hello world!</h1>,
  document.getElementById("profile")
);
