const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
let contacts = []

app.use(bodyParser.json())
app.use(cors())

/// TODO: Develop GET /contacts
app.get('/contacts',(req,res) => {
    let newContact = [
        { name: this.newContactName, phoneNumber: this.newContactPhoneNumber }
    ]
    res.status(201).json(contacts)
})



/// TODO: Develop POST /contacts
//Sung and Thom i cant add to master E-dok fuck off  




app.listen(3000, () => {
    console.log('API Server started at port 3000')
})
