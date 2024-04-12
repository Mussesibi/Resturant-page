function homepage(){
    const container = document.querySelector('#content')
    container.textContent = ""
    const div = document.createElement("div")
    div.classList.add("homepage-content")
    const h3 = document.createElement("h3")
    h3.classList.add("h3")
    h3.textContent = "WIJ ZUN WEER OPEN"
    const h2 = document.createElement("h2")
    h2.classList.add("h2")
    h2.textContent = "RESERVEER OF BESTEL ONLINE"
    const p = document.createElement("p")
    p.classList.add("p")
    p.textContent = "MEER INFORMATIE OVER RESERVEREN TODOENS CORONA VINDT U HIER"
    const divBtns = document.createElement("div")
    divBtns.classList.add("homepage-btns")
    const btnReserve = document.createElement("button")
    btnReserve.classList.add("homepage-btns", "button-first-child")
    btnReserve.textContent = "RESERVEE"
    const btnOnline = document.createElement("button")
    btnReserve.classList.add("homepage-btns", "button:last-child")
    btnOnline.textContent = "BESTEL ONLINE"
    divBtns.appendChild(btnReserve)
    divBtns.appendChild(btnOnline)
    div.appendChild(h3)
    div.appendChild(h2)
    div.appendChild(p)
    div.appendChild(divBtns)
    container.appendChild(div)
}

export {homepage}