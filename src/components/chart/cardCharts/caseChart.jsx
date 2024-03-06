import { Line } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js/auto";
import { ChartNumber, ChartWrapper, P } from "./cardChartStyles";

const CaseChart = (chartdata) => {
  const data = {
    labels: chartdata.chartdata.dates,
    datasets: [
      {
        label: "Case In 2020",
        data: chartdata.chartdata.totalCase,
        tension: 0.5,
        borderColor: "rgba(111,186,200)",
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
        <ChartNumber>{chartdata.chartdata.totalCalculatedCase}</ChartNumber>
        <P>Cases</P>
      </div>
    </ChartWrapper>
  );
};

export default CaseChart;
