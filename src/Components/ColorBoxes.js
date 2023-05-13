import React, { Component } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

class ColorBoxes extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    setTimeout(() => {
      this.setState({ clicked: false });
    }, 2000);
    this.setState({ clicked: true });
  };
  render() {
    console.log(this.props);
    return (
      <CopyToClipboard
        text={this.props[`${this.props.copyValue}`]}
        onCopy={this.handleClick}
      >
        <div
          style={{ backgroundColor: this.props.hex }}
          id={this.props.className}
          className={`show ${this.state.clicked ? "center" : ""}`}
        >
          {this.props.mini ? (
            ""
          ) : (
            <div>
              <button className={`copy-btn`}>
                {this.state.clicked ? "copied" : "copy"}
              </button>
              <span className={`name`}>{this.props.name}</span>
              {this.props.single ? (
                ""
              ) : (
                <Link to={`/seemore/${this.props.id}/${this.props.name}`}>
                  <button
                    className={`see-more`}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    More
                  </button>
                </Link>
              )}
            </div>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBoxes;
