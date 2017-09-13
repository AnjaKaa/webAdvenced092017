function hamburgerInit() {

  let toggle = document.querySelector(".hamburger");
  toggleHandler(toggle);
 
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");

    });
  }
 
}

module.exports = hamburgerInit;