import React from 'react';
import ReactDOM from 'react-dom';
import $ from "./jquery";

import RepoItem from "./repoItem";

class Repos extends React.Component {

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
    });
  }

  componentDidMount() {
      this.getRepos();
  }

  render () {
    if (!this.state.repos.length && !this.state.hasLoaded) {
      return (<img className="loading" src="../Assets/ajax-loader.gif" alt="loading..."/>);
    }

    this.state.repos.sort((a, b) => {
      let yolo = new Date(a.updated_at).getTime();
      let swag = new Date(b.updated_at).getTime();
      return swag - yolo;
  });

    let repos = this.state.repos.map(repo => {
      return (<RepoItem key={repo.id} repo={repo}/>);
    });

    return (<ul className="repos">
              {repos}
            </ul>);
  }
}

ReactDOM.render(
  <Repos/>,
  document.getElementById("repos")
);

export default Repos;
