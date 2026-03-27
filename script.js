function scrollToSection() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}

function addMessage() {
  let input = document.getElementById("messageBox");
  let wall = document.getElementById("wall");

  if (input.value.trim() !== "") {
    let newMsg = document.createElement("p");
    newMsg.textContent = input.value;

    wall.appendChild(newMsg);
    input.value = "";
  }
}
