import React, { useEffect } from "react";
import { data, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const applications = useLoaderData();

  const handleStatusUpdate = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };
    fetch(`http://localhost:5000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Good job!",
            text: "Status Has been Update Successfully!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="py-10">
      <div className="overflow-x-auto w-11/12 mx-auto">
        <div>
          <h2 className="text-center text-3xl font-bold mb-10 border-b pb-5">
            My Jobs
          </h2>
        </div>
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Status</th>
              <th>Update status</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app, index) => (
              <tr key={app._id}>
                <th>{index + 1}</th>
                <td>{app.applicant_email}</td>
                <td>{app.title}</td>
                <td>
                  <select
                    onChange={(e) => handleStatusUpdate(e, app._id)}
                    defaultValue={app.status || "Change Status"}
                    className=" select select-bordered select-xs w-full max-w-xs"
                  >
                    <option disabled>Change Status</option>
                    <option>Under Review</option>
                    <option>Set Interview</option>
                    <option>Hire</option>
                    <option>Reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
