import { span } from "motion/react-client";
import React from "react";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const {
    _id,
    company_logo,
    title,
    company,
    description,
    requirements,
    salaryRange,
    category,
    jobType,
    location,
  } = job;

  return (
    <div>
        <div className="max-w-md mx-auto  shadow-md rounded-lg overflow-hidden border border-[#3c65f5]">
            {/* First Row */}
            <div className="flex items-center px-4 py-3 border-b">
            <div className="w-12 h-12   flex-shrink-0">
                <img
                src={company_logo}
                alt="Company Logo"
                className="w-full h-full rounded-full object-cover"
                />
            </div>
            <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-800">
                {company}
                </h3>
                <p className="text-sm text-gray-500">{location}</p>
            </div>
            </div>

            {/* Second Row */}
            <div className="px-4 py-3 border-b">
            <h4 className="text-md font-bold text-gray-800">{title}</h4>
            <p className="text-sm text-gray-600">Status: Open</p>
            </div>

            {/* Third Row */}
            <div className="px-4 py-3 border-b">
            <p className="text-sm text-gray-700">
                {description}
            </p>
            <p className="text-sm font-medium text-gray-500 mt-2 flex flex-wrap gap-2"> 
                {
                    requirements.map((skill, index) => <p key={index} className="px-3 py-2 rounded-md bg-blue-100  ">{skill}</p> )
                } 
                </p>
            </div>

            {/* Fourth Row */}
            <div className="flex items-center justify-between px-4 py-3">
            <p className="text-lg font-semibold text-gray-800">$ {salaryRange?.min} - {salaryRange?.max}</p>
            <Link to={`/jobDetails/${_id}`}>
                <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600">
                    Apply Now
                </button>
            </Link>
            </div>
        </div>
    </div>
  );
};

export default HotJobsCard;
