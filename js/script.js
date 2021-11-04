/*
1. Creare un'array object per ogni membro del tem
2. Nell'array devono essere presenti il nome, ruolo e foto
3.Inserire l'utente nel team container 
4. stamparli nel html 
5. utilizzare gli input html per creare una carta
*/

//creo l'array del team
const utenti = [
  {
    foto : 'img/wayne-barnett-founder-ceo.jpg',
    nome : 'Wayne Barnett',
    ruolo : 'Founder & CEO'
  },
  {
    foto : 'img/an.jpg',
    nome : 'Wayne Barnett',
    ruolo : 'Founder & CEO'
  },
];
console.log(utenti);


//prendo il container dove inserire le carte
const facciataUtenti = document.querySelector('.team-container');
console.log('facciata',facciataUtenti);

const teamCard = document.createElement('div');
teamCard.classList.add('team-card');
facciataUtenti.append(teamCard);
let cardImage = document.createElement('div');
cardImage.classList.add("card-image");
teamCard.append(cardImage);
let cardText = document.createElement('div');
cardText.classList.add("card-text");
teamCard.append(cardText);


//creare la team card da mettere nel container
for (let i = 0; i < utenti.length; i++) {
  const utente = utenti[i];
  
  for (let key in utente){
    cardImage.innerHTML=`
    <img src="${utente.foto}"/>
    `;
    console.log('image',cardImage)
    cardText.innerHTML= `
    <h3>${utente.nome}</h3>,
    <p>${utente.ruolo}</p>
    `;
  }
  
}

console.log('facciata utenti 2', facciataUtenti);