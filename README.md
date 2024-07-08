Esercizio di oggi(08/07/24): *Campo Minato*
nome repo: *js-campominato-dom*
*Consegna*
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*BONUS:*
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
SUPERBONUS: (da fare solo se si è fatto il bonus principale della difficoltà)
Superbonus 1
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
Superbonus 2
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
*Consigli del giorno:* 
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.


|SOLUZIONE|

1.-Devo generare 16 bombe e inserirla nei quadrati in modo randomico
1.1.-Non potranno avere lo stesso numero e il pattern cambia ogni volta che attiviamo una nuova partita
1.1.1.-Utilizzo Math.Random e CICLE WHILE, moltiplichiamo fino a 100 + 1, se non è presente il numero generato random
       lo butto nell'array, altrimenti vado avanti
1.1.2.-Quando l'array raggiunge lunghezza 16, finisce il ciclo

2.-L'utente clicca una casella IF il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba
2.1.-La cella si colora di rosso e la partita termina

3.-ELSE la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle
3.1.-Ogni volta che il giocatore clicca una cella azzurra diversa dalla precendente, aumenta il punteggio

4.-Creo un LET con score = 0
4.1.-Quando viene cliccata una cella azzurra score++

5.-La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti, 
   ovvero, quando ha rivelato tutte le celle che non sono bombe
5.1.-Al termine della partita il software deve comunicare con ALERT il punteggio, cioè il numero di volte che l’utente ha cliccato 
     su una cella che non era una bomba
5.2.-IF il giocatore ha perso la partita ALERT "Hai perso!" + il punteggio
5.3.-IF il giocatore ha vinto la partita ALERT "Hai vinto!" + il punteggio