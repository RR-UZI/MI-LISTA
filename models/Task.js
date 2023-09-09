const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Debes de ingresar un nombre'],
        trim: true,
        maxlength: [20, 'Usa menos de 20 caracteres']
    }, 
    completed: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('Task', TaskSchema)