//////////////////////////// BURGER MENU ///////////////////////////////////////////
function burgerMenu() {
  const navigation = document.querySelector(".navigation");
  const burger = document.querySelector(".burger");
  const bar = document.querySelector(".bar");
  burger.addEventListener("click", () => {
    navigation.classList.toggle("navActiv");
    bar.classList.toggle("barActiv");
  });
}
burgerMenu();
//////////////////////////// BEEKEEPER ANIMATION ///////////////////////////////////////////

function beekeeper() {
  const beekeeperLogo = document.querySelector(".beekeeperLogo");
  window.addEventListener("scroll", () => {
    //   alert(window.scrollY);
    beekeeperLogo.classList.add("beekeeperShow");
  });
}

// window.addEventListener("scroll", checkBeekeeper);

// function checkBeekeeper() {

//   const triggerBottom = window.innerHeight / 5 * 4;

//   beekeperLogo.forEach(beekeeper => {

//       const beekeeperTop = beekeeper.getBoundingClientRect().top

//       if (beekeeperTop < triggerBottom) {
//           beekeeper.classList.add("beekeeperShow")
//       } else {
//           beekeeper.classList.remove("beekeeperShow")
//       }
//   })
// }
