import React from "react";

const MillionsJob = () => {
  return (
    <div>
      <div className="py-12 ">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Section: Image */}
            <div className="relative w-full lg:w-1/2">
              <img
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/img1.png"
                alt="Group of people"
                className="rounded-lg shadow-lg"
              />
              {/* Background Cards */}
              <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-md">
                <p className="text-sm text-gray-600">Market Static</p>
                <h4 className="font-semibold text-gray-800">Course Overview</h4>
                <p className="text-sm text-blue-500">Jan - Dec</p>
              </div>
              <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-800">Security App</h4>
                <button className="mt-2 px-4 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Section: Text */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
              <h3 className="text-2xl font-bold text-gray-400">Millions Of Jobs.</h3>
              <h1 className="text-5xl font-bold text-gray-800 leading-tight mt-2">
                Find The One That’s <span className="text-blue-600">Right</span>{" "}
                For You
              </h1>
              <p className="mt-4 text-gray-600">
                Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over 600,000
                companies worldwide. The right job is out there.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
                  Search Jobs
                </button>
                <button className="px-6 py-3 bg-gray-100 text-blue-600 rounded-lg shadow hover:bg-gray-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MillionsJob;
