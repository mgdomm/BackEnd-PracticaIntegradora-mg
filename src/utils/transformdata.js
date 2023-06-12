const e = require("express");

const transformDataProducts = (products) => {
    const dataProducts = products.map(el => {
        const dataFormated = {
            id: el._id,
            title: el.title,
            description: el.description,
            code: el.code,
            price: el.price,
            status: el.status,
            stock: el.stock,
            category: el.category,
            thumbnail: el.thumbnail
        }
        return dataFormated;
    })
    return dataProducts;
}

 
const transformDataChat = (messages) => {
    const dataMessages = messages.map(el => {
        const dataFormated = {
            user: el.user,
            messageUser: el.messageUser
        }
        return dataFormated
    })
    return dataMessages
}

module.exports = { transformDataProducts, transformDataChat}