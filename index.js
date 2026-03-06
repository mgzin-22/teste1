const express = require("express")
const app = express()

app.get("/:teste", (req, res)=>{
    const {teste} = req.params
    res.status(200).json({
        mensagem:`Olá ${teste}`
    })
})

app.get("/idade/:nome/:idade", (req, res)=>{
    const {nome, idade} = req.params
    res.status(200).json({
        mensagem:`Nome: ${nome}, data de nascimento: ${idade}`
    })
})

app.get("/teste", (req, res)=>{
    res.send("Olá Mundo teste")
})

app.listen(3022, ()=>{
    console.log(" miguel servidor está ligado")
}) 