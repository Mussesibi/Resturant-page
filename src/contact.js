function contactpage(){
    const container = document.querySelector('#content')
    container.textContent = ""
    const contactHeaderMessage = document.createElement("h3")
    contactHeaderMessage.textContent = "Enter your details and reach to us !"
    const div = document.createElement("div")
    div.classList.add("contact")
    const form = document.createElement("form")
    form.setAttribute('method', 'post')
    const divCenterInputLabels1 = document.createElement("div")
    const divCenterInputLabels2 = document.createElement("div")
    const divCenterInputLabels3 = document.createElement("div")
    divCenterInputLabels1.classList.add("center-input-and-labels")
    divCenterInputLabels2.classList.add("center-input-and-labels")
    divCenterInputLabels3.classList.add("center-input-and-labels")
    //Name lable and input
    const labelName = document.createElement("label")
    labelName.setAttribute('for', 'name')
    labelName.textContent = "Name"
    const inputName = document.createElement("input")
    inputName.setAttribute('id', 'name')
    //Email lable and input
    const labelEmail = document.createElement("label")
    labelEmail.setAttribute('for', 'email')
    labelEmail.textContent = "Email"
    const inputEmail = document.createElement("input")
    inputEmail.setAttribute('id', 'email')
    //Message lable and input
    const labelMessage = document.createElement("label")
    labelMessage.setAttribute('for', 'message')
    labelMessage.textContent = "Message"
    const textarea = document.createElement('textarea')
    textarea.id = 'message'
    textarea.cols = 25
    textarea.rows = 5

    divCenterInputLabels1.appendChild(labelName)
    divCenterInputLabels1.appendChild(inputName)
    divCenterInputLabels2.appendChild(labelEmail)
    divCenterInputLabels2.appendChild(inputEmail)
    divCenterInputLabels3.appendChild(labelMessage)
    divCenterInputLabels3.appendChild(textarea)
    form.appendChild(divCenterInputLabels1)
    form.appendChild(divCenterInputLabels2)
    form.appendChild(divCenterInputLabels3)
    div.appendChild(contactHeaderMessage)
    div.appendChild(form)
    container.appendChild(div)
}

export {contactpage}