var engWords = ['devoted', 'obstacle', 'starch', 'omit', 'misfortune'],
    rusWords = ["преданный", "препятствие", "крахмал", "пренебрегать", "неудача"],
    rand = Math.floor(Math.random() * engWords.length),
    out = document.getElementById('out'),
    show = engWords[rand];
out.innerHTML = show;


function showTranslation() {
    out.innerHTML = rusWords[rand];
}