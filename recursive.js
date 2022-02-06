// Problem : Calculate n to the power m - the value of n to the m power

// console.log(powerNo(3, 2));
// function powerNo(n, m)
// {
// if (m == 0)
// return 1;
// if (m == 1)
// return n;
// return n * powerNo(n, m - 1);
// }

// Problem : Find the nth Fibonacci number. The Fibonacci series is the series of
// numbers in which each number is the sum of the previous two numbers.

// function findFibonacci(n)
// {
// if (n == 0)
// return 0;
// if (n == 1)
// return 1;
// return findFibonacci(n - 1) +
// findFibonacci(n - 2);
// }
// var n = findFibonacci(10);
// console.log(n);

// Problem : Calculate the sum of elements of an array of numbers

var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var n = sum(ar);
console.log(n);
function sum(ar)
{
return _sum(ar, ar.length - 1);
}
function _sum(ar, index)
{
if (index == 0)
return ar[0];
return ar[index] + _sum(ar, index - 1);
}

// Problem : Sort an array of numbers using bubble sort algorithm

var ar = [23, 1000, 1, -1, 8, 3];
console.log(ar);
bubbleSort(ar);
console.log(ar);
function bubbleSort(ar, to)
{
var shouldSort = false;
var length = to || ar.length - 1;
for(var i = 0; i < length; i++)
{
var a = ar[i];
if ( a > ar[i+1] )
{
ar[i] = ar[i+1];
ar[i+1] = a;
shouldSort = true;
}
}
if (shouldSort)
{
bubbleSort(ar, to-1);
}
}

// Problem : Find a number in a sorted array of numbers (binary search)
// 0 1 2 3 4 5 6 7 8 9
var ar = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var position = findNumber(90, ar);
console.log(position);
// Find number n in sorted array ar
// Returns array index if found or -1 if not found
function findNumber(n, ar)
{
return _findNumber(n, ar, 0, ar.length - 1);
}
// Find number n in sorted array ar in between indexes
// i1 and i2 using recursive approach
function _findNumber(n, ar, i1, i2)
{
if (i2 < i1)
return -1;
console.log("Checking interval: [" + i1 + ", " + i2 + "]");
var mid = i1 + Math.floor((i2 - i1) / 2);
if (n === ar[mid])
return mid;
if (n < ar[mid])
return _findNumber(n, ar, i1, mid - 1);
return _findNumber(n, ar, mid + 1, i2);
}

// Problem : Find the maximum number in an array
// containing numbers or other array of numbers
// (on an unlimited number of levels)

var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
var max = findMax(ar);
console.log("Max = ", max);
// Use recursion to find the maximum numeric value in an
// array of arrays
function findMax(ar)
{
var max = -Infinity;
// Cycle through all the elements of the array
for(var i = 0; i < ar.length; i++)
{
var el = ar[i];
// If an element is of type array -> invoke the same
// function to find out the max elem. of that subarray
if ( Array.isArray(el) )
{
el = findMax( el );
}
if ( el > max )
{
max = el;
}
}
return max;
}

