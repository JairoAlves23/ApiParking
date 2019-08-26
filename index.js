const app = require('./bin/express')
const Parking = require('./packing/schema')
const moment = require('moment')
const port = 3000

app.get('/', async (req,res)=>{
    const pk = await Parking.create({
        vehicle: 'Carro2',
        vehiclePlate:'bbb-1234',
        parkingStartAt:moment(),
        pricePerHour:10
    })

    const all = await Parking.find()
    res.status(200).send(all)
})

app.listen(port, ()=> {
    console.log(`App initalize with sucess ${port}`)
})

