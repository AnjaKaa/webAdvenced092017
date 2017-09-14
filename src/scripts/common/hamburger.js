function hamburgerInit() {

  let toggle = document.querySelector(".hamburger");
  toggleHandler(toggle);
 
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("hamburger_active") === true) ? this.classList.remove("hamburger_active") : this.classList.add("hamburger_active");

    });
  }
 
}

module.exports = hamburgerInit;