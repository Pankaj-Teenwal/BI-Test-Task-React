import { Bar } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js/auto";
import { BarChartWrapper, P } from "./barChartStyles";

const BarChart = (chartdata) => {
  const data = {
    labels: chartdata.chartdata.dates,
    datasets: [
      {
        label: "Recovered In 2020",
        data: chartdata.chartdata.recoveredCase,
        backgroundColor: "rgba(111,186,20,0.5)",
        borderColor: "rgba(111,186,20,1)",
        borderWidth: 1,
        type: "bar",
        order: 1,
      },
      {
        label: "Death In 2020",
        data: chartdata.chartdata.death,
        backgroundColor: "rgba(255,0,0,0.5)",
        borderColor: "rgba(255,0,0,1)",
        borderWidth: 1,
        type: "line",
        order: 2,
      },
    ],
  };

  const options = {
    scales: {
      
      y: {
        display: true,
        suggestedMin: 0,
        suggestedMax: 1000000,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },

    categoryPercentage: 0.3,
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <BarChartWrapper>
      <div>
        <P>Covid-19 Statistics</P>
      </div>
      <Bar data={data} options={options} />
    </BarChartWrapper>
  );
};

export default BarChart;
