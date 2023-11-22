const editorButtons = document.querySelectorAll(".tools__button");

for (let i=0; i < editorButtons.length; i++) {
  editorButtons[i].addEventListener("click", () => {
    for (let j=0; j < editorButtons.length; j++) {
      editorButtons[j].classList.remove("active__button");
    }
    editorButtons[i].classList.add("active__button");
  })
}
