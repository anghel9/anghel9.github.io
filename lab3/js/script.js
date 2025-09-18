document.querySelector("#submitBtn").addEventListener("click",gradeQuiz);

function gradeQuiz(){
    let input1 = document.querySelector("input[name=q1]:checked").value;
    alert(input1);
    if(input1 == "color"){
        alert("right");
    } else {
        alert("wrong");
    }
}