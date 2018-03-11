import React, { Fragment } from 'react';

export default ({ match, resources }) => {
  const resource = resources.find(({ id }) => id === match.params.subId);
  console.log("[Resource.jsx]: ", match);

  return (
    <div>
      {resource ? (
        <Fragment>
          <h3>{resource.name}</h3>
          <p>{resource.description}</p>
          <a href={resource.url}>More info.</a>
        </Fragment>
      ) : (
        <h3>Resource not found</h3>
      )}
    </div>
  );
};
