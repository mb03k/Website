addWebsiteLink(document.getElementsByClassName('home_link'), "home");
addWebsiteLink(document.getElementsByClassName('portfolio_link'), "portfolio");
addWebsiteLink(document.getElementsByClassName('dataProtection_link'), "datenschutz");
addWebsiteLink(document.getElementsByClassName('faq_link'), "faq");
addWebsiteLink(document.getElementsByClassName('aboutme_link'), "aboutme");
addWebsiteLink(document.getElementsByClassName('abutmeABOI_link'), "ABOI");
addWebsiteLink(document.getElementsByClassName('movies_link'), "movies");
addWebsiteLink(document.getElementsByClassName('readspeed_link'), "readspeed");
addWebsiteLink(document.getElementsByClassName('projects_link'), "projects");

addWebsiteLink(document.getElementsByClassName('github_link'), "github");


function addWebsiteLink(buttons, name) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            window.open('https://weristmatthes.de/'+name, '_self');
        }
    );
    }
}