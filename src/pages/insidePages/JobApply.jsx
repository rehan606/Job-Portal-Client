import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";

const JobApply = () => {

    const {id} = useParams()
    const {user} = UseAuth()
    const navigate = useNavigate()
    // console.log(id, user);

    const handleJobApply = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const github = form.github.value;
        const phone = form.phone.value;
        const resume = form.resume.value;
        const coverLetter = form.coverLetter.value;

        

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            name,
            github,
            phone,
            resume,
            coverLetter

        }


        fetch('http://localhost:5000/job-applications', {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('Application submit successfully')
                    navigate('/myApplications')
                }
            })
        
    }
    
  return (
    <div className="py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg  border">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">
          Job Application
        </h2>
        <form onSubmit={handleJobApply}>
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="url"
              className="block text-gray-600 font-medium mb-2"
            >
              Github URL
            </label>
            <input
              type="url"
              id="github"
              name="github"
              placeholder="Enter your Github URL"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-600 font-medium mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Resume */}
          <div className="mb-4">
            <label
              htmlFor="resume"
              className="block text-gray-600 font-medium mb-2"
            >
              Upload Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Cover Letter */}
          <div className="mb-4">
            <label
              htmlFor="coverLetter"
              className="block text-gray-600 font-medium mb-2"
            >
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows="4"
              placeholder="Write your cover letter here..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
