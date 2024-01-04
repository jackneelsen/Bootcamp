var userName = prompt("Welcome to GC mini golf! What is your name?");

var holes = prompt("Hi, " + userName + "! Would you like to play 3 or 6 holes?");
holes = parseInt(holes);

let par = 3 * holes;
par = parseInt(par)

if (isNaN(holes) || holes <= 0) {
    console.log("Error. Please enter again.");
  } else {
    // Initialize scores
    var totalPutts= 0};
  
    // Iterate through each hole
    for (var holeNumber = 1; holeNumber <= holes; holeNumber++) {
      // Ask for the score on the current hole
      let score = prompt("How many putts for hole " + holeNumber + "? (par is 3)");
        totalPutts += parseInt(score);
    };

let endScore = totalPutts - par;
console.log(endScore)

if (endScore === 0) {
      console.log("Good game, " + userName + ". Your total par was: " + endScore + ".");
  } else if (endScore < 0) {
        console.log("Great job, " + userName + "! Your total par was: " + endScore + ".");
  }   else {
          console.log("Nice try " + userName + ". Your total par was: + " + endScore + ".");
}