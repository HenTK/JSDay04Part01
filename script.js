function Ex01() {
  var scoreSta = parseFloat(document.getElementById("numStandard").value);
  var scoreTest = parseFloat(document.getElementById("numTest").value);
  var Area = document.getElementById("numArea").value;
  var numArea = 0;
  var Obj = parseFloat(document.getElementById("numObj").value);
  var numObj = 0;

  if (Area === "A") {
    numArea = 2;
  } else if (Area === "B") {
    numArea = 1;
  } else if (area === "C") {
    numArea = 0.5;
  } else {
    numArea = 0;
  }
  switch (Obj) {
    case 1:
      numObj = 2.5;
      break;
    case 2:
      numObj = 1.5;
      break;
    case 3:
      numObj = 1;
      break;
    case 0:
      numObj = 0;
  }

  var totalPoi = scoreTest + numArea + numObj;

  if (totalPoi < scoreSta) {
    document.getElementById("numOut").value = "Bạn đã trượt =(((";
  } else {
    document.getElementById("numOut").value = "Bạn đã trúng tuyển =)))";
  }
}

// Ex02
// Input:
// process:
// output:

function Ex02() {
  var cost = 0;
  var name = document.getElementById("name").value;
  var KW = parseFloat(document.getElementById("numKW").value);
  if (KW <= 50) {
    cost += 50 * 500;
  } else if (KW <= 100) {
    cost += 50 * 500 + (KW - 50) * 650;
  } else if (KW <= 200) {
    cost += 50 * 500 + 50 * 650 + (KW - 100) * 850;
  } else if (KW <= 350) {
    cost += 50 * 500 + 50 * 650 + 100 * 850 + (KW - 200) * 1300;
  } else {
    cost += 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1300 + (KW - 350) * 1500;
  }
  document.getElementById("numOut").value =
    "Hộ " + name + " tổng tiền phải trả " + cost + " VND";
}
