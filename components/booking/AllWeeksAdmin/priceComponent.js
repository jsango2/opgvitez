import React from "react";
import {
  WrapPrice,
  WrapUp,
  YourPrice,
  Line,
  PriceFrom,
  Button,
  Price,
  WrapDown,
  WrapBox,
  Box,
} from "./style.js";

function PriceComponent({ price }) {
  return (
    <WrapPrice>
      <WrapDown>
        <WrapBox>
          <Box color="#BDBDBD" />
          Occupied
        </WrapBox>
        {/* <WrapBox>
          <Box color="#2C5F7B" />
          Selected
        </WrapBox> */}
        <WrapBox>
          <Box color="#3275A1" />
          Free
        </WrapBox>
      </WrapDown>
    </WrapPrice>
  );
}

export default PriceComponent;
