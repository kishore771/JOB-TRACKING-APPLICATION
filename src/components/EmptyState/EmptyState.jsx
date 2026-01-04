import React from "react";
import "./EmptyState.css";

const EmptyState = () => {
  return (
    <div className="empty-state">
      <h3>No Job Applications Found</h3>
      <p>Start by adding your first job application.</p>
    </div>
  );
};

export default EmptyState;
