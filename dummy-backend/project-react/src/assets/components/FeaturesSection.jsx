import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function FeaturesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation
      easing: 'ease-in-out', // Easing function for smoother animation
      once: true, // Ensures animation happens only once
    });
  }, []);

  return (
    <div className="features-section py-16 bg-[#003049] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
          Cool Features You’ll Love
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div
            className="feature-card bg-[#3d5a80] p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition duration-300"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h3 className="text-2xl font-semibold mb-4">Post Anonymously</h3>
            <p className="text-md">
              Got a secret thought or story? Drop it here without your name! No filters, just you being real.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="feature-card bg-[#3d5a80] p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition duration-300"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-semibold mb-4">Discover Fresh Reads</h3>
            <p className="text-md">
              From random musings to cool ideas—get ready to dive into a world of diverse stories!
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="feature-card bg-[#3d5a80] p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition duration-300"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h3 className="text-2xl font-semibold mb-4">Craft Your Own Posts</h3>
            <p className="text-md">
              Have something to say? Share it with the world and watch others connect with your vibe!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
