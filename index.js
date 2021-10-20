var readlinesync = require("readline-sync");
var chalk = require("chalk");

var highscore=
  {
    rohit:5,
    shubham:3
  }

var highest = 5;
var username = readlinesync.question(chalk.greenBright("What is your name?\n"));
console.log();

console.log(chalk.yellowBright("Welcome "+chalk.italic(username)+" to the ultimate marvel cinematic universe quiz where you will be tested on your nerd quotient\n"))

console.log("There will be 2 levels.\n 1 "+chalk.red("noob\n")+" 2 "+chalk.red("Intermediate\n"))

console.log(chalk.red("Rules:-"));

console.log(chalk.bgCyan("Each level will have 3 questions and you need to score atleast 2 in one level to clear it and go to next level.\n"));

var bank = [
  {
question :"What bulletproof defender was the first black superhero to get his own comic book?\n a)Storm\n b)Black Panther\n c)Luke Cage",
answer:"c"  
},

{question :"Nick Fury lost his eye to what type of creature\n a)Demigorgon\n b)Flerken\n c)Abilisk",
answer:"b" },

{question :"Which doctor of biophysics was feeling blue after testing out his own experimental serum, leading to a further mutation of their mutant genes?​\n a)Mystique\n b)Beast\n c)Magneto",
answer:"b" },

{question :"Marvel had a trademark on this word between the years 1975-1996, but released the trademark after finding it impossible to enforce.​\n a)Mutant\n b)Zombie\n c)Marvel",
answer:"b" },

{question :"Which wisecracking mutant famously killed the entire marvel universe, including his dinosaur alter-ego?\n a) Cable\n b)Deadpool\nc)Juggernaut",
answer:"b" },

{question :"Which super villain is the leader of the fictional country of Latveria?\n a)Red skull\n b)Mordo\n c)Doctor Doom",
answer:"c" }

]
var score = 0;
for(var i =0;i<bank.length;i++){
console.log(Number(i+1)+" "+bank[i].question);
var ans = readlinesync.question(chalk.underline("Your answer is ?:\n"));
if(ans===bank[i].answer){
  console.log(chalk.green("Good Job"));
  score++;
 
}else{
  console.log(chalk.red("Wrong!!!"));
  
}
 console.log("Your current score is ",score);
 console.log("-----------------------------------------")


if(i==2&&score<2){
   console.log(chalk.red("You did not clear level 1, still a noob"));
   break;
}
if(i==2&&score>=2){
   console.log(chalk.red("You have cleared level 1, onto the next level you go "));
  
}
}
if(score>highest){
  console.log(chalk.yellowBright("You have made a new high score"));
}
console.log(chalk.green("Final score ")+score);

var cuser=username;
var cval=score;

highscore[cuser]=cval;

console.log(chalk.italic("Score List"));

console.log(highscore);








