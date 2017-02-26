window.onload = function(){
	Main();
};
function Main()
{
	var objs = [
		{"id": 0, "name": "木村", "age": 25},
		{"id": 1, "name": "谷口", "age": 12},
		{"id": 2, "name": "長澤", "age": 53}];
	var table = d3.select("body").insert("table",":first-child");
	var thead = table.append("thead");
	var tbody = table.append("tbody");
	tbody.select("tbody").data(objs).enter().each(function(d,j){createTable(d);});

	function createTable(obj)
	{
		tbody.selectAll("tr")
			.data(d3.entries(obj))
			.enter()
			.append("tr")
			.append("th").text(function(d){return d.key;});
		tbody.selectAll("tr")
			.append("td")
			.text(function(d){return d.value;});  
	}
}
