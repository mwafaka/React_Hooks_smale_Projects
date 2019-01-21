import React, { Component } from "react";
export class Finder extends Component {
  state = {
    user: ""
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            style={{ flex: "10", padding: "5px" }}
            placeholder="Add to do ..."
            value={this.state.user}
            onChange={this.props.onChange}
          />
          <input
            type="submit"
            value="submit"
            className="btn"
            style={{ flex: 1 }}
          />
        </form>
      </div>
    );
  }
}

export default Finder;
