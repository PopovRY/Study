function sumMul(n,m){
    let sum = 0;
    if(m<n) {
        return 'INVALID'
    } else {
        for (let i=n; i<m; i++) {
            if (i%n === 0) {
                sum+=i
            }
        }
    }
    return sum;
}
