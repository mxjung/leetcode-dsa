/**
 * @param {number} n
 * @return {number}
 *
 * Recursion with Memoization
 * 09/29/20
 */
var climbStairs = function(n) {
    const combinations = [0, 1, 2];

    const findCombination = (steps) => {
        // memoised
        if (combinations[steps]) {
            return combinations[steps];
        }

        combinations[steps] = findCombination(steps-1) + findCombination(steps-2);
        return combinations[steps];
    }
    return findCombination(n);
};