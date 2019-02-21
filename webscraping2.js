var script = document.createElement('script');
script.src = "https://d3js.org/d3.v5.js"
var body = document.getElementsByTagName("body")[0];

body.appendChild(script);

d3.selectAll("#main > ul > li").nodes().forEach(function(whatever){
  console.log(whatever.innerText);
})
