import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Topic from './Topic';
import topics from '../topics';
import queryString from 'query-string';

export default class Topics extends Component {
  state = {
    topics: topics,
  };

  render() {
    const { topics } = this.state;
    const { match, location } = this.props;

    console.log("[Topics.jsx]: ", this.props);

    console.log('location.search: ', location.search);
    console.log('parsed: ', queryString.parse(location.search));

    return (
      <div>
        <h1>Topics</h1>
        <ul>
          {topics.map(({ name, id }) => (
            <li key={id}>
              <Link to={`${match.url}/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>

        <hr />

        <Route
          path={`${match.path}/:topicId`}
          render={props => <Topic {...props} topics={topics} />}
        />
      </div>
    );
  }
}
