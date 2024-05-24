// 24.03.2022

function main() {

    const form = document.querySelector(".form-task");
    const newTaskInput = document.querySelector(".new-task-input");
    const tasks = document.querySelector(".tasks-ul");

    if (localStorage.getItem("tasks")) {
        getTasksFromLocalStorage();
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        if (!newTaskInput.value) return;
        
        createTask(newTaskInput.value);
        clearInput();
        setTasksToLocalStorage();
    });

    document.addEventListener("click", function(e) {
        // e.preventDefault();

        const elem = e.target;
        if (elem.classList.contains("del-task-btn")) {
            delTask(elem);
            return;
        }
        return;
    })

    function createTask(newTask) {
        const li = createListItem(newTask);
        tasks.appendChild(li);
        return;
    }

    function createListItem(tastTxt) {
        const listItem = document.createElement("li");
        listItem.classList.add("tasks-li");

        const para = document.createElement("p");
        para.classList.add("task-txt");
        para.textContent = tastTxt;

        const btn = document.createElement("button");
        btn.classList.add("del-task-btn");
        btn.textContent = "[x]"

        listItem.appendChild(para);
        listItem.appendChild(btn);

        return listItem;
    }

    function clearInput() {
        newTaskInput.value = "";
        return;
    }

    function delTask(elem) {
        elem.parentElement.remove();
        setTasksToLocalStorage();
        return;
    }

    function setTasksToLocalStorage() {
        const allTasks = tasks.querySelectorAll("li");
        let allTasksArr = [];

        for (let elem of allTasks) {
            allTasksArr.push(elem.childNodes[0].textContent);
        }

        const jsonTasks = JSON.stringify(allTasksArr);
        localStorage.setItem("tasks", jsonTasks);
        return;
    }

    function getTasksFromLocalStorage() {
        const storedTasks = localStorage.getItem("tasks");
        const storedTasksArr = JSON.parse(storedTasks);

        for (let elem of storedTasksArr) {
            createTask(elem);
        }

        return;
    }

    function createDelBtn(li) {
        const newDelBtn = document.createElement("button");
        newDelBtn.classList.add("del-task-btn");
        newDelBtn.setAttribute("type", "button");
        newDelBtn.textContent = "APAGAR";

        return newDelBtn;
    }

}
main();