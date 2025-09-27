document.querySelector("#submitBtn").addEventListener("click",gradeQuiz);

displayQ1Op();
displayQuizCount();

function displayQuizCount() {
    let count = localStorage.getItem("quizTaken");
    if (count === null) {
        count = 0;
    }
    document.querySelector("#quizCount").textContent = count;
}

function incrementQuizCount() {
    let count = localStorage.getItem("quizTaken");
    if (count === null) {
        count = 0;
    }
    count = parseInt(count) + 1;
    localStorage.setItem("quizTaken", count);
    document.querySelector("#quizCount").textContent = count;
}

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
let text5 = document.getElementById("Feedback5");
let grd = document.getElementById("Grade");
function gradeQuiz(){
    incrementQuizCount();

    let grade = 0;
    text.textContent = "";
    text2.textContent = "";
    text3.textContent = "";
    text4.textContent = "";
    text5.textContent = "";
    grd.textContent = "Grade: ";
    
    let input1 = document.querySelector("input[name=q1]:checked").value;
    if(input1 == "color"){
        text.textContent = "Q1 Correct";
        text.style.color = "green";
        document.querySelector("#q1img").innerHTML = '<img src="img/correct.jpg" width="20">';
        grade++;
    } else {
        text.textContent = "Q1 Wrong";
        text.style.color = "red";
        document.querySelector("#q1img").innerHTML = '<img src="img/wrong.jpg" width="20">';
    }
    let input2 = document.querySelector("#q2").value;
    if(input2 == "div" || input2 == "<div>"){
        text2.textContent = "Q2 Correct";
        text2.style.color = "green";
        document.querySelector("#q2img").innerHTML = '<img src="img/correct.jpg" width="20">';
        grade++;
    } else {
        text2.textContent = "Q2 Wrong";
        text2.style.color = "red";
        document.querySelector("#q2img").innerHTML = '<img src="img/wrong.jpg" width="20">';
    }
    let input3 = document.querySelector("#q3").value;
    if(input3 == "r"){
        text3.textContent = "Q3 Correct";
        text3.style.color = "green";
        document.querySelector("#q3img").innerHTML = '<img src="img/correct.jpg" width="20">';
        grade++;
    } else {
        text3.textContent = "Q3 Wrong";
        text3.style.color = "red";
        document.querySelector("#q3img").innerHTML = '<img src="img/wrong.jpg" width="20">';
    }
    let input4 = document.querySelector("#q4").value;
    if(input4 == 2){
        text4.textContent = "Q4 Correct";
        text4.style.color = "green";
        document.querySelector("#q4img").innerHTML = '<img src="img/correct.jpg" width="20">';
        grade++;
    } else {
        text4.textContent = "Q4 Wrong";
        text4.style.color = "red";
        document.querySelector("#q4img").innerHTML = '<img src="img/wrong.jpg" width="20">';
    }
    let input5 = document.querySelectorAll("input[name=q5]:checked");
    let selectedValues = [];
    for(let checkbox of input5) {
        selectedValues.push(checkbox.value);
    }
    if(selectedValues.includes("invalid")) {
        text5.textContent = "Q5 Wrong";
        text5.style.color = "red";
        document.querySelector("#q5img").innerHTML = '<img src="img/wrong.jpg" width="20">';
    } else if(selectedValues.includes("px") && selectedValues.includes("em") && selectedValues.includes("per")) {
        text5.textContent = "Q5 Correct";
        text5.style.color = "green";
        document.querySelector("#q5img").innerHTML = '<img src="img/correct.jpg" width="20">';
        grade++;
    } else {
        text5.textContent = "Q5 Wrong";
        text5.style.color = "red";
        document.querySelector("#q5img").innerHTML = '<img src="img/wrong.jpg" width="20">';
    }

    grade = grade*20;
    grd.textContent += grade;
    if(grade > 80){
        grd.textContent += " Congratulations on the A!!!"
        grd.style.color = "green";
        document.querySelector("#Feedimg").innerHTML = '<img src="img/correct.jpg" width="20">';
    }

}