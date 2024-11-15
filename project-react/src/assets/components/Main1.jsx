import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Main1() {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Adjust duration for smooth animations
      easing: 'ease-out',
      once: true,  // Animation happens only once
    });
  }, []);

  return (
    <div className="main-content1 flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-pink-500">
      <div className="cont1 flex">
        <div className="left-sec text-center">
          <h1 
            className="text-6xl font-bold text-white" 
            data-aos="fade-up" // Animation for heading
          >
            Chaos Starts Here
          </h1>
          
          <p 
            className="text-xl py-4 text-white" 
            data-aos="fade-up" 
            data-aos-delay="200" // Delay for staggered effect
          >
            Chaos starts here—where wild thoughts collide and creativity knows no bounds. Share your ideas, rant, or just let loose. No rules, no filters, just pure fun!
          </p>
          
          <button 
            className="btn-1 text-black text-2xl w-24 h-12 rounded-md bg-white md:h-14 lg:h-16 lb:text-3xl transition duration-300 ease-in-out hover:bg-gray-200 transform hover:scale-105"
            data-aos="zoom-in" // Animation for button
            data-aos-delay="400" // Delay for button animation
          >
            <a href='/blog'>Blogs</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main1;

// Welcome to where the madness begins! This is the place to share your wildest thoughts, craziest ideas, and everything in between. No filters, no rules—just pure chaos and creativity. So dive in, start posting, and let the fun unfold!