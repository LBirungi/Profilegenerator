import React,{useState} from "react";
import { useNavigate } from "react-router-dom";


function Search() {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate()
  function handleSearch(e) {
    e.preventDefault()
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      }) // when fulfilled
      .then((data) => {
        console.log(data);
        localStorage.setItem('user',JSON.stringify(data));
        navigate('/user')
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="h-screen bg-gray-900">
      <div className="relative overflow-hidden h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Find Your GitHub Profile
            </h2>
            <form className="mt-6 text-lg leading-8 text-gray-300">
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="search-input w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-300"
                type="text"
                placeholder="Enter Github Username"
              />
              <button
                onClick={handleSearch}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
