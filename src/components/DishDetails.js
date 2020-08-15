import React, { useState, Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";

const RenderComments = ({ comments }) => {
  const total_comments = comments.map((comment) => {
    return (
      <div>
        <Card key={comment.id}>
          <CardTitle>{comment.author}</CardTitle>
          <CardText>{comment.comment}</CardText>
        </Card>
      </div>
    );
  });

  return <div>{total_comments}</div>;
};

const RenderDish = ({ dish }) => {
  if (dish != null) {
    return (
      <div>
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else return <div></div>;
};

class DishDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      rating: "",
      your_name: "",
      message: "",
      touched: {
        rating: false,
        your_name: false,
        message: false,
      },
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleBlur = (field) => (eve) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
    // console.log([field]);
  };
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // console.log(target.name);
    this.setState({
      [name]: value,
    });
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
    console.log(!this.state.isModalOpen);
  }

  handleSubmit(event) {
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  validate(your_name) {
    const errors = {
      your_name: "",
    };

    if (this.state.touched.your_name && your_name.length < 3) {
      console.log("gdfg");
      errors.your_name = "your_name should be >=3 character";
    } else if (this.state.touched.your_name && your_name.length > 15) {
      errors.your_name = "your_name should be <=15 character";
    }
    // console.log(errors)

    return errors;
  }

  render() {
    const errors = this.validate(this.state.your_name);
    console.log(errors.your_name);
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{this.props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={this.props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={this.props.comments} />
            <Button outline onClick={this.toggleModal}>
              Comment
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Comment</ModalHeader>
              <ModalBody>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label htmlFor="rating">Rating</Label>

                    <Input
                      type="select"
                      name="rating"
                      value={this.state.rating}
                      onBlur={this.handleBlur("rating")}
                      onChange={this.handleInputChange}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      type="name"
                      id="name"
                      name="your_name"
                      value={this.state.your_name}
                      onBlur={this.handleBlur("your_name")}
                      onChange={this.handleInputChange}
                      valid={errors.firstname === ""}
                      invalid={errors.firstname !== ""}
                      // innerRef={(input) => (this.password = input)}
                    />
                    <FormFeedback>{errors.your_name}</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="comment">Comment</Label>
                    <Input
                      type="comment"
                      id="comment"
                      name="message"
                      value={this.state.message}
                      onBlur={this.handleBlur("message")}
                      onChange={this.handleInputChange}
                      // innerRef={(input) => (this.password = input)}
                    />
                  </FormGroup>
                  <Button type="submit" value="submit" color="primary">
                    Submit
                  </Button>
                </Form>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetails;
