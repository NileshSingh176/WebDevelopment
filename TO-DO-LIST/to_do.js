const inputBox = document.getElementById("input-box");
const lsitContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value == ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li"); // creating an html element li and storing it it to variable "li"
        li.innerHTML = inputBox.value;         // it stores the value "inputBox"
        lsitContainer.appendChild(li);   // where this li should be displayed
        // adding "x" at end of the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = ""; // deleting element from input field after adding it to li
    saveData()
}

// adding javascript for click function
lsitContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

// for saving the data
function saveData(){
    localStorage.setItem("data", lsitContainer.innerHTML);
}

function showTask(){
    lsitContainer.innerHTML = localStorage.getItem("data");
}
showTask();