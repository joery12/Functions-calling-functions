const adult = function(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const greeting = function(age) {
    const check = adult(age);
    if (check === true) {
        console.log("Hello there")
    } else {
        console.log("Hello kiddo")
    }
};

greeting(17);