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