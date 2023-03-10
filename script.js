/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato da: nome, ruolo e foto.

* MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

*MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

*MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

*BONUS 1:
Trasformare la stringa foto in una immagine effettiva

*BONUS 2:
Organizzare i singoli membri in card/schede e rendere la pagina gradevole (potete usare lo screen in allegato come spunto
*/

// col --> card --> img (pb-10) / h3 / p (pb-10)

// prendo elementi dal DOM
const row = document.querySelector('.row');

// creo funzione per generare card
const getCard = (member) => {
    const card = 
    `
       <div class="card">
            <img src="img/${member.image}" class="pb-10" alt="${member.image}">
            <h3> ${member.name} </h3>
            <p class="pb-10"> ${member.role} </p>
        </div>
    `
    return card;
}

// creo array del team
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]


let col = '';

// stampo in console informazioni per ogni membro del team
for (let i = 0; i < team.length ; i++){
    const member = team[i];
    // Stampo il nome 
    console.log('-------------Nome'+ ' ' + member.name);
    // stampo il ruolo
    console.log('Ruolo:'+ ' ' + member.role);
    // stampo l'img
    console.log('Img:'+ ' ' + member.image);

    // preparo la col e inserisco la funzione che genera la card
    col += 
    `
        <div class= "col">
            ${getCard(member)}
        </div>
    
    ` 

}

// stampo in pagina
row.innerHTML = col;
