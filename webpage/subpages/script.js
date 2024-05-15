
var layout = {
    title: {
      text:'Vandtemperatur',
      font: {
        family: 'Courier New, monospace',
        size: 24
      },
      xref: 'paper',
      x: 0.05,
    },
    xaxis: {
      title: {
        text: 'Dato',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      },
    },
    yaxis: {
      title: {
        text: 'Temperatur [&#8451;]',   // degree celcius unicode
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      }
    }
  };



$("button").click(function(){
    $.get("http://127.0.0.1:8000/temperature", function(data, status){
      var plotType = document.getElementById("plottype").value 
      console.log(data);
      console.log(status)

      var trace = {
        x: data["dates"],
        y: data["temperature"],
        type: plotType
      };
      
     Plotly.newPlot('tester', [trace], layout);
    });
  });

