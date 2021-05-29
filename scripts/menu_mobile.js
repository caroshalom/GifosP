// FUNCIONAMIENTO DEL MENU MOBILE

const showMenu = () => {
    
    const menu = document.querySelector(".menu_navegacion")
    menu.style.top = "95px"
    
    console.log("click")
}

const closeMenu = () => {
    const menu = document.querySelector(".menu_navegacion")
    menu.style.top = "-100vh"
    console.log("close")
}

const btn_menu = document.querySelector(".burger_menu_btn")
btn_menu.addEventListener("click", () => {

    if (btn_menu.getAttribute("src") === "assets/burger.svg"){
        
        showMenu()
        btn_menu.setAttribute("src", "assets/close.svg")
    }else{

        closeMenu()
        btn_menu.setAttribute("src", "assets/burger.svg")
    }
})

