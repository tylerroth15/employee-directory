import React from "react";
import SearchResultContainer from "./Jumbotron";

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Container;
