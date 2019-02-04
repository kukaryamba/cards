var engWords = ['devoted', 'obstacle', 'starch', 'omit', 'misfortune'];
var translate = ["преданный", "препятствие", "крахмал", "пренебрегать", "неудача"];
var rand = Math.floor(Math.random() * engWords.length);
out.innerHTML =  engWords[rand];

function checkTranslation () {
if (translate[rand] === document.getElementById('answer').value ){
document.getElementById("form").innerHTML="yep";
document.getElementById('form').style.color="green";
document.getElementById('form').style.fontSize="40px";
document.getElementById('form').style.fontWeight="bolder";
}
else{
document.getElementById('form').innerHTML = "NOPE!";
document.getElementById('form').style.color="red";
document.getElementById('form').style.fontSize="40px";
document.getElementById('form').style.fontWeight="bolder";
}}

