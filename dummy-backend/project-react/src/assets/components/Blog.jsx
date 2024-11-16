import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS animations

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    AOS.init({
      duration: 500, // Adjust duration for smooth animations
      easing: 'ease-in-out',
      once: true,
    });

    // Access the backend URL from environment variables
    const backendURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000"; // Fallback to localhost if not defined

    // Fetching the posts from the backend
    fetch(`${backendURL}/api/posts`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data); // Store the posts in state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setError("Failed to load posts."); // Set error state
        setLoading(false); // Set loading to false even on error
      });

  }, []); // Empty dependency array ensures this effect runs once on component mount

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#ffd7ba] to-[#6d6875] py-10">
      {/* Loading state */}
      {loading && <p className="text-center text-xl text-gray-600">Loading posts...</p>}
      {/* Error state */}
      {error && <p className="text-center text-xl text-red-600">{error}</p>}

      {/* Blog posts */}
      <div className="blog-container flex flex-wrap justify-center gap-8">
        {!loading && !error && posts.map((post) => (
          <div
            key={post._id}
            className="post-card w-80 bg-white rounded-2xl p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
          >
            {/* Profile section */}
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                {post.author || "Anonymous"}
              </h3>
            </div>

            {/* Post content */}
            <h4 className="text-lg font-semibold mb-2 text-zinc-700">
              {post.title}
            </h4>
            <p className="text-sm text-gray-700 mb-6 line-clamp-3">
              {post.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
