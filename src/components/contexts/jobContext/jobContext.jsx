import React, { useState, useEffect, useContext } from "react";
import mockData from "./mockData";

const JobContext = React.createContext();

const JobProvider = props => {
  const [jobs, setJobs] = useState([]);

  async function fetchJobs() {
    // const url = "https://hook.integromat.com/lj8a00646l7wciokfpiar65tqak9m7h8";
    // fetch(url)
    //   .then(results => results.json())
    //   .then(data =>{console.log(data); setJobs(data)});
    setJobs(mockData)
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  const value = { jobs, setJobs };
  return <JobContext.Provider value={value} {...props} />;
};

function useJobs() {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobs must be used within a JobProvider");
  }
  const { jobs, setJobs } = context;
  return {
    jobs,
    setJobs
  };
}

export { JobProvider, useJobs };
