// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.




function random(min, max) {

    let listNumbers = [];

    // ciclo-per-inserire-16-numeri
    for(let i = 0; i < 5; i ++){
        min = Math.ceil(min);
        max = Math.floor(max);

        let element = listNumbers[i];
        element = Math.floor(Math.random() * (max - min + 1)) + min;

        // controllo-se-il-numero-esiste-nell'arrey
        while(listNumbers.includes(element)){
            element = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        listNumbers.push(element);
    }
    
    return listNumbers;

}



// primo-timer

function timer(){
    let second = 0;

    const timer = setInterval(() => {

        if (second < 30) {
            second += 1;
            console.log(second);
        } else{
            console.log('tempo finito');
            container.innerHTML ='';
            clearInterval(timer);
            
        }  
    }, 1000);

    


}







let container = document.getElementById('container');
let container2 = document.getElementById('container2')
const numberRandom = random(1, 5);
console.log(numberRandom);


let times = timer();

let times2 = timer2();

container.append(numberRandom);





    
function timer2(){

    const timer2 = setTimeout(() => {
        
        
        let utente = [];
        let listUtente = [];
        for (let i = 0; i < 5; i++) {
            
            utente = parseInt(prompt('inserisci un numero'))
            listUtente.push(utente);
            console.log(listUtente);
            
        }

        
        

        let risultato = [];
        let risultatoSbagliato = [];
        let vero = 0;
        let falso = 0;
        
        for (let i = 0; i < 5; i++) {
            console.log(numberRandom);

            
            if(!(listUtente[i] == numberRandom[i])){
                console.log('sbagliato');
                // container.innerHTML ='non hai memorizato tutti i numeri';
                risultatoSbagliato.push(listUtente[i]);
                falso ++

            }else{
                risultato.push(listUtente[i]);
                vero ++;

            }
            
        
            
        }
        container.innerHTML='numeri giusti ' + vero + '.... ' + risultato;
        container2.innerHTML='numeri sbagliati ' + falso + '.... ' + risultatoSbagliato;
        
        console.log(risultato);
        console.log(risultatoSbagliato);

        
        clearInterval(timer2);
    }, 32000);
}
