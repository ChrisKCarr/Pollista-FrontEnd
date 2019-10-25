import React from "react";
import Create from "./Create";
const Edit = props => {
  return <Create history={props.history} poll={props.location.state.poll} />;
};

export default Edit;
