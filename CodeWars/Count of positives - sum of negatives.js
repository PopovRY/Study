function countPositivesSumNegatives(input) {
    let output = [0,0];
    if (input == null || input.length == 0) {
        return []
    }
    for (let i of input) {
        if (i>0) {
            output[0] ++;
        } else {
            output[1] += i
        }
    }
    return output;
}
