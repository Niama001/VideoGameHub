import React from "react";
import { Link } from "react-router-dom";
import PostDetails from "./PostDetails";

const Post = ({ id, title, content, imageUrl, upvotes, onUpvote }) => {
  const handleUpvote = () => {
    onUpvote(id);
  };

  return (
    <div className="postItem">
      <h3>{title}</h3>
      {content && <p>{content}</p>}
      {imageUrl && (
        <div className="imageContainer">
          <img src={imageUrl} alt="Post Image" className="postImage" />
        </div>
      )}
      <div>
        <p>Created At: {new Date(id).toLocaleString()}</p>
        <p>Upvotes: {upvotes}</p>
        <button onClick={handleUpvote}>Upvote</button>
      </div>
      <div className="viewDetails">
        <Link to={`/post/${id}`}>View</Link>
        <Link to={`/detail/${id}`}>   Detail</Link>
      </div>
    </div>
  );
};

export default Post;

