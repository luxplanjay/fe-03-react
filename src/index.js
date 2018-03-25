import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import App from './components/App';
import store, { history } from './store';
import './index.css';
// import { createSelector } from 'reselect';

// import axios from 'axios';
// axios.defaults.baseURL =
//   process.env.NODE_ENV === 'development' ? 'http://localhost:3002' : '';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route to="/" component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// const state = {
//   posts: [{ id: 1, likes: 6 }, { id: 2, likes: 10 }, { id: 3, likes: 15 }],
// };

// const getAllPosts = state => state.posts;

// const getPostsCount = state => state.posts.length;

// const getTotalLikes = createSelector(getAllPosts, posts =>
//   posts.reduce((acc, post) => acc + post.likes, 0),
// );

// const getLikesAverage = createSelector(
//   getTotalLikes,
//   getPostsCount,
//   (totalLikes, postsCount) => totalLikes / postsCount,
// );

// console.log(getTotalLikes(state));
// console.log(getLikesAverage(state));
