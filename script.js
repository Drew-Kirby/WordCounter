/** @type {HTMLInputElement} */
const textbox = document.getElementById("textbox");
const wordcount = document.getElementById("wordcountbox");

let s;
let wc;

wordcountbox.readOnly = true;

textbox.addEventListener('input', () =>{
    console.log("typing")

    s = textbox.value;
    const cleanedText = s.trim();

    if (cleanedText === "") {
        wordcount.value = "0 words";
        return;
    }

    const wordArray = cleanedText.split(" ");

    wc = wordArray.length

    wordcount.value = wc + " words"

    console.log(wordArray)
})