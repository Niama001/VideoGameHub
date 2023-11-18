import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreatePostForm from "./CreatePostForm";
import Post from "./Post";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [sortBy, setSortBy] = useState("created");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingPostId, setEditingPostId] = useState(null);
  
  const [commentingPostId, setCommentingPostId] = useState(null);

  const createPost = (newPost) => {
    newPost.upvotes = 0;
    newPost.id = Date.now();
    setPosts([...posts, newPost]);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleUpvote = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, upvotes: post.upvotes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const handleEdit = (postId) => {
    setEditingPostId(postId);
  };

  const handleUpdate = (updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
    setEditingPostId(null);
  };

  const handleCancelEdit = () => {
    setEditingPostId(null);
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  const handleComment = (postId) => {
    setCommentingPostId(postId);
  };

  const handlePostComment = (postId, commentContent) => {
    console.log(`Comment for post ${postId}: ${commentContent}`);
  
    setComment("");
    setCommentingPostId(null);
  };

  const filteredAndSortedPosts = posts
    .filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "created") {
        return b.id - a.id;
      } else if (sortBy === "upvotes") {
        return b.upvotes - a.upvotes;
      }
      return 0;
    });

  return (
    <div className="Forum">
      <h1 className="header">Welcome to the Gaming Hub!</h1>
      <CreatePostForm onCreatePost={createPost} />
      <div>
        <h2 className="subHeader">Latest Post</h2>
        <h2 className="subHeader2">_____________________________________________</h2>

        <div className="searchOption">
          <label className="title">
            Search
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </label>
        </div>

        <div className="sortOption">
          <label>
            Sort By:
            <select className="title3" value={sortBy} onChange={handleSortChange}>
              <option value="created">Created</option>
              <option value="upvotes">Upvotes</option>
            </select>
          </label>
        </div>

        {filteredAndSortedPosts.map((singlePost) => (
          <div key={singlePost.id}>
            {editingPostId === singlePost.id ? (
              <CreatePostForm
                initialData={singlePost}
                onCreatePost={handleUpdate}
                buttonText="Update Post"
                onCancel={handleCancelEdit}
              />
            ) : (
              <>
                <Post {...singlePost} onUpvote={handleUpvote} />
                {commentingPostId === singlePost.id ? (
                  <div>
                    <label>
                      Add a Comment:
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                      />
                    </label>
                    <button onClick={() => handlePostComment(singlePost.id, comment)}>
                      Post Comment
                    </button>
                  </div>
                ) : (
                  <button onClick={() => handleComment(singlePost.id)}>
                    Comment
                  </button>
                )}
                <button onClick={() => handleEdit(singlePost.id)}>Edit</button>
                <button onClick={() => handleDelete(singlePost.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
