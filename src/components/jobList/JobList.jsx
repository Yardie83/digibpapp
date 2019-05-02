import React from "react";
import { List } from "semantic-ui-react";
import JobListItem from "../jobListItem";
import { useJobs } from "../contexts";

const JobList = () => {
  const { jobs, setJobs } = useJobs();

  const handleClick = index => () => {
    setJobs(() => {
      const jobsList = jobs.map((item, _index) => {
        if (_index !== index) return { ...item, isSelected: false };
        return { ...item, isSelected: true };
      });
      return jobsList;
    });
  };

  return (
    <List animated verticalAlign="middle" relaxed divided size="large">
      {jobs && 
        jobs.map((item, index) => (
          <JobListItem item={item} onClick={handleClick(index)} key={index} />
        ))}
    </List>
  );
};
export default JobList;