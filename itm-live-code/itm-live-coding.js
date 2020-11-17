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


// below was the original question:
// return the length of the longest word in a sentence (string)

function longestWordInString(sentence) {

    // Split the sentence on all spaces, 
    // this turns the string into an array
    let split = sentence.split(" ")

    // declare variables
    // store the highest letters 
   let highest = 0;
   // store the location of highest letters 
   let location = 0;

   // loop over the array of strings 
   for ( let i = 0; i < split.length; i++ ) {

       // if the current string is longer then the stored highest . . .
       if (split[i].length > highest) {
           // update the highest value and the location 
           highest = split[i].length;
           location = i;
       }
   }
   // end by logging the length longest word in the array
   console.log(split[location].length)
};

// test case 
// expected result applesauce
longestWordInString("The banana is the best flavor  of popsicle to eat");
// checks out! 