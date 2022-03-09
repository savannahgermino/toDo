

function addTask(){
    console.log("Add Task");
    let task=prompt("Enter a new task:");
    info.push(task);
    displayTask();
}

function displayTask(){

    document.getElementById("taskList").innerHTML="";

    for(let x=0;x<task.length;x++){
        document.getElementById("taskList").innerHTML+=`
        <li id="${x}">${info[x]} <button onclick="deleteTask(${x});"> Delete </button> </li>
        `;
    }
}
displayTask();

function deleteTask(id){
    document.getElementById(id).remove();
    task.splice(id,1);
}