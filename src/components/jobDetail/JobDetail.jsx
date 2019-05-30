import React from "react";
import { Card, Image, Divider } from "semantic-ui-react";
import { useJobs } from "../contexts";
import ApplyModal from "../applyModal";

const JobDetail = () => {
  const { jobs } = useJobs();

  const job = jobs.filter(jobs => {
    return jobs.isSelected === true;
  })[0];

  return (
    <>
      {job && (
        <Card style={{maxWidth: "100%"}}>
          <Card.Content>
            <Image
              bordered
              floated="right"
              size="tiny"
              src={job && job.logoUrl}
            />
            <Card.Header>{job && job.title}</Card.Header>
            <Card.Meta>{job && job.company}</Card.Meta>
            <Card.Meta>{job && job.location}</Card.Meta>
            <Card.Description>{job && job.description}</Card.Description>
            <Divider />
            <Card.Description as="a" target="_blank" href={job && job.jobUrl}>
              See job on LinkedIn
            </Card.Description>
          </Card.Content>
          <Card.Content>
          </Card.Content>
          <ApplyModal/>
        </Card>
      )}
    </>
  );
};

export default JobDetail;
