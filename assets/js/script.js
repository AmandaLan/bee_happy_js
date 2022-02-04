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
  let beekeeperLogo = document.getElementById("beekeperLogo");
  let beekeepertitle = document.getElementById("beekeperTitle");
  console.log(beekeeperLogo);
  window.addEventListener("scroll", () => {
    //   alert(window.scrollY);
    // beekeeperLogo.classList.remove("beekeperLogo");
    // beekeeperLogo.classList.add("beekeeperShow");
    // console.log(beekeeperLogo);
    if (window.scrollY > 150) {
      beekeeperLogo.classList.remove("beekeperLogo");
      beekeeperLogo.classList.add("beekeeperShow");
      beekeepertitle.classList.remove("beekeperTitle");
      beekeepertitle.classList.add("beekeepertitleShow");
      console.log(beekeeperLogo);
    } else {
      beekeeperLogo.classList.remove("beekeeperShow");
      beekeeperLogo.classList.add("beekeperLogo");
      beekeepertitle.classList.remove("beekeepertitleShow");
      beekeepertitle.classList.add("beekeperTitle");
    }
  });
}
beekeeper();
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
//////////////////////////// DARK MODE ///////////////////////////////////////////

const beekeeperBG = document.getElementById("beekeperLogo");
console.log(beekeeperBG);
const dark = document.getElementById("dark");

dark.addEventListener("click", () => {
  console.log("dark");
  document.body.classList.toggle("darkMode");
  beekeeperBG.classList.remove("beekeperLogo");
  beekeeperBG.classList.add("beekeeperLogoDark");
  console.log(beekeeperBG);
});
