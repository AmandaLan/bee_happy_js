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
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      beekeeperLogo.classList.remove("beekeperLogo");
      beekeeperLogo.classList.add("beekeeperShow");
      beekeepertitle.classList.remove("beekeperTitle");
      beekeepertitle.classList.add("beekeepertitleShow");
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
const honeyBG = document.getElementById("honeyCube");
const beeBG = document.getElementById("beeBG");
const contact = document.getElementById("contact");
const dark = document.getElementById("dark");
const darkModeBTN = document.getElementById("darkModeBTN")
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "enabled");

  honeyBG.classList.remove("honeyCube");
  honeyBG.classList.add("honeyCubeDark");
  beeBG.classList.remove("beeBG");
  beeBG.classList.add("beeBGDark");
  contact.classList.remove("contact");
  contact.classList.add("contactDark");
  darkModeBTN.classList.remove("darkModeBTN");
  darkModeBTN.classList.add("darkModeBTNDark");
};
const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);

  honeyBG.classList.remove("honeyCubeDark");
  honeyBG.classList.add("honeyCube");
  beeBG.classList.remove("beeBGDark");
  beeBG.classList.add("beeBG");
  contact.classList.remove("contactDark");
  contact.classList.add("contact");
  darkModeBTN.classList.remove("darkModeBTNDark");
  darkModeBTN.classList.add("darkModeBTN");
};

dark.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

});

//////////////////beeFly//////////////////////

function beefly() {
  let beeflyImg = document.getElementById("beeflyImg");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 2500) {
      beeflyImg.classList.remove("beeflyImg");
      beeflyImg.classList.add("beeflyImgShow");
    } else {
      beeflyImg.classList.remove("beeflyImgShow");
      beeflyImg.classList.add("beeflyImg");
    }
  });
}
beefly();