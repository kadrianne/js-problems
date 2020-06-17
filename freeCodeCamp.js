// 2020.06.17
    // FreeCodeCamp.org - Project Euler: Problem 2: Even Fibonacci Numbers
    function fiboEvenSum(n) {
        let sequence = [1,2]
        for (let i = 1; sequence[i] <= n; i++) {
            sequence.push(sequence[i]+sequence[i-1])
        }
        
        return sequence.reduce((acc,n) => {
            if (n % 2 == 0) {
                return acc + n
            } else {
                return acc
            }
        },0)
    }

    // FreeCodeCamp.org - Project Euler: Problem 1: Multiples of 3 and 5
    function multiplesOf3and5(number) {
        let multiples = []
        for(let i = 3; i < number; i++){
            if (i % 3 == 0 || i % 5 == 0) {
            multiples.push(i)
            }
        }
        return multiples.reduce((sum=0,n) => sum + n)
    }
