



var destination;
var groupSize;
var travelSug;



vacationType = prompt("Welcome! What kind of vacation would you like to go on, musical, tropical, or adventurous?");
console.log(vacationType);

switch(vacationType){
    case "musical":
        alert("Musical! Sounds nice!")
            break;
    case "tropical":
        alert("Tropical! Nice!")
            break;
    case "adventurous":
        alert("Adventure Time!")
            break;}

while(vacationType != "musical" && vacationType != "tropical" && vacationType != "adventurous") {
    vacationType = prompt("Oops! Lets try again: musical, tropical, or adventurous?");
}
if(vacationType === "musical"){
    destination = "New Orleans";
}
else if (vacationType === "tropical"){
    destination = "the beach in Mexico";
}
else if (vacationType === "adventurous"){
    destination = "a whitewater rafting adventure in the Grand Canyon";
}




groupSize = parseInt(prompt("Beautiful! How many will be traveling?"));

console.log(alert(groupSize + " got it!"));

while(groupSize < 1) {
    travelSug = prompt("Oops! Lets try again: how many in your party?");
}
if (groupSize > 5) {
    travelSug = "a charter flight";
}
else if (groupSize > 2) {
    travelSug = "a helicopter";
}
else if (groupSize > 0) {
    travelSug = "first class";
}

var result = ("Since you're a group of " + groupSize + " going on a " + vacationType + " vacation, you should take " + travelSug + " to " + destination + "!")
console.log(result);
alert(result);