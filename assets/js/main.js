/**
 * Theming.
 *
 * Supports the preferred color scheme of the operation system as well as
 * the theme choice of the user.
 *
 */
const themeToggle = document.querySelector(".theme-toggle");
const chosenTheme = window.localStorage && window.localStorage.getItem("theme");
const chosenThemeIsDark = chosenTheme == "dark";
const chosenThemeIsLight = chosenTheme == "light";

// Detect the color scheme the operating system prefers.
function detectOSColorTheme() {
  if (chosenThemeIsDark) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else if (chosenThemeIsLight) {
    document.documentElement.setAttribute("data-theme", "light");
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}


//determines if the user has a set theme
function detectUserColorScheme(){
  var theme="light";    //default to light

  //local storage is used to override OS theme settings
  if(localStorage.getItem("theme")){
      if(localStorage.getItem("theme") == "dark"){
          var theme = "dark";
      }
  } else if(!window.matchMedia) {
      //matchMedia method not supported
      return false;
  } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
      //OS theme setting detected as dark
      var theme = "dark";
  }

  //dark theme preferred, set document with a `data-theme` attribute
  if (theme=="dark") {
       document.documentElement.setAttribute("data-theme", "dark");
  }
}
detectUserColorScheme();


// Switch the theme.
function switchTheme(e) {
  if (chosenThemeIsDark) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }

  detectOSColorTheme();
  detectUserColorScheme();
  window.location.reload();
}

// Event listener
if (themeToggle) {
  themeToggle.addEventListener("click", switchTheme, false);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => e.matches && detectOSColorTheme());
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", (e) => e.matches && detectOSColorTheme());

  detectOSColorTheme();
} else {
  localStorage.removeItem("theme");
}
