function sumMul(n,m){
    if(m<=n)  return 'INVALID'
    let sum = 0;
    for (let i=n; i<m; i++) {
        if (i%n === 0) {
            sum+=i
        }
    }
    return sum;
}
