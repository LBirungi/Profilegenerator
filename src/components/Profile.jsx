import React, { useEffect, useState } from "react";

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    // data is stored as JSON in localStorage
    if (user) {
      const parsedUserData = JSON.parse(user);
      setUserData(parsedUserData);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 h-20 md:h-28"></div>

        <div className="flex flex-col items-center -mt-16 md:-mt-24">
          <img
            src=""
            alt="ProfileImage"
            className="h-24 w-24 md:h-36 md:w-36 rounded-full border-4 border-white bg-gray-200 object-cover"
          />
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mt-2">
            Lillian Birungi
          </h1>
          <h2 className="text-sm md:text-md text-gray-500">@LillianBirungi</h2>
        </div>

        <div className="px-4 md:px-10 pb-10">
          <div className="flex justify-between text-sm md:text-base text-gray-600 mt-10">
            <span>Location</span>
            <span>Date Joined</span>
          </div>

          <div className="flex justify-around mt-4 p-2">
            <div className="text-center">
              <span className="block text-xl font-semibold">91</span>
              <span>Repositories</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-semibold">24</span>
              <span>Followers</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-semibold">47</span>
              <span>Following</span>
            </div>
          </div>

          {/* Top Repositories Section */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Top Repositories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Repeat this block for each repository card */}
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                  <h4 className="text-md font-semibold text-gray-700">
                    Repository Name
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Short description of the repository...
                  </p>
                  <div className="flex mt-2">
                    <span className="bg-blue-200 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                      Language
                    </span>
                    {/* Additional tags can be added here */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
