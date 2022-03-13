import ProductCard from "./ProductCard/ProductCard";
import { Container, Row, Col } from "reactstrap";
import React, { useEffect } from "react";
const Product = (props) => {
  useEffect(() => {
    console.log("use effect");
    setTimeout(() => {
      console.log("used");
    }, 1000);
  }, [props.productchange]);

  return (
    <div>
      <Container className="pb-5">
        <Row xs="1" md="4" className="mb-5">
          {props.productchange.map((data) => {
            return (
              <Col className="ps-2 pe-2">
                <ProductCard
                  Key={data.productID}
                  name={data.productname}
                  category={data.category}
                  imagesource={data.productimage}
                  // info={data.productinfo}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Product;
