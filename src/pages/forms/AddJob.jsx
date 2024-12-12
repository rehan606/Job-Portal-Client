import React from "react";
import UseAuth from "../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const AddJob = () => {
  const { user } = UseAuth();
  const navigate = useNavigate();

  const handleAddJob = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);

    // create these filds in new array
    const { minSalary, maxSalary, currency, ...newJob } = initialData;
    console.log(newJob);
    newJob.selaryRange = { minSalary, maxSalary, currency };
    console.log(newJob);

    // Requirements split in new line
    newJob.requirements = newJob.requirments.split("\n");
    // Responsibilities
    newJob.responsibilities = newJob.responsibilities.split("\n");

    // send Data in backend
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
          navigate("/");
        }
      });
  };

  return (
    <div className="py-10">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg border">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center border-b">
          Add Job
        </h2>
        <form onSubmit={handleAddJob}>
          {/* Job Title */}
          <div className="mb-4">
            <label
              htmlFor="jobTitle"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter job title"
            />
          </div>

          {/* Company Name */}
          <div className="mb-4">
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter company name"
            />
          </div>

          <div className="flex justify-between gap-4">
            {/* Job Location */}
            <div className="mb-4 w-full">
              <label
                htmlFor="jobLocation"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Job Location
              </label>
              <input
                type="text"
                id="jobLocation"
                name="jobLocation"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter job location"
              />
            </div>

            {/* Job Type */}
            <div className="mb-4 w-full">
              <label
                htmlFor="jobType"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Job Type
              </label>
              <select
                id="jobType"
                name="jobType"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select job type</option>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>
          </div>

          {/* Salary Range */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Salary Range
            </label>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="number"
                id="minSalary"
                name="minSalary"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Min Salary"
              />
              <input
                type="number"
                id="maxSalary"
                name="maxSalary"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Max Salary"
              />
              <select
                id="currency"
                name="currency"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
                <option value="BDT">BDT</option>
              </select>
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-4">
            <label
              htmlFor="jobDescription"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Job Description
            </label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Job Describe "
            ></textarea>
          </div>

          {/* Job Requirements */}
          <div className="mb-4">
            <label
              htmlFor="jobDescription"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Job Requirments
            </label>
            <textarea
              id="jobDescription"
              name="requirments"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Job Requirements"
            ></textarea>
          </div>

          {/* Job Responsibilities */}
          <div className="mb-4">
            <label
              htmlFor="jobDescription"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Job Responsibilities
            </label>
            <textarea
              id="jobDescription"
              name="responsibilities"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Job Responsibilities"
            ></textarea>
          </div>

          {/* HR Details  */}
          <div className="flex justify-between gap-4">
            {/* HR Name */}
            <div className="mb-4 w-full">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                HR Name
              </label>
              <input
                type="text"
                id="hr_Name"
                name="hr_Name"
                defaultValue={user?.name}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter HR name"
              />
            </div>

            {/* HR Email */}
            <div className="mb-4 w-full">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                HR Email
              </label>
              <input
                type="email"
                id="hr_Name"
                name="hr_email"
                defaultValue={user?.email}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter HR Email"
              />
            </div>

            {/* Company logo URL */}
            <div className="mb-4 w-full">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Company Logo URL
              </label>
              <input
                type="url"
                id="companyName"
                name="company_logo"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter Logo URL"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
