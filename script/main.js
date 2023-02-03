var prefLanguage = 'en';
//https://stackoverflow.com/questions/16206322/how-to-get-js-variable-to-retain-value-after-page-refresh

var englishElements = document.querySelectorAll('[lang = en]')
var hindiElements = document.querySelectorAll('[lang = hi]')

window.onload= () => {
    changelanguage(prefLanguage);
}

function changelanguage(lang){
    prefLanguage = lang;
    if(prefLanguage == 'en'){
        makeEnglish();
    }
    else{
        makeHindi();
    }
    console.log('current pref ',lang)
}

function makeEnglish() {
    hindiElements.forEach(el => el.style.display = "none");
    englishElements.forEach(el => el.style.display = "inherit");
}

function makeHindi() {
    hindiElements.forEach(el => el.style.display = "inherit");
    englishElements.forEach(el => el.style.display = "none");
}
