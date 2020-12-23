// -----------------------------------NAV BAR SCROLL EVENT --------------------------------------
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navbar').style.top = '0';
  } else {
    document.getElementById('navbar').style.top = '-100px';
  }
  prevScrollpos = currentScrollPos;
};

// LIST TRI

// var btnHtml = document.getElementById('html');
// var btnCss = document.getElementById('css');
// var btnJavaScript = document.getElementById('javascript');
// var btnPhp = document.getElementById('php');
// var btnBootstrap = document.getElementById('bootstrap');

// btnHtml.addEventListener('click', sortTout);
// btnCss.addEventListener('click', sortTout);
// btnJavaScript.addEventListener('click', sortJavaScript);
// // btnPhp.addEventListener('click', sortPhp);
// // btnBootstrap.addEventListener('click', sortBootstrap);

// var displayTout = document.getElementById('displayTout');

// var htmlClass = document.getElementsByClassName('htmlC');
// var cssClass = document.getElementsByClassName('cssC');
// var javaScriptClass = document.getElementsByClassName('javaScriptC');
// var phpClass = document.getElementsByClassName('phpC');
// var bootstrapClass = document.getElementsByClassName('bootstrapC');

// function sortTout() {
//   if (displayTout.style.display == 'none') {
//     displayTout.style.display = 'block';
//   } else {
//     displayTout.style.display = 'none';
//   }
// }

// function sortJavaScript() {
//   for (let i = 0; i < 30; i++) {
//     if(displayTout.childNodes.htmlClass)
//   }
// }
