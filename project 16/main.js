// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Step 1
var guestName = ["Fawad", "Umer", "Uzair"];
//Step 2
guestName.unshift("Ayan");
// step 3
guestName.splice(2, 0, "Hamzah");
guestName.push("Adil");
for (var i = 0; i < guestName.length; i++) {
    var message = "We have found bigger dinner table so ".concat(guestName[i], " you are invited to dinner on Monday");
    console.log(message);
}
