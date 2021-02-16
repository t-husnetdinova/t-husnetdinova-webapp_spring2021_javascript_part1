function factorize(n) {
    var factors = [];
    for(var i = 0; i <= n; i++) {
        if(n % i == 0) {
            factors.push(i)
        }
    }
    return factors;
}
