import React from 'react';
import $ from 'jquery';
import moment from 'moment';

class RepoItem extends React.Component {
  render () {
    let repo = this.props.repo;

    return (<li className= "repo-name" >
      <a href={repo.html_url}>{repo.name}</a>
      <section className= "repo-stats">
        <p> {repo.language}
          <span className='octicon octicon-star'></span>
          {repo.stargazers_count}
          <span className='octicon octicon-git-branch'></span>
          {repo.forks_count}
        </p>
      </section>
      <p>moment({repo.updated_at}).format()</p>
    </li>);
  }
}

export default RepoItem;
