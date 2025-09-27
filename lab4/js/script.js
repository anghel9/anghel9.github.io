document.querySelector("#zip").addEventListener("change", displayCity);
displayState();
document.querySelector("#state").addEventListener("change", displayCounty);
document.querySelector("#password").addEventListener("click", displayPass);
document.querySelector("#username").addEventListener("change", checkUser);

async function checkUser(){
    let user = document.querySelector("#username").value;
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
    let zipCode = document.querySelector("#zip").value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip="+zipCode;
    try{
        let response = await fetch(url);
        try{
            let data = await  response.json();
            console.log(data);
            document.querySelector("#city").textContent = data.city;
            document.querySelector("#lat").textContent = data.latitude;
            document.querySelector("#long").textContent = data.longitude;
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