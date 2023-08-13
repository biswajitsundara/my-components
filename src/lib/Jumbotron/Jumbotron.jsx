import React from "react";
import "./Jumbotron.css";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
  const { title, text, button } = props;

  return (
    <div className="jumbotron">
      <h1>{title}</h1>
      <p>{text}</p>
      <button className="btn">{button}</button>
    </div>
  );
};

export default Jumbotron;

Jumbotron.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
};
