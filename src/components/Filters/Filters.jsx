import React from "react";
import "./Filters.css";

const Filters = ({
  filterStatus,
  setFilterStatus,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="filters">
      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search by company name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* 🎯 Status Filter */}
      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default Filters;
