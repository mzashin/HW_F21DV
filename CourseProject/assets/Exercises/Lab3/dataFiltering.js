function filterData(csv_loc, country, property) {
  const parseTime = d3.timeParse("%Y-%m-%d");

  final_data = d3.csv(csv_loc).then(function (data) {
    data.forEach(function (d) {
      d.date = parseTime(d.date);
      d[property] = +d[property];
      //console.log("d[property]", d[property]);
    });

    filtered = data.filter(function (d) {
      return d.location == country;
    });

    var property_data = filtered.map(function (d) {
      return {
        property: d[property],
        date: d.date,
      };
    });

    var final_data = [];

    property_data.forEach(function (d) {
      var jsonData = {};
      jsonData["location"] = country;
      jsonData["property"] = property;
      jsonData["value"] = d.property;
      jsonData["date"] = d["date"];
      final_data.push(jsonData);
      //console.log("Json Data", jsonData);
    });

    console.log("Final Data", final_data);
    return final_data;
  });
  return final_data;
}

function dataFilterMultiPropertyChart(csv_loc, property_list, location_sel) {
  const parseTime = d3.timeParse("%Y-%m-%d");

  final_data = d3.csv(csv_loc).then(function (data) {
    var property_data = data.map(function (d) {
      var jsonData = {};
      jsonData["date"] = parseTime(d.date);
      jsonData["location"] = d.location;

      property_list.forEach(function (prop, i) {
        jsonData[prop] = +d[prop];
      });

      return jsonData;
    });

    console.log("Data", property_data);

    //filter data
    filtered_data = property_data.filter((d) => d.location == location_sel);

    var stats = [];

    filtered_data.forEach(function (data, i) {
      property_list.forEach(function (d, i) {
        var jsonData = {};
        jsonData["location"] = data.location;
        jsonData["value"] = data[d];
        jsonData["property"] = d;
        jsonData["date"] = data.date;
        stats.push(jsonData);
      });
    });

    console.log("Stats: ", stats);
    return stats;
  });
  return final_data;
}

function dataFilterMultiPropertyStackedChart(
  csv_loc,
  property_list,
  location_sel
) {
  const parseTime = d3.timeParse("%Y-%m-%d");

  final_data = d3.csv(csv_loc).then(function (data) {
    var property_data = data.map(function (d) {
      var jsonData = {};
      jsonData["date"] = parseTime(d.date);
      jsonData["location"] = d.location;

      property_list.forEach(function (prop, i) {
        jsonData[prop] = +d[prop];
      });

      return jsonData;
    });

    //filter data
    filtered_data = property_data.filter((d) => d.location == location_sel);
    console.log("Filetered Data: ", filtered_data);
    return filtered_data;
  });
  return final_data;
}
