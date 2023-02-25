import React, { useState, useEffect } from "react";
import {
  Wrap,
  LegendTitle,
  WrapEachLegend,
  NasProizvod,
  Partner,
  Close,
} from "./style.js";
import { GiFarmer } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";

function legend({}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Wrap>
        <WrapEachLegend>
          <NasProizvod>
            <GiFarmer />
          </NasProizvod>
          <LegendTitle>Naš proizvod</LegendTitle>
        </WrapEachLegend>
        <WrapEachLegend>
          <Partner>
            <FaHandsHelping />
          </Partner>
          <LegendTitle>Proizvod partnera</LegendTitle>
        </WrapEachLegend>
      </Wrap>
    </>
  );
}

export default legend;
