// -----------------------------------NAV BAR SCROLL EVENT --------------------------------------
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('custom-navbar').style.top = '0';
    document.getElementById('custom-navbar').style.transition = 'top 1s';
  } else {
    document.getElementById('custom-navbar').style.top = '-100px';
    document.getElementById('custom-navbar').style.transition = 'top 1s';
  }
  prevScrollpos = currentScrollPos;
};

// LIST TRI
