// First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

// So I grabbed Apple's stock prices from yesterday and put them in a list called stock_prices, where:

// The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
// The values are the price (in US dollars) of one share of Apple stock at that time.
// So if the stock cost $500 at 10:30am, that means stock_prices[60] = 500.

// Write an efficient function that takes stock_prices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

// For example:

//   stock_prices = [10, 7, 5, 8, 11, 9]

// get_max_profit(stock_prices)
// # Returns 6 (buying for $5 and selling for $11)

// No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.

const stockPrices = [10, 7, 5, 8, 11, 9]

module.exports = function getMaxProfit(stockPrices) {
    // iterate through stockprices to get the largest difference between subsequent values
        // for each price, find the largest price greater than it that are later in the day (larger index)

    if (stockPrices.length < 2) {
        return 'Requires at least 2 stock prices to make a profit'
    }

    let minPrice = stockPrices[0]
    let maxProfit = stockPrices[1] - stockPrices[0]

    for (let i = 1; i < stockPrices.length; i++) {
        const currentPrice = stockPrices[i]
        const profit = currentPrice - minPrice
        
        minPrice = Math.min(minPrice,currentPrice)
        maxProfit = Math.max(profit, maxProfit)
    }

    return maxProfit
}