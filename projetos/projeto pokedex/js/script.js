const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonName = document.querySelector('.pokemon_name');
const pokemonImg = document.querySelector('.pokemon__imagen');
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let contadora = 1;


const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {

        const data = await APIResponse.json();

        return data;

    }
};

const renderPokemon = async (pokemon) => {

   
    pokemonName.textContent ="carregando..."
    pokemonImg.src ="https://media.tenor.com/l6xMWS1HEtIAAAAj/loading-load.gif"

    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonNumber.textContent = data.id;
        pokemonName.textContent = data.name;
        pokemonImg.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default;
        input.value()
        console.log(data);
        contadora=data.id


    } else {
        pokemonName.textContent= "não encontrado:c";
        pokemonImg.src ="https://thumbs.dreamstime.com/z/mensagem-de-advert%C3%AAncia-sobre-um-erro-no-sistema-operacional-vetor-mim-111835102.jpg?w=768"

       

    }
};



form.addEventListener("submit", (event) => {
    event.preventDefault();


    renderPokemon(input.value.toLowerCase());

});

buttonPrev.addEventListener("click", ()=>{
 if (contadora > 1) {
     contadora-=1
}renderPokemon(contadora)

})

buttonNext.addEventListener("click", ()=>{
    
       contadora += 1; 
    renderPokemon(contadora);
   
   })

renderPokemon(1)



