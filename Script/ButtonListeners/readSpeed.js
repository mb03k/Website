document.getElementById("how_it_works_button").onclick = function() {
    showOrHideHowItWorks();
}

document.getElementById("hiw_technical_button").onclick = function() {
    showOrHide_HIW_technical();
}

document.getElementById("get_input_text_button").onclick = function() {
    handleTextInput();
}

document.getElementById("input_text_readspeed").onclick = function() {
    selectTextarea();
}

document.getElementById("github_link_readspeed").onclick = function() {
    window.open("https://github.com/mb03k/Website/blob/main/Script/ReadSpeed/readSpeed.js");
}