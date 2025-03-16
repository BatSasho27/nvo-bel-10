document.addEventListener("DOMContentLoaded", function () {
    let sidebar = document.querySelector(".sidebar");

    if (sidebar) {
        sidebar.style.maxHeight = window.innerHeight * 0.8 + "px"; // Определя височината като 80% от височината на прозореца
        sidebar.style.overflowY = "auto"; // Позволява вертикално скролиране
    }
});

function adjustSidebarHeight() {
    let sidebar = document.querySelector(".sidebar");

    if (sidebar) {
        sidebar.style.maxHeight = window.innerHeight * 0.8 + "px";
    }
}

// Изпълнява се при зареждане
document.addEventListener("DOMContentLoaded", adjustSidebarHeight);

// Преизчислява се при промяна на размера на прозореца
window.addEventListener("resize", adjustSidebarHeight);

document.addEventListener("DOMContentLoaded", function () {
    let sidebar = document.querySelector(".sidebar");

    if (sidebar) {
        function adjustSidebar() {
            let viewportHeight = window.innerHeight;
            let maxSidebarHeight = viewportHeight * 0.8; // 80% от височината на екрана
            sidebar.style.maxHeight = maxSidebarHeight + "px";
            sidebar.style.overflowY = "auto"; // Включва скролиране при нужда
        }

        adjustSidebar(); // Изпълнява се веднага при зареждане
        window.addEventListener("resize", adjustSidebar); // При промяна на размера на прозореца
    }
});