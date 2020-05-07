const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

let apartments = [
  {
    id: 1,
    arate: 350,
    area: 100,
    qrate: 400,
    markup: 30,
    roomates: 3,
    locality: 'Gillbert Hill'
  }
]

app.get('/apartments',(req,res)=>{
  res.json(apartments)
})



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})