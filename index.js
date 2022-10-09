var subject01 = 9;
var subject02 = 9;
var subject03 = 9;
var arA = 2;
var arB = 1;
var arC = 0.5;
var arX = 0;
var object01 = 2.5;
var object02 = 1.5;
var object03 = 1;
var object04 = 0;
var requirPoi = 25;
var totalPoi = 0;

// ExOne: recruit students
// events: click, mouseover, mouseout, input, keyup, keydown, ...
// Input:
//process:
//output:
function ex01(subj01, subj02, subj03, ar, obj) {
  subj01 = 0;
  subj02 = 9;
  subj03 = 9;
  ar = 2;
  obj = 2.5;
  totalPoi = subj01 + subj02 + subj03 + ar + obj;
  if (subj01 === 0 || subj02 === 0 || subj03 === 0 || totalPoi < 25) {
    console.log("fail");
  } else {
    console.log("congra!!! ");
  }
}
ex01();

// Ex02
// Input:
// process:
// output:

function ex02() {
  var cost = 0;
  var KW = 360;
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
  console.log("Tiền điện phải trả ", cost);
}
ex02();
