// RENDER GIFS QUE SE ENCUENTRAN EN EL ARRAY DE FAVSLIST
const renderFavs = async () => {
    
    let content = ""
    favList = JSON.parse(localStorage.getItem("favorites")) 

    if(favList && favList.length !== 0){
        
    

        // CREAR UN GIF POR CADA FAVORITO GUARDADO
        for (const id of favList) {
            

            let fav = new Gif("favorite", id)
            const fav_temp = await fav.renderGif()
    
            content += fav_temp
        }

    }else{

        const container = document.querySelector(".grid_container")
        container.style.display = "flex"
        container.style.flexFlow = "column wrap"
        container.style.alignItems= "center"
        content = `


        <img class="img_no_gifs" src="../assets/icon-fav-sin-contenido.svg">
        <p class="no_gifs" >"¡Guarda tu primer GIFO en Favoritos 
        para que se muestre aquí!"</p>
    
        `
    }

    return content
}

const section_main = document.querySelector(".main_section")
const button_favorites = document.querySelector(".favs")

button_favorites.addEventListener("click", async () => {

    section_main.innerHTML = `
    <img src="../assets/icon-favoritos.svg">
    <h2>Favoritos</h2>

    <div class="grid_container">
        
    </div>


    `

    // favsss = ["l4Ep45WurPN7vxa4o","3o72EX0nHKFwKH9bvG","3ogwG9UL3PzVTO62Ws","IfmbLrMdACoAoO5BbT","l2SpPRt9SApxLgVmU","H6cr0sw4oCRn9bJziC"]
    // localStorage.setItem("favorites", JSON.stringify(favsss))
    
    let gifContent = await renderFavs()

    section_main.className = "main_section section_favs"
    document.querySelector(".grid_container").innerHTML += gifContent
    
    gifButtonsFunctions()
    gifHover() 
})

window.onload = () => {
    setTheme()
    if(!localStorage.getItem("favorites")){
        localStorage.setItem("favorites", "[]")
    }
}