function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return decodeURIComponent(c.substring(nameEQ.length));
        }
    }
    return null;
}

function saveTodos() {
    const todos = [];
    const list = document.getElementById("ft_list").children;
    for (let i = 0; i < list.length; i++) {
        todos.push(list[i].textContent);
    }
    setCookie("todos", JSON.stringify(todos), 30);
}

function createTodo(text) {
    const div = document.createElement("div");
    div.className = "todo";
    div.textContent = text;

    div.onclick = function () {
        if (confirm("Do you wanna remove this TO-DO?")) {
            div.remove();
            saveTodos();
        }
    };

    const list = document.getElementById("ft_list");
    list.prepend(div);
}

function loadTodos() {
    const cookie = getCookie("todos");
    if (cookie) {
        const todos = JSON.parse(cookie);
        for (let i = todos.length - 1; i >= 0; i--) {
            createTodo(todos[i]);
        }
    }
}

document.getElementById("new").onclick = function () {
    const text = prompt("Enter a new TO-DO:");
    if (text && text.trim() !== "") {
        createTodo(text.trim());
        saveTodos();
    }
};

loadTodos();