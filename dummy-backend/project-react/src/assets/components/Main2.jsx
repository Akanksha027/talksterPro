import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Main2() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Adjust duration for smooth animations
      easing: 'ease-out',
      once: true,  // Animation happens only once
    });
  }, []);

  return (
    <div className="cont2 flex flex-col items-center justify-center text-center p-8 overflow-hidden bg-gradient-to-r from-purple-400 to-pink-500 min-h-screen">
      <div className="max-w-3xl text-white space-y-8 opacity-90">
        <p 
          className="text-lg md:text-xl font-semibold"
          data-aos="fade-up" // Animation on this paragraph
        >
          Welcome to the madness—where words run wild, and no idea is too out there. Ready to spill your secrets, dive into your obsessions, or make a little mayhem? Here, anything goes!
        </p>

        <p 
          className="text-lg md:text-xl font-semibold"
          data-aos="fade-up" 
          data-aos-delay="200" // Delay for staggered effect
        >
          Think of this as your personal playground. Got something to say? A story to share? A rant that needs to be heard? Drop it all here. No holds barred, just raw, unfiltered expression.
        </p>

        <p 
          className="text-lg md:text-xl font-semibold"
          data-aos="fade-up" 
          data-aos-delay="400" // Delay for staggered effect
        >
          Unleash the unexpected—this is where ordinary thoughts take a backseat. Get crazy, be bold, and let the world see your wild side. Ready to start? Let’s go!
        </p>
        
        <div className="flex justify-center mt-8">
          <button 
            className="w-72 h-14 text-2xl font-bold rounded-md bg-white text-black transition duration-300 ease-in-out hover:bg-gray-200 transform hover:scale-105"
            data-aos="zoom-in" // Button zoom-in effect on page load
            data-aos-delay="600" // Delay for the button animation
          >
            <a href='/createyours'>Write Your Masterpiece!</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main2;

