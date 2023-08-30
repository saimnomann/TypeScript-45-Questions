"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// Step 1
function make_shirt(size = "large", message = "I love typescript") {
    console.log(`Size:${size},message:${message}`);
}
make_shirt();
// Step 2
make_shirt("medium");
// Step 3
make_shirt("small", "I love wearing cap");
