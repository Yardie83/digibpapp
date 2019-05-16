import React, { useState } from "react";
import Form from "formsy-react";
import {
  Modal,
  Segment,
  Button,
  Label,
  Divider,
  Grid
} from "semantic-ui-react";
import { Input, Dropdown } from "formsy-semantic-ui-react";
import {
  educationSelection,
  ageSelection,
  experienceSelection,
  categorySelection
} from "./selections";
import { useJobs } from "../contexts";

const ApplyModal = () => {
  const { jobs } = useJobs();

  const job = jobs.filter(jobs => {
    return jobs.isSelected === true;
  })[0];

  const [formData, setFormData] = useState({ formData: null });

  const onValidSubmit = formData => {
    formData.cv = "false";
    formData.reference = "false";
    var url = new URL(
        "https://hook.integromat.com/5prntpou3jnoo8p6h1e1gsh2sia3l6gr"
      ),
      params = {
        jobId: formData.jobId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        experience: formData.experience,
        education: formData.education,
        jobKat: formData.jobKat,
        age: formData.age,
        cv: formData.cv,
        references: formData.reference
      };
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        alert("Thank you for your application\n", JSON.stringify(data));
      });
  };

  const errorLabel = <Label color="red" pointing="left" />;

  const inputJobId = <Input name="jobId" type="hidden" value="1" />;

  const inputFirstName = (
    <Input
      name="firstName"
      placeholder="First name"
      label="First name"
      required
      validations="isWords"
      validationErrors={{
        isWord: "Please enter your first name",
        isDefaultRequiredValue: "First name is Required"
      }}
      errorLabel={errorLabel}
    />
  );

  const inputLastName = (
    <Input
      name="lastName"
      placeholder="Last name"
      label="Last name"
      required
      validations="isWords"
      validationErrors={{
        isWord: "Please enter your last name",
        isDefaultRequiredValue: "Last name is Required"
      }}
      errorLabel={errorLabel}
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
      validationErrors={{
        isWord: "Please enter a valid email address",
        isDefaultRequiredValue: "Email address is Required"
      }}
      errorLabel={errorLabel}
    />
  );

  const selectExperience = (
    <Dropdown
      name="experience"
      placeholder="Years of Experience"
      selection
      validations={{
        customValidation: (values, value) => !(!value || value.length < 1)
      }}
      validationErrors={{
        customValidation:
          "You need to select the numbers of years of experience "
      }}
      errorLabel={errorLabel}
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
      validationErrors={{
        customValidation: "You need to select your educational level"
      }}
      errorLabel={errorLabel}
      options={educationSelection}
    />
  );

  const selectCategory = (
    <Dropdown
      name="jobKat"
      placeholder="Category"
      label="Job Category"
      selection
      validations={{
        customValidation: (values, value) => !(!value || value.length < 1)
      }}
      validationErrors={{
        customValidation: "You need to select a job category"
      }}
      errorLabel={errorLabel}
      options={categorySelection}
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
      validationErrors={{
        customValidation: "You need to select your age range"
      }}
      errorLabel={errorLabel}
      options={ageSelection}
    />
  );

  const inputCV = (
    <Input
      name="cv"
      placeholder="Choose file"
      label="Upload your CV"
      type="file"
    />
  );

  const inputReference = (
    <Input
      name="reference"
      placeholder="Choose file"
      label="Upload your Reference Letter"
      type="file"
    />
  );

  return (
    <Modal
      className="scrolling"
      style={{ height: "100px", top: "10px" }}
      trigger={
        <Button basic primary>
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
        <Segment>
          <Form
            noValidate
            onValidSubmit={onValidSubmit}
            // ref={ref => (form = ref)}
          >
            {inputJobId}
            <Grid centered columns={1}>
              <Grid.Column width={12}>
                <Label as="a" color="blue" ribbon>
                  Personal information
                </Label>
                <Divider hidden />
                {inputFirstName}
                <Divider hidden />
                {inputLastName}
                <Divider hidden />
                {selectAge}
                <Divider hidden />
                {inputEmail}
                <Divider />
                <Label as="a" color="red" ribbon>
                  Professional skills
                </Label>
                <Divider hidden />
                {selectEducation}
                <Divider hidden />
                {selectExperience}
                <Divider hidden />
                {selectCategory}
                <Divider />
                <Label as="a" color="green" ribbon>
                  CV & Reference Letter
                </Label>
                <Divider hidden />
                {inputCV}
                <Divider hidden />
                {inputReference}
              </Grid.Column>
            </Grid>
            <Divider />
            <Button content="Submit" primary />
          </Form>
        </Segment>
      </Modal.Content>
    </Modal>
  );
};

export default ApplyModal;
