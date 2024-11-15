import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="about-me-section py-16 bg-[#003049] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Image */}
          <div 
            className="about-image flex justify-center items-center"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img 
              src="/profile.jpg" 
              alt="Profile"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover shadow-lg"
            />
          </div>
          
          {/* Right Section - About Me */}
          <div 
            className="about-content"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed">
              Hello there! I'm Akanksha Singh, the brains behind this wild corner of the internet where creativity knows no bounds! When I’m not glued to my laptop crafting cool websites, you can catch me sketching quirky doodles or getting lost in a good book (sometimes both at once).
            </p>
            <p className="text-lg leading-relaxed mt-4">
              This site is my playground—where thoughts run free, ideas explode, and imagination takes center stage. Whether you're here to spill your wildest rants, share a laugh, or dive into some awesome blogs, you're in the right place. So, let’s get the chaos started and turn this place into a creative hub where anything is possible!
            </p>

            {/* Social Media Links */}
            <div className="social-links flex justify-center gap-6 mt-6">
              <a 
                href="https://www.linkedin.com/in/akanksha-singh-0ba17b315/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-blue-600 hover:text-blue-800 transition duration-300"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://www.instagram.com/akankshaa027/`"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-pink-600 hover:text-pink-800 transition duration-300"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://wa.me/9810433989"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-green-600 hover:text-green-800 transition duration-300"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <FaWhatsapp />
              </a>
            </div>

            <div className="text-center text-lg mt-4">
              <p className="text-white">
              Got an idea or just want to chat tech? Reach out – I’m always up for new connections!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
