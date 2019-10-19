import React, { Component } from "react";
import "./Create.css";
import { Link } from "react-router-dom";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = { pollName: "", question:"", choices:"" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    console.log("poll submitted " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="jumbotron">
        <button variant="primary" size="lg" >
          <Link className="homebtn"to="/">Home</Link>
        </button>
        <h1 className="create">Create a new poll</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            <h3>Poll Name: </h3> 
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              name="pollName"
            />
          </label>
          <br></br>
          <label>
            <h3>Question: </h3>
            <input
              type="text"
              value={this.state.question}
              onChange={this.handleChange}
              name="question"
            />
          </label>
          <br></br>
          <label>
           <h3>Choices: </h3> 
            <input
              type="text"
            //   value={this.state.value}
              onChange={this.handleChange}
              name="choices"
            />
            <br/>
             <input
              type="text"
            //   value={this.state.value}
              onChange={this.handleChange}
              name="choices"
            />
             <br/>
             <input
              type="text"
            //   value={this.state.value}
              onChange={this.handleChange}
              name="choices"
            />
              <br/>
             <input
              type="text"
            //   value={this.state.value}
              onChange={this.handleChange}
              name="choices"
            />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Create;
