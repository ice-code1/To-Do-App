// console.log("Testing for Javascript")
const inputBox = document.getElementById("input-box")
const listCont = document.getElementById("list-cont")

function addTask(){
    if (inputBox.value === ''){
        alert("You must add a task!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listCont.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)

        let editbtn =document.createElement("button")
        editbtn.textContent = "edit"
        editbtn.className = "editBtn"
        li.appendChild(editbtn)
        inputBox.value = ''
        editbtn.addEventListener("click",function(){
            editTask(li)
        })      
    }
    
    inputBox.appendChild(li)
    inputBox.value = ''

     //edit button
    saveData()
}

listCont.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false)
//edit
document.inputBox.addEventListener("click",function(e){
    if(e.target && e.target.className == "editBtn"){
        editTask(e.target.parentElement)
    }
})

function editTask(taskElement){
    taskElement.classList.toggle("editing")
    const taskText =taskElement.firstChild.nodeValue.trim()
    const newTaskText = prompt("Edit Task", taskText)
    if(newTaskText !== null){
        taskElement.firstChild.nodeValue = newTaskText
    }
    taskElement.classList.remove("editing")
}
//

function saveData(){
    localStorage.setItem("data",listCont.innerHTML)
}

function showTask(){
    listCont.innerHTML = localStorage.getItem("data")
}

showTask()

addTask()