window.onload = function() {

    var data = [55000, 48000, 27000, 66000, 90000];

    var margin = { top: 10 , right : 10 , bottom : 10 , left : 10}
    const svg = d3.select("#mySVG")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 1000 + margin.top + margin.bottom);
    

    var y = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, 400]);

    svg.append("g")
        .attr("transform", "translate(50, 50)")
        .call(d3.axisRight(y));

    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", 50)
        .attr("cy", function(d) {
            return 50 + y(d);
        })
        .attr("r", 8)
        .attr("fill", "red");

};