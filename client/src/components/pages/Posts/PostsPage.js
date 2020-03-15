// import React from 'react';

// const PostsPage = () => (
//   <div>
//     <h1>Posts</h1>
//   </div>
// );

// export default PostsPage;

import React from 'react';

import PageTitle from '../../common/PageTitle/PageTitle';
import PostsCounter from '../../features/PostsCounter/PostsCounter';
import Posts from '../../features/Posts/Posts';

const PostsPage = () => (
  <div>
    <PageTitle>Posts list</PageTitle>
    <PostsCounter />
    <Posts />
  </div>
);

export default PostsPage;