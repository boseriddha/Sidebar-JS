const linesBtn = document.querySelector(".lines-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

linesBtn.addEventListener("click", function() {
    if(sidebar.classList.contains("hide-sidebar")) {
        sidebar.classList.remove("hide-sidebar");
    } else {
        sidebar.classList.add("hide-sidebar");
    }
});

closeBtn.addEventListener("click", function() {
    sidebar.classList.add("hide-sidebar");
});