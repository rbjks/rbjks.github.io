var prefLanguage = "en";
//https://stackoverflow.com/questions/16206322/how-to-get-js-variable-to-retain-value-after-page-refresh

var translateElements = document.querySelectorAll(".translate");
var htmlParent = document.querySelector("html");
var navbarlist = document.querySelector("#navbar ul.mobileNav");

//var englishElements = document.querySelectorAll('.translate')
//var hindiElements = document.querySelectorAll('[lang = hi]')

window.onload = () => {
  console.log(prefLanguage);
  if (prefLanguage != "en") changelanguage();
};

function changelanguage() {
  prefLanguage = prefLanguage == "en" ? "hi" : "en";
  htmlParent.lang = prefLanguage;
  translateElements.forEach((el) => swap(el));
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

function swap(el) {
  var i = el.ariaLabel || el.innerText;
  el.ariaLabel = el.innerText;
  el.innerText = i;
}

function toggleMobileNav() {
  if (navbarlist.className === "mobileNav") {
    navbarlist.className += " mobileVisible";
  } else {
    navbarlist.className = "mobileNav";
  }
}

// PULL IMAGES FROM 'imges.json' AND DISPLAY THEM
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById("gallery");

  // Fetch JSON data
  fetch("images.json")
    .then((response) => response.json())
    .then((data) => {
      // Iterate through each image in the JSON
      data.images.forEach((image) => {
        // Create elements for image and caption
        const item = document.createElement("div");
        item.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = image.url;
        img.alt = image.caption;

        const caption = document.createElement("p");
        caption.textContent = image.caption;

        // Append elements to the gallery
        item.appendChild(img);
        item.appendChild(caption);
        gallery.appendChild(item);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
