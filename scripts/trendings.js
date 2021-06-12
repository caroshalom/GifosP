// GET TRENDINGS FUNCTION
const getTrendings = async (trendingsNumber) => {

    try {
        
        let response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=aiSyvuotTBkiW8LiDS2grIV7FM6KZv9T&limit=${trendingsNumber}`)
        let data = await response.json()
    
        return data

    } catch (error) {
        
        console.error(error)

    }
}

const renderCarousel = (carousel) => {


    getTrendings()
    .then(( trendings) => {

        trendings.data.forEach(async(trending) => {
        
            let gifTrending = new Gif("trending", trending.id)
            
           gifTrending.renderGif()
           .then((gif) => {

                carousel.innerHTML += gif
                gifButtonsFunctions()
                gifHover() 
            
            })
       
        }); 
    })


    
    
}

const carousel = document.querySelector(".carousel-gif-tendencias")
renderCarousel(carousel)



// MOVIMIENTO DEL CAROUSEL

const carousel_btn_right = document.querySelector(".trendings_container #right")
const carousel_btn_left = document.querySelector(".trendings_container #left")

carousel_btn_right.addEventListener("mousedown", () => {
    
    carousel.scrollLeft += 600

})

carousel_btn_left.addEventListener("mousedown", () => {
    

    
    carousel.scrollLeft -= 600

})


    

