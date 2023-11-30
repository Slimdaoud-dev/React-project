
import { Bar } from 'react-chartjs-2';

const TwoSidedBarChart = () => {
  // Données pour les deux côtés du graphique
  const data = {
    labels: ['Catégorie 1', 'Catégorie 2', 'Catégorie 3', 'Catégorie 4', 'Catégorie 5'],
    datasets: [
      {
        label: 'Côté gauche',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        data: [12, 19, 3, 5, 2],
      },
      {
        label: 'Côté droit',
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        data: [7, 11, 5, 8, 3],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Bar Chart à deux côtés</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TwoSidedBarChart;
