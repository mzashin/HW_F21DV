function enableOutput(id) {
  inputTagName = "e" + id + "_ci";
  outputTagName = "e" + id + "_co";
  document.getElementById(outputTagName).style.display = "block";
}
function enableAllOutput(classname) {
  var elems = document.getElementsByClassName(classname);
  for (var i = 0; i < elems.length; i += 1) {
    elems[i].style.display = "block";
  }
}

function resetAllOutput(classname) {
  var elems = document.getElementsByClassName(classname);
  for (var i = 0; i < elems.length; i += 1) {
    elems[i].style.display = "none";
  }
}

function loadOutput(id) {
  // for (var i = 0; i < id.length; i += 1) {
  templateFileName = "./assets/Exercises/iframeTemplate.html";
  var inputTagName = "e" + id + "_ci";
  var outputTagName = "e" + id + "_co";
  d3.text(templateFileName).then(function (data) {
    console.log(data);
    console.log(inputTagName);
    console.log(outputTagName);
    document.getElementById(outputTagName).innerHTML = data.replace(
      /<replace_id>/g,
      id
    );
  });
  // }
}

function loadExerciseInput(id) {
  // for (var i = 1; i < 4; i += 1) {
  exerciseFileName = "./assets/Exercises/Exercise_" + id + ".html";
  console.log(exerciseFileName);
  var inputTagName = "e" + id + "_ci";
  var outputTagName = "e" + id + "_co";
  d3.text(exerciseFileName).then(function (data) {
    console.log(data);
    bodyData = data.split("<!--BODY_CHECKPOINT-->")[1];
    console.log(inputTagName);
    console.log(document.getElementById(inputTagName).innerHTML);
    document.getElementById(inputTagName).innerHTML =
      "<pre>" +
      bodyData
        .replace(/<!-- Code INPUT BEGIN-->/g, " ")
        .replace(/<!-- Code INPUT END-->/g, " ")
        .replace(/</g, "&lt")
        .replace(/>/g, "&gt") +
      "</pre>";
  });

  // }
}

/*Load All Output/Input*/
// loadOutput(["1", "2", "3"]);
// loadExerciseInput(["1", "2", "3"]);
