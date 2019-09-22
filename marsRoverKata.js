// Rover Object Goes Here
// =====================  ITERATION 1 - THE ROVER OBJECT
let marsRoverObject = {
    direction: "N",
    x:0,
    y:0,
    travelLog:[]
  };
  
  // ==================== ITERATION 2 - TURNING THE ROVER
  function turnLeft(rover){
    console.log("turnLeft was called!");
    switch(rover.direction) { 
      case "N": rover.direction = "W";
        console.log("Rover is now facing " + rover.direction);
        break;
      case "W": rover.direction = "S";
        console.log("Rover is now facing " + rover.direction);
        break;
      case "S": rover.direction = "E";
        console.log("Rover is now facing " + rover.direction);
        break;
      case "E": rover.direction = "N";
        console.log("Rover is now facing " + rover.direction);
        break;
    }
  };
  
  function turnRight(rover){
    console.log("turnRight was called!");
    switch(rover.direction) {
      case "N": rover.direction = "E";
        console.log("Rover is now facing " + rover.direction);
        break;
      case "W": rover.direction = "N";
        console.log("Rover is now facing " + rover.direction);
        break;
      case "S": rover.direction = "W";
        console.log("Rover is now facing " + rover.direction);
        break;
      case "E": rover.direction = "S";
        console.log("Rover is now facing " + rover.direction);
        break;
    }
  };
  //=========================== ITERATION 3 MOVING THE ROVER
  /* For instance, if the rover is facing west and moves forward, we would decrease the rover’s x by 1.
  If the rover is facing north and moves forward, we would decrease the rover’s y by 1.
  If the rover is facing south and moves forward, we would increase the y by 1. */
  
  
  function moveForward(rover){
    console.log("moveForward was called");
    switch(rover.direction) {
      case "N": if(rover.y <= 0) { 
        console.log("You can't place the rover outside of the 10x10 grid!");
        } else {
        rover.y--;
        console.log("Rover moved up. The position is now " + rover.x + ", " + rover.y);                           
    }
        break;
      case "W": if(rover.x <= 0) { 
        console.log("You can't place the rover outside of the 10x10 grid!");
        } else {
        rover.x--;
        console.log("Rover moved left. The position is now " + rover.x + ", " + rover.y);
    }
        break;
      case "S": if(rover.y >= 10) { 
        console.log("You can't place the rover outside of the 10x10 grid!");
        } else {
        rover.y++;
        console.log("Rover moved down. The position is now " + rover.x + ", " + rover.y);
    }
        break;
      case "E": if(rover.x >= 10) { 
        console.log("You can't place the rover outside of the 10x10 grid!");
        } else {
        rover.x++;
        console.log("Rover moved right. The position is now " + rover.x + ", " + rover.y);         
    }
        break;
    };
    
   //====================== ITERATION 4 COMMANDS
    
   /* Use a loop to iterate over the string. Inside this loop, write a switch or if statement to call the correct function. For instance, if the letter is f, 
   you’re going to want to call the goForward() function.*/
  
    function commandements(orders) {  
    console.log ("move" + orders);
     for (let i = 0; i<orders.length; i++) { 
      switch(orders[i]) {
        case "l": turnLeft(rover);
          break;
        case "r": turnRight(rover);
          break;
        case "f": moveForward(rover);
          break;
      }
    }
  }
};

      
    commandements("r");
     
  //=================== ITERATION 5  TRACKING
      
  marsRoverObject.travelLog.push([rover.x, rover.y]);
      
  console.log(travelLog + {i} + "==>" + x + marsRoverObject.travelLog[i].x, y + marsRoverObject.travelLog[i].y);
  
  //==================== BONUS 1 ENFORCE BOUNDARIES 
  /* Note for my code's reader ; I have already put limits in my moving and turning functions, 
  in a way that the rover doesn't accidentally roam off the map . However another option would be 
  to create a function as below and to call it in our moving function. Please note that this is a 
  suggested approach and is not reflected in my moveForward function */
  
  function safeMove(rover) {
    let result = true;
   switch(rover.direction) {
     case"N":
       if(rover.y <= 0) {
         result = false;
       }
       break;
     case"S":
       if(rover.y >= 10) {
         result = false; 
       }
       break;
     case "E":
       if(rover.x >= 10){
         result = false;
       }
       break;
     case "W":
       if (rover.x <= 0){
         result = false
       }
       break;
   } 
    return result;
  };
      
  safeMove(marsRoverObject)
  
  //================ Bonus 2 MOVE BACKWARDS
      
      function moveBackwards(rover){
    console.log("moveBackwards was called");
    switch(rover.direction) {
      case "N": if(rover.y >= 10) { 
        console.log("You can't place the rover outside of the 10x10 grid!");
        } else {
        rover.y++;
        console.log("Rover moved down. The position is now " + rover.x + ", " + rover.y);                           
    }
        break;
      case "W": if(rover.x >= 0) { 
        console.log("You can't place the rover outside of the 10x10 grid!");
        } else {
        rover.x++;
        console.log("Rover moved down. The position is now " + rover.x + ", " + rover.y);
    }
        break;
      case "S": if(rover.y <=0) { 
        console.log("You can't place the rover outside of the 10x10 grid!");
        } else {
        rover.y--;
        console.log("Rover moved down. The position is now " + rover.x + ", " + rover.y);
    }
        break;
      case "E": if(rover.x <= 0) { 
        console.log("You can't place the rover outside of the 10x10 grid!");
        } else {
        rover.x--;
        console.log("Rover moved right. The position is now " + rover.x + ", " + rover.y); break;        
    } 
  }
 } ;

 // BONUS 3 VALIDATE INPUTS

switch(orders){
  case "l": orders==="l"; 
  turnLeft(rover);
  break;
  case "r": orders==="r";
  turnRight(rover);
  break;
  case "f": orders==="f";
  moveForward(rover);
  break;
  case "b": orders==="b";
  moveBackwards(rover);
  break;
};

// BONUS 4 OBSTACLES Obstacles -
/* Create obstacles for the rover. If the rover’s next move would run it into an obstacle, 
stop it from moving forward and report the obstacle as found with console.log.
Other Rovers - Add additional rovers to the map. Have them take turns moving. 
If one rover is going to run into the other, you should stop the rover and console.log a message saying so.*/

let obstaclesForRover = []; //Need some help here :(


