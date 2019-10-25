import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./Show.css";
import Nav from "./Nav";
import PollContext from "../contexts/PollContext";
import CanvasJSReact from "./Canvas/canvasjs.react";
import { runInThisContext } from "vm";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Show extends Component {
  //setting the context type to the object of poll context
  static contextType = PollContext;
  findPoll = () => {
    if (this.context.polls) {
      let results = this.context.polls.find(obj => {
        return obj._id === this.props.match.params.id;
      });
      return results;
    }
  };
  ifAuthor = () => {
    if (this.context.user) {
      if (this.poll.user._id === this.context.user._id) {
        return (
          <button
            type="button"
            className="Delete"
            onClick={e => this.handleDelete(this.poll)}
          >
            Delete Poll
          </button>
        );
      } else {
        return <div></div>;
      }
    }
  };

  //Create a button for each choice in poll
  renderChoiceList = poll => {
    return poll.choices.map(obj => {
      return (
        <button
          onClick={e => this.handleVote(this.poll, obj)}
          className="choices"
        >
          {obj.text}
        </button>
      );
    });
  };

  //Greates a request to the backend to delete this current poll.
  handleDelete = async (poll, obj) => {
    this.context.deletePoll(poll);
    this.props.history.push("/");
  };

  //Checks if user is logged in, if they are, they can vote on the poll.
  handleVote = async (poll, obj) => {
    if (window.sessionStorage.jwt) {
      obj.votes += 1;
      await this.context.voteOnPoll(poll);
    }
  };

  render() {
    this.poll = this.findPoll();
    if (this.poll) {
      // this.graphChoices = this.poll.choices.map(choice => {
      //   let votes = choice.votes;
      //   let label = choice.text;
      //   return `${`y: ${votes}, label: ${label}`}`;
      // });
      console.log("Poll: ", this.poll);

      // this.graphChoices = this.poll.choices.map(choice => {
      //   let votes = choice.votes;
      //   let label = choice.text;
      //   return `${`y: ${votes}, label: ${label}`}`;
      // });

      //Creates the list of datapoints which the graph will render.
      let dataPoints = [];
      let choiceList = this.poll.choices;
      for (var i = 0; i < this.poll.choices.length; i++) {
        let choiceObj = {
          y: `${choiceList[i].votes}`,
          label: `${choiceList[i].text}`
        };
        if (choiceList[i].votes > 0) {
          dataPoints.push(choiceObj);
        }
      }
      console.log("DataPoints: ", dataPoints);

      //These are the options for the graph
      const options = {
        exportEnabled: false,
        animationEnabled: true,
        //   title: {
        //     text: ""
        //   },
        data: [
          {
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{y} votes",
            dataPoints: dataPoints
          }
        ]
      };
      return (
        <div>
          <Route component={Nav} />

          <div className="ShowContainer">
            <h2 className="Title">{this.poll.question}</h2>
            <p>{this.poll.description}</p>
            <div>
              <h1></h1>
              <CanvasJSChart
                options={options}
                /* onRef={ref => this.chart = ref} */
              />
              {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
            <div className="choiceButtons">
              {this.renderChoiceList(this.poll)}
            </div>
            <p className="User">Created By: {this.poll.user.name}</p>

            <hr />
            {this.ifAuthor()}
          </div>
        </div>
      );
    }
    return (
      <div>
        <Route component={Nav} />
        <div>Loading</div>
      </div>
    );
  }
}

export default Show;
