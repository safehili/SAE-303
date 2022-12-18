let data = nb_boulangerie_idf.map((item) => item.nombre) // Donnée, propriété data
let labels = nb_boulangerie_idf.map((item) => item.dpt) // Libellé, propriété labels

const ctx = document.getElementById('myChart');
      
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Nombres de boulangers par département en Ile de France',
      data: data,
      backgroundColor: [ 
        'rgba(255, 26, 104, 0.2)',
        'rgba(26, 26, 104, 0.2)',
        'rgba(26, 255, 104, 0.2)',
        'rgba(104, 26, 255, 0.2)',
        'rgba(255, 26, 26, 0.2)',
        'rgba(26, 104, 255, 0.2)',
        'rgba(200, 255, 104, 0.2)',
        'rgba(255, 104, 104, 0.2)',
      ],
      borderWidth: 1
      
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});