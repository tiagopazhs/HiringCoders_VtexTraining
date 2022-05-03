var values = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function ordena() {
    let begin = 0;
    let finish = 0;
    let tmp;

    for (pos = begin; pos < finish - 1; pos++) {
        if (values[pos] > values[pos + 1]) {
            tmp = values[pos];
            values[pos] = values[pos + 1];
            values[pos + 1] = tmp;
        }
    }
}