import React from "react";
import { Button } from "./style.js";

function index({ text, handleOnClick, buttonType }) {
  return (
    <Button onClick={handleOnClick} buttonType={buttonType}>
      {text}
    </Button>
  );
}

export default index;
