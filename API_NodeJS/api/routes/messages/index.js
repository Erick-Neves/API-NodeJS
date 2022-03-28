//Router- controls endpoint behavior
const router = require('express').Router()
//This will carry all query methods of a table
const TableMessages = require('./TableMessages')
const Messages = require('./Messages')

//This configures a endpoint behavior SHOW
//get- will catch some data if exists
//async- means assincronal/not at the same time/wait for some
//resquest- what we are sending via Postman
//response- what the api response back when we call
router.get('/', async (request, response) => {

    //This will get a return of a query method
    const results = await TableMessages.list()
    //This will control response behavior
    response.send(
        //JSON.stringify- receives a query return, and send a JSON body response
        JSON.stringify(results)
    )
})

router.post('/', async (request,response) =>{
    //This will get the data in response body, storing at this variable
    const messageReceived = request.body
    //This will set the data received, comparing with class constructor
    const messages = new Messages(messageReceived)
    await messages.createMessage()
    response.send(
        JSON.stringify(messages)
    )
})
//This will return the router response to the API
module.exports = router