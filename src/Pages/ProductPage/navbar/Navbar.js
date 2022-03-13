import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";

const Navbar = (props) => {
  const onTrigger = (event) => {
    if (event.target.name === "All") {
      props.parentCallback("");
    } else {
      props.parentCallback(event.target.name);
    }

    event.preventDefault();
  };

  return (
    <div className="search white pb-3">
      <div>
        <div className="input-group">
          <span
            onClick={onTrigger}
            className="category btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All
          </span>
          <ul
            className="dropdown-menu rounded-0 p-0 "
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <Button
                onClick={onTrigger}
                name="Heaters"
                className="dropdown-item p-3 rounded-0 "
              >
                Heater
              </Button>
            </li>
            <li>
              <Button
                onClick={onTrigger}
                name="Sensors"
                className="dropdown-item p-3 rounded-0 "
              >
                Industrail Sensors
              </Button>
            </li>
            <li>
              <Button
                onClick={onTrigger}
                name="Transducer"
                className="dropdown-item p-3 rounded-0 "
              >
                Transducer
              </Button>
            </li>
            <li>
              <Button
                onClick={onTrigger}
                name="Animal Products"
                className="dropdown-item p-3 rounded-0 "
              >
                Animal Products
              </Button>
            </li>
            <li>
              <Button
                onClick={onTrigger}
                name="Transformer"
                className="dropdown-item p-3 rounded-0 "
              >
                Transformer
              </Button>
            </li>
            <li>
              <Button
                onClick={onTrigger}
                name="Semiconductor"
                className="dropdown-item p-3 rounded-0 "
              >
                Semiconductor
              </Button>
            </li>
            <li>
              <Button
                onClick={onTrigger}
                name="Controller"
                className="dropdown-item p-3 rounded-0 "
              >
                Controller
              </Button>
            </li>
            <li>
              <Button
                onClick={onTrigger}
                name="Semiconductor"
                className="dropdown-item p-3 rounded-0 "
              >
                Semiconductor
              </Button>
            </li>

            <li>
              <Button
                onClick={onTrigger}
                name="Fan"
                className="dropdown-item p-3 rounded-0 "
              >
                Fan
              </Button>
            </li>
            <li>
              <Button
                onClick={onTrigger}
                name="Others"
                className="dropdown-item p-3 rounded-0 "
              >
                Others
              </Button>
            </li>
          </ul>
          <input
            onChange={props.changes}
            type="text"
            className="form-control"
            placeholder={"Search Products"}
            aria-label="Search Products"
            aria-describedby="basic-addon2"
          />
          {/* <span
            className="category input-group-text btn btn-outline-secondary "
            id="basic-addon2"
          >
            <FontAwesomeIcon icon={faSearch} />
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
