import React, { Component } from "react";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>
          Developed by{" "}
          <a
            href="https://www.twitter.com/MYousufSoomro"
            target="_blank"
            rel="noopener noreferrer"
          >
            M Yousuf Soomro
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
