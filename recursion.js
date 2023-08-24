// Going through recursive approach to resolve algorithms

// Write a recursive function that given an input n, sums all nonnegative integers up to n.

// Iteration Approach
const iterationSum = n => {
    let result = 0
    for (let i = 0; i <= n; i++) {
        result += i
        console.log(result)
    }
    console.log(`sum from 0 to ${n} is ${result}`)
}
iterationSum(13) // will return 0 1 3 6 10 15 21 28 36 45 55 66 78 91 sum from 0 to 13 is 91

// Mathematical Approach
const mathematicalSum = n => console.log( n * (n + 1) / 2 )
mathematicalSum(13) // will return 91

const recursiveSum = n => {
    if (n = 0) return 0
    return recursiveSum(n-1) + n
}
recursiveSum(13) // will return 91


// SHUFFLE ARRAY ALGORITHM
// Interesting Fisher-Yates (also known as Knuth) shuffle algorithm.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// MATHEMATICAL APPROACH ALGORITHM

// limit counter to a certain number
function* generateNumbers(limit) {
    let num = 0
    while (true) {
      yield num
      num = (num + 1) % limit
    }
  }
  
  // Create a generator instance with a limit of 5
  const generator = generateNumbers(5)
  
  // Generate and print the first 10 numbers
  for (let i = 0; i < 10; i++) {
    console.log(generator.return().value)
  }
  


// BINARY SEARCH
const arr = ['a', 'b', 'c', 'x', 'y', 'z']
console.log(findMe('d', 0, arr.length))

function findMe(target, start, end) {

    if (start == end) return arr[end] == target 
    ? 'Found it at index ' + middle : 'Not Found'


    const middle = Math.floor((start + end) / 2)

    if (arr[middle] === target) return 'Found it at index ' + middle

    if (arr[middle] > target) return findMe(target, start, middle - 1)

    if (arr[middle] < target) return findMe(target, middle + 1, end)
}

