const shortSum = (target, numbers, memo={}) => {
    // if(target in memo) {
    //     return memo[target];
    // }
    if(target == 0 ) {
        return [];
    } else if (target < 0) {
        return null;
    }

    for (const num of numbers) {
        const rem = target - num;

        const ret = shortSum(rem, numbers, memo);

        console.log(target, rem, num)

        if(ret != null) {
            ret.push(num);
            console.log(ret)
            // return memo[target]
        }
    }
    // memo[target] = null;
    return null;
}

console.log(shortSum(7, [5, 3, 4, 7]))
// console.log(shortSum(7, [2,4,1]))
// console.log(shortSum(7, [2,4]))
// console.log(shortSum(300, [7,14]))
