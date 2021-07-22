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
    
    if (btn_menu.className === "fas fa-bars burger_menu_btn"){

        btn_menu.className = "fas fa-times burger_menu_btn"
        showMenu()
    }else{
        btn_menu.className = "fas fa-bars burger_menu_btn"
        closeMenu()
    }
    
    
})


// CAMBIO DE TEMA

const setTheme = () => {

    const themeSheet = document.querySelector("head .themeSheet")
    const changeThemeBtn = document.querySelector("#changeTheme")
    if(localStorage.getItem("theme")){

        if(localStorage.getItem("theme") === "dark"){
            changeThemeBtn.innerHTML = "Modo Diurno <span></span>"
            themeSheet.setAttribute("href","./style/dark_theme/dark_theme.css")
            changeAssests(localStorage.getItem("theme"))

        }else{
            changeThemeBtn.innerHTML = "Modo Nocturno <span></span>"
            themeSheet.setAttribute("href","./style/light_theme/light_theme.css")
            changeAssests(localStorage.getItem("theme"))
        }

    }else{
        localStorage.setItem("theme", "light")
    }
}
// CAMBIO DE ASSETS
function changeAssests(theme){
    
    if(theme === "light"){
        
        // ASSESTS LIGHT
        document.querySelector(".logo").setAttribute("src","assets/logo-mobile.svg")
        if (window.screen.width >= 768) {
            document.querySelector(".logo").setAttribute("src","assets/logo-desktop.svg")
        }

        // CREATE GIFO BTN
        const crear_btn = document.querySelector(".create_btn")
        crear_btn.setAttribute("src","assets/button-crear-gifo.svg")
        crear_btn.addEventListener("mouseenter", () => crear_btn.setAttribute("src","assets/CTA-crear-gifo-hover.svg"))
        crear_btn.addEventListener("mouseleave",() => crear_btn.setAttribute("src","assets/button-crear-gifo.svg"))


        

    }else if(theme === "dark"){
        // ASSESTS DARK
        document.querySelector(".logo").setAttribute("src","assets/logo-mobile-modo-noct.svg")
        if (window.screen.width >= 768) {
            document.querySelector(".logo").setAttribute("src","assets/logo-modo-noc.svg")
        }

        // CREATE GIFO BTN
        const crear_btn = document.querySelector(".create_btn")
        crear_btn.setAttribute("src","assets/CTA-crear-gifo-modo-noc.svg")
        crear_btn.addEventListener("mouseenter", () => crear_btn.setAttribute("src","assets/CTA-crear-gifo-hover-modo-noc.svg"))
        crear_btn.addEventListener("mouseleave",() => crear_btn.setAttribute("src","assets/CTA-crear-gifo-modo-noc.svg"))
    }
}

// CHANGE THEME BUTTON
const changeThemeBtn = document.querySelector("#changeTheme")
changeThemeBtn.addEventListener("click", () => {
    
    if(localStorage.getItem("theme") === "light"){

        localStorage.setItem("theme","dark")

        setTheme()
    }else{

        localStorage.setItem("theme","light")
        setTheme()
    }
})

// CLOSE SEARCH
const input_search = document.querySelector(".input_search")
const close_icon = document.querySelector(".icon_close")
const div_search = document.querySelector(".search")

input_search.addEventListener("input",() =>{
    if(input_search.value){

        div_search.style.flexFlow = "row"
        close_icon.style.display = "block"

    }else{
        close_icon.style.display = "none"
        div_search.style.flexFlow = "row-reverse"
    }
})

close_icon.addEventListener("click", () =>{
    close_icon.style.display = "none"
    input_search.value = ""
    document.querySelector(".resultado").style.display = "none"
    div_search.style.flexFlow = "row-reverse"
})


// BACK HOME
const logo = document.querySelector(".logo")
logo.addEventListener("click", () => window.location.href = "../index.html")





// SETTHEME AL CARGAR LA PAGINA
window.onload = () => {

    setTheme()
    

}

window.onresize = () =>{

    setTheme()
}