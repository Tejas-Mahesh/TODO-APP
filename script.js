let todolist=['buy mil','go to college'];
function addtodo(){
    let inputElement=document.querySelector('#todo-input');
    let todoitem=inputElement.value;
    console.log(todoitem);
    todolist.push(todoitem);
    inputElement.value='';
    displayitem();
}
function displayitem(){
    let containerElement=document.querySelector('.todocontainer');
    let newhtml = '';
    for(let i=0; i < todolist.length; i++){
        newhtml += `
        <div>
        <span>${todolist[i]}</span>
        <button onclick="todolist.splice(${i},1);displayitem();">delete</button>
        </div>
        `;
    } 
    containerElement.innerHTML = newhtml;
}

