console.log("Project: TODO");

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const task = taskInput.value;

    if (task.trim() === "") return;

    const li = document.createElement("li");

    li.innerText = task;

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "✅";
    completeBtn.style.marginLeft = "5px";
    completeBtn.onclick = function () {
        li.classList.toggle("completed");
    };
    li.appendChild(completeBtn);

    const editBtn = document.createElement("button");
    editBtn.innerText = "🖊️";
    editBtn.style.marginLeft = "5px";
    editBtn.onclick = function () {
        const inputElem = document.createElement("input");
        inputElem.value = li.firstChild.textContent;
        li.replaceChild(inputElem, li.firstChild)

        const saveBtn = document.createElement("button");
        saveBtn.innerText = "Save";
        saveBtn.style.marginLeft = "5px";
        saveBtn.style.height = "22px";

        li.insertBefore(saveBtn, li.firstElementChild.nextElementSibling);

        saveBtn.onclick = function () {
            const editedTaskValue = document.createTextNode(inputElem.value);
            li.firstChild.remove()
            li.firstChild.remove()
            li.insertBefore(editedTaskValue, li.firstChild)
            li.classList.remove("completed");
        }
    };
    li.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.style.marginLeft = "5px";
    deleteBtn.onclick = function () {
        li.remove();
    };
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
}

function filterTasks() {
    const searchTask = document.getElementById("searchInput").value;
    const taskList = document.querySelectorAll("#taskList li")
    taskList.forEach(task => {
            task.style.display = task.innerText.toLowerCase().includes(searchTask.toLowerCase()) ? "block" : "none";
    })
}