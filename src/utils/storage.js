const STORAGE_KEY = "jobApplications";

// 🔹 Get jobs from localStorage
export const getJobs = () => {
  try {
    const storedJobs = localStorage.getItem(STORAGE_KEY);
    return storedJobs ? JSON.parse(storedJobs) : [];
  } catch (error) {
    console.error("Error reading from localStorage", error);
    return [];
  }
};

// 🔹 Save jobs to localStorage
export const saveJobs = (jobs) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
};
