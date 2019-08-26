const app = require('./bin/express')
const bodyParser = require('body-parser')
const routerParking = require('./module/packing/routes')
const port = 3000

app.use(bodyParser.json())

app.use('/api/parking',routerParking)


app.listen(port, ()=> {
    console.log(`App initalize with sucess ${port}`)
})

