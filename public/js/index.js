const socket = io()

socket.on('Welcome', (data) => {
    console.log(data)
})

socket.on('refreshproducts', (data) => {
    renderUpdateProducts(data)
    renderUpdateProductsMenu(data)

})

socket.on('answer', (data) => {
    showAnswer(data)
})

function showAnswer(data) {
    const message = document.getElementById('message')
    message.textContent = data.error ? data.error : `Se agrego con exito el producto ${data.title}`
    setTimeout(() => {
        message.textContent = ""
    }, 3000)
}

function renderUpdateProducts(data) {
    let htmlProducts = data.map(obj => `<p class="text-center products"> ${obj.title}</p>`).join(' ')
    document.getElementById('products').innerHTML = htmlProducts
}

function renderUpdateProductsMenu(data) {
    let htmlProductsInMenu = data.map(obj => `<option value="${obj.id}">${obj.title}</option>`).join(' ')
    document.getElementById('options').innerHTML = htmlProductsInMenu
}


function captureValueId() {
    let select = document.getElementById("options");
    const product = {id: select.value,}
    socket.emit('productDeleted', product)
    return false
}

function handlesubmit(event) {
    event.preventDefault()
    const form = document.getElementById('formAddProduct')
    console.log(form.inputProductTitle.value)
    const inputTrue = document.getElementById('newProductStatusTrue')

    let valueInputRadio;

    if (inputTrue.checked) {
        valueInputRadio = true
    } else {
        valueInputRadio = false
    }

    const product = {
        title: form.inputProductTitle.value,
        description: form.inputProductDescription.value,
        code: form.inputProductCode.value,
        price: form.inputProductPrice.value,
        status: valueInputRadio,
        stock: form.inputProductStock.value,
        category: form.inputProductCategory.value,
        thumbnail: "file" //form.inputFile.files[0]
    }

    socket.emit('productAdd', product)
}

