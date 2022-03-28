//Express- enable you to create an API
const express = require('express')
//App=express- says that this aplication is of type API
const app = express()
//BodyParser- says that you can consume data from response body HTTP
const bodyParser = require('body-parser')
//Config- set a json file, to get default values(config/default.json)
const config = require('config')
//Use- especifies a type of data file
app.use(bodyParser.json())
//This receive the return of module.export = router(in /routes/messages/index.js)
const router = require('./routes/messages')
//This show the endpoint accessible by Postman, where router receive the method response
app.use('/api/messages', router)
//Listen- a port to connect
app.listen(config.get('api.port'), () => console.log('A API está funcionando'))


