import React, { useEffect, useState } from "react";
import moment from "moment/moment";

function Profile() {
  const [userData, setUserData] = useState();
  const [topRepositories,setToprepositories] =useState();
  console.log(userData)
  function getToprepositories() {
    fetch(userData?.repos_url)
      .then((response) => {
        console.log(response)
        return response.json();
      }) 
      .then((data) => {
        console.log(data);
        setToprepositories(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }




  useEffect(() => {
    const user = localStorage.getItem("user");
    // data is stored as JSON in localStorage
    if (user) {
      const parsedUserData = JSON.parse(user);
      setUserData(parsedUserData);
    }
    getToprepositories()
  }, [userData]);
console.log(topRepositories)
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 h-20 md:h-28"></div>

        <div className="flex flex-col items-center -mt-16 md:-mt-24">
          <img
            src={userData?.avatar_url
            }
            alt="ProfileImage"
            className="h-24 w-24 md:h-36 md:w-36 rounded-full border-4 border-white bg-gray-200 object-cover"
          />
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mt-2">
            {userData?.name??userData?.login}
            {console.log('LILLIAN TESTING',userData)}
          </h1>
          <h2 className="text-sm md:text-md text-gray-500">{userData?.company}</h2>
        </div>

        <div className="px-4 md:px-10 pb-10">
          <div className="flex justify-between text-sm md:text-base text-gray-600 mt-10">
          <span><h6>Location</h6>{userData?.location ? userData?.location : "No Location"}</span>
            <span><h6>Date Joined</h6>{moment(userData?.created_at).format('DD/MM/YYYY')}</span>
          </div>

          <div className="flex justify-around mt-4 p-2">
            <div className="text-center">
              <span className="block text-xl font-semibold">{userData?.public_repos
}</span>
              <span>Repositories</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-semibold">{userData?.followers
}</span>
              <span>Followers</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-semibold">{userData?.following
}</span>
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
              {topRepositories?.slice(0,10).map((repository, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                  <h4 className="text-md font-semibold text-gray-700">
                     {repository.name}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {repository.description}
                  </p>
                  <div className="flex mt-2">
                    <span className="bg-blue-200 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                    {repository?.language ? repository?.language : "No Language"}
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
