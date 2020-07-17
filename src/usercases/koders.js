const Koder = require('../models/koder')

function getAll (){
    return Koders.find ()
}

function create(koderData){
    return Koders.create(koderData)
}

function updateById (idKoder, KodersToUpdate){
    return Koders.findByIdAndUpdate(idKoder, KodersToUpdate)
}

function deleteById (idKoder ) {
    return Koders.findByIdAndRemove(idKoder)
}

module.exports = {
    getAll,
    create,
    updateById,
    deleteById
}