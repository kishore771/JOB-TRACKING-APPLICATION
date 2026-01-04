import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import JobForm from "../components/JobForm/JobForm";
import Filters from "../components/Filters/Filters";
import JobList from "../components/JobList/JobList";
import { getJobs, saveJobs } from "../utils/storage";

const Dashboard = () => {
  const [jobs, setJobs] = useState(() => getJobs());
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingJob, setEditingJob] = useState(null);

  // Save jobs whenever jobs change
  useEffect(() => {
    saveJobs(jobs);
  }, [jobs]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const updateJob = (updatedJob) => {
    setJobs(jobs.map(job =>
      job.id === updatedJob.id ? updatedJob : job
    ));
    setEditingJob(null);
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const filteredJobs = jobs.filter((job) => {
    const statusMatch =
      filterStatus === "All" || job.status === filterStatus;

    const searchMatch = job.company
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return statusMatch && searchMatch;
  });

  return (
    <div className="dashboard">
      <Header totalJobs={jobs.length} />

      <JobForm
        addJob={addJob}
        updateJob={updateJob}
        editingJob={editingJob}
      />

      <Filters
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <JobList
        jobs={filteredJobs}
        onEdit={setEditingJob}
        onDelete={deleteJob}
      />
    </div>
  );
};

export default Dashboard;
