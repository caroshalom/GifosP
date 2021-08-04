// CAMBIO DE TEMA

const setTheme = () => {

    const themeSheet = document.querySelector("head .themeSheet")
    const changeThemeBtn = document.querySelector("#changeTheme")
    if(localStorage.getItem("theme")){

        if(localStorage.getItem("theme") === "dark"){
            changeThemeBtn.innerHTML = "Modo Diurno <span></span>"
            themeSheet.setAttribute("href","../style/dark_theme/dark_theme.css")
            changeAssests(localStorage.getItem("theme"))

        }else{
            changeThemeBtn.innerHTML = "Modo Nocturno <span></span>"
            themeSheet.setAttribute("href","../style/light_theme/light_theme.css")
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
        document.querySelector(".logo").setAttribute("src","../assets/logo-mobile.svg")
        if (window.screen.width >= 768) {
            document.querySelector(".logo").setAttribute("src","../assets/logo-desktop.svg")
        }

        // CREATE GIFO BTN
        const crear_btn = document.querySelector(".create_btn")
        crear_btn.setAttribute("src","../assets/CTA-crear-gifo-active.svg")


        

    }else if(theme === "dark"){
        // ASSESTS DARK
        document.querySelector(".logo").setAttribute("src","../assets/logo-mobile-modo-noct.svg")
        if (window.screen.width >= 768) {
            document.querySelector(".logo").setAttribute("src","../assets/logo-modo-noc.svg")
        }

        // CREATE GIFO BTN
        const crear_btn = document.querySelector(".create_btn")
        crear_btn.setAttribute("src","../assets/CTA-crear-gifo-active-modo-noc.svg")
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

// BACK HOME
const logo = document.querySelector(".logo")
logo.addEventListener("click", () => window.location.href = "../index.html")

setTheme()


// SETTHEME AL CARGAR LA PAGINA
window.onload = () => {

    setTheme()

}

window.onresize = () =>{

    setTheme()
}