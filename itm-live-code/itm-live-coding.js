// make a function that will find 
// the longest word in an array of strings

 function longestWord(array) {

     // declare variables
     // store the highest letters 
    let highest = 0;
    // store the location of highest letters 
    let location = 0;

    // loop over the array of strings 
    for ( let i = 0; i < array.length; i++ ) {

        // if the current string is longer then the stored highest . . .
        if (array[i].length > highest) {
            // update the highest value and the location 
            highest = array[i].length;
            location = i;
        }
    }
    // end by logging the longest word in the array
    console.log(array[location])
};

// test case 
// expected result applesauce
longestWord(["pie", "applesauce", "apple", "orange"]);
// checks out! 

