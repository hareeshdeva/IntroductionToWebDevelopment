/*
How many times xx appears in xxaxxxbxx.
Approach:
1) Our substring to find is xx - this is 2 charecters long.
2) Lets look at the string xxaxxxbxx 2 charecters at a time and if those 2 match,
increase the counter of how many times it appears.
-----------        --      --
|xx|axxxbxx        xx      1
 x|xa|xxxbxx       xa      1
 xx|ax|xxbxx       ax      1
 xxa|xx|xbxx       xx      2
 xxax|xx|bxx       xx      3
 xxaxx|xb|xx       xb      3
 xxaxxx|bx|x       bx      3
 xxaxxxb|xx|       xx      4
*/
function countingCharacters3(str, search){    
    var count = 0; // number found
    var numChars = search.length;
    /* we need to stop loop based on multiple characters
example: if searching "Ohio" with 3 characters
at a time we want to stop at h so we do not go
past the end of the string
*/
    var lastIndex = str.length - numChars;
    // Like the last example, we will use a for loop to go through our string
    // This time, we are looking for a series of characters - a substring
    for (var index = 0; index <= lastIndex; index++){
        // substring gets a part of a string from a start to end index
        var current = str.substring(index, index + numChars);
        // if the substring matches our series, increase our counter
        if (current == search){            
            count++;
        }
    }
    console.log("String to search in: " + str);
    console.log("Charecter to find: " + search);
    console.log("Number of times the charecter appears: " + count);
    return count;
}
countingCharacters3("xxaxxxbxx","xx");