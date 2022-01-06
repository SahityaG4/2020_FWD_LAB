function validation(){
        let name = document.getElementById("name");
        if(name === ""){
            document.getElementById("nameid").innerHTML = "please enter your name"
        }
        let password = document.getElementById("password");
        if(password === ""){
            document.getElementById("passid").innerHTML = "please enter password"
        }
        let sel = document.getElementById("sel");
        if(sel.value === 'Branch'){
            document.getElementById("selid").innerHTML = "please select a branch"
        }
}