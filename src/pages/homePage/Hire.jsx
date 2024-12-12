import React from "react";

const Hire = () => {
  return (
    <div>
      <div className="py-6 ">
        <div className="w-10/12 mx-auto px-4">
          <div className="flex flex-col  lg:flex-row items-center justify-between bg-white shadow-md rounded-lg p-6 lg:p-10">
            {/* Left Section */}
            <div className="flex flex-col lg:flex-row items-center ">
              <div className="flex-shrink-0">
                <img
                  src="https://img.freepik.com/free-vector/isometric-hiring-concept-background_23-2148082387.jpg?t=st=1733906326~exp=1733909926~hmac=231d59aa409385f4006ee231749d5d9a61fa5322052c44a01052269157c2d2f7&w=740"
                  alt="Hiring Illustration"
                  className="h-20 w-20 lg:h-36 lg:w-36 object-cover"
                />
              </div>
              <div className="mt-4 flex justify-center gap-6 items-center lg:mt-0 lg:ml-6 text-center lg:text-left">
                <h2 className="text-xl font-semibold text-gray-800">
                  We Are <br /> <span className="text-blue-600 text-5xl font-bold">Hiring</span>
                </h2>
                <p className="text-gray-600 mt-2 text-xl">
                  Let's Work Together &amp;{" "} <br />
                  <span className="font-medium text-blue-600">Explore</span>{" "}
                  Opportunities
                </p>
              </div>
              
            </div>

            {/* Right Section */}
            <div className="mt-6 lg:mt-0">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Apply now
              </button>
            </div>
            <div className="flex-shrink-0">
                <img
                  src="https://img.freepik.com/free-vector/flat-employment-agency-search-new-employees-hire_88138-802.jpg?t=st=1733906559~exp=1733910159~hmac=dd754bf69db2bce9b666fb6f93f206299f07c1699cdd8ddcb80d2d01a208dcde&w=740"
                  alt="Hiring Illustration"
                  className="h-20 w-20 lg:h-36 lg:w-36 object-cover"
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
