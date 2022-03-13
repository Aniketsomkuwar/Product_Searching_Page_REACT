import React, { useState } from "react";
import "tachyons";
import Heading from "./heading/Heading";
import Navbar from "./navbar/Navbar";
import Product from "./products/Product";
import { Container } from "reactstrap";

import { Products } from "./products/product-list";

const ProductPage = () => {
  const [Search, setSearch] = useState("");
  const [menu, setmenu] = useState("");



  const handleCallback = (newChild) => {
    setmenu(newChild);
  };

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  let filterproduct = Products.filter((product) => {
    if (menu === "" || menu===undefined ) {
      return product.productname.toLowerCase().includes(Search.toLowerCase());
   
    } else {
 
      return ( 
        product.category.includes(menu) && product.productname.toLowerCase().includes(Search.toLowerCase()))
    }
  });

  return (
    <div>
      <Heading />
      <Container>
        <Navbar parentCallback={handleCallback} changes={onSearchChange} />
        <Product productchange={filterproduct} />
      </Container>

    </div>
  );
};

export default ProductPage;
