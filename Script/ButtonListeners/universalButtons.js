document.getElementById("headerHomeButton").onclick = function() {
    goHome();
}

document.getElementById("headerInstagramButton").onclick = function() {
    openInstagram();
}

document.getElementById("headerGithubButton").onclick = function() {
    openGithub();
}

document.getElementById("portfolio_button").onclick = function() {
    console.log("HAllo");
}

function goHome() {
    console.log("Home-Seite anzeigen ... warte auf echte IP ... ");
}

function openInstagram() {
    window.open("https://www.instagram.com/mb21y_/");
}

function openGithub() {
    window.open("https://www.github.com/mb03k/");
}