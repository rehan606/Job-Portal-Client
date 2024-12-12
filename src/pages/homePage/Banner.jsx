import React from "react";
import { motion } from "motion/react";
const image1 = "../../assets/images/businessman.avif";

const Banner = () => {
  return (
    <div>
      <div>
        {/* Responsive Banner */}
        <section className="bg-[#f2f6fd] text-[#05264E]">
          <div className="container mx-auto px-5 pb-20 flex flex-col items-center text-center md:text-left md:flex-row md:justify-between">
            {/* Banner Content */}
            <div className="max-w-lg mb-10 md:mb-0">
              <motion.h1
                animate={{x: [0,50, 0]}}
                transition={{duration: 5, repeat: Infinity}}
               className="text-4xl font-bold leading-tight mb-4">
                Find Your{" "}
                <motion.span
                  animate={{ color: ["#3c65f5", "#05264E"] }}
                  transition={{ duration: 5 , repeat: Infinity }}
                >
                  Dream Job{" "}
                </motion.span>{" "}
                Today
              </motion.h1>
              <p className="text-lg mb-6 ">
                Explore thousands of job opportunities in various industries.
                Let your career take off with JobPortal.
              </p>
              {/* Job Search Form */}
              <form className="flex flex-col md:flex-row gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#3c65f5] px-6 py-3 rounded-md text-white font-semibold hover:bg-blue-700"
                >
                  Search
                </button>
              </form>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/jobs"
                  className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
                >
                  Browse Jobs
                </a>
                <a
                  href="/signup"
                  className="bg-[#3c65f5] !text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* Banner Image */}
            <div className="w-full max-w-md">
              <motion.img
                animate={{ y: [100, 50, 100] }}
                transition={{ duration: 5, repeat: Infinity }}
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/banner1.png"
                alt="Job Portal Banner"
                className=" rounded-tl-3xl rounded-tr-3xl rounded-br-3xl  "
              />
              <motion.img
                animate={{ x: [100, 50, 100] }}
                transition={{ duration: 5, repeat: Infinity }}
                src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/banner2.png"
                alt="Job Portal Banner"
                className=" rounded-tl-3xl rounded-tr-3xl rounded-br-3xl "
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
