var AvocadoNamespace = AvocadoNamespace || {};

AvocadoNamespace.AvoCalc = function() {
  var avgCA = 1.08;
  var avgWeight = 7.6;
  var priceInput = document.getElementById("valueinput");
  var calculateEnter = document.getElementById("calculateenter");
  var priceOutput = document.getElementById("priceoutput");
  var weightOutput = document.getElementById("weightoutput");

  var calculatePrice = function() {
    var inputtedPrice = parseInt(document.getElementById('valueinput').value);
    var priceInAvocados = Math.round(inputtedPrice / avgCA);
    return priceInAvocados;
  }

  var calculateWeight = function(numAvocados) {
    var weight = Math.round(numAvocados * avgWeight);
    return weight;
  }

  var displayResults = function() {
    var totalAvocados = calculatePrice();
    var totalWeight = calculateWeight(totalAvocados);
    // priceOutput.innerHTML = totalAvocados;
    priceOutput.innerHTML = totalAvocados;
    weightOutput.innerHTML = totalWeight + " oz.";
  }

  var init = function() {
    console.log("App Ready");
    var clickCalculate = calculateEnter.addEventListener("click", function(event) {
      event.preventDefault();
      nameSpace.displayResults();
    });

    var enterCalculate = priceInput.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode == 13) {
        nameSpace.displayResults();
      }
    });
  }

  var oPublic = {
    init: init,
    avgCA: avgCA,
    priceInput: priceInput,
    calculateEnter: calculateEnter,
    displayResults: displayResults
  }

  return oPublic;

}();

console.log("Call Init");
var nameSpace = AvocadoNamespace.AvoCalc;
nameSpace.init();
