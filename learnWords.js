var engWords = ['devoted', 'obstacle', 'starch', 'omit', 'misfortune'],
    rusWords = ["преданный", "препятствие", "крахмал", "пренебрегать", "неудача"],
    rand = Math.floor(Math.random() * engWords.length),
    eng = document.getElementsByClassName('eng'),
    rus = document.getElementsByClassName('rus');
eng.innerHTML = engWords[rand];


function showTranslation() {
    rus.innerHTML = rusWords[rand];
}

