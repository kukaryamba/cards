var engWords = ['devoted', 'obstacle', 'starch', 'omit', 'misfortune'],
    translate = ["преданный", "препятствие", "крахмал", "пренебрегать", "неудача"],
    rand = Math.floor(Math.random() * engWords.length),
    out = document.getElementById('out');

out.innerHTML =  engWords[rand];

function checkTranslation() {
    var answer = document.getElementById('answer');
    if (translate[rand] === answer.value) {
        red.classList.add("hidden");
        green.classList.remove("hidden");
    } else {
        red.classList.remove("hidden");
        green.classList.add("hidden");
    }
}

