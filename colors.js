var dataP = d3.json("colors.json");
dataP.then(function(data)
{console.log("data", data);
},
function(err){console.log(err);}
)
