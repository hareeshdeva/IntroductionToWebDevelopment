/*
Example:  
For a = [2,4,7], the output  should be absoluteValuesSumMinimization(a) = 4.
For a = [2,4,7,6], the output  should be absoluteValuesSumMinimization(a) = 4.
*/

function absoluteValuesSumMinimization(a: number[]): number {
    //First step is to determine the length of the array. 
    const isEven = a.length % 2 == 0;
    //If Array is even divide array by 2 and subtract - 1.Else Divide by and round up the number.
    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2,4,7]));

console.log(absoluteValuesSumMinimization([2,4,8,9,10,11]));