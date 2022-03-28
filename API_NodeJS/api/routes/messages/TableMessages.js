//This colect the fields of table
const model = require('./MessagesModel')

//This will export the query methods
module.exports = {
    list(){
        return model.findAll()
    },
    insert(messages){
        return model.create(messages)
    },
    async selectById(id){
        const messageFound = await model.findOne({
            where:{
                id: id
            }
        })
        if(!messageFound){
            throw new Error('Message not found!')
        }
        return messageFound
    },
    async updateById(id, dataToUpdate){
        return model.update(
            dataToUpdate,
            {
                where: { id: id}
            }
        )
    }
}