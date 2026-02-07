$(function () {

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
        $("#ft_list .todo").each(function () {
            todos.push($(this).text());
        });
        setCookie("todos", JSON.stringify(todos), 30);
    }

    function createTodo(text) {
        const $div = $("<div></div>")
            .addClass("todo")
            .text(text)
            .on("click", function () {
                if (confirm("Do you wanna remove this TO-DO?")) {
                    $(this).remove();
                    saveTodos();
                }
            });

        $("#ft_list").prepend($div);
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

    $("#new").on("click", function () {
        const text = prompt("Enter a new TO-DO:");
        if (text && text.trim() !== "") {
            createTodo(text.trim());
            saveTodos();
        }
    });

    loadTodos();
});
