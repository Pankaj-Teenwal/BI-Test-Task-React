import { Chart } from "react-google-charts";
import { GeoChartWrapper } from "./geoChartStyles";

export function GeoChart(chartdata) {
  const calculateTotalCase = () => {
    const { totalCase } = chartdata.chartdata;

    let totalCalculatedCase = 0;

    for (let i = 0; i < totalCase.length; i++) {
      totalCalculatedCase += totalCase[i];
    }

    return totalCalculatedCase;
  };

  const data = [
    ["Country", "Case"],
    ["India", calculateTotalCase()],
  ];

  return (
    <GeoChartWrapper>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="480px"
        height="100%"
        data={data}
        options={{
          colorAxis: {
            colors: ["#F7594C", "#F7594C"],
          },

          legend: "none",
        }}
      />
    </GeoChartWrapper>
  );
}
