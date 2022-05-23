var values = [8, 7, 6, 5, 4, 3, 2, 1]

function ordener() {
    let begin = 0;
    let finish = 8;
    let tmp;

    for (times = 0; times < 8; times++) {
        for (pos = begin; pos < finish - 1; pos++) {
            if (values[pos] > values[pos + 1]) {
                tmp = values[pos];
                values[pos] = values[pos + 1];
                values[pos + 1] = tmp;
            }
        }
    }
}
ordener();
console.log("Ordered vetor..");
console.log(values);