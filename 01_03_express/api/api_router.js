const express = require("express")

const api_router = express.Router()

api_router.get("/",(req, res)=>{
	res.send({data:[]})
})
api_router.get("/1",(req, res)=>{
	res.send({data1:[]})
})
api_router.get("/2",(req, res)=>{
	res.send({data2:[]})
})

module.exports = api_router