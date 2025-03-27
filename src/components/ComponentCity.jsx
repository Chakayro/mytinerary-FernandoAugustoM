import { useEffect, useState } from "react";

function ComponentCity() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCities = () => {
      fetch("http://localhost:8080/api/cities/all")
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data.response)) {
            const sortedCities = data.response.sort((a, b) => a.name.localeCompare(b.name));
            console.log(sortedCities);
            setCities(sortedCities);
          } else {
            console.error("Unexpected data format:", data);
            setCities([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
          setCities([]);
        });
    };
    fetchCities();
  }, []);

  const filteredCities = cities.filter(city => city.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="absolute w-full mt-20 left-0 flex flex-col items-center overflow-y-auto max-h-[calc(100vh-80px)]">
      <div className="rounded-lg bg-neutral-100/65 px-4 pt-6 pb-6 shadow-md ring-8 mt-5 ring-gray-900/10 sm:mx-auto sm:max-w-lg sm:px-6">
        <div className="mx-auto max-w-lg">
          <form className="relative mx-auto w-max">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="peer cursor-pointer relative z-10 h-10 w-10 rounded-full border bg-transparent pl-10 outline-none focus:w-56 md:focus:w-80 lg:focus:w-96 focus:cursor-text focus:border-black focus:pl-12 focus:pr-4 font-black text-lg text-center font-mono"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-y-0 my-auto h-6 w-10 stroke-black px-2.5 peer-focus:stroke-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCities.length === 0 ? (
          <div className="w-full col-span-full flex items-center justify-center p-4 ">

          <div className="text-center bg-neutral-400/35 rounded-4xl">

            <h1 className=" p-4 text-6xl font-extrabold text-black font-mono">

              No cities available

            </h1>

          </div>

        </div>
        ) : (
          filteredCities.map((city, index) => (
            <div
              key={city._id || city.id || index}
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <div className="h-80 w-64">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={city.photo}
                  alt={city.name}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[90%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-3xl font-bold text-white font-mono">{city.name}</h1>
                <p className="text-lg text-white font-mono mt-2">{city.description}</p> {/* Added mt-2 for spacing */}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ComponentCity;