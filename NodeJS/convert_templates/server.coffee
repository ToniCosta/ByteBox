express = require 'express'
Route = require 'route'
route = new Route app

app = new express
port = process.env.PORT or 4000

app.listen port 
console.log "server running on port #{port}"