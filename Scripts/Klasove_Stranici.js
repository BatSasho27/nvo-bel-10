document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".include-html").forEach(element => {
        let file = element.getAttribute("data-file");
        
        fetch(file)
            .then(response => response.text())
            .then(data => {
                element.innerHTML = data;
            })
            .catch(error => console.error("Error loading component:", error));
    });
});
