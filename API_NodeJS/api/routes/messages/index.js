//Router- controls endpoint behavior
const router = require('express').Router()
//This will carry all query methods of a table
const TableMessages = require('./TableMessages')
const Messages = require('./Messages')
const { response } = require('express')

//This configures a endpoint behavior to SHOW data
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

//This configures a endpoint behavior to INSERT data
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

//This configures a endpoint behavior to SHOW some data by ID
router.get('/:idMessage', async (request, response) =>{
    try{
        //This colect a param from URI
        const id = request.params.idMessage
        //This injects ID, to return a query object
        const message = new Messages({ id: id})
        await message.loadMessage()
        response.send(
            JSON.stringify(message)
        )
        
    } catch(err){
        response.send(
            JSON.stringify({
                errMessage: err.message
            })
        )
    }
})
//This configures a endpoint behavior to SHOW some data by ID
router.put('/:idMessage', async (request, response) =>{
    try{
        //This colect a param from URI
        const id = request.params.idMessage
        //This colect data fom request body
        const dataReceived = request.body
        //This merge two objects in a single one, where assing(Empty Group, object 1, object 2)
        const data = Object.assign({}, dataReceived, { id: id})
        const message = new Messages(data)
        await message.updateMessage()
        response.end()
    } catch(err){
        response.send(
            JSON.stringify({
                errMessage: err.message
            })
        )
    }
})

router.delete('/:idMessage', async (request, response) =>{
    try{
        const id = request.params.idMessage
        const message = new Messages({ id: id})
        await message.loadMessage()
        await message.remove()
        response.end()
    }catch(err){
        response.send(
            JSON.stringify({
                errMessage: err.message
            })
        )
    }
})
//This will return the router response to the API
module.exports = router