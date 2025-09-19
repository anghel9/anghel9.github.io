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


let text = document.getElementById("Feedback");
function gradeQuiz(){
    let input1 = document.querySelector("input[name=q1]:checked").value;
    if(input1 == "color"){
        text.textContent += " Q1 Correct";
    } else {
        text.textContent += " Q1 Wrong";
    }
    let input2 = document.querySelector("#q2").value;
    if(input2 == "div"){
        text.textContent += " Q2 Correct";
    } else {
        text.textContent += " Q2 Wrong";
    }
    let input3 = document.querySelector("#q3").value;
    if(input3 == "r"){
        text.textContent += " Q3 Correct";
    } else {
        text.textContent += " Q3 Wrong";
    }
    let input4 = document.querySelector("#q4").value;
    if(input4 == 4){
        text.textContent += " Q4 Correct";
    } else {
        text.textContent += " Q4 Wrong";
    }
}