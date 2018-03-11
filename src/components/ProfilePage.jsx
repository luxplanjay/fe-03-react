import React from 'react';
// import {Redirect} from 'react-router-dom';

const ProfilePage = props => {
  console.log(props);
  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
};

export default ProfilePage;

// const ProfilePage = ({ isLoggedIn, match }) => (
//   <div>
//     {isLoggedIn
//       ? <h1>Profile Page</h1>
//       : <Redirect
//         to={{
//           pathname: '/login',
//           state: {
//             from: match.url,
//           },
//         }}
//       />
//     }
//   </div>
// );
