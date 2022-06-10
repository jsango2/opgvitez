import React from "react";

import { WrapDown, WrapBox, Box } from "./style.js";
import useWindowSize from "../../useWindowSize";

function Legend() {
  const size = useWindowSize();
  // console.log("isOpen?", isModalOpen);

  return (
    <WrapDown>
      <WrapBox>
        <Box color="#BDBDBD" />
        Occupied
      </WrapBox>
      <WrapBox>
        <Box color="#2C5F7B" />
        Selected
      </WrapBox>
      <WrapBox>
        <Box color="#68BFE2" />
        Free
      </WrapBox>
    </WrapDown>
  );
}

export default Legend;
