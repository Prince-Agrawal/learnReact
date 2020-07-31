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
        <div className = "container">
          <div className = "row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
                top
                src={this.props.dish.image}
                alt={this.props.dish.name}
              />
              <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card></div>
            <div className="col-12 col-md-5 m-1">{comments}</div>
          </div>

          
        </div>
      );
    } else return <div></div>;
  }
}

export default DishDetails;