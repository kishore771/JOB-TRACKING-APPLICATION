import React from "react";
import "./JobCard.css";

const JobCard = ({ job, onEdit, onDelete }) => {
  return (
    <div className="job-card">
      <h3 className="job-company">{job.company}</h3>
      <p className="job-role">{job.role}</p>

      <span className={`job-status ${job.status.toLowerCase()}`}>
        {job.status}
      </span>

      <p className="job-date">
        Applied on: <strong>{job.date}</strong>
      </p>

      <div className="job-actions">
        <button className="edit-btn" onClick={() => onEdit(job)}>
          Edit
        </button>
        <button
          className="delete-btn"
          onClick={() => onDelete(job.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;
