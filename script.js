var ListBtn = document.getElementById("AddListBtn");
var ListName = document.getElementById("ListName");
var DivContainer = document.querySelector(".ListContainer");

function CreateNewList() {
  //Declaring the new HTML tags for new List creation.
  var NewCard = document.createElement("div");
  var NewHead = document.createElement("div");
  var ListHeading = document.createElement("h3");
  var NewCrossBtn = document.createElement("button");
  var NewBody = document.createElement("div");
  var NewTaskInput = document.createElement("input");
  var NewTaskBtn = document.createElement("button");
  var NewUl = document.createElement("ul");
  //Appending all HTML tage properly in order for creation of new List.
  ListHeading.appendChild(document.createTextNode(ListName.value));
  NewHead.appendChild(ListHeading);
  NewCrossBtn.appendChild(document.createTextNode("X"));
  NewHead.appendChild(NewCrossBtn);
  NewCard.appendChild(NewHead);
  NewBody.appendChild(NewTaskInput);
  NewTaskBtn.appendChild(document.createTextNode("Add task"));
  NewBody.appendChild(NewTaskBtn);
  NewBody.appendChild(NewUl);
  NewCard.appendChild(NewBody);
  DivContainer.appendChild(NewCard);
  //Assinging the nesesarry class to the new HTML tags.
  NewCard.className = "ListCard";
  NewHead.className = "ListHead";
  NewCrossBtn.className = "CrossListBtn";
  NewBody.className = "ListBody";
  NewTaskInput.className = "TaskInput";
  NewTaskInput.type = "text";
  NewTaskInput.placeholder = "Enter Task";
  NewTaskBtn.className = "AddTaskBtn";
  NewCrossBtn.onclick = DeleteList;
  // Code for activating the buttons to add new task.
  NewTaskBtn.addEventListener("click", AddTaskAfterClick);
  NewTaskInput.addEventListener("keypress", AddTaskAfterKeypress);
  function AddTaskAfterClick() {
    if (NewTaskInput.value.length > 0) {
      CreateNewTask();
    }
  }
  function AddTaskAfterKeypress(event) {
    if (NewTaskInput.value.length > 0 && event.keyCode === 13) {
      CreateNewTask();
    }
  }
  //Code for creating new task.
  function CreateNewTask() {
    var Newli = document.createElement("li");
    var Newbtn = document.createElement("button");
    var Delbtn = document.createElement("button");
    Delbtn.appendChild(document.createTextNode("✖"));
    Newli.appendChild(Delbtn);
    Newbtn.appendChild(document.createTextNode("✔"));
    Newli.appendChild(Newbtn);
    Newli.appendChild(document.createTextNode(NewTaskInput.value));
    NewUl.appendChild(Newli);
    Delbtn.className = "TaskDeleteBtn";
    Newbtn.className = "TaskDoneBtn";
    Newbtn.onclick = TaskDone;
    Delbtn.onclick = DeleteTask;
    NewTaskInput.value = "";
  }
}

//Code for Deleting any task or any list.
function DeleteList(event) {
  event.target.parentNode.parentNode.remove();
}
function TaskDone(event) {
  event.target.parentNode.classList.toggle("TaskComplete");
}
function DeleteTask(event) {
  event.target.parentNode.remove();
}

// Code for activating the buttons to add new List.
ListBtn.addEventListener("click", AddListAfterClick);
ListName.addEventListener("keypress", AddTaskAfterKeypress);
function AddListAfterClick() {
  if (ListName.value.length > 0) {
    CreateNewList();
    ListName.value = "";
  }
}
function AddTaskAfterKeypress(event) {
  if (ListName.value.length > 0 && event.keyCode === 13) {
    CreateNewList();
    ListName.value = "";
  }
}
