import React from "react";
import {
  CountryCount,
  CountryWrapper,
  MapTitle,
  WorldMapWrapper,
  CountryName
} from "./worldMapStyles";

const WorldMap = () => {
  return (
    <WorldMapWrapper>
      <MapTitle>
        <p>World Map</p>
      </MapTitle>
      <CountryWrapper>
        <CountryCount>
          311,637
          <CountryName>USA</CountryName>
        </CountryCount>
        <CountryCount>
          130,578
          <CountryName>Spain</CountryName>
        </CountryCount>
        <CountryCount>
          445,853
          <CountryName>UAE</CountryName>
        </CountryCount>
        <CountryCount>
          799,645
          <CountryName>UK</CountryName>
        </CountryCount>
        <CountryCount>
          785,154
          <CountryName>AUS</CountryName>
        </CountryCount>
        <CountryCount>
          124,125
          <CountryName>Russia</CountryName>
        </CountryCount>
        
      </CountryWrapper>
    </WorldMapWrapper>
  );
};

export default WorldMap;
