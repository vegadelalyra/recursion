
/*************************************************
 * "WITH GREAT POWER COMES GREAT RESPONSIBILITY" *
 *************************************************/

// Reason to use (not abuse) Recursion
// 1) Less Code
// 2) Elegant Code (aka Pleasing to Look at)
// 3) Increased Readability

// Reasons to NOT use Recursion
// 1) Performance
// 2) Possibly more difficult to debug (aka follow the logic)
// 3) Is the Readability Improved? 

/************************************************
 * THE STANDARD EXAMPLE: THE FIBONACCI SEQUENCE *
 ************************************************/
// 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.

// Without Recursion: 
console.log('\nFibonacci Without Recursion')
const fibonacci = (num, array = [0, 1]) => {
    while (num > 2) {
        const [nextToLast, last] = array.slice(-2)
        array.push(nextToLast + last)
        num -= 1
    }
    return array
}

console.log(...fibonacci(12))

// With Recursion
console.log('\nFibonacci With Recursion')
const fib = (num, array = [0, 1]) => {
    if (num <= 2) return array
    const [nextToLast, last] = array.slice(-2)
    return fib(num - 1, [...array, nextToLast + last])
}

console.log(...fib(12))

// What number is in the nth position of the Fibonacci Sequence?

// Without Recursion
console.log('\nFibonacci at nth position')
const fibonacciPos = pos => {
    if (pos < 2) return pos
    const seq = [0, 1]

    for (let i = seq.length; i <= pos; i++) {
        const [nextToLast, last] = seq.slice(-2)
        seq.push(nextToLast + last)
    }
    console.log('[Without Recursion]')    
    console.log('Position', pos)
    return seq[pos].toLocaleString()
}

console.log(fibonacciPos(14))

// With Recursion
console.log('\n[With Recursion]')
const fibPos = pos => {
    if (pos < 2) return pos
    return fibPos(pos - 1) + fibPos(pos - 2)
}

const POS = 14
console.log('Position', POS) 
console.log(fibPos(POS))

// Fibonacci at nth position in one line
const lambdaFibPos = pos => pos < 2 ? pos 
: lambdaFibPos(pos - 1) + lambdaFibPos(pos - 2)

console.log('--in one line\n(with ternary operator)')
console.log(lambdaFibPos(POS))
