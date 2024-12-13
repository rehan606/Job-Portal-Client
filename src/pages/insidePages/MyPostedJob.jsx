import React, { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import { Link } from "react-router-dom";

const MyPostedJob = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = UseAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);

  return (
    <div className="py-10">
      <div className="overflow-x-auto w-11/12 mx-auto">
        <div>
            <h2 className="text-center text-3xl font-bold mb-10 border-b pb-5">My Jobs</h2>
        </div>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Total Application</th>
              <th>View</th>
            </tr>
          </thead>

          <tbody>
            
            {
                jobs.map((job, index) => <tr key={job._id}>
                    <th>{index + 1}</th>
                    <td>{job.title}</td>
                    <td>{job.applicationDeadline}</td>
                    <td>{job.applicationCount}</td>
                    <td>
                        <Link to={`/viewApplications/${job._id}`}>
                            <button className="btn bg-blue-500 text-white" > View Application</button>
                        </Link>
                    </td>
                  </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJob;
