const renderFavs = () => {
    
    let content = ""
    favList = JSON.stringify(localStorage.getItem("favorites")) 
    if(favList){
        
        content += `
        <img src="../assets/icon-favoritos.svg">
        <h2>Favoritos</h2>
        `
        // CREAR UN GIF POR CADA FAVORITO GUARDADO
        for (const id of favList) {
            
            let fav = new Gif(1, id)
            const fav_temp = fav.renderGif()
    
            content += `

                ${fav_temp}
                
                `
        }

    }else{

        content = `
        <img src="../assets/icon-favoritos.svg">
        <h2>Favoritos</h2>
        <img src="../assets/icon-fav-sin-contenido.svg">
        <p>"¡Guarda tu primer GIFO en Favoritos 
        para que se muestre aquí!"</p>
        
        `
    }

    return content
}

const section_main = document.querySelector(".main_section")
const button_favorites = document.querySelector(".favs")

button_favorites.addEventListener("click", () => {

    favsss = ["3o72EX0nHKFwKH9bvG"]
    localStorage.setItem("favorites", JSON.stringify(favsss))
    
    content = renderFavs()
    section_main.className = "main_section section_favs"
    section_main.innerHTML = content
})