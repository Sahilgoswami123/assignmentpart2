
function validateForm() {
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;
let membersCount = document.getElementById("members-count").value;
let totalCost = document.getElementById("total-cost").value;
    if(name.trim() === "" || email.trim() === "" || message.trim() === "" || totalCost === "" || membersCount === ""){
        alert("Input fields cannot be null!");    
    }
    else{
        var alertMessage = "Name: " + name + "\n";
        alertMessage += "Email: " + email + "\n";
        alertMessage += "Message: " + message + "\n";
        alert("Details entered:" + "\n" + alertMessage);
        CostPerPerson(membersCount, totalCost);
    }
}

function CostPerPerson(membersCount, totalCost){
    let costperperson = totalCost/membersCount;
    alert("Cost per person is: " + costperperson);
}
document.addEventListener("submit", validateForm);

