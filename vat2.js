const vatCalculation = function(grossPrice, taxRate) {
    const netPrice = grossPrice / (taxRate / 100 + 1);
    const vat = grossPrice - netPrice;
    return [netPrice, vat];
}

const calculation = vatCalculation(121, 21);
console.log(calculation);