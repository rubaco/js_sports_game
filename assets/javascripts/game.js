(function() {

  //reset
  let reset_Button = document.querySelector("#reset")
  let reset_Label = document.querySelector("#num-resets")
  let reset_Counter = 0;



  //items i need from the dom to work with
  let teamoneShoot_Button = document.querySelector("#teamone-shoot")
  let teamoneNumShots_Label = document.querySelector("#teamone-numshots")
  let teamOneNumShots_Counter = 0;
  let teamOneRandom = 0;
  let goalCounter = 0;
  let teamOneGoalScore = document.querySelector("#teamone-numhits")

  //items 2 I need from the dom to work with
  let teamtwoShoot_Button = document.querySelector("#teamtwo-shoot")
  let teamtwoNumShots_Label = document.querySelector("#teamtwo-numshots")
  let teamtwoNumShots_Counter = 0;
  let teamTwoRandom = 0;
  let goalCounter2 = 0;
  let teamTwoGoalScore = document.querySelector("#teamtwo-numhits")

  document.getElementById('score').display = 'visible';


//*****Team One
  //click on the button and then incrment the number shots label
  teamoneShoot_Button.addEventListener("click", function() {

    //teamOneRandom = (Math.random() * 10) + 1
    teamOneRandomFloor = Math.floor(Math.random() * 7) + 1;
    teamOneNumShots_Counter= teamOneNumShots_Counter + 1;
    teamoneNumShots_Label.innerHTML = teamOneNumShots_Counter;


    if (teamOneRandomFloor == 1) {

      console.log("extra point!" + "  number is:" + teamOneRandomFloor)
      goalCounter = goalCounter + 1;
      document.getElementById('pointScored').style.visibility = 'visible'
      document.getElementById('body').style.backgroundColor = "green"
      document.getElementById("pointScored").textContent = "1 point";


    } else if (teamOneRandomFloor == 2) {
      console.log("safety!" + "  number is:" + teamOneRandomFloor)
      goalCounter = goalCounter + 2;
      document.getElementById('pointScored').style.visibility = 'visible'
      document.getElementById('body').style.backgroundColor = "green"
      document.getElementById('pointScored').innerHTML = '2 Points';

    } else if (teamOneRandomFloor == 3) {
      console.log("field goal!" + " number is:" + teamOneRandomFloor)
      goalCounter = goalCounter + 3;
      document.getElementById('pointScored').style.visibility = 'visible'
      document.getElementById('body').style.backgroundColor = "green"
      document.getElementById('pointScored').innerHTML = '3 Point';

    } else if (teamOneRandomFloor == 7) {
      console.log("gooooooal" + " number is:" + teamOneRandomFloor)
      goalCounter = goalCounter + 7;
      document.getElementById('pointScored').style.visibility = 'visible'
      document.getElementById('body').style.backgroundColor = "green"
      document.getElementById('pointScored').innerHTML = '7 Points';

    } else {
      console.log("you missed" + "  number is:" + teamOneRandomFloor)
      document.getElementById('pointScored').style.visibility = 'hidden'
      document.getElementById('body').style.backgroundColor = "white"
      document.getElementById('pointScored').innerHTML = 'No score';


    }

    teamOneGoalScore.innerHTML = goalCounter;

  })

//end of team 1

//****Team 2
//click on the button and then incrment the number shots label
teamtwoShoot_Button.addEventListener("click", function() {

  //teamtwoRandom = (Math.random() * 10) + 1
  teamTwoRandomFloor = Math.floor(Math.random() * 7) + 1;
  teamtwoNumShots_Counter= teamtwoNumShots_Counter + 1;
  teamtwoNumShots_Label.innerHTML = teamtwoNumShots_Counter;


  if (teamTwoRandomFloor == 1) {

    console.log("extra point!" + "  number is:" + teamTwoRandomFloor)
    goalCounter2 = goalCounter2 + 1;
    document.getElementById('pointScored').style.visibility = 'visible'
    document.getElementById('body').style.backgroundColor = "blue"
    document.getElementById("pointScored").textContent = "1 point";


  } else if (teamTwoRandomFloor == 2) {
    console.log("safety!" + "  number is:" + teamTwoRandomFloor)
    goalCounter2 = goalCounter2 + 2;
    document.getElementById('pointScored').style.visibility = 'visible'
    document.getElementById('body').style.backgroundColor = "blue"
    document.getElementById('pointScored').innerHTML = '2 Points';

  } else if (teamTwoRandomFloor == 3) {
    console.log("field goal!" + " number is:" + teamTwoRandomFloor)
    goalCounter2 = goalCounter2 + 3;
    document.getElementById('pointScored').style.visibility = 'visible'
    document.getElementById('body').style.backgroundColor = "blue"
    document.getElementById('pointScored').innerHTML = '3 Point';

  } else if (teamTwoRandomFloor == 7) {
    console.log("gooooooal" + " number is:" + teamTwoRandomFloor)
    goalCounter2 = goalCounter2 + 7;
    document.getElementById('pointScored').style.visibility = 'visible'
    document.getElementById('body').style.backgroundColor = "blue"
    document.getElementById('pointScored').innerHTML = '7 Points';

  } else {
    console.log("you missed" + "  number is:" + teamTwoRandomFloor)
    document.getElementById('pointScored').style.visibility = 'hidden'
    document.getElementById('body').style.backgroundColor = "white"
    document.getElementById('pointScored').innerHTML = 'No score';


  }

  teamTwoGoalScore.innerHTML = goalCounter2;

})

//end of team 2
  reset_Button.addEventListener("click", function() {

    reset_Counter = reset_Counter + 1;
    alert("game has been reset!");
    teamoneNumShots_Label.innerHTML = 0;
    goalCounter = 0;
    teamOneGoalScore.innerHTML = goalCounter;
    reset_Label.innerHTML = reset_Counter;

    teamtwoNumShots_Label.innerHTML = 0;
    goalCounter2 = 0;
    teamTwoGoalScore.innerHTML = goalCounter;


  })

})();
