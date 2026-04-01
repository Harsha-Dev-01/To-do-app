const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const clearBtn = document.getElementById("clearBtn");

addBtn.addEventListener("click", function() {
    let task = input.value.trim();

    if (task === ""){
        return;
    }

    let li = document.createElement("li");
    li.innerText = task + " ";

    let btn = document.createElement("button");
    btn.innerText = "Delete";

    btn.addEventListener("click", function() {
        e.stopPropagation();
        li.remove();
    });

    li.addEventListener("click", function() {
    li.classList.toggle("completed");
    });

    li.appendChild(btn);

    taskList.appendChild(li);

    input.value = "";

});

clearBtn.addEventListener("click", function() {
    taskList.innerHTML = "";
});

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addBtn.click();
    }
});