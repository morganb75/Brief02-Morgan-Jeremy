//injection navbar
window.addEventListener('load', ()=>{
    document.querySelector('header').innerHTML=
    `<div class="home">
    <p>Welcome in world of:</p>
</div>
<div class="logo">
    <img src="./assets/img/Dragon-Ball-Logo.png" alt="Logo" >
</div>
<div class="nav-container">
    <nav class="nav-m">
        <a href="./presentation.html">Presentation</a>
        <a href="./produit.html">Produits</a>
        <a href="./home.html">Accueil</a>
    </nav>
</div>`
})