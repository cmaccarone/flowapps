function ClearFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "het";
    console.log(sent);

    document.getElementById("newForm").reset();

}

function upDateCompanyName() {
    var companyName = "FlowDev Mobile Apps";
    document.getElementById("companyName").innerHTML = companyName;
}