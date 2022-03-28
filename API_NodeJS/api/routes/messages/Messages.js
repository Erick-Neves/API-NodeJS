//This initiate endpoint, to have access here
const TableMessages = require('./TableMessages')

//We create a class with constructor to do the database persistance
class Messages{
    constructor({ id, title, text, category}){
        this.id = id
        this.title = title
        this.text = text
        this.category = category
    }
    async createMessage(){
        const results = await TableMessages.insert({
            title: this.title,
            text: this.text,
            category: this.category
        })
        this.id = results.id
    }
}
//Share the class with the API
module.exports = Messages