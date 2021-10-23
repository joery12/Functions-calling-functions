const vat = function(netPrice, taxRate) {
    const vatResult = netPrice * taxRate / 100;
    return vatResult;
};

const grossPrice = function(netPrice, taxRate) { //Voor deze functie hebben we dezelfde gegevens nodig, vandaar dezelfde parameters
    const totalPrice = vat(netPrice, taxRate) + netPrice;
    console.log(totalPrice);
};

const myPrice = grossPrice(100, 21);