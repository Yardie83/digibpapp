import React from "react";
import { Rail, Sticky } from "semantic-ui-react";
import JobDetail from "../jobDetail";

const JobRail = ({ contextRef }) => {
  return (
    <Rail dividing position="right" >
      <Sticky context={contextRef} offset={100}>
        <JobDetail />
      </Sticky>
    </Rail>
  );
};

export default JobRail;
