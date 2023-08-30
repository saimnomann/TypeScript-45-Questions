// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
 
// Step 1
 let guestName=["Fawad","Ali","Uzair"];
let notAvailable=`${guestName[1]} cannot come due to his work`;
console.log(notAvailable);

// Step2 
guestName.splice(1,1,"Umer");

//Step 3
for(let i=0;i<guestName.length;i++){
   let message=`Dear ${guestName[i]},you are invited to dinner on Monday}`;
   console.log(message);
}
