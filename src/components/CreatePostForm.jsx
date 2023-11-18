import React, { useState } from "react";

const CreatePostForm = ({ onCreatePost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [selectedOption, setSelectedOption] = useState("url");

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalImageUrl =
      imageUrl || (imageFile ? URL.createObjectURL(imageFile) : "");

    onCreatePost({ title, content, imageUrl: finalImageUrl });

    setTitle("");
    setContent("");
    setImageUrl("");
    setImageFile(null);
    setSelectedOption("url");
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
    setImageUrl("");
    setSelectedOption("upload");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="title">
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label className="title">
        Content
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </label>

      <div className="title">
        Choose an option:
        <select className="title3"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="url">URL</option>
          <option value="upload">Upload</option>
        </select>
      </div>

      {selectedOption === "url" && (
        <label className="title">
          Image URL
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
      )}

      {selectedOption === "upload" && (
        <label className="title">
          Upload Image
          <input type="file" onChange={handleImageChange} />
        </label>
      )}

      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePostForm;

