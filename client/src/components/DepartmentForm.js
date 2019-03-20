import React from "react";
import axios from "axios";
import { Form, Header, } from "semantic-ui-react";

class DepartmentForm extends React.Component {
  defaultValues = { name: "", price: "", description: "", };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    const department = { ...this.state, };
    axios.post("/api/departments", department)
      .then( res => {
        this.props.history.goBack();
      })
    this.setState({ ...this.defaultValues, });
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState({ [name]: value, });
  }

  render() {
    const { name, description, price, } = this.state;

    return (
      <div>
        <Header as="h1">New Department</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
              label="Name"
              placeholder="Name"
              name="name"
              required
              onChange={this.handleChange}
              value={name}
            />
            </Form.Group>
            <Form.Group widths="equal">
            <Form.Input 
              label="Description"
              placeholder="Description"
              name="description"
              required
              onChange={this.handleChange}
              value={description}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input 
              label="Price"
              placeholder="Price"
              name="price"
              type="number"
              required
              onChange={this.handleChange}
              value={price}
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default DepartmentForm;