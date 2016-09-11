

var taskInput = document.getElementById("new-task"); // new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //unordered list #incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //unordered list #completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {
    var listItem = document.createElement("li");
        //create a task and add it to the unordered list as a list item 
    var checkBox = document.createElement("input");    //with a checkbox, 
    var label = document.createElement("label");   //a label, 
    var editInput = document.createElement("input");    //text input (for edit mode), and 
    var editButton = document.createElement("button");    //edit and 
    var deleteButton = document.createElement("button");    //delete buttons
        //Each element will need to be modified and appended.
    
    checkBox.type = "checkbox";
    editInput.type="text";
    
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    label.innerText = taskString;
    
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    
    
    
    return listItem;
}

// Add a new task
var addTask = function() {
    console.log("Add task...");
    var listItem = createNewTaskElement(taskInput.value);
    
    //Append listItem to incompleteTaskHolder
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value = "";
}


// Edit an existing task
var editTask = function() {
    console.log("Edit task...");
    var listItem = this.parentNode;
    
    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");
    var containsClass = listItem.classList.contains("editMode");
    
    if(containsClass) {
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;   
    }
       //If the class of the parent (the list item) is edit-mode,
            //Switch from edit mode
            //Label text becomes the input's value
        //Else
            //Switch to edit mode
            //Input value becomes the label's text.
    listItem.classList.toggle("editMode");
        //Toggle editMode on the parent

}


// Delete an existing task
var deleteTask = function() {
    console.log("Delete task...");
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
        //Remove the parent list item from the unordered list
}


// Mark tasks as completed
var taskCompleted = function() {
    console.log("Task complete...");
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
        //Append the task list item to the completed-tasks list
}


// Mark tasks as incomplete
var taskIncomplete = function() {
    console.log("Task incomplete...");
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
        //Append the task list item to the incomplete-tasks list
}


var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    console.log("Bind list item events");
    var checkBox = taskListItem.querySelector("input[type=checkBox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");
    //bind editTask to edit button
    editButton.onclick = editTask;
    //bind deleteTask to delete button
    deleteButton.onclick = deleteTask;
    //bind taskCompleted to checkbox
    checkBox.onchange = checkBoxEventHandler;
}

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);

//cycle over incompleteTaskHolder ul list items
for(var i = 0; i<incompleteTasksHolder.children.length; i++) {
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);    
}

//cycle over completeTaskHolder ul list items
for(var i = 0; i<completedTasksHolder.children.length; i++) {
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);    
}
