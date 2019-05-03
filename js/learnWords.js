var engWords = ['devoted', 'obstacle', 'starch', 'omit', 'misfortune'],
    rusWords = ["преданный", "препятствие", "крахмал", "пренебрегать", "неудача"],
    rand = Math.floor(Math.random() * engWords.length),
    eng = document.getElementById('eng'),
    rus = document.getElementById('rus'); 
    
eng.innerHTML = engWords[rand];


function showTranslation() {
    rus.innerHTML = rusWords[rand];
}

