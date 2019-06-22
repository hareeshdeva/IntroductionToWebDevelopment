function countingCharecters(stringToCount, charecterToFind){
    //Lets count the number of times a charecter appear in a string.
    //We will look at each charecter one-by-one with the help of a for loop.

    var charecterCount = 0;
    for(var i = 0; i < stringToCount.length; i++){
        if( stringToCount[i] == charecterToFind ){
            charecterCount++;
        }
    }

console.log("String to search in: " + stringToCount);
console.log("Charecter to find: " + charecterToFind);
console.log("Number of times the charecter appears: " + charecterCount);
}
