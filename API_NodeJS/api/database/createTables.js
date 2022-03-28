//This colect a tableModel from a specified path
const tableModel = require('../routes/messages/MessagesModel')

//This set the model behavior
tableModel
    //sync- will try to create and save the model on database
    .sync()
    //then- if its OK, create and show a message
    .then(() => console.log('Table created'))
    .catch(console.log)