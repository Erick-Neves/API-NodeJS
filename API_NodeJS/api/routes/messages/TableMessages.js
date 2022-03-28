//This colect the fields of table
const model = require('./MessagesModel')

//This will export the query methods
module.exports = {
    list(){
        return model.findAll()
    },
    insert(messages){
        return model.create(messages)
    }
}