// With this code you are able to copy all the text inside the codeblocks with the class name 'code'.
// The only thing that is copied is the innerHTML of the divs with class name 'line'.

// Get all codeBlocks
let codeBlocks = document.getElementsByClassName("code");

// In all codeBlocks
for(let i = 0; i < codeBlocks.length; i++){
    // Take the lines of this codeblock
    let lines = codeBlocks[i].getElementsByClassName("line");
    // Go through all lines in a codeblock
    for(let i = 0; i < lines.length; i++){
        // Indicator of which line this is (1., 2., 3. ... 101., 150. ...)
        let lineNumber = i + 1; 
        // Add lineNumber to the html
        lines[i].outerHTML = '<div class="lineWithNumber"><span class="lineNumber">' + lineNumber + '.</span>' + lines[i].outerHTML + '</div>'
    }
    // Add an icon to the top-right of a codeblock to copy the text inside to codeblock
    codeBlocks[i].innerHTML = codeBlocks[i].innerHTML + '<i class="fa-solid fa-paste top-right" onclick = copyToClip(this)></i>';
}

// Function to copy text from codeblock to clipboard
function copyToClip(el){
    // Take all the lines from clicked codeblock
    let lines = el.parentNode.getElementsByClassName("line");
    // Initialize text that is going to be copied
    let textToCopy = "";
    // Go through all lines in a codeblock
    for(let i = 0; i < lines.length; i++){
        // Add text to be copied to the variable
        textToCopy += lines[i].innerHTML + '\n';
    }
    // Copy the text stored in the variable to clipboard
    navigator.clipboard.writeText(textToCopy);
}

// Themes
let themes = ["dark", "light"]

// Theme on page reload
let currentTheme = localStorage.getItem("currentTheme");
if(currentTheme == null){
    currentTheme = 0;
    localStorage.setItem("currentTheme", currentTheme)
}
document.body.classList.add(themes[currentTheme])

// Theme switch
let themeEl = document.body;
document.getElementById("themeSwitch").addEventListener("click", function(){
    currentTheme = parseInt(localStorage.getItem("currentTheme")) + 1;
    if(currentTheme > themes.length - 1){
        currentTheme = 0;
    } 

    if (currentTheme == 0) {
        themeEl.classList.remove(themes[themes.length - 1]);
    } else {
        themeEl.classList.remove(themes[currentTheme - 1]);
    }
    themeEl.classList.add(themes[currentTheme]);
    localStorage.setItem("currentTheme", currentTheme)

});