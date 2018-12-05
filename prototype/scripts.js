(function () {
  var toggle = document.getElementById('header-nav-toggle'),
      nav = document.getElementById('header-nav');

  // If JavaScript Is Enabled
  // Modify Initial States
  toggle.className = 'is-visible';
  nav.className = 'is-hidden';

  // Change Visibility On Click
  toggle.addEventListener('click', function() {
    if (nav.className === 'is-hidden') {
      nav.className = '';
    } else {
      nav.className = 'is-hidden';
    }
  })
})();



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
