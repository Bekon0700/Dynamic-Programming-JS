// without Memoization
// const gridT = (m, n) => {
//     if(m == 0 || n == 0) {
//         return 0;
//     } else if (m == 1 && n == 1) {
//         return 1;
//     }

//     return gridT(m-1, n) + gridT(m, n-1);
// }


// with Memoization
const gridT = (m, n, memo={}) => {
    let key = `${m},${n}`;

    if(m == 0 || n == 0) {
        return 0;
    } else if (m == 1 && n == 1) {
        return 1;
    } else if (key in memo) {
        return memo[key];
    }
    
    memo[key] = gridT(m-1, n, memo) + gridT(m, n-1, memo);
    return memo[key];
}

console.log(gridT(18, 18));