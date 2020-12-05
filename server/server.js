const express = require('express')
const path = require('path')

const videoRoutes = require('./routes/videos')
const repos = require('./routes/repos')
const postRoutes = require('./routes/posts')


const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/videos', videoRoutes)
server.use('/api/v1/repos', repos)
server.use('/api/v1/posts', postRoutes)


module.exports = server
