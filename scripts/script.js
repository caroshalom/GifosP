
function navegar() {
    location.href = '/upload.html';
}
// Ocultar barra de busqueda de sugerencias
document.getElementById('site-search').addEventListener('input', async function (e) {
    let cajita = document.getElementById('resultado');
    let sug = document.getElementById('site-search')
    if (e.target.value !== '' && e.target.value.length > 2) {
        cajita.style.display = "block";
        let texto = sug.value;
        console.log(sug.value)
        busquedaRelacionada(texto, 3);
        console.log(texto);
        //   console.log('show button');
    }
    else {
        console.log(e.target.value)
        cajita.style.display = "none";

        document.querySelector('div.busqueda>button').classList.remove('typing')


        //   console.log('hide button');
    }
});

let api_key = 'api_key=aiSyvuotTBkiW8LiDS2grIV7FM6KZv9T';
async function searchGif(termino, limit) {

    let urlbusqueda = [];
    return new Promise(async (resolve, reject) => {
        try {
            
            let busqueda = await fetch(`https://api.giphy.com/v1/gifs/search?${api_key}&q=${termino}&limit=${limit}&lang=es&rating=pg`)
            let jsonb = await busqueda.json();
            for (let i = 0; i < limit; i++) {
                urlbusqueda.push(jsonb.data[i]);
            };
            console.log(urlbusqueda)

            // RENDER DE GIFS EN GRID CONTAINER
            const grid_container = document.querySelector(".grid_container")

            grid_container.innerHTML = ""
            let content = ""
            urlbusqueda.forEach(async gif => {

                let newSearchGif = new Gif("unfav", gif.id)
                let newContent = await newSearchGif.renderGif()

                content += newContent
                grid_container.innerHTML = content
                gifButtonsFunctions()
                gifHover() 

                document.querySelector(".search_result").style.display = "flex"
                
                document.querySelector(".search_title").innerText = termino
            
            })

            
            resolve([urlbusqueda]);
        } catch (error) {
            reject(error)
        }
    })
}


// BOTON DE BUSQUEDA
const button_search = document.querySelector(".search_button")
button_search.addEventListener("click", () => {

    let termino = document.querySelector(".input_search").value
    searchGif(termino, 12)
})
async function cuadrosBusqueda(numero) {
    try {
        desaparecer(1);
        let cuadritosBusqueda;
        let termino;
        let cajita = document.getElementById('resultado');

        cajita.style.display = "none";
        if (numero === 0) {
            termino = document.getElementById('site-search').value;
            cuadritosBusqueda = await searchGif(termino, 12);

        } else {
            termino = document.querySelector(`div#resultado div:nth-child(${numero})`).textContent
            cuadritosBusqueda = await searchGif(termino, 12);
            console.log(cuadritosBusqueda);
        }

    } catch (error) {
        console.log('error', error);
    }
}

// *****************HASHTAG**********

function busquedaRelacionada(nombre, limite) {
    let i = 1;
    let key = "aiSyvuotTBkiW8LiDS2grIV7FM6KZv9T&q";
    // let limite = 3;
    console.log(nombre);
    console.log(limite);
    const found = fetch(`https://api.giphy.com/v1/tags/related/{${nombre}}?api_key=${key}&limit=3&rating=pg&lang=es`)
        .then((response) => { return response.json() })
        .then((data) => {
            data.data.forEach((tag) => {
                console.log(document.querySelector(`#resultado div:nth-child(n)`));
                document.querySelector(`#resultado div:nth-child(${i})`).innerHTML = tag.name.charAt(0).toUpperCase() + tag.name.slice(1);
                i++

            })
            console.log()
            if (limite == 2) {
                let tagLargo = data.data[1].name;
                let tagCorto = data.data[0].name;
                let aux;
                if (tagLargo.length < tagCorto.length) {
                    aux = tagCorto;
                    tagCorto = tagLargo;
                    tagLargo = aux;
                }
                console.log(tagCorto + 'asdfasdfasdfasdfasdf')
                document.querySelector('.ejemplos>div:nth-child(2)').innerHTML = '#' + tagLargo;
                document.querySelector('.ejemplos>div:nth-child(1)').innerHTML = '#' + tagCorto;
            }

            console.log(data)
            return data
        }).catch((error) => { return error })
    console.log(found)

    return found
}



function desaparecer(selector) {
    if (typeof selector == 'string') {
        var elem = document.querySelector('header');
    } else {
        var elem = document.querySelector('#resultado');
    }
    // var elem = document.querySelector('header');
    var sibling = elem.nextElementSibling;
    while (sibling) {
        sibling.remove();
        sibling = elem.nextElementSibling;
    }
    if (typeof selector == 'string') {
        subir3(1);
    }
};

function fecthcUrls(tipo, id) {
    return new Promise(async (resolve, reject) => {
        if (tipo == 1) {
            try {
                let url2 = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=aiSyvuotTBkiW8LiDS2grIV7FM6KZv9T`);

                let response = await url2.json();

                resolve([response.data.images.original.url])
            } catch (error) {
                reject(error)
            }
        } else {
            try {
                let url2 = await fetch(`http://api.giphy.com/v1/gifs?api_key=aiSyvuotTBkiW8LiDS2grIV7FM6KZv9T&ids=${id}`);

                let response = await url2.json();

                const result = response.data.map(element => element.images.original.url)

                resolve(result)
            } catch (error) {
                reject(error)
            }
        }
    })
}