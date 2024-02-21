
let submit = document.querySelector('form');



submit.addEventListener('submit', popup)
function popup(event){ 
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))
    alert(`Message envoyé! : ${JSON.stringify(data)}`)
}
