export interface TestCase {
  input: string;
  expected: any;
  description?: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  hint: string;
  testCases: TestCase[];
  starterCode?: string;
}

export interface Topic {
  [key: string]: Challenge[];
}

export interface Level {
  [key: string]: Topic;
}

export interface ChallengeData {
  levels: Level;
}

export const challengeData: ChallengeData = {
  levels: {
    "Beginner": {
      "Arrays": [
        {
          id: "arr-1",
          title: "Reverse an Array",
          description: "Write a function that takes an array and returns a new array with the elements in reverse order. Do not modify the original array.",
          hint: "You can use a for loop starting from the last index, or try the built-in reverse() method on a copy of the array.",
          starterCode: "function reverseArray(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5]", expected: [5, 4, 3, 2, 1], description: "Basic number array" },
            { input: "['a', 'b', 'c']", expected: ['c', 'b', 'a'], description: "String array" },
            { input: "[]", expected: [], description: "Empty array" },
            { input: "[42]", expected: [42], description: "Single element" }
          ]
        },
        {
          id: "arr-2",
          title: "Find Maximum Value",
          description: "Write a function that finds and returns the maximum value in an array of numbers.",
          hint: "You can use Math.max() with the spread operator, or iterate through the array keeping track of the current maximum.",
          starterCode: "function findMax(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 5, 3, 9, 2]", expected: 9, description: "Positive numbers" },
            { input: "[-1, -5, -3, -2]", expected: -1, description: "Negative numbers" },
            { input: "[42]", expected: 42, description: "Single element" },
            { input: "[0, 0, 0]", expected: 0, description: "All zeros" }
          ]
        },
        {
          id: "arr-3",
          title: "Sum Array Elements",
          description: "Write a function that calculates and returns the sum of all elements in an array of numbers.",
          hint: "Use a for loop or the reduce() method to add up all the elements.",
          starterCode: "function sumArray(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5]", expected: 15, description: "Positive numbers" },
            { input: "[-1, -2, 3, 4]", expected: 4, description: "Mixed positive and negative" },
            { input: "[]", expected: 0, description: "Empty array" },
            { input: "[0, 0, 0]", expected: 0, description: "All zeros" }
          ]
        },
        {
          id: "arr-4",
          title: "Find Element Index",
          description: "Write a function that finds the index of a specific element in an array. Return -1 if not found.",
          hint: "Use indexOf() method or a for loop to search through the array.",
          starterCode: "function findIndex(arr, element) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5], 3", expected: 2, description: "Element found" },
            { input: "['a', 'b', 'c'], 'b'", expected: 1, description: "String element found" },
            { input: "[1, 2, 3], 5", expected: -1, description: "Element not found" },
            { input: "[], 1", expected: -1, description: "Empty array" }
          ]
        },
        {
          id: "arr-5",
          title: "Remove Duplicates",
          description: "Write a function that removes duplicate elements from an array and returns a new array with unique elements only.",
          hint: "You can use Set to remove duplicates, or use filter with indexOf to keep only first occurrences.",
          starterCode: "function removeDuplicates(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 2, 3, 3, 3, 4]", expected: [1, 2, 3, 4], description: "Number duplicates" },
            { input: "['a', 'b', 'a', 'c', 'b']", expected: ['a', 'b', 'c'], description: "String duplicates" },
            { input: "[1, 2, 3]", expected: [1, 2, 3], description: "No duplicates" },
            { input: "[]", expected: [], description: "Empty array" }
          ]
        },
        {
          id: "arr-6",
          title: "Array Contains Element",
          description: "Write a function that checks if an array contains a specific element. Return true if found, false otherwise.",
          hint: "Use the includes() method or a for loop to check each element.",
          starterCode: "function containsElement(arr, element) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5], 3", expected: true, description: "Element exists" },
            { input: "['apple', 'banana', 'orange'], 'banana'", expected: true, description: "String element exists" },
            { input: "[1, 2, 3], 5", expected: false, description: "Element doesn't exist" },
            { input: "[], 1", expected: false, description: "Empty array" }
          ]
        },
        {
          id: "arr-7",
          title: "First and Last Elements",
          description: "Write a function that returns an array containing the first and last elements of the input array.",
          hint: "Access elements using index 0 for first and arr.length - 1 for last.",
          starterCode: "function firstAndLast(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5]", expected: [1, 5], description: "Multiple elements" },
            { input: "['a', 'b', 'c']", expected: ['a', 'c'], description: "String array" },
            { input: "[42]", expected: [42, 42], description: "Single element" },
            { input: "[10, 20]", expected: [10, 20], description: "Two elements" }
          ]
        },
        {
          id: "arr-8",
          title: "Array Length",
          description: "Write a function that returns the length of an array without using the built-in length property.",
          hint: "Use a counter variable and iterate through the array until you reach the end.",
          starterCode: "function getArrayLength(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5]", expected: 5, description: "Five elements" },
            { input: "['a', 'b']", expected: 2, description: "Two elements" },
            { input: "[]", expected: 0, description: "Empty array" },
            { input: "[null, undefined, 0, false]", expected: 4, description: "Falsy elements" }
          ]
        },
        {
          id: "arr-9",
          title: "Count Even Numbers",
          description: "Write a function that counts how many even numbers are in an array.",
          hint: "Use a counter variable and check each number with the modulo operator (%).",
          starterCode: "function countEvens(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5, 6]", expected: 3, description: "Three even numbers: 2, 4, 6" },
            { input: "[1, 3, 5]", expected: 0, description: "No even numbers" },
            { input: "[2, 4, 6, 8]", expected: 4, description: "All even numbers" },
            { input: "[]", expected: 0, description: "Empty array" }
          ]
        },
        {
          id: "arr-10",
          title: "Array Average",
          description: "Write a function that calculates the average of numbers in an array.",
          hint: "Sum all elements and divide by the array length. Handle empty arrays by returning 0.",
          starterCode: "function arrayAverage(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5]", expected: 3, description: "Average of 1-5 is 3" },
            { input: "[10, 20, 30]", expected: 20, description: "Average of 10, 20, 30" },
            { input: "[5]", expected: 5, description: "Single element" },
            { input: "[]", expected: 0, description: "Empty array" }
          ]
        },
        {
          id: "arr-11",
          title: "Second Largest Element",
          description: "Write a function that finds the second largest element in an array of numbers.",
          hint: "Keep track of the largest and second largest values while iterating through the array.",
          starterCode: "function secondLargest(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 5, 3, 9, 2]", expected: 5, description: "Second largest after 9" },
            { input: "[10, 10, 5]", expected: 5, description: "Handle duplicates" },
            { input: "[1, 2]", expected: 1, description: "Two elements" },
            { input: "[5, 5, 5]", expected: undefined, description: "All same numbers" }
          ]
        },
        {
          id: "arr-12",
          title: "Merge Two Arrays",
          description: "Write a function that merges two arrays into one array alternating elements.",
          hint: "Use a loop to take elements from both arrays alternately, then add any remaining elements.",
          starterCode: "function mergeAlternating(arr1, arr2) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3], [4, 5, 6]", expected: [1, 4, 2, 5, 3, 6], description: "Equal length arrays" },
            { input: "[1, 2], [3, 4, 5, 6]", expected: [1, 3, 2, 4, 5, 6], description: "First array shorter" },
            { input: "[1, 2, 3], [4]", expected: [1, 4, 2, 3], description: "Second array shorter" },
            { input: "[], [1, 2]", expected: [1, 2], description: "First array empty" }
          ]
        },
        {
          id: "arr-13",
          title: "Array Reverse",
          description: "Write a function that reverses an array without using the built-in reverse() method.",
          hint: "Create a new array and iterate from the end of the original array to the beginning.",
          starterCode: "function reverseArray(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5]", expected: [5, 4, 3, 2, 1], description: "Reverse number array" },
            { input: "['a', 'b', 'c']", expected: ['c', 'b', 'a'], description: "Reverse string array" },
            { input: "[42]", expected: [42], description: "Single element" },
            { input: "[]", expected: [], description: "Empty array" }
          ]
        },
        {
          id: "arr-14",
          title: "Array Chunk",
          description: "Write a function that splits an array into smaller arrays of a specified size.",
          hint: "Use a loop to slice the array in chunks of the given size.",
          starterCode: "function chunkArray(arr, size) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5, 6], 2", expected: [[1, 2], [3, 4], [5, 6]], description: "Chunk by 2" },
            { input: "[1, 2, 3, 4, 5], 3", expected: [[1, 2, 3], [4, 5]], description: "Uneven chunks" },
            { input: "[1, 2], 5", expected: [[1, 2]], description: "Size larger than array" },
            { input: "[], 2", expected: [], description: "Empty array" }
          ]
        },
        {
          id: "arr-15",
          title: "Find Missing Number",
          description: "Write a function that finds the missing number in an array of consecutive integers from 1 to n+1.",
          hint: "Calculate the expected sum of 1 to n+1 and subtract the actual sum of the array.",
          starterCode: "function findMissing(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 4, 5]", expected: 3, description: "Missing 3 from 1-5" },
            { input: "[2, 3, 4, 5, 6]", expected: 1, description: "Missing 1 from 1-6" },
            { input: "[1, 2, 3, 5, 6, 7]", expected: 4, description: "Missing 4 from 1-7" },
            { input: "[1, 3]", expected: 2, description: "Missing 2 from 1-3" }
          ]
        }
      ],
      "Loops": [
        {
          id: "loop-1",
          title: "Count to N",
          description: "Write a function that takes a number n and returns an array containing all numbers from 1 to n (inclusive).",
          hint: "Use a for loop starting from 1 and push each number to an array.",
          starterCode: "function countToN(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "5", expected: [1, 2, 3, 4, 5], description: "Count to 5" },
            { input: "1", expected: [1], description: "Count to 1" },
            { input: "0", expected: [], description: "Count to 0" },
            { input: "3", expected: [1, 2, 3], description: "Count to 3" }
          ]
        },
        {
          id: "loop-2",
          title: "Even Numbers Only",
          description: "Write a function that takes an array and returns a new array containing only the even numbers.",
          hint: "Use the modulo operator (%) to check if a number is even. A number is even if number % 2 === 0.",
          starterCode: "function getEvenNumbers(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5, 6]", expected: [2, 4, 6], description: "Mixed numbers" },
            { input: "[1, 3, 5]", expected: [], description: "All odd numbers" },
            { input: "[2, 4, 6]", expected: [2, 4, 6], description: "All even numbers" },
            { input: "[]", expected: [], description: "Empty array" }
          ]
        },
        {
          id: "loop-3",
          title: "Multiplication Table",
          description: "Write a function that generates a multiplication table for a given number up to 10.",
          hint: "Use a for loop from 1 to 10 and multiply each number by the input.",
          starterCode: "function multiplicationTable(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "3", expected: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30], description: "Table of 3" },
            { input: "5", expected: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50], description: "Table of 5" },
            { input: "1", expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], description: "Table of 1" },
            { input: "0", expected: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], description: "Table of 0" }
          ]
        },
        {
          id: "loop-4",
          title: "Count Vowels",
          description: "Write a function that counts the number of vowels (a, e, i, o, u) in a string.",
          hint: "Loop through each character and check if it's a vowel. Don't forget to handle both uppercase and lowercase.",
          starterCode: "function countVowels(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello'", expected: 2, description: "Two vowels" },
            { input: "'JavaScript'", expected: 3, description: "Mixed case" },
            { input: "'xyz'", expected: 0, description: "No vowels" },
            { input: "'AEIOU'", expected: 5, description: "All vowels uppercase" }
          ]
        },
        {
          id: "loop-5",
          title: "Sum of Squares",
          description: "Write a function that calculates the sum of squares of numbers from 1 to n.",
          hint: "Use a for loop and add the square of each number to a running total.",
          starterCode: "function sumOfSquares(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "3", expected: 14, description: "1² + 2² + 3² = 14" },
            { input: "4", expected: 30, description: "1² + 2² + 3² + 4² = 30" },
            { input: "1", expected: 1, description: "Just 1²" },
            { input: "0", expected: 0, description: "No numbers to square" }
          ]
        },
        {
          id: "loop-6",
          title: "Reverse String",
          description: "Write a function that reverses a string using a loop (don't use built-in reverse methods).",
          hint: "Loop through the string from the end to the beginning and build a new string.",
          starterCode: "function reverseString(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello'", expected: "olleh", description: "Basic string" },
            { input: "'JavaScript'", expected: "tpircSavaJ", description: "Longer string" },
            { input: "'a'", expected: "a", description: "Single character" },
            { input: "''", expected: "", description: "Empty string" }
          ]
        },
        {
          id: "loop-7",
          title: "Find Prime Numbers",
          description: "Write a function that finds all prime numbers up to a given number n.",
          hint: "A prime number is only divisible by 1 and itself. Check each number by testing divisibility.",
          starterCode: "function findPrimes(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "10", expected: [2, 3, 5, 7], description: "Primes up to 10" },
            { input: "20", expected: [2, 3, 5, 7, 11, 13, 17, 19], description: "Primes up to 20" },
            { input: "2", expected: [2], description: "Just 2" },
            { input: "1", expected: [], description: "No primes up to 1" }
          ]
        },
        {
          id: "loop-8",
          title: "Number Pattern",
          description: "Write a function that creates a pattern of numbers from 1 to n, then back down to 1.",
          hint: "Use two loops - one going up from 1 to n, and another going down from n-1 to 1.",
          starterCode: "function numberPattern(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "3", expected: [1, 2, 3, 2, 1], description: "Pattern for n=3" },
            { input: "4", expected: [1, 2, 3, 4, 3, 2, 1], description: "Pattern for n=4" },
            { input: "1", expected: [1], description: "Pattern for n=1" },
            { input: "2", expected: [1, 2, 1], description: "Pattern for n=2" }
          ]
        },
        {
          id: "loop-9",
          title: "Sum of Even Numbers",
          description: "Write a function that calculates the sum of all even numbers from 1 to n.",
          hint: "Loop through numbers from 1 to n, check if each is even, and add to sum if it is.",
          starterCode: "function sumEvens(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "6", expected: 12, description: "2 + 4 + 6 = 12" },
            { input: "10", expected: 30, description: "2 + 4 + 6 + 8 + 10 = 30" },
            { input: "1", expected: 0, description: "No even numbers up to 1" },
            { input: "4", expected: 6, description: "2 + 4 = 6" }
          ]
        },
        {
          id: "loop-10",
          title: "Count Digits",
          description: "Write a function that counts the number of digits in a positive integer.",
          hint: "Keep dividing the number by 10 until it becomes 0, counting each division.",
          starterCode: "function countDigits(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "123", expected: 3, description: "Three digits" },
            { input: "5", expected: 1, description: "Single digit" },
            { input: "1000", expected: 4, description: "Four digits" },
            { input: "99", expected: 2, description: "Two digits" }
          ]
        },
        {
          id: "loop-11",
          title: "FizzBuzz Array",
          description: "Write a function that returns an array of numbers from 1 to n, but replaces multiples of 3 with 'Fizz', multiples of 5 with 'Buzz', and multiples of both with 'FizzBuzz'.",
          hint: "Check if number is divisible by both 3 and 5 first, then check 3, then 5, otherwise use the number.",
          starterCode: "function fizzBuzz(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "15", expected: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"], description: "FizzBuzz up to 15" },
            { input: "5", expected: [1, 2, "Fizz", 4, "Buzz"], description: "FizzBuzz up to 5" },
            { input: "3", expected: [1, 2, "Fizz"], description: "FizzBuzz up to 3" },
            { input: "1", expected: [1], description: "FizzBuzz up to 1" }
          ]
        },
        {
          id: "loop-12",
          title: "Power of Two",
          description: "Write a function that generates an array of powers of 2 up to a given number n.",
          hint: "Start with 1 and keep multiplying by 2 until you exceed n.",
          starterCode: "function powersOfTwo(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "10", expected: [1, 2, 4, 8], description: "Powers of 2 up to 10" },
            { input: "20", expected: [1, 2, 4, 8, 16], description: "Powers of 2 up to 20" },
            { input: "1", expected: [1], description: "Just 1" },
            { input: "0", expected: [], description: "No powers of 2 up to 0" }
          ]
        },
        {
          id: "loop-13",
          title: "Triangle Numbers",
          description: "Write a function that generates the first n triangle numbers (1, 3, 6, 10, 15...).",
          hint: "Triangle numbers follow the pattern: nth triangle number = 1+2+3+...+n.",
          starterCode: "function triangleNumbers(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "5", expected: [1, 3, 6, 10, 15], description: "First 5 triangle numbers" },
            { input: "3", expected: [1, 3, 6], description: "First 3 triangle numbers" },
            { input: "1", expected: [1], description: "First triangle number" },
            { input: "0", expected: [], description: "No triangle numbers" }
          ]
        },
        {
          id: "loop-14",
          title: "Digital Root",
          description: "Write a function that calculates the digital root of a number (keep summing digits until you get a single digit).",
          hint: "Use nested loops: outer loop continues until single digit, inner loop sums the digits.",
          starterCode: "function digitalRoot(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "123", expected: 6, description: "1+2+3=6" },
            { input: "456", expected: 6, description: "4+5+6=15, 1+5=6" },
            { input: "999", expected: 9, description: "9+9+9=27, 2+7=9" },
            { input: "5", expected: 5, description: "Already single digit" }
          ]
        }
      ],
      "Strings": [
        {
          id: "str-1",
          title: "String Length",
          description: "Write a function that returns the length of a string without using the built-in length property.",
          hint: "Use a loop to count characters until you reach the end of the string.",
          starterCode: "function getStringLength(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello'", expected: 5, description: "Five characters" },
            { input: "'JavaScript'", expected: 10, description: "Ten characters" },
            { input: "''", expected: 0, description: "Empty string" },
            { input: "'a'", expected: 1, description: "Single character" }
          ]
        },
        {
          id: "str-2",
          title: "First Character",
          description: "Write a function that returns the first character of a string. Return empty string if input is empty.",
          hint: "Access the character at index 0, but check if the string is not empty first.",
          starterCode: "function firstCharacter(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello'", expected: "h", description: "First of 'hello'" },
            { input: "'JavaScript'", expected: "J", description: "First of 'JavaScript'" },
            { input: "''", expected: "", description: "Empty string" },
            { input: "'a'", expected: "a", description: "Single character" }
          ]
        },
        {
          id: "str-3",
          title: "Uppercase First Letter",
          description: "Write a function that capitalizes the first letter of a string and makes the rest lowercase.",
          hint: "Use charAt(0).toUpperCase() for the first character and slice(1).toLowerCase() for the rest.",
          starterCode: "function capitalizeFirst(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello'", expected: "Hello", description: "Capitalize 'hello'" },
            { input: "'jAVAsCRIPT'", expected: "Javascript", description: "Fix 'jAVAsCRIPT'" },
            { input: "'a'", expected: "A", description: "Single character" },
            { input: "''", expected: "", description: "Empty string" }
          ]
        },
        {
          id: "str-4",
          title: "Count Character",
          description: "Write a function that counts how many times a specific character appears in a string.",
          hint: "Loop through the string and increment a counter when you find the target character.",
          starterCode: "function countCharacter(str, char) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello', 'l'", expected: 2, description: "Count 'l' in 'hello'" },
            { input: "'JavaScript', 'a'", expected: 2, description: "Count 'a' in 'JavaScript'" },
            { input: "'test', 'x'", expected: 0, description: "Character not found" },
            { input: "'aaa', 'a'", expected: 3, description: "All same character" }
          ]
        },
        {
          id: "str-5",
          title: "Remove Spaces",
          description: "Write a function that removes all spaces from a string.",
          hint: "You can use replace() with a regular expression, or loop through and build a new string without spaces.",
          starterCode: "function removeSpaces(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello world'", expected: "helloworld", description: "Remove single space" },
            { input: "'Java Script'", expected: "JavaScript", description: "Remove space in middle" },
            { input: "'  test  '", expected: "test", description: "Remove leading and trailing spaces" },
            { input: "'nospaces'", expected: "nospaces", description: "No spaces to remove" }
          ]
        },
        {
          id: "str-6",
          title: "Is Palindrome",
          description: "Write a function that checks if a string is a palindrome (reads the same forwards and backwards).",
          hint: "Compare the string with its reverse, or use two pointers from start and end moving inward.",
          starterCode: "function isPalindrome(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'racecar'", expected: true, description: "Classic palindrome" },
            { input: "'hello'", expected: false, description: "Not a palindrome" },
            { input: "'a'", expected: true, description: "Single character" },
            { input: "'madam'", expected: true, description: "Another palindrome" }
          ]
        },
        {
          id: "str-7",
          title: "Word Count",
          description: "Write a function that counts the number of words in a string (words are separated by spaces).",
          hint: "Split the string by spaces and count the resulting array length, or count the spaces plus one.",
          starterCode: "function wordCount(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello world'", expected: 2, description: "Two words" },
            { input: "'JavaScript is awesome'", expected: 3, description: "Three words" },
            { input: "'hello'", expected: 1, description: "Single word" },
            { input: "''", expected: 0, description: "Empty string" }
          ]
        },
        {
          id: "str-8",
          title: "Replace Character",
          description: "Write a function that replaces all occurrences of one character with another character in a string.",
          hint: "Loop through the string and build a new string, replacing the target character when found.",
          starterCode: "function replaceChar(str, oldChar, newChar) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello world', 'l', 'x'", expected: "hexxo worxd", description: "Replace all 'l' with 'x'" },
            { input: "'banana', 'a', 'o'", expected: "bonono", description: "Replace all 'a' with 'o'" },
            { input: "'test', 'z', 'y'", expected: "test", description: "Character not found" },
            { input: "'aaa', 'a', 'b'", expected: "bbb", description: "Replace all same characters" }
          ]
        },
        {
          id: "str-9",
          title: "String Contains",
          description: "Write a function that checks if a string contains a specific substring.",
          hint: "Use the includes() method or loop through the string checking for the substring at each position.",
          starterCode: "function stringContains(str, substring) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello world', 'world'", expected: true, description: "Substring found" },
            { input: "'JavaScript', 'Script'", expected: true, description: "Substring at end" },
            { input: "'hello', 'hi'", expected: false, description: "Substring not found" },
            { input: "'test', 'test'", expected: true, description: "Exact match" }
          ]
        },
        {
          id: "str-10",
          title: "Count Character",
          description: "Write a function that counts how many times a specific character appears in a string.",
          hint: "Loop through the string and increment a counter each time you find the target character.",
          starterCode: "function countChar(str, char) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello', 'l'", expected: 2, description: "Two 'l' characters" },
            { input: "'banana', 'a'", expected: 3, description: "Three 'a' characters" },
            { input: "'test', 'z'", expected: 0, description: "Character not found" },
            { input: "'aaa', 'a'", expected: 3, description: "All same character" }
          ]
        },
        {
          id: "str-11",
          title: "Repeat String",
          description: "Write a function that repeats a string a specified number of times.",
          hint: "Use a loop to concatenate the string to itself n times.",
          starterCode: "function repeatString(str, times) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello', 3", expected: "hellohellohello", description: "Repeat 3 times" },
            { input: "'a', 5", expected: "aaaaa", description: "Repeat single character" },
            { input: "'test', 1", expected: "test", description: "Repeat once" },
            { input: "'hello', 0", expected: "", description: "Repeat zero times" }
          ]
        },
        {
          id: "str-12",
          title: "String to Array",
          description: "Write a function that converts a string into an array of characters.",
          hint: "Loop through the string and push each character into an array, or use split('').",
          starterCode: "function stringToArray(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello'", expected: ['h', 'e', 'l', 'l', 'o'], description: "String to character array" },
            { input: "'abc'", expected: ['a', 'b', 'c'], description: "Three characters" },
            { input: "'a'", expected: ['a'], description: "Single character" },
            { input: "''", expected: [], description: "Empty string" }
          ]
        }
      ],
    "Basic Math": [
        {
          id: "math-1",
          title: "Is Even or Odd",
          description: "Write a function that determines if a number is even or odd. Return 'even' or 'odd'.",
          hint: "Use the modulo operator (%) to check if the number is divisible by 2.",
          starterCode: "function evenOrOdd(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "4", expected: "even", description: "4 is even" },
            { input: "7", expected: "odd", description: "7 is odd" },
            { input: "0", expected: "even", description: "0 is even" },
            { input: "1", expected: "odd", description: "1 is odd" }
          ]
        },
        {
          id: "math-2",
          title: "Simple Calculator",
          description: "Write a function that performs basic arithmetic operations (+, -, *, /) on two numbers.",
          hint: "Use a switch statement or if-else to handle different operations.",
          starterCode: "function calculator(a, b, operation) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "5, 3, '+'", expected: 8, description: "5 + 3 = 8" },
            { input: "10, 4, '-'", expected: 6, description: "10 - 4 = 6" },
            { input: "6, 7, '*'", expected: 42, description: "6 * 7 = 42" },
            { input: "15, 3, '/'", expected: 5, description: "15 / 3 = 5" }
          ]
        },
        {
          id: "math-3",
          title: "Temperature Converter",
          description: "Write a function that converts Celsius to Fahrenheit. Formula: F = (C * 9/5) + 32",
          hint: "Apply the conversion formula: multiply by 9, divide by 5, then add 32.",
          starterCode: "function celsiusToFahrenheit(celsius) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "0", expected: 32, description: "0°C = 32°F" },
            { input: "100", expected: 212, description: "100°C = 212°F" },
            { input: "25", expected: 77, description: "25°C = 77°F" },
            { input: "-10", expected: 14, description: "-10°C = 14°F" }
          ]
        },
        {
          id: "math-4",
          title: "Circle Area",
          description: "Write a function that calculates the area of a circle given its radius. Formula: Area = π * r²",
          hint: "Use Math.PI and Math.pow() or radius * radius for the calculation.",
          starterCode: "function circleArea(radius) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "1", expected: Math.PI, description: "Area of circle with radius 1" },
            { input: "2", expected: Math.PI * 4, description: "Area of circle with radius 2" },
            { input: "0", expected: 0, description: "Area of circle with radius 0" },
            { input: "5", expected: Math.PI * 25, description: "Area of circle with radius 5" }
          ]
        },
        {
          id: "math-5",
          title: "Greatest Common Divisor",
          description: "Write a function that finds the greatest common divisor (GCD) of two numbers.",
          hint: "Use the Euclidean algorithm: keep finding remainder until one number becomes 0.",
          starterCode: "function gcd(a, b) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "12, 8", expected: 4, description: "GCD of 12 and 8" },
            { input: "15, 25", expected: 5, description: "GCD of 15 and 25" },
            { input: "7, 13", expected: 1, description: "GCD of coprime numbers" },
            { input: "0, 5", expected: 5, description: "GCD with zero" }
          ]
        },
        {
          id: "math-6",
          title: "Perfect Square",
          description: "Write a function that checks if a number is a perfect square.",
          hint: "Find the square root and check if it's a whole number.",
          starterCode: "function isPerfectSquare(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "16", expected: true, description: "16 is 4²" },
            { input: "25", expected: true, description: "25 is 5²" },
            { input: "15", expected: false, description: "15 is not a perfect square" },
            { input: "1", expected: true, description: "1 is 1²" }
          ]
        },
        {
          id: "math-7",
          title: "Number Range Sum",
          description: "Write a function that calculates the sum of all numbers in a range from start to end (inclusive).",
          hint: "Use the formula (end - start + 1) * (start + end) / 2 or a loop.",
          starterCode: "function rangeSum(start, end) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "1, 5", expected: 15, description: "1+2+3+4+5 = 15" },
            { input: "3, 7", expected: 25, description: "3+4+5+6+7 = 25" },
            { input: "5, 5", expected: 5, description: "Single number" },
            { input: "0, 3", expected: 6, description: "0+1+2+3 = 6" }
          ]
        }
      ]
    },
    "Intermediate": {
      "Objects": [
        {
          id: "obj-1",
          title: "Object Property Sum",
          description: "Write a function that takes an object with numeric values and returns the sum of all values.",
          hint: "Use Object.values() to get all values, then sum them up.",
          starterCode: "function sumObjectValues(obj) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{a: 1, b: 2, c: 3}", expected: 6, description: "Simple object" },
            { input: "{x: 10, y: -5, z: 15}", expected: 20, description: "Mixed positive and negative" },
            { input: "{}", expected: 0, description: "Empty object" },
            { input: "{single: 42}", expected: 42, description: "Single property" }
          ]
        },
        {
          id: "obj-2",
          title: "Count Object Properties",
          description: "Write a function that counts the number of properties in an object.",
          hint: "Use Object.keys() to get all property names, then check the length.",
          starterCode: "function countProperties(obj) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{a: 1, b: 2, c: 3}", expected: 3, description: "Three properties" },
            { input: "{}", expected: 0, description: "Empty object" },
            { input: "{name: 'John', age: 30}", expected: 2, description: "Two properties" },
            { input: "{single: true}", expected: 1, description: "Single property" }
          ]
        },
        {
          id: "obj-3",
          title: "Get Object Keys",
          description: "Write a function that returns an array of all keys in an object.",
          hint: "Use Object.keys() method or iterate through the object using for...in loop.",
          starterCode: "function getObjectKeys(obj) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{a: 1, b: 2, c: 3}", expected: ["a", "b", "c"], description: "Three keys" },
            { input: "{name: 'John', age: 30}", expected: ["name", "age"], description: "String keys" },
            { input: "{}", expected: [], description: "Empty object" },
            { input: "{x: 10}", expected: ["x"], description: "Single key" }
          ]
        },
        {
          id: "obj-4",
          title: "Object Has Property",
          description: "Write a function that checks if an object has a specific property.",
          hint: "Use the 'in' operator or hasOwnProperty() method.",
          starterCode: "function hasProperty(obj, prop) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{a: 1, b: 2}, 'a'", expected: true, description: "Property exists" },
            { input: "{name: 'John', age: 30}, 'email'", expected: false, description: "Property doesn't exist" },
            { input: "{}, 'test'", expected: false, description: "Empty object" },
            { input: "{x: undefined}, 'x'", expected: true, description: "Property with undefined value" }
          ]
        },
        {
          id: "obj-5",
          title: "Merge Objects",
          description: "Write a function that merges two objects into a new object. If both objects have the same key, use the value from the second object.",
          hint: "Use Object.assign() or the spread operator to merge objects.",
          starterCode: "function mergeObjects(obj1, obj2) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{a: 1, b: 2}, {c: 3, d: 4}", expected: {a: 1, b: 2, c: 3, d: 4}, description: "No overlapping keys" },
            { input: "{a: 1, b: 2}, {b: 3, c: 4}", expected: {a: 1, b: 3, c: 4}, description: "Overlapping keys" },
            { input: "{}, {a: 1}", expected: {a: 1}, description: "Empty first object" },
            { input: "{a: 1}, {}", expected: {a: 1}, description: "Empty second object" }
          ]
        },
        {
          id: "obj-6",
          title: "Object to Array",
          description: "Write a function that converts an object to an array of [key, value] pairs.",
          hint: "Use Object.entries() or iterate through the object and build the array manually.",
          starterCode: "function objectToArray(obj) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{a: 1, b: 2}", expected: [["a", 1], ["b", 2]], description: "Simple object" },
            { input: "{name: 'John', age: 30}", expected: [["name", "John"], ["age", 30]], description: "Mixed types" },
            { input: "{}", expected: [], description: "Empty object" },
            { input: "{x: true}", expected: [["x", true]], description: "Single property" }
          ]
        },
        {
          id: "obj-7",
          title: "Filter Object by Value",
          description: "Write a function that creates a new object containing only properties whose values are greater than a given threshold.",
          hint: "Iterate through the object and only include properties that meet the condition.",
          starterCode: "function filterObjectByValue(obj, threshold) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{a: 1, b: 5, c: 3}, 2", expected: {b: 5, c: 3}, description: "Filter values > 2" },
            { input: "{x: 10, y: 1, z: 8}, 5", expected: {x: 10, z: 8}, description: "Filter values > 5" },
            { input: "{a: 1, b: 2}, 10", expected: {}, description: "No values meet threshold" },
            { input: "{}, 0", expected: {}, description: "Empty object" }
          ]
        },
        {
          id: "obj-8",
          title: "Deep Clone Object",
          description: "Write a function that creates a deep copy of an object (including nested objects).",
          hint: "Use JSON.parse(JSON.stringify()) for simple cases, or implement recursive cloning.",
          starterCode: "function deepClone(obj) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{a: 1, b: {c: 2}}", expected: {a: 1, b: {c: 2}}, description: "Clone nested object" },
            { input: "{x: 10, y: 20}", expected: {x: 10, y: 20}, description: "Clone simple object" },
            { input: "{}", expected: {}, description: "Clone empty object" },
            { input: "{arr: [1, 2, 3]}", expected: {arr: [1, 2, 3]}, description: "Clone object with array" }
          ]
        },
        {
          id: "obj-9",
          title: "Group Objects by Property",
          description: "Write a function that groups an array of objects by a specific property value.",
          hint: "Create an object where keys are property values and values are arrays of objects with that property.",
          starterCode: "function groupBy(arr, property) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[{name: 'John', age: 25}, {name: 'Jane', age: 25}, {name: 'Bob', age: 30}], 'age'", expected: {25: [{name: 'John', age: 25}, {name: 'Jane', age: 25}], 30: [{name: 'Bob', age: 30}]}, description: "Group by age" },
            { input: "[{type: 'fruit', name: 'apple'}, {type: 'vegetable', name: 'carrot'}], 'type'", expected: {fruit: [{type: 'fruit', name: 'apple'}], vegetable: [{type: 'vegetable', name: 'carrot'}]}, description: "Group by type" }
          ]
        },
        {
          id: "obj-10",
          title: "Object Validation",
          description: "Write a function that validates if an object has all required properties with correct types.",
          hint: "Check if each required property exists and has the correct type using typeof.",
          starterCode: "function validateObject(obj, schema) {\n  // Your code here\n  // schema format: {property: 'type'}\n}",
          testCases: [
            { input: "{name: 'John', age: 25}, {name: 'string', age: 'number'}", expected: true, description: "Valid object" },
            { input: "{name: 'John'}, {name: 'string', age: 'number'}", expected: false, description: "Missing property" },
            { input: "{name: 'John', age: '25'}, {name: 'string', age: 'number'}", expected: false, description: "Wrong type" }
          ]
        },
        {
          id: "obj-11",
          title: "Object Key Transformation",
          description: "Write a function that transforms all keys in an object to uppercase.",
          hint: "Create a new object and copy each property with its key converted to uppercase.",
          starterCode: "function transformKeys(obj) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{name: 'John', age: 25}", expected: {NAME: 'John', AGE: 25}, description: "Transform to uppercase" },
            { input: "{a: 1, b: 2, c: 3}", expected: {A: 1, B: 2, C: 3}, description: "Single letter keys" },
            { input: "{}", expected: {}, description: "Empty object" },
            { input: "{firstName: 'Jane'}", expected: {FIRSTNAME: 'Jane'}, description: "Camel case key" }
          ]
        },
        {
          id: "obj-12",
          title: "Find Object Property Path",
          description: "Write a function that finds the path to a specific value in a nested object.",
          hint: "Use recursion to search through nested objects and build the path as an array.",
          starterCode: "function findPath(obj, target) {\n  // Your code here\n  // Return array of keys leading to target value\n}",
          testCases: [
            { input: "{a: {b: {c: 42}}}, 42", expected: ['a', 'b', 'c'], description: "Deep nested value" },
            { input: "{x: 10, y: 20}, 20", expected: ['y'], description: "Top level value" },
            { input: "{a: {b: 1}, c: 2}, 1", expected: ['a', 'b'], description: "Nested value" },
            { input: "{x: 5}, 99", expected: null, description: "Value not found" }
          ]
        }
      ],
      "Recursion": [
        {
          id: "rec-1",
          title: "Factorial",
          description: "Write a recursive function that calculates the factorial of a positive integer n. Factorial of n (n!) is n × (n-1) × (n-2) × ... × 1.",
          hint: "Base case: factorial of 0 or 1 is 1. Recursive case: n * factorial(n-1).",
          starterCode: "function factorial(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "5", expected: 120, description: "5! = 5 × 4 × 3 × 2 × 1" },
            { input: "0", expected: 1, description: "0! = 1 by definition" },
            { input: "1", expected: 1, description: "1! = 1" },
            { input: "4", expected: 24, description: "4! = 4 × 3 × 2 × 1" }
          ]
        },
        {
          id: "rec-2",
          title: "Fibonacci",
          description: "Write a recursive function to find the nth Fibonacci number. The Fibonacci sequence starts with 0, 1 and each subsequent number is the sum of the previous two.",
          hint: "Base cases: fib(0) = 0, fib(1) = 1. Recursive case: fib(n) = fib(n-1) + fib(n-2).",
          starterCode: "function fibonacci(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "0", expected: 0, description: "First Fibonacci number" },
            { input: "1", expected: 1, description: "Second Fibonacci number" },
            { input: "5", expected: 5, description: "Sixth Fibonacci number" },
            { input: "8", expected: 21, description: "Ninth Fibonacci number" }
          ]
        },
        {
          id: "rec-3",
          title: "Power Function",
          description: "Write a recursive function that calculates base raised to the power of exponent (base^exponent).",
          hint: "Base case: any number to the power of 0 is 1. Recursive case: base * power(base, exponent-1).",
          starterCode: "function power(base, exponent) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "2, 3", expected: 8, description: "2^3 = 8" },
            { input: "5, 0", expected: 1, description: "5^0 = 1" },
            { input: "3, 4", expected: 81, description: "3^4 = 81" },
            { input: "10, 2", expected: 100, description: "10^2 = 100" }
          ]
        },
        {
          id: "rec-4",
          title: "Sum of Digits",
          description: "Write a recursive function that calculates the sum of all digits in a positive integer.",
          hint: "Base case: if number is less than 10, return the number. Recursive case: last digit + sum of remaining digits.",
          starterCode: "function sumOfDigits(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "123", expected: 6, description: "1 + 2 + 3 = 6" },
            { input: "456", expected: 15, description: "4 + 5 + 6 = 15" },
            { input: "9", expected: 9, description: "Single digit" },
            { input: "1000", expected: 1, description: "1 + 0 + 0 + 0 = 1" }
          ]
        },
        {
          id: "rec-5",
          title: "Array Sum Recursive",
          description: "Write a recursive function that calculates the sum of all elements in an array.",
          hint: "Base case: empty array returns 0. Recursive case: first element + sum of rest of array.",
          starterCode: "function recursiveSum(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5]", expected: 15, description: "Sum of 1 to 5" },
            { input: "[10, 20, 30]", expected: 60, description: "Sum of multiples of 10" },
            { input: "[]", expected: 0, description: "Empty array" },
            { input: "[42]", expected: 42, description: "Single element" }
          ]
        },
        {
          id: "rec-6",
          title: "Palindrome Check",
          description: "Write a recursive function that checks if a string is a palindrome (reads the same forwards and backwards).",
          hint: "Base case: empty string or single character is a palindrome. Recursive case: first and last characters match and middle is palindrome.",
          starterCode: "function isPalindrome(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'racecar'", expected: true, description: "Classic palindrome" },
            { input: "'hello'", expected: false, description: "Not a palindrome" },
            { input: "'a'", expected: true, description: "Single character" },
            { input: "'madam'", expected: true, description: "Another palindrome" }
          ]
        },
        {
          id: "rec-7",
          title: "Binary Tree Height",
          description: "Write a recursive function that calculates the height of a binary tree.",
          hint: "Height is 1 + maximum height of left and right subtrees. Base case: null node has height 0.",
          starterCode: "function treeHeight(node) {\n  // node structure: {val, left, right}\n  // Your code here\n  \n}",
          testCases: [
            { input: "null", expected: 0, description: "Empty tree" },
            { input: "{val: 1, left: null, right: null}", expected: 1, description: "Single node" },
            { input: "{val: 1, left: {val: 2, left: null, right: null}, right: {val: 3, left: null, right: null}}", expected: 2, description: "Tree with two levels" }
          ]
        },
        {
          id: "rec-8",
          title: "Generate Permutations",
          description: "Write a recursive function that generates all permutations of an array.",
          hint: "For each element, generate permutations of remaining elements and prepend the current element.",
          starterCode: "function permutations(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2]", expected: [[1, 2], [2, 1]], description: "Permutations of [1,2]" },
            { input: "[1, 2, 3]", expected: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]], description: "Permutations of [1,2,3]" },
            { input: "[]", expected: [[]], description: "Empty array" },
            { input: "[1]", expected: [[1]], description: "Single element" }
          ]
        },
        {
          id: "rec-9",
          title: "Count Paths in Grid",
          description: "Count the number of unique paths from top-left to bottom-right in an m×n grid (can only move right or down).",
          hint: "Paths to current cell = paths from cell above + paths from cell to the left.",
          starterCode: "function countPaths(m, n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "2, 2", expected: 2, description: "2x2 grid has 2 paths" },
            { input: "3, 2", expected: 3, description: "3x2 grid has 3 paths" },
            { input: "3, 3", expected: 6, description: "3x3 grid has 6 paths" },
            { input: "1, 1", expected: 1, description: "1x1 grid has 1 path" }
          ]
        },
        {
          id: "rec-10",
          title: "String Reversal Recursive",
          description: "Write a recursive function that reverses a string without using built-in reverse methods.",
          hint: "Base case: empty or single character string. Recursive case: last character + reverse of remaining string.",
          starterCode: "function reverseString(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'hello'", expected: "olleh", description: "Reverse 'hello'" },
            { input: "'abc'", expected: "cba", description: "Reverse 'abc'" },
            { input: "'a'", expected: "a", description: "Single character" },
            { input: "''", expected: "", description: "Empty string" }
          ]
        },
        {
          id: "rec-11",
          title: "Tower of Hanoi",
          description: "Write a recursive function that solves the Tower of Hanoi puzzle and returns the minimum number of moves.",
          hint: "To move n disks: move n-1 disks to auxiliary pole, move largest disk to destination, move n-1 disks from auxiliary to destination.",
          starterCode: "function hanoi(n) {\n  // Your code here\n  // Return number of moves\n}",
          testCases: [
            { input: "1", expected: 1, description: "1 disk requires 1 move" },
            { input: "2", expected: 3, description: "2 disks require 3 moves" },
            { input: "3", expected: 7, description: "3 disks require 7 moves" },
            { input: "4", expected: 15, description: "4 disks require 15 moves" }
          ]
        }
      ],
      "Array Methods": [
        {
          id: "arr-methods-1",
          title: "Custom Map Function",
          description: "Implement your own version of the Array.map() method that applies a function to each element.",
          hint: "Create a new array and iterate through the original array, applying the function to each element.",
          starterCode: "function customMap(arr, callback) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3], x => x * 2", expected: [2, 4, 6], description: "Double each number" },
            { input: "['a', 'b', 'c'], x => x.toUpperCase()", expected: ['A', 'B', 'C'], description: "Uppercase strings" },
            { input: "[], x => x", expected: [], description: "Empty array" },
            { input: "[5], x => x + 1", expected: [6], description: "Single element" }
          ]
        },
        {
          id: "arr-methods-2",
          title: "Custom Filter Function",
          description: "Implement your own version of the Array.filter() method that returns elements that pass a test.",
          hint: "Create a new array and only add elements that make the callback function return true.",
          starterCode: "function customFilter(arr, callback) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5], x => x % 2 === 0", expected: [2, 4], description: "Filter even numbers" },
            { input: "['apple', 'banana', 'cherry'], x => x.length > 5", expected: ['banana', 'cherry'], description: "Filter by length" },
            { input: "[1, 2, 3], x => x > 10", expected: [], description: "No elements pass test" },
            { input: "[], x => true", expected: [], description: "Empty array" }
          ]
        },
        {
          id: "arr-methods-3",
          title: "Custom Reduce Function",
          description: "Implement your own version of the Array.reduce() method that reduces an array to a single value.",
          hint: "Start with an accumulator value and iterate through the array, updating the accumulator with each element.",
          starterCode: "function customReduce(arr, callback, initialValue) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4], (acc, curr) => acc + curr, 0", expected: 10, description: "Sum array elements" },
            { input: "[1, 2, 3], (acc, curr) => acc * curr, 1", expected: 6, description: "Multiply array elements" },
            { input: "['a', 'b', 'c'], (acc, curr) => acc + curr, ''", expected: "abc", description: "Concatenate strings" },
            { input: "[], (acc, curr) => acc + curr, 5", expected: 5, description: "Empty array with initial value" }
          ]
        },
        {
          id: "arr-methods-4",
          title: "Custom Find Function",
          description: "Implement your own version of the Array.find() method that returns the first element that passes a test.",
          hint: "Iterate through the array and return the first element that makes the callback return true.",
          starterCode: "function customFind(arr, callback) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5], x => x > 3", expected: 4, description: "Find first number > 3" },
            { input: "['apple', 'banana', 'cherry'], x => x.startsWith('b')", expected: "banana", description: "Find string starting with 'b'" },
            { input: "[1, 2, 3], x => x > 10", expected: undefined, description: "No element found" },
            { input: "[], x => true", expected: undefined, description: "Empty array" }
          ]
        },
       {
          id: "arr-methods-5",
          title: "Custom Some Function",
          description: "Implement your own version of Array.some() that tests whether at least one element passes a test.",
          hint: "Return true as soon as any element passes the test, return false if none do.",
          starterCode: "function customSome(arr, callback) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4], x => x > 3", expected: true, description: "At least one element > 3" },
            { input: "[1, 2, 3], x => x > 5", expected: false, description: "No elements > 5" },
            { input: "[], x => true", expected: false, description: "Empty array" },
            { input: "['a', 'b', 'c'], x => x === 'b'", expected: true, description: "String found" }
          ]
        },
        {
          id: "arr-methods-6",
          title: "Custom Every Function",
          description: "Implement your own version of Array.every() that tests whether all elements pass a test.",
          hint: "Return false as soon as any element fails the test, return true if all pass.",
          starterCode: "function customEvery(arr, callback) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[2, 4, 6, 8], x => x % 2 === 0", expected: true, description: "All elements are even" },
            { input: "[1, 2, 3, 4], x => x > 0", expected: true, description: "All elements > 0" },
            { input: "[1, 2, 3], x => x > 2", expected: false, description: "Not all elements > 2" },
            { input: "[], x => false", expected: true, description: "Empty array" }
          ]
        },
        {
          id: "arr-methods-7",
          title: "Chunk Array",
          description: "Write a function that splits an array into chunks of a specified size.",
          hint: "Use a loop to slice the array at regular intervals based on the chunk size.",
          starterCode: "function chunkArray(arr, size) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5, 6], 2", expected: [[1, 2], [3, 4], [5, 6]], description: "Chunk into pairs" },
            { input: "[1, 2, 3, 4, 5], 3", expected: [[1, 2, 3], [4, 5]], description: "Uneven chunks" },
            { input: "[1, 2, 3], 5", expected: [[1, 2, 3]], description: "Size larger than array" },
            { input: "[], 2", expected: [], description: "Empty array" }
          ]
        },
        {
          id: "arr-methods-8",
          title: "Custom Flatten Function",
          description: "Write a function that flattens a nested array into a single-level array.",
          hint: "Check if each element is an array, if so recursively flatten it, otherwise add to result.",
          starterCode: "function flattenArray(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, [2, 3], [4, [5, 6]]]", expected: [1, 2, 3, 4, 5, 6], description: "Flatten nested array" },
            { input: "[1, 2, 3]", expected: [1, 2, 3], description: "Already flat array" },
            { input: "[[1], [2], [3]]", expected: [1, 2, 3], description: "Array of single-element arrays" },
            { input: "[]", expected: [], description: "Empty array" }
          ]
        }
      ],
      "Regular Expressions": [
        {
          id: "regex-1",
          title: "Email Validator",
          description: "Write a function that validates if a string is a valid email format using regex.",
          hint: "Check for pattern: characters@characters.characters (simplified validation).",
          starterCode: "function isValidEmail(email) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'user@example.com'", expected: true, description: "Valid email" },
            { input: "'invalid.email'", expected: false, description: "Missing @ and domain" },
            { input: "'user@domain'", expected: false, description: "Missing .extension" },
            { input: "'user@example.co.uk'", expected: true, description: "Valid with subdomain" }
          ]
        },
        {
          id: "regex-2",
          title: "Phone Number Formatter",
          description: "Write a function that formats a 10-digit phone number as (XXX) XXX-XXXX.",
          hint: "Use regex to capture groups of digits and replace with formatted pattern.",
          starterCode: "function formatPhoneNumber(phone) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'1234567890'", expected: "(123) 456-7890", description: "Format 10 digits" },
            { input: "'5551234567'", expected: "(555) 123-4567", description: "Another valid number" },
            { input: "'123'", expected: "Invalid phone number", description: "Too few digits" },
            { input: "'12345678901'", expected: "Invalid phone number", description: "Too many digits" }
          ]
        },
        {
          id: "regex-3",
          title: "Extract Numbers",
          description: "Write a function that extracts all numbers from a string and returns them as an array.",
          hint: "Use regex with global flag to find all number patterns in the string.",
          starterCode: "function extractNumbers(str) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'I have 5 apples and 10 oranges'", expected: ['5', '10'], description: "Extract multiple numbers" },
            { input: "'Price: $19.99'", expected: ['19', '99'], description: "Extract from price" },
            { input: "'No numbers here!'", expected: [], description: "No numbers found" },
            { input: "'Year 2023 was great!'", expected: ['2023'], description: "Extract year" }
          ]
        }
      ]
    },
    "Advanced": {
      "Algorithms": [
        {
          id: "alg-1",
          title: "Binary Search",
          description: "Implement binary search to find the index of a target value in a sorted array. Return -1 if not found.",
          hint: "Use two pointers (left and right). Compare the middle element with the target and adjust the search range accordingly.",
          starterCode: "function binarySearch(arr, target) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 4, 5, 6, 7, 8, 9], 5", expected: 4, description: "Target found in middle" },
            { input: "[1, 3, 5, 7, 9], 7", expected: 3, description: "Target found" },
            { input: "[1, 3, 5, 7, 9], 4", expected: -1, description: "Target not found" },
            { input: "[2, 4, 6], 2", expected: 0, description: "Target at beginning" }
          ]
        },
        {
          id: "alg-2",
          title: "Bubble Sort",
          description: "Implement the bubble sort algorithm to sort an array of numbers in ascending order.",
          hint: "Compare adjacent elements and swap them if they're in wrong order. Repeat until no swaps are needed.",
          starterCode: "function bubbleSort(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[64, 34, 25, 12, 22, 11, 90]", expected: [11, 12, 22, 25, 34, 64, 90], description: "Unsorted array" },
            { input: "[5, 2, 8, 1, 9]", expected: [1, 2, 5, 8, 9], description: "Random order" },
            { input: "[1, 2, 3, 4, 5]", expected: [1, 2, 3, 4, 5], description: "Already sorted" },
            { input: "[3]", expected: [3], description: "Single element" }
          ]
        },
        {
          id: "alg-3",
          title: "Quick Sort",
          description: "Implement the quicksort algorithm to sort an array of numbers in ascending order.",
          hint: "Choose a pivot, partition the array around it, then recursively sort the sub-arrays.",
          starterCode: "function quickSort(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[3, 6, 8, 10, 1, 2, 1]", expected: [1, 1, 2, 3, 6, 8, 10], description: "Unsorted with duplicates" },
            { input: "[5, 2, 8, 1, 9]", expected: [1, 2, 5, 8, 9], description: "Random order" },
            { input: "[1]", expected: [1], description: "Single element" },
            { input: "[]", expected: [], description: "Empty array" }
          ]
        },
        {
          id: "alg-4",
          title: "Merge Sort",
          description: "Implement the merge sort algorithm to sort an array of numbers in ascending order.",
          hint: "Divide the array into halves, recursively sort each half, then merge the sorted halves.",
          starterCode: "function mergeSort(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[38, 27, 43, 3, 9, 82, 10]", expected: [3, 9, 10, 27, 38, 43, 82], description: "Unsorted array" },
            { input: "[5, 2, 8, 1, 9]", expected: [1, 2, 5, 8, 9], description: "Random order" },
            { input: "[1, 2, 3]", expected: [1, 2, 3], description: "Already sorted" },
            { input: "[]", expected: [], description: "Empty array" }
          ]
        },
        {
          id: "alg-5",
          title: "Linear Search",
          description: "Implement linear search to find the index of a target value in an array. Return -1 if not found.",
          hint: "Iterate through the array from start to end, checking each element against the target.",
          starterCode: "function linearSearch(arr, target) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[4, 2, 7, 1, 9, 3], 7", expected: 2, description: "Target found" },
            { input: "[1, 3, 5, 7, 9], 4", expected: -1, description: "Target not found" },
            { input: "[5], 5", expected: 0, description: "Single element found" },
            { input: "[], 1", expected: -1, description: "Empty array" }
          ]
        },
        {
          id: "alg-6",
          title: "Selection Sort",
          description: "Implement the selection sort algorithm to sort an array of numbers in ascending order.",
          hint: "Find the minimum element and swap it with the first element, then repeat for the rest of the array.",
          starterCode: "function selectionSort(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[64, 25, 12, 22, 11]", expected: [11, 12, 22, 25, 64], description: "Unsorted array" },
            { input: "[5, 2, 8, 1, 9]", expected: [1, 2, 5, 8, 9], description: "Random order" },
            { input: "[1, 2, 3]", expected: [1, 2, 3], description: "Already sorted" },
            { input: "[3]", expected: [3], description: "Single element" }
          ]
        },
        {
          id: "alg-7",
          title: "Insertion Sort",
          description: "Implement the insertion sort algorithm to sort an array of numbers in ascending order.",
          hint: "Build the sorted array one element at a time by inserting each element into its correct position.",
          starterCode: "function insertionSort(arr) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[5, 2, 4, 6, 1, 3]", expected: [1, 2, 3, 4, 5, 6], description: "Unsorted array" },
            { input: "[31, 41, 59, 26, 41, 58]", expected: [26, 31, 41, 41, 58, 59], description: "With duplicates" },
            { input: "[1]", expected: [1], description: "Single element" },
            { input: "[]", expected: [], description: "Empty array" }
          ]
        },
        {
          id: "alg-8",
          title: "Two Sum",
          description: "Given an array of integers and a target sum, return the indices of two numbers that add up to the target.",
          hint: "Use a hash map to store numbers and their indices. For each number, check if target minus that number exists in the map.",
          starterCode: "function twoSum(nums, target) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[2, 7, 11, 15], 9", expected: [0, 1], description: "2 + 7 = 9" },
            { input: "[3, 2, 4], 6", expected: [1, 2], description: "2 + 4 = 6" },
            { input: "[3, 3], 6", expected: [0, 1], description: "3 + 3 = 6" },
            { input: "[1, 2, 3], 7", expected: null, description: "No valid pair" }
          ]
        }
      ],
      "Dynamic Programming": [
        {
          id: "dp-1",
          title: "Fibonacci with Memoization",
          description: "Implement the Fibonacci sequence using dynamic programming with memoization to improve performance.",
          hint: "Store previously calculated values in an object or array to avoid recalculating them.",
          starterCode: "function fibonacciMemo(n, memo = {}) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "10", expected: 55, description: "10th Fibonacci number" },
            { input: "0", expected: 0, description: "0th Fibonacci number" },
            { input: "1", expected: 1, description: "1st Fibonacci number" },
            { input: "15", expected: 610, description: "15th Fibonacci number" }
          ]
        },
        {
          id: "dp-2",
          title: "Climbing Stairs",
          description: "You're climbing stairs and can take either 1 or 2 steps at a time. How many distinct ways can you climb n stairs?",
          hint: "This is similar to Fibonacci. The number of ways to reach step n is the sum of ways to reach step n-1 and n-2.",
          starterCode: "function climbStairs(n) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "2", expected: 2, description: "2 stairs: 1+1 or 2" },
            { input: "3", expected: 3, description: "3 stairs: 1+1+1, 1+2, or 2+1" },
            { input: "4", expected: 5, description: "4 stairs: 5 different ways" },
            { input: "1", expected: 1, description: "1 stair: only one way" }
          ]
        },
        {
          id: "dp-3",
          title: "Coin Change",
          description: "Given coins of different denominations and a total amount, find the minimum number of coins needed to make that amount.",
          hint: "Use dynamic programming. For each amount, try each coin and take the minimum.",
          starterCode: "function coinChange(coins, amount) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 3, 4], 6", expected: 2, description: "6 = 3 + 3" },
            { input: "[2], 3", expected: -1, description: "Cannot make 3 with only 2s" },
            { input: "[1, 2, 5], 11", expected: 3, description: "11 = 5 + 5 + 1" },
            { input: "[1], 0", expected: 0, description: "Amount 0 needs 0 coins" }
          ]
        },
        {
          id: "dp-4",
          title: "Longest Common Subsequence",
          description: "Find the length of the longest common subsequence between two strings.",
          hint: "Use a 2D array to store results. If characters match, add 1 to diagonal. Otherwise, take max of left or top.",
          starterCode: "function longestCommonSubsequence(text1, text2) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'abcde', 'ace'", expected: 3, description: "LCS is 'ace'" },
            { input: "'abc', 'abc'", expected: 3, description: "Identical strings" },
            { input: "'abc', 'def'", expected: 0, description: "No common subsequence" },
            { input: "'', 'abc'", expected: 0, description: "Empty string" }
          ]
        },
        {
          id: "dp-5",
          title: "Maximum Subarray Sum",
          description: "Find the contiguous subarray with the largest sum (Kadane's algorithm).",
          hint: "Keep track of the maximum sum ending at each position. The answer is the maximum of all these values.",
          starterCode: "function maxSubarraySum(nums) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[-2, 1, -3, 4, -1, 2, 1, -5, 4]", expected: 6, description: "Subarray [4,-1,2,1] has sum 6" },
            { input: "[1]", expected: 1, description: "Single element" },
            { input: "[5, 4, -1, 7, 8]", expected: 23, description: "All positive except one" },
            { input: "[-1, -2, -3]", expected: -1, description: "All negative numbers" }
          ]
        },
        {
          id: "dp-6",
          title: "House Robber",
          description: "You're a robber planning to rob houses on a street. Adjacent houses have security systems. What's the maximum amount you can rob without alerting police?",
          hint: "At each house, decide whether to rob it (can't rob adjacent) or skip it. Use DP to track max money at each position.",
          starterCode: "function rob(nums) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "[1, 2, 3, 1]", expected: 4, description: "Rob house 0 and 2: 1 + 3 = 4" },
            { input: "[2, 7, 9, 3, 1]", expected: 12, description: "Rob house 0, 2, and 4: 2 + 9 + 1 = 12" },
            { input: "[5]", expected: 5, description: "Single house" },
            { input: "[2, 1, 1, 2]", expected: 4, description: "Rob house 0 and 3: 2 + 2 = 4" }
          ]
        }
      ],
      "Graph Algorithms": [
        {
          id: "graph-1",
          title: "Depth-First Search",
          description: "Implement depth-first search (DFS) for a graph represented as an adjacency list.",
          hint: "Use recursion or a stack. Mark visited nodes to avoid cycles.",
          starterCode: "function dfs(graph, start, visited = new Set()) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{A: ['B', 'C'], B: ['D'], C: ['E'], D: [], E: []}, 'A'", expected: ['A', 'B', 'D', 'C', 'E'], description: "Simple graph traversal" },
          ]
        },
        {
          id: "graph-2",
          title: "Breadth-First Search",
          description: "Implement breadth-first search (BFS) for a graph represented as an adjacency list.",
          hint: "Use a queue to process nodes level by level. Mark visited nodes to avoid cycles.",
          starterCode: "function bfs(graph, start) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{A: ['B', 'C'], B: ['D'], C: ['E'], D: [], E: []}, 'A'", expected: ['A', 'B', 'C', 'D', 'E'], description: "Level-order traversal" },
          ]
        },
        {
          id: "graph-3",
          title: "Find Path Between Nodes",
          description: "Find if there's a path between two nodes in a graph using BFS.",
          hint: "Use BFS and check if you can reach the target node from the start node.",
          starterCode: "function hasPath(graph, start, target) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{A: ['B'], B: ['C'], C: []}, 'A', 'C'", expected: true, description: "Path exists A->B->C" },
            { input: "{A: ['B'], B: [], C: []}, 'A', 'C'", expected: false, description: "No path from A to C" },
            { input: "{A: ['A']}, 'A', 'A'", expected: true, description: "Self loop" },
          ]
        },
        {
          id: "graph-4",
          title: "Shortest Path Length",
          description: "Find the shortest path length between two nodes in an unweighted graph.",
          hint: "Use BFS and keep track of the distance/level for each node.",
          starterCode: "function shortestPath(graph, start, target) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "{A: ['B', 'C'], B: ['D'], C: ['D'], D: []}, 'A', 'D'", expected: 2, description: "Shortest path A->B->D or A->C->D" },
            { input: "{A: ['B'], B: ['C'], C: []}, 'A', 'C'", expected: 2, description: "Path A->B->C" },
            { input: "{A: [], B: []}, 'A', 'B'", expected: -1, description: "No path exists" },
          ]
        }
      ],
      "String Algorithms": [
        {
          id: "str-alg-1",
          title: "Longest Palindromic Substring",
          description: "Find the longest palindromic substring in a given string.",
          hint: "For each character, expand around it to find the longest palindrome centered at that position.",
          starterCode: "function longestPalindrome(s) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'babad'", expected: "bab", description: "Either 'bab' or 'aba'" },
            { input: "'cbbd'", expected: "bb", description: "Longest palindrome is 'bb'" },
            { input: "'a'", expected: "a", description: "Single character" },
            { input: "'ac'", expected: "a", description: "No palindrome longer than 1" }
          ]
        },
        {
          id: "str-alg-2",
          title: "Valid Anagram",
          description: "Check if two strings are anagrams of each other (contain the same characters with the same frequency).",
          hint: "Count the frequency of each character in both strings and compare, or sort both strings and compare.",
          starterCode: "function isAnagram(s, t) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'anagram', 'nagaram'", expected: true, description: "Valid anagram" },
            { input: "'rat', 'car'", expected: false, description: "Not an anagram" },
            { input: "'listen', 'silent'", expected: true, description: "Another valid anagram" },
            { input: "'a', 'ab'", expected: false, description: "Different lengths" }
          ]
        },
        {
          id: "str-alg-3",
          title: "String Compression",
          description: "Compress a string by replacing repeated characters with the character followed by the count.",
          hint: "Iterate through the string and count consecutive characters. Add character and count to result.",
          starterCode: "function compressString(s) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'aabcccccaaa'", expected: "a2b1c5a3", description: "Compress repeated characters" },
            { input: "'abcdef'", expected: "a1b1c1d1e1f1", description: "No repeated characters" },
            { input: "'aaa'", expected: "a3", description: "All same character" },
            { input: "''", expected: "", description: "Empty string" }
          ]
        },
        {
          id: "str-alg-4",
          title: "Longest Substring Without Repeating Characters",
          description: "Find the length of the longest substring without repeating characters.",
          hint: "Use sliding window technique with two pointers and a set to track characters in current window.",
          starterCode: "function lengthOfLongestSubstring(s) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'abcabcbb'", expected: 3, description: "Longest is 'abc'" },
            { input: "'bbbbb'", expected: 1, description: "All same character" },
            { input: "'pwwkew'", expected: 3, description: "Longest is 'wke'" },
            { input: "''", expected: 0, description: "Empty string" }
          ]
        },
        {
          id: "str-alg-5",
          title: "Valid Parentheses",
          description: "Given a string containing parentheses '()', brackets '[]', and braces '{}', determine if the input string is valid.",
          hint: "Use a stack to track opening brackets. When you see a closing bracket, check if it matches the most recent opening bracket.",
          starterCode: "function isValid(s) {\n  // Your code here\n  \n}",
          testCases: [
            { input: "'()'", expected: true, description: "Simple valid parentheses" },
            { input: "'()[]{}'", expected: true, description: "Multiple types valid" },
            { input: "'(]'", expected: false, description: "Mismatched brackets" },
            { input: "'([)]'", expected: false, description: "Wrong order" },
            { input: "'{[]}'", expected: true, description: "Nested brackets" }
          ]
        }
      ]
    }
  }
};