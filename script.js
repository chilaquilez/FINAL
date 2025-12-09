const name = document.querySelector("#name");
const paragraph = document.querySelector("#paragraph");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    const userName = nameInput.value;

if (userName) {
    paragraph.textContent = "Greetings " + userName + "!";
} else {
    greetingMessage.textcontent = "PLEASE ENTER YOUR NAME.";
});

//textcontent returns plain text stored in the variable while innerHTML can format data types or displays its content as it was programmed to
//because of this using textcontent can be safer as innHTML opens the doors for hacker to inject code into the main file