import React from "react";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";

const Step1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <Form>
      <h1>Basic Info</h1>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="firstName" sm={4} >First Name</Label>
          <Input
          sm={4}
            type="text"
            name="firstName"
            id="firstName"
            placeholder="e.g: Maria"
            value={props.firstName} // Prop: The email input data
            onChange={props.handleChange} // Prop: Puts data into the state
          />
      </FormGroup>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="e.g: Smith"
          value={props.lastName} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
      <FormGroup>
        <Label for="profession">Profession</Label>
        <Input
          type="text"
          name="profession"
          id="profession"
          placeholder="e.g: Manager"
          value={props.profession} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
      <FormGroup>
        <Label for="city">City</Label>
        <Input
          type="text"
          name="city"
          id="city"
          placeholder="e.g: London"
          value={props.city} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
      <FormGroup>
        <Label for="postalCode">Postal Code</Label>
        <Input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="e.g: 75950"
          value={props.postalCode} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
      <FormGroup>
        <Label for="country">Country</Label>
        <Input
          type="text"
          name="country"
          id="country"
          placeholder="e.g: Pakistan"
          value={props.country} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email Address</Label>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="e.g: xyz@abcmail.com"
          value={props.email} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
      <FormGroup>
        <Label for="phoneNo">Phone #</Label>
        <Input
          type="text"
          name="phoneNo"
          id="phoneNo"
          placeholder="e.g: +009 145236 548"
          value={props.phoneNo} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </FormGroup>
    </Form>
  );
};

export default Step1;
