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
    async loadMessage(){
        const messageFound = await TableMessages.selectById(this.id)
        this.title = messageFound.title
        this.text = messageFound.text
        this.category = messageFound.category
    }
    async updateMessage(){
        await TableMessages.selectById(this.id)
        //This set the fields that are UPDATEBLE
        const fields = ['title', 'text', 'category']
        //This create an empty group
        const dataToUpdate = {}
        //This will check if the value type its equals to the definition type(String)
        fields.forEach((field) => {
            const value = this[field]
            if(typeof value === 'string' && value.length > 0){
                dataToUpdate[field] = value
            }
        })
        //This check if have some data to update
        if(Object.keys(dataToUpdate).length === 0){
            throw new Error('No messages to update!');
        }
        //This set the id, for the fiels given.
        TableMessages.updateById(this.id, dataToUpdate)
    }
}
//Share the class with the API
module.exports = Messages