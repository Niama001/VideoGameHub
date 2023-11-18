import React from "react";
import { useParams } from "react-router-dom";

const Detail = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === parseInt(postId));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="postDetails">
      <h2>{post.title}</h2>
      {post.content && <p>{post.content}</p>}
      {post.imageUrl && (
        <div className="imageContainer">
          <img src={post.imageUrl} alt="Post Image" className="postImage" />
        </div>
      )}
      <p>Created At: {new Date(post.id).toLocaleString()}</p>
      <p>Upvotes: {post.upvotes}</p>
    </div>
  );
};

export default Detail;
