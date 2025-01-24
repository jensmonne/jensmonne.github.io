function loadHTML(targetId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(targetId).innerHTML = data;
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header", "includes/header.html");
    loadHTML("page", "includes/page.html");
    loadHTML("footer", "includes/footer.html");
});