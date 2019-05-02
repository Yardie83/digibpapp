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
import { education, experience } from "./selections";
import { useJobs } from "../contexts";

const ApplyModal = () => {
  const { jobs } = useJobs();

  const job = jobs.filter(jobs => {
    return jobs.isSelected === true;
  })[0];

  const [formData, setFormData] = useState({ formData: null });

  const onValidSubmit = formData => alert(JSON.stringify(formData));

  const errorLabel = <Label color="red" pointing="left" />;

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
      placeholder="Experience"
      selection
      validations={{
        customValidation: (values, value) => !(!value || value.length < 1)
      }}
      validationErrors={{
        customValidation: "You need to select your experience level"
      }}
      errorLabel={errorLabel}
      options={experience}
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
      options={education}
    />
  );

  const inputAge = (
    <Input
      name="age"
      placeholder="Your age"
      label="Age"
      required
      validations="isNumeric"
      validationErrors={{
        isNumeric: "Please enter a valid age",
        isDefaultRequiredValue: "Age is Required"
      }}
      errorLabel={errorLabel}
    />
  );

  return (
    <Modal
      style={{ top: "0px" }}
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
                {inputAge}
                <Divider hidden/>
                {inputEmail}
                <Divider />
                <Label as="a" color="red" ribbon>
                  Professional skills
                </Label>
                <Divider hidden />
                {selectEducation}
                <Divider hidden />
                {selectExperience}

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
