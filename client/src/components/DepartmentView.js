import React from "react";
import axios from "axios";
import { Segment, Header, Button, } from "semantic-ui-react";

class DepartmentView extends React.Component {
  state = { department: {}, };

  componentDidMount() {
    axios.get(`/api/departments/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ department: res.data, });
      })
  }

  render() {
    const { name, price, description, } = this.state.product;

    return (
      <div>
        <Segment>
          <Header as="h1">{ name }</Header>
          <Header as="h5" color="grey">${ price }</Header>
          <p>{ description }</p>
        </Segment>
        <br />
        <br />
        <Button 
          color="black" 
          onClick={this.props.history.goBack}
        >
          Back
        </Button>
      </div>
    )
  }
}

export default DepartmentView;