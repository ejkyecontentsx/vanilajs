const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function deleteTodo(evt){
    let li = evt.target.parentElement;

    li.remove();
    
    toDos = toDos.filter((todo)=>{ 
        if (todo.id !== parseInt(li.id)) return true;
        else return false;
     });

     saveToDos();

}

function saveToDos()
{
    localStorage.setItem("todos", JSON.stringify(toDos)) ;
}

function loadToDos()
{
    const loaddata = localStorage.getItem("todos");


    if (loaddata === null)
    {
        toDos = [];
    }
    else 
    {
        toDos = JSON.parse(loaddata);
    }
}

function paintToDos()
{
    toDoList.innerHTML = "";

    toDos.forEach(x => {
        const li = document.createElement("li");
        li.setAttribute("id", x.id);
    
        const span = document.createElement("span");
        span.innerText = x.task;
    
        const button = document.createElement("button");
        button.innerText = "X"
        button.addEventListener("click", deleteTodo);
        li.appendChild(span);
        li.appendChild(button);
        toDoList.appendChild(li);
    });
    
}


function handleToDoSubmit(evt)
{
    evt.preventDefault();

    const task = { task : toDoInput.value, id : Date.now() }

    toDoInput.value = "";

    toDos.push(task);
    paintToDos();
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
loadToDos();
paintToDos();