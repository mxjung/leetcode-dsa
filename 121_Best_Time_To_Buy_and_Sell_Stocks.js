/**
 *  Say you have an array for which the ith element is the price of a given stock on day i.

    If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

    Note that you cannot sell a stock before you buy one.

 * Dynamic Programming
 * 09/30/20
 */

var maxProfit = function(prices) {
  let highestProfit = 0;
  let low = prices[0];

  for (let i=1; i<prices.length; i++) {
      if (prices[i] - low > highestProfit) {
          highestProfit = prices[i] - low;
      }

      // if we come across another value lower, change the low
      if (prices[i] < low) {
          low = prices[i];
      }
  }

  return highestProfit;
};