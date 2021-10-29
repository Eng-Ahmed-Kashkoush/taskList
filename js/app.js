// Devine ui variables

const form = document.querySelector('form');
// add input
const taskInput = document.querySelector(".insert");
// ul
const taskList = document.querySelector('.addedTasks');
const addBtn = document.querySelector('.btn-add');
const clearBtn = document.querySelector(".btn-clear");

const filterInput = document.querySelector('.filter');

loadEventListener()

function loadEventListener(e){
  // add task event
   form.addEventListener('submit', addTask);
   addBtn.addEventListener("click",addTask)
  //  remove task Event
  taskList.addEventListener('click',removeTask)

  // clear tasks Event
  clearBtn.addEventListener("click",clearTasks);
  // filter tasks event
  filterInput.addEventListener('keyup',filterTask)

  // mark task as done event
taskList.addEventListener('click', markTask)

  //  add task function
  function addTask(e){
    if(taskInput.value === ""){

    }
    // create li
    const li = document.createElement('li');
    li.className='item';
    li.appendChild(document.createTextNode(taskInput.value));
    
    const link = document.createElement('a');
    link.className = "delete"
    link.innerHTML= '<i class="fa fa-times "></i>';
  
    
    li.appendChild(link);


    taskList.appendChild(li);
    taskInput.value = ''
    
    e.preventDefault();
  }
// Remove task function
function removeTask(e){
  if(e.target.parentElement.classList.contains("delete")){
    if(confirm("Are you sure?")){
    e.target.parentElement.parentElement.remove()
  }}
}
// clearTasks function
function clearTasks(e){
//  taskList.innerHTML = "";

// * Faster in the browser
while(taskList.firstChild){
  taskList.firstChild.remove()
}
}

function filterTask(e){
  const text = e.target.value.toLowerCase();
  taskList.querySelectorAll('li').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = "block"
    }else{
      task.style.display = "none"

    }

  })
}
// markTask  function
function markTask(e){
 if(e.target.parentElement.classList.contains("addedTasks")){
   const item = e.target;
   console.log(item);
   item.style.cssText= "text-decoration:line-through;color:#04AA6D;";
 }
 }
}
  
   
