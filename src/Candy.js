var CandyCounter = function () {

};
let GummiesTotal = 1000;
let ReecesTotal = 1000;
let Reeces;
let Gummies;


var TakeCandy = function (CandyType, total) {
  if (CandyType === Gummies) {
    GummiesTotal - total;
  }
  if (CandyType === Reeces) {
    ReecesTotal - total;
  } else return;
};

var AddCandy = function (CandyType, total) {
  if (CandyType === Gummies) {
    GummiesTotal + total;
  }
  if (CandyType === Reeces) {
    ReecesTotal + total;
  } else return;
};
