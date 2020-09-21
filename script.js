var button = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listitem = document.querySelector("li");
var btn = document.getElementsByClassName("DoneBtn");

function createnewlist() {
  var Newli = document.createElement("li");
  var Newbtn = document.createElement("button");
  var Delbtn = document.createElement("button");
  Delbtn.appendChild(document.createTextNode("❎"));
  Newli.appendChild(Delbtn);
  Newbtn.appendChild(document.createTextNode("✅"));
  Newli.appendChild(Newbtn);
  Newli.appendChild(document.createTextNode(" " + input.value));
  ul.appendChild(Newli);
  Delbtn.className = "DelBtn";
  Newbtn.className = "DoneBtn";
  Newbtn.onclick = TaskDone;
  Delbtn.onclick = DeleteTask;
  input.value = "";
}
function TaskAfterClick() {
  if (input.value.length > 0) {
    createnewlist();
  }
}

function TaskAfterKeypress(event) {
  if (input.value.length > 0 && event.keyCode === 13) {
    createnewlist();
  }
}

function TaskAfterDone() {
  btn[0].parentElement.className = "complete";
}

function TaskDone(event) {
  event.target.parentNode.classList.toggle("complete");
}

function DeleteTask(event) {
  event.target.parentNode.remove();
}

button.addEventListener("click", TaskAfterClick);
input.addEventListener("keypress", TaskAfterKeypress);
