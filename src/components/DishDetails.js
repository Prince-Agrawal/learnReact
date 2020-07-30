import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.dish != null) {
      const comments = this.props.dish.comments.map((comment) => {
        return (
          <div>
            <Card key={comment.id}>
              <CardTitle>{comment.author}</CardTitle>
              <CardText>{comment.comment}</CardText>
            </Card>
          </div>
        );
      });
      return (
        <Card>
          <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
          <CardBody>
            <CardTitle>{this.props.dish.name}</CardTitle>
            <CardText>{this.props.dish.description}</CardText>
          </CardBody>
          <div>{comments}</div>
        </Card>
      );
    } else return <div></div>;
  }
}

export default DishDetails;
