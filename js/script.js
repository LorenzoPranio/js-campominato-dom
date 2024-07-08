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
    console.log(bombs)
    // Eseguo un ciclo for per la griglia 10x10
    for (let i = 0; i < total_cells; i++) {
        // Creo un singolo quadrato funzione create_square
        let current_square = create_square(i + 1);
        current_square.addEventListener('click', function() {
            // Se la partita è terminata, non fare nulla
            if (game_end) return;
            // Quando cliccata, se è una bomba, termina la partita
            if (bombs.includes(i)) {
                this.classList.add('bomb');
                alert(`Hai calpestato una bomba! Hai perso! Punteggio: ${score}`);
                game_end = true;
            }
            else {
                // Altrimenti, diventa azzurra e mostra il numero in console
                if (!this.classList.contains('clicked-lightblue')) {
                    this.classList.add('clicked-lightblue');
                    score++;
                    // Se tutte le celle sicure sono state cliccate, il giocatore vince
                    if (score === total_cells - max_bombs) {
                        alert(`Hai vinto la partita! Punteggio: ${score}`);
                        game_end = true;
                    }
                }
            }
        })
        // Metto il numero progressivo al quadrato
        current_square.innerText = i + 1;
        // Appendo il quadrato creato nella griglia
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
        const bomb_position = Math.floor(Math.random() * total_cells + 1);
        if (!bombs.includes(bomb_position)) {
            bombs.push(bomb_position);
        }
    }
    return bombs;
}



