const fibMemo = (n, memo = {}) => {
    if (n <= 2) {
        return 1
    } else if ( n in  memo ) {
        return memo[n]
    }
    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    return memo[n]
}

console.log('Fib(5) => ', fibMemo(5));
console.log('Fib(70) => ', fibMemo(70));
console.log('Fib(29) => ', fibMemo(29));