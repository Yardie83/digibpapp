import React from "react";
import Navbar from "../../components/navbar";
import Main from "../../components/main";
import JobList from "../../components/jobList";
import JobRail from "../../components/jobRail";
import { JobProvider } from '../../components/contexts';

const Home = () => {
  return (
    <>
      <Navbar />
      <Main>
        <JobProvider>
          <JobList />
          <JobRail />
        </JobProvider>
      </Main>
    </>
  );
};
export default Home;
