// RENDER GIFS QUE SE ENCUENTRAN EN EL ARRAY DE FAVSLIST
const renderMisGIfs = async () => {
    
    let content = ""
    misGifsList = JSON.parse(localStorage.getItem("misGifos")) 

    if(misGifsList && misGifsList.length !== 0){
        
    

        // CREAR UN GIF POR CADA GIFO GUARDADO
        for (const id of misGifsList) {
            

            let miGif = new Gif("mygif", id)
            const misGifTemp = await miGif.renderGif()
     
            content += misGifTemp
        }

    }else{

        const container = document.querySelector(".grid_container")
        container.style.display = "flex"
        container.style.flexFlow = "column wrap"
        container.style.alignItems= "center"
        content = `


        <img class="img_no_gifs" src="../assets/icon-mis-gifos-sin-contenido.svg">
        <p class="no_gifs" >"¡Anímate a crear tu primer GIFO!"</p>
    
        `
    }

    return content
}
const button_mis_gifs = document.querySelector(".my_gifs")

button_mis_gifs.addEventListener("click", async () => {

    document.querySelector(".search_result").style.display = "none"

    section_main.innerHTML = `
    <img src="../assets/icon-mis-gifos.svg">
    <h2>Mis GIFOS</h2>

    <div class="grid_container">
        
    </div>


    `
    
    let gifContent = await renderMisGIfs()

    section_main.className = "main_section section_mis_gifs"
    document.querySelector(".grid_container").innerHTML += gifContent
    
    gifButtonsFunctions()
    gifHover() 
})

window.onload = () => {
    setTheme()
    if(!localStorage.getItem("favorites")){
        localStorage.setItem("favorites", "[]")
    }
    if(!localStorage.getItem("misGifos")){
        localStorage.setItem("misGifos", "[]")
    }

}