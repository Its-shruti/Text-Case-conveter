
//lower case
function lowerCase() {
    let inp = document.getElementById("tinp").value;
    let result = inp.toLowerCase();
    document.getElementById("tinp").value = result;
}



//Uper case
function upperCase() {
    let inp = document.getElementById("tinp").value;
    let result = inp.toUpperCase();
    document.getElementById("tinp").value = result;
}



//Clear
function clearTxt() {
    let inp = document.getElementById("tinp").value = "";
}



//Title case
function titleCase() {
    let inp = document.getElementById("tinp").value;
    let word = inp.split(" ")
    for (const i of word) {
        for (j == 0; j <= word[i].lenght; j++) {
            word[i] = word[i].charAt[0].toUpperCase();
        }
    }
}



//word count
function wordcount() {
    let sum = 0;
    let inp = document.getElementById("tinp").value;
    let word = inp.split(" ");
    for (i = 0; i <= word.length - 1; i++) {
        sum = sum + 1
    }

    document.getElementById("tout").outerHTML = `<h2> your word count is : ${sum} </h2>`
}



//character count
function charcount() {
    let sum = 0;
    let inp = document.getElementById("tinp").value
    let word = inp.split(" ")
    for (i = 0; i <= word.length - 1; i++) {
        for (j = 0; j <= word[i].lenght - 1; j++) {
            sum = sum + word.le
        }
    }

    document.getElementById("tout").outerHTML = `<h2> your chacacter count count is : ${sum} </h2>`
}





//reverse trial
/* let new_inp = ""
let inp = "my name is shruti"
for(i=inp.length-1; i>=0; i++)
{

} */

































var r = document.querySelector(':root');
function darktheme() {
    r.style.setProperty('--con', '#0a0a5a');
    r.style.setProperty('--hed', '#00000033');
    r.style.setProperty('--body', '#090133');
    r.style.setProperty('--border', '#1a1ad7');
    r.style.setProperty('--text', 'white');
    r.style.setProperty('--bs', '#1919be');
    r.style.setProperty('--btn', 'white');
    r.style.setProperty('--varcon', '#b4b3b3');
    r.style.setProperty('--icon', '#090133');
    r.style.setProperty('--icon-col', '#090133');

}

function lighttheme() {
    r.style.setProperty('--con', 'whitesmoke');
    r.style.setProperty('--hed', '#717489');
    r.style.setProperty('--body', 'white');
    r.style.setProperty('--border', '#717489');
    r.style.setProperty('--text', 'black');
    r.style.setProperty('--bs', 'none');
    r.style.setProperty('--btn', '#717489');
    r.style.setProperty('--varcon', 'black');
    r.style.setProperty('--icon', 'white');
    r.style.setProperty('--icon-col', 'gray');
}

























