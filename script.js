function susFunction(){
  confirm("You have to be over 18 to answer these questions. Are you?");
  prompt("What is your name???");
  prompt("What is your age???");
  prompt("Where do you live???");
}
function milliDollarFunction(){
  alert("Pull yourself up by your bootstraps, ya damn hippy.");
}
function coolCarFunction(){
  alert("Vroom, vroom! You just got a Toyota Corrola!!!")
}
function mathProblem(){
  var score = 0;
  var math = prompt("What is 1 + 1?")
  if (math == 2){
    alert("CORRECT");
    score = score + 1;
  }
  else if (math == 3){
    alert("seriously?");
    score = score - 1;
  }
  else if (math == 1){
    alert("you are very dumb.");
    score = score - 1;
  }
  else {
    alert("bruh");
    score = score - 1;
  }
  math = prompt("What is 2 + 2 ?")
  if (math == 4){
    alert("CORRECT!!!");
    score = score + 1;
  }
  else {
    alert("WRONG, SUCKER!");
    score = score - 1;
  }
  math = prompt("What is 4 + 4 ?");
  if (math == 8) {
    alert("CORRECT!!!");
    score = score + 1;
  }
  alert("Moving on to level 2...");
  math = prompt("What is 8 - 2 ?")
  if (math == 6) {
    alert("CORRECT!!!");
    score = score + 2;
  }
  else if (math == 10) {
    alert("WHAT THE HELL?!?!? ARE YOU IN PRE-K?!?!?");
    score = score - 2;
  }
  else {
    alert("Seriously???");
    score = score - 2;
  }
  math = prompt("What 10 - 2 ?")
  if (math == 8) {
    alert("CORRECT!!! YOU ARE SUPER SMART!!!");
    score = score + 2
  }
  else {
    alert("WRONG!!!");
    score = score - 2;
  }
  math = prompt ("What is 12 - 4 ?")
  if (math == 8) {
    alert("CORRECTAMUNDO!!!");
    score = score + 2;
  }
  else {
    alert("BRUH! why???");
    score = score - 2;
  }
  alert("Your final score is " + score);
}