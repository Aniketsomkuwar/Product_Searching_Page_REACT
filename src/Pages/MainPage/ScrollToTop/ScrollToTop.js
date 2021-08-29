import { Component } from "react";
import React from "react";

class ScrollButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 900) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div  >
        {is_visible && (
          <div id="scrollToTopBtn" onClick={() => this.scrollToTop()}>
            <i className="fas fa-arrow-up"></i>
          </div>
        )}
      </div>
    );
  }
}

export default ScrollButton;