const canSum = (target, numbers, memo={}) => {
    if (target in memo) {
        return memo[target];
    }

    if (target == 0 || memo[target]) {
        return true;
    }

    if(target < 0) {
        return false;
    }

    
    for(let i of numbers) {
        const rem = target - i;
        if (canSum(rem, numbers, memo)){
            memo[`${target}`] = true;
            console.log(memo)
            return true;
        }
    }
    console.log(memo)
    
    memo[`${target}`] = false;
    return false;
}


// console.log(canSum(7, [2,4,1]))
// console.log(canSum(7, [5,3,4,7]))
// console.log(canSum(7, [2,4,]))
// console.log(canSum(8, [2,5,3]))
console.log(canSum(300, [7,14]))