//*************** Responsive menu *****************/

const hamburgerButton = $(".hamburger_button");
const navbar = $(".navbar");

hamburgerButton.on("click", function () {
  navbar.toggleClass("active_nav");
})