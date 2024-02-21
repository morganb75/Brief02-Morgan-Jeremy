// Injection de la navbar et du footer
window.addEventListener('load', () => {
    document.querySelector('header').innerHTML =
    `<header>
    <div class="home">
        <p>Home</p>
    </div>
    <div class="logo">
        <img src="./assets/img/Dragon-Ball-Logo.png" alt="Logo" >
    </div>
    <div class="nav-container">
        <nav class="nav-m">
            <a href="./home.html">Accueil</a>
            <a href="./produit.html">Produits</a>
            <a href="./contact.html">Contact</a>
        </nav>
    </div>
    </header>`
    document.querySelector('footer').innerHTML =
    `<div>
        <p>Dragon Ball Z - &copy2024</p>
    </div>`
})