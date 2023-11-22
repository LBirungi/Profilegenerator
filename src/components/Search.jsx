import React from "react";

function Profile() {
  return (
    <div className="min-h-screen bg-gray-900 py-10">
      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 h-32 md:h-40"></div>
        
        <div className="flex flex-col items-center -mt-24 md:-mt-32">
          <img src="" alt="ProfileImage" className="h-32 w-32 md:h-48 md:w-48 rounded-full border-4 border-white bg-gray-200 object-cover" />
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">Lillian Birungi</h1>
          <h2 className="text-md md:text-lg text-gray-500">@LillianBirungi</h2>
        </div>

        <div className="px-4 md:px-10 pb-10">
          <div className="flex flex-wrap justify-around text-sm md:text-base text-gray-600 mt-10">
            <div className="text-center">
              <span className="block text-lg font-semibold">Nairobi, Kenya</span>
              <span>Location</span>
            </div>
            <div className="text-center">
              <span className="block text-lg font-semibold">April 2013</span>
              <span>Date Joined</span>
            </div>
          </div>

          {/* Top Languages Section */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Top Languages</h3>
            <div className="flex justify-around">
              {/* Repeat this block for each language */}
              <span className="bg-blue-200 text-blue-800 text-md font-medium px-3 py-1 rounded">JavaScript</span>
              {/* Additional language tags can be added here */}
            </div>
          </div>

          {/* Top Repositories Section */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Top Repositories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Repeat this block for each repository card */}
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                  <h4 className="text-md font-semibold text-gray-700">Repository Name</h4>
                  <p className="text-sm text-gray-600 mt-1">Short description of the repository...</p>
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