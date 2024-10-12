const outputDiv = document.getElementById("upspeadedText");

function handleTextInput() {
    let inTxt;
    let splittetTxt = [];
    let finalTxt;

    inTxt = getInputText();
    splittetTxt = splitInputText(inTxt);
    finalTxt = setBoldings(splittetTxt); 

    // show or hide the spinner when button is clicked
    if (inTxt != "") {
        showOrHideUpspeadedText_spinner(true);
    } else {
        showOrHideUpspeadedText_spinner(false);
    }
    
    writeToBody(finalTxt);
}

function getInputText() {
    return document.getElementById('input_text_readspeed').value;
}

function splitInputText(inTxt) {
    return inTxt.split(/\s+/);
}

function setBoldings(splittetTxt) {
    let newSplittetTxt = [];
    let returnString;
    let range;

    for (let wordOfText of splittetTxt) {
        range = calculateRange(wordOfText.length);

        let firstHalf = [];
        let secondHalf = [];

        for (let i=0; i<range; i++) {
            if (wordOfText[i] == "<") {
                firstHalf.push("&lt");
            } else {
                firstHalf.push(wordOfText[i]);
            }
            console.log(wordOfText[i]);
        }

        for (let i=range; i<wordOfText.length; i++) {
            if (wordOfText[i] == "<") {
                secondHalf.push("&lt");
            } else {
                secondHalf.push(wordOfText[i])
            }
            console.log(wordOfText[i]);
        }

        let first = firstHalf.join("");
        let second = secondHalf.join("");

        newSplittetTxt.push("<b>"+first+"</b>"+second+" ");
    }

    returnString = newSplittetTxt.join(" ");
    return returnString;
}

function calculateRange(length) {
    // returns where the <b> should be placed
    if (length != null) {
        length *= 0.67;
        length = parseInt(length, 10);
        return length;
    }
    return null;
}

function writeToBody(finalTxt) {
    console.log("final: "+finalTxt);
    outputDiv.innerHTML = finalTxt;
}

function showOrHideHowItWorks() {
    if (document.getElementById("hiw_text").hidden == true) {
        document.getElementById("hiw_text").hidden = false;
        document.getElementById("hiw_empty").hidden = true;
    } else {
        document.getElementById("hiw_text").hidden = true;
        document.getElementById("hiw_empty").hidden = false;
    }
}

function showOrHide_HIW_technical() {
    if (document.getElementById("hiw_technical_text").hidden == true) {
        document.getElementById("hiw_technical_text").hidden = false;
        document.getElementById("hiw_technical_empty").hidden = true;
    } else {
        document.getElementById("hiw_technical_text").hidden = true;
        document.getElementById("hiw_technical_empty").hidden = false;
    }
}

function showOrHideUpspeadedText_spinner(state) {
    console.log("state = "+state);
    document.getElementById("upspeadedText_spinner").hidden = state;
}

function selectTextarea() {
    document.getElementById("input_text_readspeed").select();
}