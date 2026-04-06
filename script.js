let todolist=[];
function addtodo(){
    let inputElement=document.querySelector('#todo-input');
    let dateElement=document.querySelector('#todo-date');
    let todoitem=inputElement.value;
    let tododate=dateElement.value;
    todolist.push({item:todoitem,duedate:tododate});
    inputElement.value='';
    displayitem();
}
function displayitem(){
    let containerElement=document.querySelector('.todocontainer');
    let newhtml = '';
    for(let i=0; i < todolist.length; i++){
        let {item,duedate}=todolist[i];
        newhtml += `
        <span>${item}</span>
        <span>${duedate}</span>
        <button class="btn-del" onclick="todolist.splice(${i},1);displayitem();">delete</button>
        `;
    } 
    containerElement.innerHTML = newhtml;
}

