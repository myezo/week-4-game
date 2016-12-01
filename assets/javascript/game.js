$(document).ready(function(){

//assign variables and arrays
var numberArr = [];
var randomNumber = 0;
var userScore = 0;
var wins = 0;
var losses = 0;
var adtr = "";
var blink = "";
var atl = "";
var parkway = "";


/*createNumbers function that creates and array of non repeating
random numbers between 1-12. create random number between 
19-120, set userScore to 0*/
function createNumbers(){
  $('#wins').html('Wins: ' + wins  + '<br>Losses: ' + losses);
  randomNumber = Math.floor(Math.random() * 120) + 19;
  userScore = 0;
  $('#user-score').html('Your total score is: ' + userScore);
      while(numberArr.length < 4){
          var randomnumberBand = Math.ceil(Math.random()*11) + 1;
        if(numberArr.indexOf(randomnumberBand) > -1)continue;
          numberArr.push(randomnumberBand);   
    }
    console.log(numberArr);
}


createNumbers();

function alertMe(){
  console.log("that worked");
}


/* assignVariables function assigns variables to numberArray*/
function assignVariables(){
    adtr = numberArr[0];
    blink = numberArr[1];
    atl = numberArr[2];
    parkway = numberArr[3];
    console.log(adtr);
    console.log(blink);
    console.log(atl);
    console.log(parkway);
}

assignVariables();

//add randomNumber to html #computer-score
$('#computer-score').text(randomNumber);
console.log(randomNumber);


/*newGame function sets userScore to 0 and creates new 
random number*/
function newGame(){
  randomNumber = Math.floor(Math.random() * 120) + 19;
  userScore = 0;
  $('#computer-score').text(randomNumber);
  $('#user-score').html('Your total score is: ' + userScore);
}


/*all pics click function that adds userScore, if userScore
== randomNumber then you win, else you lose, calls new game and
createNumbers to set everything back to a new random number and
new array*/
$( "#adtr" ).click(function() {
  userScore = userScore + adtr;
  console.log(userScore);
  $('#user-score').html('Your total score is: ' + userScore);
  if (userScore === randomNumber) {
      wins++;
      $('#wins').html('Wins: ' + wins + '<br>Losses: ' + losses);
      console.log(wins);
      alertMe();
      numberArr = [];
      createNumbers();
      newGame();
      assignVariables();
      console.log(numberArr);
      alert("You win!");
    }
    else if (userScore >= randomNumber) {
      losses++;
      $('#losses').text('Wins: ' + wins + 'Losses: ' + losses);
      console.log(losses);
      alertMe();
      numberArr = [];
      createNumbers();
      newGame();
      assignVariables();
      console.log(numberArr);
      alert("You lose!!");
    }
});


$( "#blink" ).click(function() {
  userScore = userScore + blink;
  console.log( userScore );
  $('#user-score').html('Your total score is: ' + userScore);
  if (userScore === randomNumber) {
      wins++;
      $('#wins').text(wins);
      console.log(wins);
      alertMe();
      numberArr = [];
      createNumbers();
      newGame();
      assignVariables();
      alert("You win!");
    }
    else if (userScore >= randomNumber) {
      losses++;
      $('#losses').text(losses);
      console.log(losses);
      alertMe();
      numberArr = [];
      createNumbers();
      newGame();
      assignVariables();
      alert("You lose!!");
    }
});


$( "#atl" ).click(function() {
  userScore = userScore + atl;
  console.log( userScore );
  $('#user-score').html('Your total score is: ' + userScore);
  if (userScore === randomNumber) {
      wins++;
      $('#wins').text(wins);
      console.log(wins);
      alertMe();
      numberArr = [];
      createNumbers();
      newGame();
      assignVariables();
      alert("You win!");
    }
    else if (userScore >= randomNumber) {
      losses++;
      $('#losses').text(losses);
      console.log(losses);
      alertMe();
      numberArr = [];
      createNumbers();
      newGame();
      assignVariables();
      alert("You lose!!");
    }
});


$( "#parkway" ).click(function() {
  userScore = userScore + parkway;
  console.log( userScore );
  $('#user-score').html('Your total score is: ' + userScore);
  if (userScore === randomNumber) {
      wins++;
      $('#wins').text(wins);
      console.log(wins);
      alertMe();
      numberArr = [];
      createNumbers();
      newGame();
      assignVariables();
      alert("You win!");
    }
    else if (userScore >= randomNumber) {
      losses++;
      $('#losses').text(losses);
      console.log(losses);
      alertMe();
      numberArr = [];
      createNumbers();
      newGame();
      assignVariables();
      alert("You lose!!");
    }
});




});


    



