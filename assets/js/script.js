function burgerMenu() {
    const navigation = document.querySelector(".navigation");
    const burger = document.querySelector(".burger");
    const bar = document.querySelector(".bar")
    burger.addEventListener("click", () => {
        navigation.classList.toggle("navActiv");
        bar.classList.toggle("barActiv")
    });
}
burgerMenu();