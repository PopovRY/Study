function findAverage(array) {
    let sum = 0;
    if (array.length === 0) return 0;
    for (let i=0; i<array.length; i+=1) {
        sum += array[i]
    }
    return sum/array.length;
}
