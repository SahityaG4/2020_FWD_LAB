function FormValidation(){
    var password = document.getElementById("password");
    var email = document.getElementById("emailId");
    if(password.value.length < 6){
        alert("password should be atleast 6 characters");
     }
    if(!(/@gmail\.com$/.test(email.value))){
        alert("email should be in the form abc@gmail.com");
        console.log("hii");
    }
}