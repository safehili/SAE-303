let data = nb_boulangerie_idf.map((item) => item.nombre) // Donnée, propriété data
let labels = nb_boulangerie_idf.map((item) => item.dpt) // Libellé, propriété labels

const ctx = document.getElementById('myChart');
      
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Nombre de boulangers par département en Île-de-France',
      data: data,
      backgroundColor: [ 
        'rgba(255, 222, 117, 0.2)',
        'rgba(255, 222, 117, 0.2)',
        'rgba(255, 222, 117, 0.2)',
        'rgba(255, 222, 117, 0.2)',
        'rgba(255, 222, 117, 0.2)',
        'rgba(255, 222, 117, 0.2)',
        'rgba(255, 222, 117, 0.2)',
        'rgba(255, 222, 117, 0.2)',
      ],
      borderWidth: 1
      ,
      borderColor: [ 
        'rgba(240, 195, 0)',
        'rgba(240, 195, 0)',
        'rgba(240, 195, 0)',
        'rgba(240, 195, 0)',
        'rgba(240, 195, 0)',
        'rgba(240, 195, 0)',
        'rgba(240, 195, 0)',
        'rgba(240, 195, 0)'
      ],
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