import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const RenderComment = ({ comments }) => {
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

  return (
    <div className="container">
      <div className="row">{total_comments}</div>
    </div>
  );
};

const RenderDish = ({ dish }) => {
  if (dish != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  } else return <div></div>;
};

const DishDetails = ({ dish }) => {
  return (
    <div>
      {dish ? (
        <div>
          <RenderDish dish={dish} />
          <RenderComment comments={dish.comments} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DishDetails;
