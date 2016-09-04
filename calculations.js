var AvocadoNamespace = AvocadoNamespace || {};

AvocadoNamespace.AvoCalc = function() {
  var avgCA = 1.08;
  var priceInput = document.getElementById("valueinput");
  var calculateEnter = document.getElementById("calculateenter");
  var priceOutput = document.getElementById("valueoutput");

  var calculatePrice = function() {
    var inputtedPrice = parseInt(document.getElementById('valueinput').value);
    var priceInAvocados = inputtedPrice / avgCA;
    return priceInAvocados;
  }

  var displayPrice = function() {
    var price = calculatePrice();
    console.log(price);
    priceOutput.innerHTML = price;
  }

  var init = function() {
    console.log("init has been called");
  }

  var oPublic = {
    init: init,
    avgCA: avgCA,
    priceInput: priceInput,
    calculateEnter: calculateEnter,
    displayPrice: displayPrice
  }

  return oPublic;

}();

console.log("Call Init");
var nameSpace = AvocadoNamespace.AvoCalc;
nameSpace.init();

nameSpace.calculateEnter.addEventListener("click", function() {
  console.log("Click WORKED");
  nameSpace.displayPrice();
});

nameSpace.priceInput.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    console.log("Enter worked!")
    nameSpace.displayPrice();
  }
});
