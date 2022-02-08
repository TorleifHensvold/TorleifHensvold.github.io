function findCircumference()
{
    let radius = document.getElementById("radius").value;
    let answerOut = document.getElementById("answer");
    answerOut.value = radius * Math.PI * 2;
}