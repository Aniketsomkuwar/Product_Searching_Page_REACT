import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import React from "react";

const ProductCard = (props) => {
  return (
    <div className="pt3 ">
      <Card className="shadow-4">
        <CardBody>
          <CardImg
            top
            width="100%"
            className="br2 mb-0 h5 w5"
            src={process.env.PUBLIC_URL + props.imagesource}
            alt="Card image cap"
          />
          <CardTitle className="text-capitalize" tag="h6">
            {props.name}
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.category}
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
