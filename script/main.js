var prefLanguage = 'en';
//https://stackoverflow.com/questions/16206322/how-to-get-js-variable-to-retain-value-after-page-refresh

var translateElements = document.querySelectorAll('.translate')
var htmlParent = document.querySelector('html')
//var englishElements = document.querySelectorAll('.translate')
//var hindiElements = document.querySelectorAll('[lang = hi]')

window.onload = () => {
    console.log(prefLanguage);
    if(prefLanguage != 'en')
        changelanguage();
 }

function changelanguage(){
    prefLanguage = prefLanguage == 'en'? 'hi': 'en';
    htmlParent.lang = prefLanguage;
    translateElements.forEach(el => swap(el));
   /*
    prefLanguage = lang;
    if(prefLanguage == 'en'){
        makeEnglish();
    }
    else{
        makeHindi();
    }
    console.log('current pref ',lang)
    */
}

function makeEnglish() {
    //hindiElements.forEach(el => el.style.display = "none");
    //englishElements.forEach(el => el.style.display = "unset");
}

function makeHindi() {
    //hindiElements.forEach(el => el.style.display = "unset");
    //console.log(englishElements);
    //englishElements.forEach(el => el.style.display = "none");
    //englishElements.forEach(el => swap(el));
}

function swap(el){
    var i = el.ariaLabel;
    el.ariaLabel = el.innerText;
    el.innerText = i;
    
}
