const outputDiv = document.getElementById("upspeadedText");

document.getElementById("get_input_text_button").onclick = function() {
    let inTxt;
    let splittetTxt = [];
    let finalTxt;

    inTxt = getInputText();
    splittetTxt = splitInputText(inTxt);
    finalTxt = setBoldings(splittetTxt); 
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
            firstHalf.push(wordOfText[i]);
        }

        for (let i=range; i<wordOfText.length; i++) {
            secondHalf.push(wordOfText[i])
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