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
    if (isNaN(inputtedPrice)) {
      inputtedPrice = 0;
    }
    var priceInAvocados = Math.round(inputtedPrice / avgCA);
    return priceInAvocados;
  }

  var calculateWeight = function(numAvocados) {
    var weight = Math.round(numAvocados * avgWeight);
    if (weight > Number.MAX_SAFE_INTEGER) {
      weight = "Those avocados are going to spoil";
    }
    return weight;
  }

  var displayResults = function() {
    var totalAvocados = calculatePrice();
    var totalWeight = calculateWeight(totalAvocados);
    // priceOutput.innerHTML = totalAvocados;
    priceOutput.innerHTML = totalAvocados + " avocados";
    weightOutput.innerHTML = totalWeight + " oz.";
  }

  var init = function() {
    var clickCalculate = calculateEnter.addEventListener("click", function(event) {
      event.preventDefault();
      nameSpace.displayResults();
    });

    var enterCalculate = priceInput.addEventListener("input", function(event) {
      event.preventDefault();
      nameSpace.displayResults();
    });
    console.log("The avocados are ripe!")
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

var nameSpace = AvocadoNamespace.AvoCalc;
nameSpace.init();
