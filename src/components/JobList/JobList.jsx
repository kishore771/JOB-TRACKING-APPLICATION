import React from "react";
import JobCard from "../JobCard/JobCard";
import EmptyState from "../EmptyState/EmptyState";
import "./JobList.css";

const JobList = ({ jobs, onEdit, onDelete }) => {
  // If no jobs found
  if (jobs.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default JobList;
