// Injection de la navbar et du footer
window.addEventListener('load', () => {
    document.querySelector('header').innerHTML =
    `<header>
    <div class="home">
<<<<<<< HEAD
        <p>Home</p>
=======
    <a href="./home.html">Home</a>
>>>>>>> 3475b4a (fin de journee)
    </div>
    <div class="logo">
        <img src="./assets/img/Dragon-Ball-Logo.png" alt="Logo" >
    </div>
    <div class="nav-container">
        <nav class="nav-m">
<<<<<<< HEAD
            <a href="./home.html">Accueil</a>
            <a href="./produit.html">Produits</a>
=======
            <a href="./presentation.html">Presentation</a>
            <a href="./films.html">Films</a>
>>>>>>> 3475b4a (fin de journee)
            <a href="./contact.html">Contact</a>
        </nav>
    </div>
    </header>`
    document.querySelector('footer').innerHTML =
    `<div>
        <p>Dragon Ball Z - &copy2024</p>
    </div>`
})