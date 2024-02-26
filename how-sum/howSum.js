const howSum = (target, numbers, memo={}) => {
    if(target in memo) {
        return memo[target];
    }
    if(target == 0 ) {
        return [];
    } else if (target < 0) {
        return null;
    }

    for (const num of numbers) {
        const rem = target - num;

        const ret = howSum(rem, numbers, memo);

        if(ret != null) {
            memo[target] = [...ret, num];
            console.log(memo)
            return memo[target]
        }
    }
    memo[target] = null;
    return null;
}

console.log(howSum(7, [5, 3, 4, 7]))
// console.log(howSum(7, [2,4,1]))
// console.log(howSum(7, [2,4]))
console.log(howSum(300, [7,14]))
