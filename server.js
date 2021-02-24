
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./server/anecdotes.json')
const path = require('path')
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, './build')
})
const port = process.env.PORT || 3000

server.use(middlewares)
server.use(router)

//const express = require('express')

//server.use(express.static('build'))

/* server.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
}) */

server.listen(port)


/*
const jsonServer = require('json-server')
const app = jsonServer.create()
const path = require('path')
const express = require('express')
const middlewares = jsonServer.defaults()
const router = jsonServer.router('./server/anecdotes.json')
const port = process.env.PORT || 3000

app.use('/anecdotes', middlewares, router)
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port)
 */