class math {

    sum(valA, ValB) {
        return valA + ValB
    }
    subtraction(valA, ValB) {
        return valA - ValB
    }
}


var mathInstanction = new math();

var result = mathInstanction.sum(2, 3);

console.log(result)