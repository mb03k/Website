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
    openCompanyPortfolio();
}

/* footer */

document.getElementById("footer_faq").onclick = function() {
    openFAQ();
}

document.getElementById("footer_datenschutz").onclick = function() {
    openDataProtection();
}

document.getElementById("footer_memes").onclick = function() {
    openCompanyPortfolio();
}



function goHome() {
    window.open("https://www.weristmatthes.de"); // ..., "_self");
}

function openInstagram() {
    window.open("https://www.instagram.com/mb21y_/");
}

function openGithub() {
    window.open("https://www.github.com/mb03k/");
}

function openCompanyPortfolio() {
    window.open("http://localhost/Website/portfolio/", "_self");
}

function openDataProtection() {
    window.open("http://localhost/Website/datenschutz/", "_self");
}

function openFAQ() {
    
}