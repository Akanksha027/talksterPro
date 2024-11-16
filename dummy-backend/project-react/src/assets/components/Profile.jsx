import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    console.log("Auth Token:", token);

    // Redirect to login if no token is found
    if (!token) {
      navigate("/login");
      return;
    }

    // Fetch user profile from backend
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Profile Data:", response.data);
        setUserInfo(response.data); // Save the fetched data
      } catch (err) {
        setError("Failed to fetch profile data");
        console.error("Error fetching profile:", err.response ? err.response.data : err.message);
        navigate("/login"); // Redirect to login if unauthorized
      }
    };

    fetchUserProfile();
  }, [navigate]);

  return (
    <div className="flex justify-center items-center mt-16 h-full w-full">
      <div className="grid gap-8">
        <section
          id="back-div"
          className="bg-gradient-to-r from-orange-300 to-orange-500 rounded-3xl"
        >
          <div className="border-8 border-transparent rounded-xl bg-white shadow-xl p-8 m-2">
            <h1 className="text-5xl font-bold text-center text-orange-500">
              Profile
            </h1>

            {/* Error message */}
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}

            {/* Display user info or loading */}
            {userInfo ? (
              <div className="text-center">
                <h2 className="text-3xl">Welcome, {userInfo.username}</h2>
              </div>
            ) : (
              !error && <p className="text-center text-lg text-gray-500">Loading profile...</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
