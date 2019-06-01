import React, { Suspense } from "react";
import Navbar from "../../components/navbar";
import Main from "../../components/main";
import JobList from "../../components/jobList";
import JobRail from "../../components/jobRail";
import { JobProvider } from "../../components/contexts";
import { Placeholder } from "semantic-ui-react";

const JobPlaceholder = () => (
  <Placeholder fluid>
    <Placeholder.Header image>
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
  </Placeholder>
);


const Home = () => {

  return (
    <>
      <Navbar />
      <Main>
        <JobProvider>
          <Suspense fallback={<JobPlaceholder />}>
            <JobList />
            <JobRail />
          </Suspense>
        </JobProvider>
      </Main>
    </>
  );
};
export default Home;
