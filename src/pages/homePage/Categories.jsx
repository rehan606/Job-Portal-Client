import React from "react";

const categories = [
  { name: "Marketing & Sale", jobs: 1526, icon: "📢" },
  { name: "Customer Help", jobs: 185, icon: "🎧" },
  { name: "Finance", jobs: 168, icon: "🏦" },
  { name: "Software", jobs: 1856, icon: "💡" },
  { name: "Human Resource", jobs: 165, icon: "👤" },
];

const Categories = () => {
  return (
    <div>
      <div className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Browse by category
          </h2>
          <p className="text-gray-600 mt-2">
            Find the job that's perfect for you. about 800+ new jobs everyday
          </p>
          <div className="flex justify-center items-center mt-6 gap-2">
            {/* Left Arrow */}
            <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
              <span className="sr-only">Previous</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-4 bg-white rounded-lg border shadow hover:shadow-md hover:bg-gray-100 transition"
                >
                  <div className="text-3xl text-blue-500">{category.icon}</div>
                  <div className="text-left">
                    <h3 className="mt-4 text-md font-semibold text-gray-800">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {category.jobs} Jobs Available
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
