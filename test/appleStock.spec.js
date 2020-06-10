const getMaxProfit = require('../appleStock')

describe('#getMaxProfit', () => {
    it('should return max profit of 6 when the stock prices for the day are [10, 7, 5, 7, 11, 9]', () => {
        const stockPrices = [10, 7, 5, 7, 11, 9]
        expect(getMaxProfit(stockPrices)).toEqual(6)
    })
    it('should return max profit of 4 when the stock prices for the day are [18, 22, 13]', () => {
        const stockPrices = [18, 22, 13]
        expect(getMaxProfit(stockPrices)).toEqual(4)
    })
    it('should return max profit of 12 when the stock prices for the day are [8, 20, 2, 10]', () => {
        const stockPrices = [8, 20, 2, 10]
        expect(getMaxProfit(stockPrices)).toEqual(12)
    })
    it('should return max profit of 20 when the stock prices for the day are [30, 5, 25, 20]', () => {
        const stockPrices = [30, 5, 25, 20]
        expect(getMaxProfit(stockPrices)).toEqual(20)
    })
    it('should return max profit of 20 when the stock prices for the day are [15, 30, 5, 25]', () => {
        const stockPrices = [15, 30, 5, 25]
        expect(getMaxProfit(stockPrices)).toEqual(20)
    })
    it('should return max profit of -5 when the stock prices for the day are [30, 10, 5]', () => {
        const stockPrices = [30, 10, 5]
        expect(getMaxProfit(stockPrices)).toEqual(-5)
    })
    it('should return error if there is only 1 stock price', () => {
        const stockPrices = [30]
        expect(getMaxProfit(stockPrices)).toEqual('Requires at least 2 stock prices to make a profit')
    })
    it('should return max profit of 0 when the stock prices for the day are [30, 30, 30]', () => {
        const stockPrices = [30, 30, 30]
        expect(getMaxProfit(stockPrices)).toEqual(0)
    })
})