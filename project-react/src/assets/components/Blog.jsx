import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS animations

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    AOS.init({
      duration: 500, 
      easing: 'ease-in-out',
      once: true,
    });

    const backendURL = import.meta.env.VITE_API_URL || "https://talkster-api.vercel.app/"; 

    fetch(`${backendURL}/api/posts`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setError("Failed to load posts."); 
        setLoading(false); 
      });

  }, []); 

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#ffd7ba] to-[#6d6875] py-10">
      
      {loading && <p className="text-center text-xl text-gray-600">Loading posts...</p>}
     
      {error && <p className="text-center text-xl text-red-600">{error}</p>}

   
      <div className="blog-container flex flex-wrap justify-center gap-8">
        {!loading && !error && posts.map((post) => (
          <div
            key={post._id}
            className="post-card w-80 bg-white rounded-2xl p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
          >
            
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                {post.author || "Anonymous"}
              </h3>
            </div>

            
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
