const { application } = require('express')
const express = require('express')
var cors = require('cors')
 
const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000

const users=[
    {id:0, name:'somon', email:"somonsikder@gmail.com", phone: '013486521349'},
    {id:1, name:'emon', email:"emon@gmail.com", phone: '013486521349'},
    {id:2, name:'romon', email:"rmon@gmail.com", phone: '013486521349'},
    {id:3, name:'bimon', email:"bimon@gmail.com", phone: '013486521349'},
    {id:4, name:'fmon', email:"fmon@gmail.com", phone: '013486521349'},
]

app.get ('/', (req, res)=>{
    res.send('Hello Form NodeJs')
})

app.get ('/users', (req, res)=>{
    // for search by result
    const search = req.query.search
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }else{
        res.send(users)
    }
})
app.get ('/users/:id', (req, res)=>{
    const id = req.params.id
    const user = users[id]
    res.send(user)
})


// post method
app.post('/users', (req, res)=>{
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    // clint side to send
    res.json(newUser)

})


app.listen(port, ()=>{
    console.log('listening to then port 5000')
})