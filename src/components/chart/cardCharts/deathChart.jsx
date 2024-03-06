import { Line } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js/auto";

import { P, ChartWrapper, ChartNumberRed } from "./cardChartStyles";

const DeathChart = (chartdata) => {
  const data = {
    labels: chartdata.chartdata.dates,
    datasets: [
      {
        label: "Death",
        data: chartdata.chartdata.death,
        tension: 0.4,
        borderColor: "rgba(144,67,41)",
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    categoryPercentage: 0.3,
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <ChartWrapper>
      <div style={{height:"70%"}}>
        <Line data={data} options={options} />
      </div>

      <div>
        <ChartNumberRed>
          {chartdata.chartdata.totalCalculatedDeath}
        </ChartNumberRed>
        <P>Death</P>
      </div>
    </ChartWrapper>
  );
};

export default DeathChart;
