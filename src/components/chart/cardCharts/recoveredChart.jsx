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
    categoryPercentage: 0.3,
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <ChartWrapper>
      <div style={{ height: "70%" }}>
        <Line data={data} options={options} />
      </div>

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
