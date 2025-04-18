const todoList = [];

renderTodoList();

function renderTodoList(){

  //Here we used accumulator pattern
  let todoListHTML = '';

  //ForEach loop is easier to read than for loop for arrays
  todoList.forEach((todoObject,index) => {
    const {name, dueDate} = todoObject; //Destructuring
    todoListHTML += `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class='delete-todo-button js-delete-button'>Delete</button>
       `; //We generated the HTML for each element in the array
  })

  // for(let i = 0; i < todoList.length; i++){
  //   const todoObject = todoList[i];
  //   // const name = todoObject.name;
  //   // const dueDate = todoObject.dueDate;
  //   const {name, dueDate} = todoObject; //Destructuring
  //   todoListHTML += `
  //     <div>${name}</div>
  //     <div>${dueDate}</div>
  //     <button class='delete-todo-button' onclick='
  //       todoList.splice(${i},1); //1 is the number of elements we want to delete
  //       renderTodoList();
  //     '>Delete</button>
  //      `; //We generated the HTML for each element in the array
  // }

  document.querySelector('.js-todoList').innerHTML = todoListHTML; //We render the HTML to the DOM 

  //For adding event listener to each delete button we use .querySelectorAll() which returns an array of elements and after that we use forEach loop to add the event listener to each button
  document.querySelectorAll('.js-delete-button').forEach((deleteButton,index)=>{
    deleteButton.addEventListener('click',() =>{
      todoList.splice(index,1); //1 is the number of elements we want to delete
        renderTodoList();
    })
  })

}

document.querySelector('.js-add-button').addEventListener('click',() =>{
  addTask();
})

function addTask(){
  const inputElement = document.querySelector('.Todo-input');

  const dueDateElement = document.querySelector('.dueDate-input');

  const name = inputElement.value;
  const dueDate = dueDateElement.value;
  todoList.push({
    // name : name,
    // dueDate : dueDate
    //This is called as shorthand property
    name,
    dueDate
  });
  console.log(todoList);

  inputElement.value = ''; //After pressing the add button, the input field is emptied.
  document.querySelector('.dueDate-input').value = ''; //Resets the date after adding the task

  renderTodoList();
  
}