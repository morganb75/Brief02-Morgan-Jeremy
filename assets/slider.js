let btnNext = document.querySelector('.next');
let btnPrev = document.querySelector('.prev');
let cardId = document.querySelector('.card-id');
let cardImg = document.querySelector('.card-img');
let cardTitle = document.querySelector('.card-title');
let cardDescription = document.querySelector('.card-description');
let filmsData;

//Fetch du fichier JSON des datas des films au chargement de la page
//Initialisation des champs de card id, image, titre et description
window.addEventListener('load',() =>{
    fetch ('./assets/json/dataFilm.json')
    .then(response => response.json())
    .then(data => {
        filmsData = data;
        cardId.textContent = filmsData[0].id;
        cardTitle.textContent = filmsData[0].titre;
        cardDescription.textContent = filmsData[0].description;
        cardImg.setAttribute('src',filmsData[0].url);
    })
    .catch(error =>console.error('erreur au chargement du fichier json!',error)); 
})

//Changement d'url source de l'element image au click sur next
btnNext.addEventListener('click',()=>{
    let idFilm = parseInt(cardId.textContent);
    if(idFilm !== filmsData.length){
        setCard(idFilm);
    } else {
        setCard(0);
    }
})

//Changement d'url source de l'element image au click sur prev
btnPrev.addEventListener('click',()=>{
    let idFilm = parseInt(cardId.textContent);
    if(idFilm !== 1){
        setCard(idFilm-2);
    } else {
        setCard(9);
    }
})

//Fonction de mise à jour du film selon un index
//!!!!ATTENTION: id de film de 1 à 10 et index issus du json de 0 à 9!!!!
const setCard = (indexFilm) => {
    cardId.textContent = filmsData[indexFilm].id;
    cardImg.setAttribute('src',filmsData[indexFilm].url);
    cardTitle.textContent = filmsData[indexFilm].titre;
    cardDescription.textContent = filmsData[indexFilm].description;
}




