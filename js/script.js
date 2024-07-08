// Recupero il pulsante dal dom
const btn = document.getElementById('btn-start');

// Recupero l'elemento della griglia
const grid = document.getElementById('grid');
const total_cells = 100;

// Devo generare 16 bombe e inserirle nei quadrati in modo randomico
const max_bombs = 16;
let bombs = [];
let score = 0;
let game_end = false;


// Assegno l'evento click al pulsante recuperato nel dom 
btn.addEventListener('click', function() {
    grid.innerHTML = "";
    // Aggiungo le nuove variabili
    score = 0;
    game_end = false;
    bombs = generate_bombs();
    // Eseguo un ciclo for per la griglia 10x10
    for (let i = 0; i < total_cells; i++) {
        // Creo un singolo quadrato funzione create_square
        let current_square = create_square(i + 1);
        // Aggiungo l'evento click al quadrato
        current_square.addEventListener('click',function(){
            //Quando cliccata diventa azzurra e mostra il numero in console
            console.log(this.innerText);
            this.classList.toggle('clicked-lightblue')
        })
    //Metto il numero progressivo al quadrato
    current_square.innerText = i + 1;
    //Appendo il quadrato creato nella griglia
    grid.append(current_square);
    }
})

// Definisco la funzione che mi crea i quadrati nella griglia
function create_square(number) {
    let current_element = document.createElement('div');
    // Assegnazione della classe square all'elemento creato
    current_element.classList.add('square');
    current_element.innerText = number;
    // Restituisco il quadrato nella variabile current_element
    return current_element;
}

// Funzione delle bombe
function generate_bombs() {
    const bombs = [];
    while (bombs.length < max_bombs) {
        const bomb_position = Math.floor(Math.random() * total_cells);
        if (!bombs.includes(bomb_position)) {
            bombs.push(bomb_position);
        }
    }
    return bombs;
}



