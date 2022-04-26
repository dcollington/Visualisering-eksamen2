
//Etiketter langs x-akse
const labels = [
  'Cirkle K',
  'Fortum',
  'Mer',
  'Kople',
  'Recharge',
  'Eviny',
  'Lyse',
  'E.on',
  'Ishavsveien'
];



//Datasett for 2 biler med sommer- og vinterpriser
const data = {
  labels: labels,
  datasets: [{
    label: 'Hyundai Kona Sommer',
    backgroundColor: '#565F65',
    data: [255, 150, 246, 235, 157, 220, 220, 179, 190],
    borderWidth: 2,
    borderRadius: 5,
    borderSkipped: false,
  },

  {
    label: 'Hyundai Kona Vinter',
    backgroundColor: '#C0C2CA',
    data: [255, 225, 342, 258, 235, 248, 248, 269, 286],
    borderWidth: 2,
    borderRadius: 5,
    borderSkipped: false,
    
  },

  {
    label: 'Volkswagen e-Golf Sommer',
    backgroundColor: '#459E8F',
    data: [96, 85, 129, 97, 89, 94, 94, 102, 108],
    borderWidth: 2,
    borderRadius: 5,
    borderSkipped: false,
    hidden: true,
  },
{
  label: 'Volkswagen e-Golf Vinter',
  backgroundColor: '#73D8C5',
  data: [96, 113, 165, 106, 119, 104, 104, 136, 144],
  borderWidth: 2,
  borderRadius: 5,
  borderSkipped: false,
  hidden: true,
}]

};


//Konfigurason av visualisering
const config = {
  type: 'bar',
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Hva koster det å lade elbilen?',
        font: {
          size: 30,
          weight: 'bold',
        }
      },

        subtitle: {
          display: true,
          text: 'Velg informasjon ved å trykke på bilen du vil se',
        
          font: {
            size: 18,

          },
          padding: {
            bottom: 50
            
          }
        }
      },
      layout:{
        padding: 200
      },
      hoverBorderWidth:2,
      hoverBorderColor:'#777'
      
    }
  
 
};

//Instansiering av visualisering
const myChart1 = new Chart(
  document.getElementById('myChart'),
  config
);