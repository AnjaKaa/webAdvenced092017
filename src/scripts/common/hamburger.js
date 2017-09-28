function hamburgerInit() {
  
  "use strict";

  let toggle = document.querySelector(".hamburger");
  if(toggle) {
    toggleHandler(toggle);
  }
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      let menu=document.querySelector(".menu");
      (this.classList.contains("hamburger--active") === true) ? this.classList.remove("hamburger--active") : this.classList.add("hamburger--active");
      (menu.classList.contains("menu--active") === true) ? menu.classList.remove("menu--active") : menu.classList.add("menu--active");
    });
  }
 
}

module.exports = hamburgerInit;