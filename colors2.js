var newData = d3.csv("colors.csv");

  var drawChart=function(colors)
  {
  var width=400;
  var height=200;
  var barWidth=width/colors.length;

  var svg=
  d3.select("svg")
  .attr("width", width)
  .attr("height", height)

  svg.selectAll("rect")
  .data(colors)
  .enter()
  .append("rect")
  .attr("x", function(d,i)
    {return i*barWidth;})
  .attr("y", function(d)
    {return height-d.num*20})
  .attr("width", barWidth)
  .attr("height", function(d)
    {return d.num*20})
  .attr("fill", function(d)
    {return d.colors;})}

    newData.then(function(newData)
    {
    drawChart(newData);
      },
    function(err){console.log(err);}
    )
