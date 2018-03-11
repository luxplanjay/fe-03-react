import React from 'react';
import { Route, Link } from 'react-router-dom';
import Resource from './Resource';

export default ({ match, topics }) => {
  const topic = topics.find(({ id }) => id === match.params.topicId);

  console.log("[Topic.jsx]: ", match);

  return (
    <div>
      {topic ? (
        <div>
          <h2>{topic.name}</h2>
          <p>{topic.description}</p>
          <ul>
            {topic.resources.map(sub => (
              <li key={sub.id}>
                <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
              </li>
            ))}
          </ul>

          <hr />

          <Route
            path={`${match.path}/:subId`}
            render={props => (
              <Resource resources={topic.resources} {...props} />
            )}
          />
        </div>
      ) : (
        <h2>Topic Not Found</h2>
      )}
    </div>
  );
};
