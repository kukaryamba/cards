var engWords = ['devoted', 'obstacle', 'starch', 'omit', 'misfortune'],
    rusWords = ["преданный", "препятствие", "крахмал", "пренебрегать", "неудача"],
    rand = Math.floor(Math.random() * engWords.length),
    eng = document.getElementById('eng'),
    show = engWords[rand];
eng.innerHTML = show;


function showTranslation() {
    rus.innerHTML = rusWords[rand];
}