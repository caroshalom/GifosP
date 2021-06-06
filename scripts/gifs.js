// CREACION DE UN GIF
class Gif{

    constructor(type, id){

        // TYPE indica el tipo de gif PUEDE SER
        // 1: INDICA LOS GIFS QUE TIENEN BOTON AÑADIR A FAVORITOS
        // 2: INDICA LOS GIFS QUE TIENEN BOTON ELIMINAR
        // 3: INDICA LOS GIFS QUE TIENEN BOTON QUITAR FAVORITO
        this.apyKey = "aiSyvuotTBkiW8LiDS2grIV7FM6KZv9T"
        this.type = type
        this.id = id
    }

    renderGif = () =>{

        fetch(`https://api.giphy.com/v1/gifs/${this.id}?api_key=${this.apyKey}`)
        .then(response => response.json())
        .then(data => {


            let gif = `
                
            <div class="gif" id="${this.id}">
                <img class="gif_bg" src="${data.images.downsized_large.url}" alt="gif">

                <div class="gif_hover ">

                    <div class="buttons ${this.type}">
                    
                        <button class="button fav"><i class="far fa-heart"></i></button> 
                        <button class="button un_fav"><i class="fas fa-heart"></i></button> 
                        <button class="button delete"><i class="far fa-trash-alt"></i></button> 
                        <button class="button download"><i class="fas fa-download"></i></button> 
                        <button class="button expand"><i class="fas fa-expand-alt"></i></button> 
                    </div>

                    <h2>${data.title}</h2>
                    <p>${data.username}</p>

                </div>
            </div>
            `
            return gif

        })
        .catch(err => console.error(err))

    }
}


