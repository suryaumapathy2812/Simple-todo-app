function submitHandler(event) {
    event.preventDefault();                                                         // to prevent page from reloading
    const newTask = document.getElementById("newTask").value;                       // get value from input field
    sendTaskToURL(newTask);
}

function renderList(taskList) {
    const noOfTask = taskList.length;

    let tasks = "";
    for (i = 0; i < noOfTask; i++) {
        const _task = taskList[i];
        let newTask = " <li class='list-group-item'> " + _task.task + " </li> ";
        tasks = tasks + newTask;
    }

    const ulTag = document.getElementById("taskLists");
    ulTag.innerHTML = tasks;
}

function getTasksFromURL() {
    const url = "https://61e5369e595afe00176e53f3.mockapi.io/tasks";
    axios.get(url)
        .then(function (response) {
            console.table(response.data);
            renderList(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

function sendTaskToURL(task) {

    const data = {
        task: task
    }

    const url = "https://61e5369e595afe00176e53f3.mockapi.io/tasks";
    axios.post(url, data)
        .then(function (response) {
            console.log("Data has been sent successfully");
            console.log(response.data);
            getTasksFromURL();
        })
        .catch(function (error) {
            console.log(error);
        });

}
