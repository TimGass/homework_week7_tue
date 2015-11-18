import React from 'react';

import RepoItem from "./repoItem";

class Repos extends React.Component {
  render () {
    if (!this.props.repos.length && !this.props.hasLoaded) {
      return (<img src="../Assets/ajax-loader.gif" alt="loading..."/>);
    }

    this.props.repos.sort((a, b) => {
      let yolo = new Date(a.updated_at).getTime();
      let swag = new Date(b.updated_at).getTime();
      return swag - yolo;
  });

    let repos = this.props.repos.map(repo => {
      return (<RepoItem key={repo.id} repo={repo}/>);
    });

    return (<ul className="repos">
              {repos}
            </ul>);
  }
}

export default Repos;
