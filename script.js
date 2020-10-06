const btn1 = document.querySelector('.add')
const tasks = document.querySelector('.tasks')

let i = -1

btn1.addEventListener("click",add)
tasks.innerHTML=""
function add(){
    i++
    const text = document.querySelector('.task-creator input').value
    tasks.innerHTML += '<div class="task"><div class="task-text"><div class="text">'+ text+'hi' +'</div><input class="task-input" type="text"></div><div class="edition"><button class="edit">Edit</button><button class="delete">Delete</button></div></div>'
    console.log(tasks,i)
    let task = tasks.querySelectorAll('.task')[i]
    let btn2 = task.querySelector('.edit')
    let btn3 = task.querySelector('.delete')
    btn3.addEventListener("click",del)
    console.log(btn3)
}

function del(){
    let div = document.querySelectorAll('.task')[i]
    div.remove()
    i--
    console.log(div,i)
}
