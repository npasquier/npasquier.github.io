const listOfTasks = ["This is a to-do list", "You can add or remove tasks", "Or check completed ones"];

const buttonPressed = (event) => {
  console.log(event.currentTarget.name);
  console.log(event.currentTarget.value);
  const element = event.currentTarget.value;
  if (document.getElementById("label-" + element)) {
    document.getElementById("label-" + element).remove();
  } else {
  }
};

function addOneOrManyTasks(element) {
  if ("content" in document.createElement("template")) {
    // Instantiate the table with the existing HTML tbody
    // and the row with the template
    const listOfTasks = document.querySelector("#listOfTasks");
    const template = document.querySelector("#newTaskTemplate");

    // Clone the new row and insert it into the table
    const referenceNode = document.querySelector("#referenceNode");
    const newNode = template.content.cloneNode(true);
    let taskText = newNode.querySelector("#mainTaskText");
    taskText.innerHTML = element;
    newNode.querySelector("label").setAttribute("id", "label-" + element);
    newNode.querySelector("button").setAttribute("value", element);
    newNode.querySelector("button").addEventListener("click", buttonPressed)

    listOfTasks.insertBefore(newNode, referenceNode);

  } else {
    console.log("There has been an error");
  }
}

listOfTasks.forEach((element) => {
  addOneOrManyTasks(element);
});


function onFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  // const dataObject = Object.fromEntries(data.entries());
  const newTask = data.get("newTask");
	console.log(`New Task: ${newTask}`);
  addOneOrManyTasks(newTask);
};

document
  .getElementById("referenceForm")
  .addEventListener("submit", onFormSubmit);




