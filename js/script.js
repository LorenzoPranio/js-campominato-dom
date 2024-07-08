//Recupero il pulsante dal dom
const btn = document.getElementById('btn-start');

//Recupero l'elemento della griglia
const grid = document.getElementById('grid');
const total_cells = 100;

//Devo generare 16 bombe e inserirle nei quadrati in modo randomico
const max_bombs = 16;
const bombs = [];

//Funzione delle bombe
function generate_bombs() {
    while (bombs.length < max_bombs) {
        const bombs_position = Math.floor(Math.random() * total_cells);
        if (bombs.includes(bombs_position)) {
            bombs.push(bombs_position);
        }
    }
    return bombs;
}

//Assegno l'evento click al pulsante recuperato nel dom 
btn.addEventListener('click', function(){
    grid.innerHTML = "";
    //Eseguo un ciclo for per la grglia 10x10
    for (let i = 0; i < 100; i++){
        //Creo un singolo quadrato funzione createsquare
        let current_square = create_square();
        //Aggiungo l'evento click al quadrato
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

//Definisco la funzione che mi crea i quadrati nella griglia
function create_square(){
    let current_element = document.createElement('div');
    //Assegnazione della classe square all'elemento creato
    current_element.classList.add('square')
    //restituisco il quadrato nella variabile current element
    return current_element;
}




