// CREACION DE UN GIF
class Gif{

    constructor(type, id){

        // TYPE indica el tipo de gif PUEDE SER
        // unfav: INDICA LOS GIFS QUE TIENEN BOTON AÑADIR A FAVORITOS
        // mygif: INDICA LOS GIFS QUE TIENEN BOTON ELIMINAR
        // favorite: INDICA LOS GIFS QUE TIENEN BOTON QUITAR FAVORITO
        this.apyKey = "aiSyvuotTBkiW8LiDS2grIV7FM6KZv9T"
        this.type = type
        this.id = id
    }

    async renderGif(){

        try {

            let response = await fetch(`https://api.giphy.com/v1/gifs/${this.id}?api_key=${this.apyKey}`)
            let data = await response.json()
            

            console.log(data)
            let gif = `
             
            <div class="gif" id="${this.id}" style="background-image: url('${data.data.images.original.url}');">

                <div class="gif_hover ">

                    <div class="buttons ${this.type}">
                 
                        <button class="button fav"><i class="far fa-heart"></i></button> 
                        <button class="button un_fav"><i class="fas fa-heart"></i></button> 
                        <button class="button delete"><i class="far fa-trash-alt"></i></button> 
                        <button class="button download"><i class="fas fa-download"></i></button> 
                        <button class="button expand"><i class="fas fa-expand-alt"></i></button> 
                    </div>

                    <div class="info">
                        <p>${data.data.username}</p>
                        <h2>${data.data.title}</h2>
                    
                    </div>

                </div>

            </div>
            `
            

            return gif
            
        } catch (error) {

            console.error(error)
        }
        
    }
    
}

// BOTONES DE GIFS
// EJECUTAR DESPUES DE RENDERIZAR GIFS
const gifButtonsFunctions = () => {

    // ADD FAVORITE BUTTON
    
    const add_favorite_btns = document.querySelectorAll(".fav")
    add_favorite_btns.forEach(element => {

        element.addEventListener("click", () => {
            
            if(localStorage.getItem("favorites")){

                
                let id = element.parentElement.parentElement.parentElement.id
                let favList = JSON.parse(localStorage.getItem("favorites"))
                favList.unshift(id)
                localStorage.setItem("favorites", JSON.stringify(favList))
                
            }else{
                
                localStorage.setItem("favorites","[]")

                let id = element.parentElement.parentElement.parentElement.id
                let favList = JSON.parse(localStorage.getItem("favorites"))
                favList.unshift(id)
                localStorage.setItem("favorites", JSON.stringify(favList))
            }
        })
    })

    // DELETE FAVORITE BUTTON
    
    const delete_favorite_btns = document.querySelectorAll(".un_fav")
    delete_favorite_btns.forEach(element => {
        
        element.addEventListener("click", () => {

            
            let id = element.parentElement.parentElement.parentElement.id
            let favList = JSON.parse(localStorage.getItem("favorites"))
            let newFavlist = favList.filter( element => element !== id)
            localStorage.setItem("favorites", JSON.stringify(newFavlist))
            window.location.reload(true)
        })
    });

    // DOWNLOAD BUTTON

    const download_btns = document.querySelectorAll(".download")
    download_btns.forEach(element => {
        
        element.addEventListener("click", async () => {

            let id = element.parentElement.parentElement.parentElement.id

                //create new a element
                let a = document.createElement('a');
                // get image as blob
                let response = await fetch(`https://media2.giphy.com/media/${id}/giphy.gif?cid=e9ff928175irq2ybzjyiuicjuxk21vv4jyyn0ut5o0d7co50&rid=giphy.gif`);
                let file = await response.blob();
                // use download attribute https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes
                a.download = 'myGif';
                a.href = window.URL.createObjectURL(file);
                //store download url in javascript https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes#JavaScript_access
                a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
                //click on element to start download
                a.click();

        })
    });

    // FULL SCREEN BUTTON

    const full_screen_btns = document.querySelectorAll(".expand")
    const container = document.querySelector(".full_screen_container")


    full_screen_btns.forEach(element => {
        
        element.addEventListener("click", () => {


            let id = element.parentElement.parentElement.parentElement.id
             
            container.innerHTML = `
            
            <img src="https://media0.giphy.com/media/${id}/giphy.gif" alt="GIF">

            `


            // MANIPULA EL TAMAÑO DEL GIF EN FULL SCREEN
            const fsGif = document.querySelector(".full_screen_container img")
            if (window.screen.width >= 768 && fsGif.width > fsGif.height) {
                
                fsGif.style.width = "60vw"

            }else if(window.screen.width >= 768){

                fsGif.style.height = "70vh"
            }


            container.style.display = "flex"

        })

    });

    container.addEventListener("click", () => container.style.display = "none")
}


  
