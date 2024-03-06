import { Line } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js/auto";
import { ChartNumberGreen, ChartWrapper, P } from "./cardChartStyles";

const RecoveredChart = (chartdata) => {
  const data = {
    labels: chartdata.chartdata.dates,
    datasets: [
      {
        label: "Recovered Case",
        data: chartdata.chartdata.recoveredCase,
        tension: 0.4,
        borderColor: "rgba(172,208,131)",
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
  };

  return (
    <ChartWrapper>
      <Line data={data} options={options} />
      <div>
        <ChartNumberGreen>
          {chartdata.chartdata.totalRecoveredCase}
        </ChartNumberGreen>
        <P>Recovered</P>
      </div>
    </ChartWrapper>
  );
};

export default RecoveredChart;
