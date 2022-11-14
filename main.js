// cambiar color 1 elemento lista 

// 5 elentos 5 botones

// deshacer con el mismo botón

const title = document.querySelector("h1")
const perrea = document.querySelector("#song")

perrea.onclick = () => {
    if (title.style.color === "black") {
        title.style.color = "pink"
        title.innerHTML = "Baila el chiki chiki"
    } else {
        title.style.color = "black"
        title.innerHTML = "BEST SONG OF SPAIN 4EVER"
    }
}


const button1 = document.querySelector("#button1")
const list1 = document.querySelector("#list1")

button1.onclick = () => {
    if (list1.style.color === "black") {
        list1.style.color = "red"
        list1.innerHTML = "Uno: el brikindans"
    } else {
        list1.style.color = "black"
        list1.innerHTML = "1"
    }
}

const button2 = document.querySelector("#button2")
const list2 = document.querySelector("#list2")

button2.onclick = () => {
    if (list2.style.color === "black") {
        list2.style.color = "blue"
        list2.innerHTML = "Dos: el crusaíto"
    } else {
        list2.style.color = "black"
        list2.innerHTML = "2"
    }
}

const button3 = document.querySelector("#button3")
const list3 = document.querySelector("#list3")

button3.onclick = () => {
    if (list3.style.color === "black") {
        list3.style.color = "green"
        list3.innerHTML = "Tres: el maiquelyason"
    } else {
        list3.style.color = "black"
        list3.innerHTML = "3"
    }

}

const button4 = document.querySelector("#button4")
const list4 = document.querySelector("#list4")

button4.onclick = () => {
    if (list4.style.color === "black") {
        list4.style.color = "purple"
        list4.innerHTML = "Cuatro: el robocop"
    } else {
        list4.style.color = "black"
        list4.innerHTML = "4"
    }

}

const button5 = document.querySelector("#button5")
const list5 = document.querySelector("#list5")

button5.onclick = () => {
    if (list5.style.color === "black") {
        list5.style.color = "orange"
        list5.innerHTML = "Baila el chikichiki baila el chikichiki"
    } else {
        list5.style.color = "black"
        list5.innerHTML = "4"
    }

}

const button6 = document.querySelector("#button6")
const list6 = document.querySelector("#photo")


