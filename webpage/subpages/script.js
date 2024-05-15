$("button").click(function(){
    $.get("http://127.0.0.1:8000/temperature", function(data, status){
      console.log(data);
      console.log(status)

      var trace = {
        x: data["dates"],
        y: data["temperature"],
        type: 'scatter'
      };
      
     Plotly.newPlot('tester', [trace]);
    });
  });

