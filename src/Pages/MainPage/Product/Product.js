import React from 'react'

const Product = () => {
    return (
        <div id="Product" className="container-fluid" data-component="Productsection">
        <div data-component="Productheading">
          <h1 className="text-center p-5 m-5 text-uppercase" style={{letterSpacing: '3px', fontWeight: 800, fontSize: '60px', color: '#313262'}}>Products
          </h1>
        </div>
        <div className="row row-cols-2 row-cols-xs-2 row-cols-md-2  row-cols-lg-4 row-cols-xl-5">
          <div className="col">
            
            <img src={process.env.PUBLIC_URL + "/images/Cheemi-Transducer.png"} alt="" />
            <span>Cheemi Transducer</span>
          </div>
          <div className="col">
       
            <img src={process.env.PUBLIC_URL + "/images/Current-and-Voltagetranducer.jpg" }alt="" />
            <span>Current and Voltage Transducer</span>
          </div>
          <div className="col">
     
            <img src={process.env.PUBLIC_URL + "/images/Talema-Transducer1.jpg"} alt="" />
            <span>Talema Transducer</span>
          </div>
          <div className="col">

            <img src={process.env.PUBLIC_URL + "/images/ABB-Product.jpg"} alt="" />
            <span>ABB Current Transducer CS1000-9940</span>
          </div>
          <div className="col">

            <img src={process.env.PUBLIC_URL + "/images/TELEsensor.jpg" }alt="" />
            <span>Telcon Sensor</span>
          </div>
          <div className="col">

            <img src={process.env.PUBLIC_URL + "/images/animal-ear-tags.jpg"} alt="" />
            <span>Animal Tag</span>
          </div>
          <div className="col">
   
            <img src={process.env.PUBLIC_URL + "/images/high-tension-transformer.png"} alt="" />
            <span>High Tension Current Transformer </span>
          </div>
          <div className="col">
      
            <img src={process.env.PUBLIC_URL + "/images/Talema-Transducer2.jpg"} alt="" />
            <span>Talema Transducer</span>
          </div>
          <div className="col">
  
            <img src={process.env.PUBLIC_URL + "/images/sunonfan.jpg" }alt="" />
            <span>Sunon Fan</span>
          </div>
          <div className="col">
   
            <img src={process.env.PUBLIC_URL + "/images/Applicator-For-Animal-Ear-Tag.jpg"} alt="" />
            <span>Applicator For Animal Ear Tag</span>
          </div>
        </div>
      </div>
    )
}

export default Product;
