// varibles
const form = getElement('addForm')
const todoList = getElement('todos')
const filter = getElement('filter')
const todo   = getElement('todo')


//events

//form submit

form.addEventListener('submit', addTodo)

// click event on delete

todoList.addEventListener('click', removeTodo);

//keyup event for search
filter.addEventListener('keyup', filterTodos);

//functions

function getElement(id){
    return document.getElementById(id);
}

function addTodo(e){
    e.preventDefault()
    
    if (todo.value == '') {
        alert('put a valid todo')
        return
    }
 // get the user input
 
 const newTodo = todo.value 

 // create li 
 const li = document.createElement('li')
 
 // add classes to li
 li.className = "list-group-item "
 
 // add new todo to the li
 li.innerText = newTodo

 // create delete button
 let deleteButton = document.createElement('button')

 deleteButton.className = "btn btn-danger btn-sm delete"
  
 deleteButton.innerText = 'delete'

 li.append(deleteButton);
 todoList.append(li)
 todo.value =''
}


function removeTodo(e){
    if(e.target.classList.contains('delete')){
        let result = confirm("are you sure")
   if(result){
       let li = e.target.parentElement
       todoList.removeChild(li)
   }
    }
}

function filterTodos(e){
let searchText = e.target.value.toLowerCase()

// get the list items
let liItems = document.getElementsByTagName('li')

//convert into array
   Array.from(liItems).forEach(item => {
    let todoName = item.firstChild.textContent
    console.log(todoName.toLowerCase().indexOf(searchText))
    if(todoName.toLowerCase().indexOf(searchText) != -1){
        item.style.display = 'block'
    }
    else{
        item.style.display = 'none'
    }
})
}