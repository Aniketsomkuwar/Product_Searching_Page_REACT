import React from 'react'
import './modules/ihover/src/ihover.min.css';
import './modules/ihover/src/ihover.css';
const Services = () => {
    return (
        <div>
            <section id="service-section" className="pb-5 mb-5" data-component="Service">
        <div>
          <h1 className="text-center p-5 m-5 text-uppercase" style={{letterSpacing: '3px', fontWeight: 800, fontSize: '60px', color: 'white'}}>Services
          </h1>
        </div>
        <div id="Services" className="container pb-5 mb-5">
          {/* 1st service */}
          <div>
            <span>
              <div className="ih-item square effect13 bottom_to_top"><a href>
                  <div className="img"> <img src={process.env.PUBLIC_URL + "/images/services/Service1.jfif"} alt="" /></div>
                  <div className="info text-light">
                    <h3>PCB Design Service</h3>
                    <p>
                    </p><ul>
                      <li> <strong> Type of Technology :</strong> CAD / CAM</li>
                      <li> <strong> Type of Service Provider : </strong>
                        Designing Firm</li>
                      <li> <strong> Type of Service Contract : </strong> Project
                        Based
                      </li>
                      <li> Net list verification, Footprint library creation,
                        routing, Single layer to Multi layer PCB
                        design, Gerber verification
                      </li>
                      <li> <strong> Additional Information: </strong> </li>
                      <li> Pay Mode Terms: L/C (Letter of Credit),T/T (Bank
                        Transfer)</li>
                    </ul>
                    <p />
                  </div>
                </a>
              </div>
            </span>
          </div>
          {/*2nd service */}
          <div>
            <span>
              <div className="ih-item square effect13 bottom_to_top"><a href>
                  <div className="img"> <img src={process.env.PUBLIC_URL + "/images/services/Service2.jpg"} alt="" />
                  </div>
                  <div className="info text-light">
                    <h3>Embedded Hardware And Software Design</h3>
                    <p>
                    </p><ul>
                      <li> All kind of micro controller program design.Embedded
                        Linux porting and programming,Provide
                        customize solution.</li>
                      <li>Embedded Hardware Design including Schematics and PCB
                        design service </li>
                    </ul>
                    <p />
                  </div>
                </a>
              </div>
            </span>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Services;
