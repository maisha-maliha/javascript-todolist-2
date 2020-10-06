const btn1 = document.querySelector('.add')
const tasks = document.querySelector('.tasks')
let value = true
var i = -1, j = 0

btn1.addEventListener("click",add)
tasks.innerHTML=""
function add(){
    i++
    let text = document.querySelector('.task-creator input').value
    tasks.innerHTML += '<div class="task"><div class="task-text"><div class="text">'+ text + '</div><input class="task-input" type="text"></div><div class="edition"><button onClick="edit(' + i + ')" class="edit">Edit</button><button onclick="dele('+ i +')" class="delete">Delete</button></div></div>'
    text = " "
}
function dele(k){
    let div = document.querySelectorAll('.task')[k]
    div.remove()
    let divl = document.querySelectorAll('.task').length
    for(j=k;j<divl;j++){
        let btn = document.querySelectorAll('.delete')[j]
        btn.setAttribute("onClick", "dele("+ j +")")
        let btn2 = document.querySelectorAll('.edit')[j]
        btn2.setAttribute("onClick", "edit("+ j +")")
    }
    i--
}
function edit(k){
    let text = document.querySelectorAll('.text')[k]
    let task_input = document.querySelectorAll('.task-input')[k]
    let task_input_value = task_input.value 
    let editbtn = document.querySelectorAll('.edit')[k]
    if(value){
        task_input.style = 'display:block'
        editbtn.innerHTML = 'Done'
        task_input.value = text.innerHTML
        value = false
    } else {
        task_input.style = ''
        edit.innerHTML = 'Edit'
        text.innerHTML = task_input_value
    }
}