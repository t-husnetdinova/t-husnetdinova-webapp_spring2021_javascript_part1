// function factorize that returns the factors of an integer
// every number that is a factor is pushed into an array
function factorize(n) {
    var factors = [];
    for(var i = 0; i <= n; i++) {
        if(n % i == 0) {
            factors.push(i)
        }
    }
    return factors;
}
