import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    _id,
    company_logo,
    title,
    company,
    description,
    requirements,
    responsibilities,
    salaryRange,
    category,
    jobType,
    location,
  } = job;

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 my-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start px-6 py-4 border-b">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0">
            <img
              src={company_logo}
              alt="Company Logo"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-500">{company}</p>
            <p className="text-sm text-gray-400">Location: {location}</p>
          </div>
        </div>

        {/* Job Details Section */}
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Job Summary
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Requirements Section */}
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Key Requirements
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
            {responsibilities.map((requirment) => (
              <li key={requirment._id}>{requirment}</li>
            ))}
          </ul>
        </div>

        {/* Job Details Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 py-4 border-b">
          <div>
            <h4 className="text-gray-500">Job Type</h4>
            <p className="text-gray-800">{jobType}</p>
          </div>
          <div>
            <h4 className="text-gray-500">Salary</h4>
            <p className="text-gray-800">
              ${salaryRange?.min} - {salaryRange?.max} Yearly
            </p>
          </div>
          <div>
            <h4 className="text-gray-500">Experience Level</h4>
            <p className="text-gray-800">Mid-Level</p>
          </div>
          <div>
            <h4 className="text-gray-500">Posted On</h4>
            <p className="text-gray-800">December 11, 2024</p>
          </div>
        </div>

        {/* Apply Section */}
        <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">
            Interested in this role? Apply now to join our amazing team!
          </p>
          <Link to={`/jobApply/${_id}`}>
            <button className="mt-4 sm:mt-0 bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
