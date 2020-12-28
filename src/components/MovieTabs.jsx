import React from "react";

class MovieTabs extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.sort_by !== this.props.sort_by) {
      return true;
    }
    return false;
  }

  render() {
    const { sort_by, updateSortBy } = this.props;

    const handleClick = (value) => {
      return (event) => {
        updateSortBy(value);
      };
    };

    const getClassByLink = (value) => {
      return `nav-link ${sort_by === value ? "active" : ""}`;
    };

    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div
            className={getClassByLink("popularity.desc")}
            onClick={handleClick("popularity.desc")}
          >
            Popularity desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassByLink("revenue.desc")}
            onClick={handleClick("revenue.desc")}
          >
            Revenue desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getClassByLink("vote_average.desc")}
            onClick={handleClick("vote_average.desc")}
          >
            Vote average desc
          </div>
        </li>
      </ul>
    );
  }
}

export default MovieTabs;
