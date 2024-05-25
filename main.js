const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask(){
        const taskText = taskInput.value.trim();

        if(taskText !== ""){
                const maxText = taskText.substring(0,35);
                const li = document.createElement("li");
                li.innerHTML = `
                        <span>${maxText}</span>
                        <div class="button_tesk">
                                <button class="editButton" onclick="editTask(this)" >Editar</button>
                                <button class="deleteButton" onclick="deleteTask(this)" >Remover</button>
                        </div>
                `;

                taskList.appendChild(li);
                taskInput.value = "";
        }
}

function editTask(button){
        const button_edit_task = document.getElementsByClassName("editButton");
        console.log(button_edit_task);
}

function deleteTask(button){
        const li = button.parentElement;
        taskList.removeChild(li);
}
