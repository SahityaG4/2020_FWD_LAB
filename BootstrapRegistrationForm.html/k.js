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
        if(rad1.value == false && rad2.value== false && rad3.value == false){
            document.getElementById("radid").innerHTML = "please select gender"
        }
}