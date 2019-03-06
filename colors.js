var dataP = d3.json("colors.json");

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
  {return d.color;})}


var drawLabels=function(colors)
{
  var width=400;
  var height=200;
  var barWidth=width/colors.length;

  var svg=
  d3.select("svg")
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

dataP.then(function(data)
{
drawChart(data);
drawLabels(data);
createLegend(data);
},
function(err){console.log(err);}
)

var createLegend=function(data){
var table=d3.select("h1").append("table");
var cols=table.selectAll("tr")
.data(dataP)
.enter()
.append("tr");
cols.append("td").text(function(d){return d.color})
.style("background", function(d){
  if (d.color=="blue"){return "blue"}
})}
