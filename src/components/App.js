import React from "react";
// import PropTypes from "prop-types";
import MovieList from "./MovieList";

const LikeCounts = props => {
  return <p>Количество лайков: {props.counts}</p>;
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      counts: 0
    };
  }

  addLike = () => {
    console.log("add like");
    this.setState({
      counts: this.state.counts + 1
    });
  };

  unLike = () => {
    console.log("un like");
    this.setState({
      counts: this.state.counts - 1
    });
  };

  render() {
    return (
      <div className="container">
        <LikeCounts counts={this.state.counts} />
        <MovieList addLike={this.addLike} unLike={this.unLike} />
      </div>
    );
  }
}

export default App;
