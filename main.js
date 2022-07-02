const MenuHamburgue = document.querySelector("#checkbox");
const MenuNav = document.querySelector("#menu");

MenuHamburgue.addEventListener("click", (e) => {
    MenuNav.classList.toggle("hide");
})
