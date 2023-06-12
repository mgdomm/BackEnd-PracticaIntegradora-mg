const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({

    userid: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        unique: true,
        require: true
    },

    productscart: [
        {
            id: {
                type: String,
                unique: true,
                require: true
            },
            nameproduct: { type: String }
        }
    ]
})

const cart = mongoose.model('cart', cartSchema)

module.export = cart;