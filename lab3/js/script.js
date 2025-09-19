document.querySelector("#submitBtn").addEventListener("click",gradeQuiz);

displayQ1Op();

function displayQ1Op(){
    let q1Op = ["font-color","fontColor","color","textColor"];
    q1Op = _.shuffle(q1Op);

    for( let i of q1Op){
        let inputEle = document.createElement("input");
        inputEle.type = "radio";
        inputEle.name = "q1";
        inputEle.value = i;
        console.log(inputEle);

        let labelEle = document.createElement("label");
        labelEle.textContent = i;
        labelEle.prepend(inputEle);
        
        document.querySelector("#q1Options").append(labelEle);
    }
}


let text = document.getElementById("Feedback1");
let text2 = document.getElementById("Feedback2");
let text3 = document.getElementById("Feedback3");
let text4 = document.getElementById("Feedback4");
function gradeQuiz(){
    //reset
    text.textContent = "";
    text2.textContent = "";
    text3.textContent = "";
    text4.textContent = "";
    
    let input1 = document.querySelector("input[name=q1]:checked").value;
    if(input1 == "color"){
        text.textContent = "Q1 Correct";
        text.style.color = "green";
    } else {
        text.textContent = "Q1 Wrong";
        text.style.color = "red";
    }
    let input2 = document.querySelector("#q2").value;
    if(input2 == "div"){
        text2.textContent = "Q2 Correct";
        text2.style.color = "green";
    } else {
        text2.textContent = "Q2 Wrong";
        text2.style.color = "red";
    }
    let input3 = document.querySelector("#q3").value;
    if(input3 == "r"){
        text3.textContent = "Q3 Correct";
        text3.style.color = "green";
    } else {
        text3.textContent = "Q3 Wrong";
        text3.style.color = "red";
    }
    let input4 = document.querySelector("#q4").value;
    if(input4 == 4){
        text4.textContent = "Q4 Correct";
        text4.style.color = "green";
    } else {
        text4.textContent = "Q4 Wrong";
        text4.style.color = "red";
    }
}