/*var newData = d3.csv("colors.csv", function(d){
  console.log(d.color, d.num, parseInt(d.num));
return{
  color: d.color,
  num: parseInt(d.num)
  }
})*/

var newData = d3.csv("colors.csv")

  var drawChart=function(colors)
  {
  var width=400;
  var height=200;
  var barWidth=width/colors.length;
console.log(height)
  var svg=
  d3.select("#csv")
  .attr("width", width)
  .attr("height", height)

  svg.selectAll("rect")
  .data(colors)
  .enter()
  .append("rect")
  .attr("x", function(d,i)
    {return i*barWidth;})
  .attr("y", function(d)
    {console.log(d)
      return height-d.num*20})
  .attr("width", barWidth)
  .attr("height", function(d){
        return d.num*20})
  .attr("fill", function(d)
    {return d.color;})
  }

  var drawLabels=function(colors)
  {
    var width=400;
    var height=200;
    var barWidth=width/colors.length;

    var svg=
    d3.select("#csv")
    .attr("width", width)
    .attr("height", height)
  svg.selectAll("text")
  .data(colors)
  .enter()
  .append("text")
  .text(function(d){
    return d.num;})
  .attr("x", function(d,i){
    return i * (width / colors.length) +25;
  })
  .attr("y", function(d){
    return height-(d.num*10)+7;
  })
  .attr("fill", "white");
  }


    newData.then(function(newData)
    {
      console.log("promise",newData)
    drawChart(newData);
    drawLabels(newData);
    drawLegend(newData);
      },
    function(err){console.log(err);}

  );

  var drawLegend=function(colors){
  legendWidth=50;
  legendHeight=50;
  legendBarWidth=50;
  var svg=
  d3.select("#legend")
  .attr("width", legendWidth)
  .attr("height", legendHeight)

  svg.selectAll("rect")
  .data(colors)
  .enter()
  .append("rect")
  .attr("x", "50")
  .attr("y", "50")
  .attr("width", "50")
  .attr("height", "50")
  .attr("fill", function(d)
    {return d.color;})
  }
