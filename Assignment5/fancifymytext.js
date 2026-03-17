
function makeTextBigger(){
    document.getElementById("textArea").style.fontSize = "24pt";
}

function fancifyText(){
    alert("Radio button changed!");

    let textArea = document.getElementById("textArea");
    let fancyRadio = document.getElementById("fancyRadio");

    if(fancyRadio.checked){
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else{
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooText(){
    let textArea = document.getElementById("textArea");
    let text = textArea.value.toUpperCase();

    let sentences = text.split(".");
    for(let i = 0; i < sentences.length -1; i++){
        let sentence = sentences[i].trim();
        if(sentence.length > 0){
            let words = sentence.split(" ");
            words[words.length-1] = words[words.length-1] + "-MOO";
            sentences[i] = words.join(" ");
        }
    }

    //textArea.ariaValueMax
    textArea.value = sentences.join(".");
}
