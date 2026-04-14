let frutas = ['uva', 'abacate', 'melancia', 'jabuticaba']
let lista = document.getElementById('lista')
let li = document.createElement('li')
for (let i = 0; i < frutas.length; i++) {
    let li = document.createElement('li')
    li.innerText = frutas[i]
    lista.appendChild(li)
}
