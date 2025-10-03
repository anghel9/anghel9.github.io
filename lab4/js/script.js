document.querySelector("#zip").addEventListener("change", displayCity);
displayState();
document.querySelector("#state").addEventListener("change", displayCounty);
document.querySelector("#password").addEventListener("click", displayPass);
document.querySelector("#username").addEventListener("change", checkUser);

let submit = document.querySelector("#submitBtn");
submit.addEventListener("click", checkUser2);
submit.addEventListener("click", checkPass);
submit.addEventListener("click", checkPass2);

function checkUser2(){
    let user = document.querySelector("#username").value;
    document.querySelector("#userSpan").textContent = "";
    
    if(user.length < 3){
        document.querySelector("#userSpan").textContent = "Username must be at least 3 characters";
        document.querySelector("#userSpan").style.color = "red";
        return;
    } else {
        document.querySelector("#userSpan").textContent = "Valid";
        document.querySelector("#userSpan").style.color = "green";
    }
}

function checkPass(){
    let password = document.querySelector("#password").value;
    let password2 = document.querySelector("#password2").value;
    
    if(password.length < 6){
        document.querySelector("#update").textContent = "Must be at least 6 characters";
        document.querySelector("#update").style.color = "red";
    } else {
        document.querySelector("#update").textContent = "Valid";
        document.querySelector("#update").style.color = "green";
    }
}

function checkPass2(){
    let password = document.querySelector("#password").value;
    let password2 = document.querySelector("#password2").value;
    let updateSpan2 = document.querySelector("#passwordSpan2");
    
    if(password !== password2){
        updateSpan2.textContent = "Not a match, retype password";
        updateSpan2.style.color = "red";
    } else {
        updateSpan2.textContent = "Valid";
        updateSpan2.style.color = "green";
    }
}

async function checkUser(){
    let user = document.querySelector("#username").value;
    document.querySelector("#userSpan").textContent = "";

    let url = "https://csumb.space/api/usernamesAPI.php?username="+user;
    try{
        let response = await fetch(url);
        try{
            let data = await  response.json();
            
            if(data.available == false){
                document.querySelector("#userSpan").textContent = "Not Available";
                document.querySelector("#userSpan").style.color = "red";
            } else {
                document.querySelector("#userSpan").textContent = "Available";
                document.querySelector("#userSpan").style.color = "green";
            }
            
        } catch(pError){
            console.log("Parse Error"+pError);
        }
    } catch(error){
        console.log("Network Error"+ error);
    }
}

async function displayPass(){
    let url = "https://csumb.space/api/suggestedPassword.php?length=8";
    try{
        let response = await fetch(url);
        try{
            let data = await  response.json();
            console.log(data);
            document.querySelector("#passwordSpan").textContent = data.password;
            
        } catch(pError){
            console.log("Parse Error"+pError);
        }
    } catch(error){
        console.log("Network Error"+ error);
    }
}


async function displayCity(){
    document.querySelector("#cityEr").textContent = "";
    document.querySelector("#city").textContent = "";
    document.querySelector("#lat").textContent = "";
    document.querySelector("#long").textContent = "";

    let zipCode = document.querySelector("#zip").value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip="+zipCode;
    try{
        let response = await fetch(url);
        try{
            let data = await  response.json();
            console.log(data);
            if(data !== false){
                document.querySelector("#city").textContent = data.city;
                document.querySelector("#lat").textContent = data.latitude;
                document.querySelector("#long").textContent = data.longitude;
            } else {
                document.querySelector("#cityEr").textContent = "Zip code not found";
            }
        } catch(pError){
            console.log("Parse Error"+pError);
        }
    } catch(error){
        console.log("Network Error"+ error);
    }
}

async function displayCounty(){
    let state = document.querySelector("#state").value;
    
    let countySelect = document.querySelector("#county");
    countySelect.innerHTML = '<option>(Select)</option>';

    let url = "https://csumb.space/api/countyListAPI.php?state="+state;
    try{
        let response = await fetch(url);
        try{
            let data = await  response.json();
            for(let i of data){
                let optionEl = document.createElement("option");
                optionEl.textContent = i.county;
                document.querySelector("#county").append(optionEl);
            }
        } catch(pError){
            console.log("Parse Error"+pError);
        }
    } catch(error){
        console.log("Network Error"+ error);
    }
}

async function displayState(){
    let url = "https://csumb.space/api/allStatesAPI.php";
    try{
        let response = await fetch(url);
        try{
            let data = await  response.json();
            console.log(data);

            for(let i of data){
                let optionEl = document.createElement("option");
                optionEl.textContent = i.state;
                optionEl.value = i.usps;
                document.querySelector("#state").append(optionEl);
            }
            
        } catch(pError){
            console.log("Parse Error"+pError);
        }
    } catch(error){
        console.log("Network Error"+ error);
    }
}