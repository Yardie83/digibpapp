import React, { useState } from "react";
import {
  Modal,
  Button,
  Label,
  Divider,
  Grid,
} from "semantic-ui-react";
import { Form, Input, Dropdown } from "formsy-semantic-ui-react";
import {
  educationSelection,
  ageSelection,
  experienceSelection
} from "./selections";
import { useJobs } from "../contexts";

const ApplyModal = () => {
  const [open, setOpen] = useState(false);
  const { jobs } = useJobs();

  const job = jobs.filter(jobs => {
    return jobs.isSelected === true;
  })[0];

  const onValidSubmit = formData => {
    formData.cv = "false";
    formData.reference = "false";
    var url = new URL(
        "https://hook.integromat.com/5prntpou3jnoo8p6h1e1gsh2sia3l6gr"
      ),
      params = {
        jobId: job.jobId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        experience: formData.experience,
        education: formData.education,
        jobKat: job.category,
        age: formData.age,
        cv: formData.cv,
        references: formData.reference
      };
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );
    fetch(url)
      .then(function(response) {
        return response;
      })
      .then(function() {
        setOpen(false);
        alert("Thank you for your application. We will process your application shortly\n");
      });
  };

  const inputJobId = <Input name="jobId" type="hidden" value="1" />;

  const inputFirstName = (
    <Input
      name="firstName"
      placeholder="First name"
      label="First name"
      required
      validations="isWords"
    />
  );

  const inputLastName = (
    <Input
      name="lastName"
      placeholder="Last name"
      label="Last name"
      required
      validations="isWords"
    />
  );

  const inputEmail = (
    <Input
      name="email"
      placeholder="Your primary email"
      icon="mail"
      label="Email"
      required
      validations="isEmail"
    />
  );

  const selectExperience = (
    <Dropdown
      name="experience"
      placeholder="Years of Experience"
      selection
      label="Experience"
      validations={{
        customValidation: (values, value) => !(!value || value.length < 1)
      }}
      options={experienceSelection}
    />
  );

  const selectEducation = (
    <Dropdown
      name="education"
      placeholder="Education"
      label="Education"
      selection
      validations={{
        customValidation: (values, value) => !(!value || value.length < 1)
      }}
      options={educationSelection}
    />
  );

  const selectAge = (
    <Dropdown
      name="age"
      placeholder="Age"
      label="Age"
      selection
      validations={{
        customValidation: (values, value) => !(!value || value.length < 1)
      }}
      options={ageSelection}
    />
  );

  const inputCV = (
    <Input
      stlye={{ width: "100%" }}
      name="cv"
      placeholder="Choose file"
      label="Upload your CV"
      type="file"
    />
  );

  const inputReference = (
    <Input
      stlye={{ width: "100%" }}
      name="reference"
      placeholder="Choose file"
      label="Upload your Reference Letter"
      type="file"
    />
  );

  return (
    <Modal
      open={open}
      className="scrolling"
      trigger={
        <Button
          onClick={() => setOpen(true)}
          style={{ background: "#2185d0", color: "#ffffff" }}
        >
          Apply
        </Button>
      }
    >
      <Modal.Header>
        Apply for{" "}
        <p style={{ color: "#2185d0" }}>
          {job.title} at {job.company}
        </p>
      </Modal.Header>
      <Modal.Content>
        <Form
          noValidate
          onValidSubmit={onValidSubmit}
          // ref={ref => (form = ref)}
        >
          {inputJobId}
          <Grid centered columns={2}>
            <Grid.Column width={6}>
              <Label as="a" color="blue" ribbon>
                Personal information
              </Label>
              <Divider hidden />
              {inputFirstName}
              {inputLastName}
              {inputEmail}
              <Divider />
              <Label as="a" color="green" ribbon>
                CV & Reference Letter
              </Label>
              <Divider hidden />
              {inputCV}
              {inputReference}
            </Grid.Column>
            <Grid.Column width={6}>
              <Label as="a" color="red" ribbon>
                Professional skills
              </Label>
              <Divider hidden />
              {selectAge}
              {selectEducation}
              {selectExperience}
              <Divider />
            </Grid.Column>
          </Grid>
          <Divider />
          <Button content="Submit" primary />
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default ApplyModal;
