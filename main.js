/**
 * To-Do Manager
 */
//For my addition I added a dueDate property to each object in the TODOS array, added a function to change the due date, added the due date to the print line of the list function, added dueDate to the addTodo function, and added/changed a few lines to the runManager function to be able to call the changeDueDate function
//Added a function to check if a valid index in TODOS is given called checkTaskNumber


const TODOS = [
  {
    title: "Learn about objects and arrays",
    done: true,
    dueDate: "Sunday",
  }, {
    title: "Build a to-do manager",
    done: false,
    dueDate: "Monday",
  }, {
    title: "Enjoy the weekend!",
    done: false,
    dueDate: "Christmas Eve",
  },
];


//Create a function that will check if the user sent in a valid TODOS array index/to do number
const checkTaskNumber = function(userIndex) {
  //if the user given index number is not a number, greater than the length of the array, or is negative, continue asking for a valid number
  if(isNaN(userIndex) || userIndex >= TODOS.length || userIndex < 0) {
    while(isNaN(userIndex) || userIndex >= TODOS.length || userIndex < 0) {
      userIndex = prompt("Please write a valid task number. Type list to see the to-do list.")
      //If the user types list, call the listTodos function
      if(userIndex === "list") {
        listTodos();
      }
    }
  }
  return userIndex;
};


const changeDueDate = function() {
  
  //Ask the user which task to change 
  let taskIndex = (prompt("What task would you like to change the date of?"));
  //Check if the taskNumber is valid
  taskIndex = checkTaskNumber(taskIndex);
  //Ask the user what to change the due date to
  let newDate = prompt("What would you like to change the date to?");

  //set the dueDate property value of given object to newDate
  TODOS[taskIndex].dueDate = newDate;
};



// Write a function to print out incomplete to-do items
const listTodos = function() {
  //Loop through all the indexes of the TODOS array
  for(let index = 0; index < TODOS.length; index++) {
    //If the done property has a false value, print its index and title
   if(TODOS[index].done === false) {
     console.log(`${index} - ${TODOS[index].title} - ${TODOS[index].dueDate}`);
   }
  }
};



// Write a function to add new items to the to-do list
const addTodo = function() {
  //prompt user to enter a task
  let usersTask = prompt("What task would you like to add?");
  //prompt user to enter a due date
  let userDueDate = prompt("When should the task be finished?");
  //Make new object with title: and done: properties
  //Store user's input in title property, false in done property
  //Add the object to the TODOS array
  TODOS.push({
    title: usersTask,
    done: false,
    dueDate: userDueDate,
  });
};



// Write a function to mark an item as completed
const completeTodo = function() {
  //create a variable to store the index of the task
  let taskIndex = Number(prompt("What task number do you want to set as finished?")); 
  //Check if the task index was valid
  taskIndex = checkTaskNumber(taskIndex);
  //Set that property's done value to true
  TODOS[taskIndex].done = true;
};


const runManager = function() {
  let keepRunning = true;

  console.log("Welcome to your to-do manager. What would you like to do?");
  //Print the command list pre-emptively
  console.log("Commands: list, add, complete, date change, quit");

  while (keepRunning) {
    const command = prompt("\nEnter command");

    switch (command) {
      case 'list':
        listTodos();
        break;
      case 'add':
        addTodo();
        break;
      case 'complete':
        completeTodo();
        break;
      //Added in a date change case
      case 'date change':
        changeDueDate();
        break;
      case 'quit':
        keepRunning = false;
        break;
      default:
        console.log("Commands: list, add, complete, date change, quit");
    }
  }
  console.log("Goodbye!");
};


runManager();
