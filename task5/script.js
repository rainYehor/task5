const text = document.querySelector(".text-content");
const fullText = document.querySelector(".text-content").innerHTML;
const button = document.querySelector(".button-readmore");

function cutText() {
    let shortText = text.innerHTML.slice(0, 20);
    text.innerHTML = shortText + "...";
}

function changeButton() {
    if (button.innerHTML === "Read More") {
        button.innerHTML = "Read Less";
        text.innerHTML = fullText;
    }
    else if (button.innerHTML === "Read Less") {
        button.innerHTML = "Read More";
        cutText();
    }
}
changeButton()
button.addEventListener("click", changeButton);