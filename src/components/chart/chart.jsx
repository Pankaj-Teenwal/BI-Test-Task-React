import { useEffect, useMemo, useState } from "react";
import CaseChart from "./cardCharts/caseChart";
import DeathChart from "./cardCharts/deathChart";
import RecoveredChart from "./cardCharts/recoveredChart";
import BarChart from "./barChart/barChart";
import { GeoChart } from "./geoChart/geoChart";
import PieChart from "./pieChart/pieChart";
import {
  BarChartWrapper,
  CardChartWrapper,
  PieGeoChartWrapper,
} from "./chartStyles";
import Aside from "../aside/aside";
import { ChartWrapper } from "./cardCharts/cardChartStyles";
import WorldMap from "../worldMap/worldMap";

const Chart = () => {
  const [apiResponse, setApiResponse] = useState({});

  useEffect(() => {
    const getResponse = async () => {
      try {
        let response = await fetch(
          "https://data.covid19india.org/v4/min/data.min.json"
        );
        response = await response.json();
        setApiResponse(response);
      } catch (error) {
        console.log(error);
      }
    };
    getResponse();
  }, []);

  const calculatedData = useMemo(() => {
    let totalCase = [];
    let recoveredCase = [];
    let death = [];
    let dates = [];

    let totalCalculatedCase = 0;
    let totalRecoveredCase = 0;
    let totalCalculatedDeath = 0;

    for (let item in apiResponse) {
      const date = apiResponse[item].meta.date;
      const { confirmed, deceased, recovered } = apiResponse[item].total;
      totalCalculatedCase += confirmed;
      totalCase.push(confirmed);
      recoveredCase.push(recovered);
      totalRecoveredCase += recovered;
      death.push(deceased);
      totalCalculatedDeath += deceased;
      dates.push(date);
    }
    return {
      totalCase: totalCase,
      recoveredCase: recoveredCase,
      death: death,
      dates: dates,
      totalCalculatedCase: totalCalculatedCase,
      totalRecoveredCase: totalRecoveredCase,
      totalCalculatedDeath: totalCalculatedDeath,
    };
  }, [apiResponse]);

  return (
    <div
      style={{
      
        display: "flex",
        gap: "6px",
        flexDirection: "column",
        paddingLeft: "6px",
      }}
    >
      <CardChartWrapper>
        <CaseChart chartdata={calculatedData} />
        <DeathChart chartdata={calculatedData} />
        <RecoveredChart chartdata={calculatedData} />
      </CardChartWrapper>
      <BarChartWrapper>
        <BarChart chartdata={calculatedData} />
      </BarChartWrapper>
      <PieGeoChartWrapper>
        <WorldMap/>
        <PieChart chartdata={calculatedData} />
        <GeoChart chartdata={calculatedData} />
      </PieGeoChartWrapper>
    </div>
  );
};

export default Chart;
