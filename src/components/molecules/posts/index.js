import React from 'react';

type Props = {
  loading: string,
  posts: object,
};

const Posts = (props: Props) => {
  const { posts, loading } = props;
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.name}>{post.name}</li>
      ))}
    </ul>
  );
};

export default Posts;
