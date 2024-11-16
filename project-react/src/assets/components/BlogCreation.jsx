import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

const BlogCreation = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(""); 

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!title || !content) {
      setError("All fields are required!");
      return;
    }
    setError("");
  
    const blogData = { title, content };
    
    const token = localStorage.getItem("authToken");
    
    if (!token) {
      setError("No token found. Please log in again.");
      return;
    }
  
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
        body: JSON.stringify(blogData),
      });
  
      if (response.ok) {
        console.log("Blog post submitted successfully");
  
        setTitle("");
        setContent("");
        navigate("/blog");
      } else {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        setError(errorData.message || "Failed to submit the blog post.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError("An unexpected error occurred.");
    }
  };
  
  return (
    <BlogWrapper>
      <div className="container">
        <h2>Create Your Blog</h2>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter your blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea
              rows="6"
              placeholder="Write your blog content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <button type="submit">Post</button>
        </form>
      </div>
    </BlogWrapper>
  );
};

// Styling
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const BlogWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;

  .container {
    max-width: 700px;
    width: 90%;
    padding: 2rem;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    animation: ${fadeIn} 0.8s ease-out;
  }

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
  }

  button {
    width: 100%;
    padding: 12px;
    background: #d4a373;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background: #b57f45;
    }
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 1rem;
`;

export default BlogCreation;
