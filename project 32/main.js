"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["John", "Saim", "Ali", "hamzah", "Saad"];
let new_users = ["John", "Naveed", "Ubaid", "Saim", "Ghulam"];
function checkUserName() {
    let lowerCasedCurrent_UserName = current_users.map(current_users => current_users.toLowerCase());
    for (let new_user of new_users) {
        let lowerCasedNewUser = new_user.toLowerCase();
        if (lowerCasedCurrent_UserName.includes(lowerCasedNewUser)) {
            console.log(`The username ${new_user} is  already in use. Please select new username `);
        }
        else {
            console.log(`The UserName ${new_user} is available`);
        }
    }
}
checkUserName();
