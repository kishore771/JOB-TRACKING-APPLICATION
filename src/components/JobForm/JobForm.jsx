import React, { useEffect, useState } from "react";
import "./JobForm.css";

const JobForm = ({ addJob, updateJob, editingJob }) => {
  // 🔹 FORM STATE
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [date, setDate] = useState("");

  // 🔹 Populate form when editing
  useEffect(() => {
    if (editingJob) {
      setCompany(editingJob.company);
      setRole(editingJob.role);
      setStatus(editingJob.status);
      setDate(editingJob.date);
    }
  }, [editingJob]);

  // 🔹 Reset form
  const resetForm = () => {
    setCompany("");
    setRole("");
    setStatus("Applied");
    setDate("");
  };

  // 🔹 Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company || !role || !date) {
      alert("Please fill all required fields");
      return;
    }

    const jobData = {
      id: editingJob ? editingJob.id : Date.now(),
      company,
      role,
      status,
      date,
    };

    if (editingJob) {
      updateJob(jobData);
    } else {
      addJob(jobData);
    }

    resetForm();
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <h2>{editingJob ? "Edit Job Application" : "Add Job Application"}</h2>

      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        type="text"
        placeholder="Role / Position"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">
        {editingJob ? "Update Application" : "Add Application"}
      </button>
    </form>
  );
};

export default JobForm;
