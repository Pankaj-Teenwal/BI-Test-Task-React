import { Doughnut } from "react-chartjs-2";
import { PieChartWrapper } from "./pieChartStyles";

const PieChart = (chartdata) => {
  const data = {
    labels: ["Total Case", "Recovered Case", "Total Death"],
    datasets: [
      {
        label: ["Total Case", "Recovered Case", "Total Death"],
        data: [
          chartdata.chartdata.totalCalculatedCase,
          chartdata.chartdata.totalRecoveredCase,
          chartdata.chartdata.totalCalculatedDeath,
        ],
        backgroundColor: ["#04C4FA", "#8BC930", "#FA4A5C"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
    cutout: "70%",
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <PieChartWrapper>
      <Doughnut data={data} options={options} />
    </PieChartWrapper>
  );
};

export default PieChart;
