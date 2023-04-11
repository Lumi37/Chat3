import express from "express";
import http, { Server } from 'http'

const app = express()
const server = http.createServer(app)
const io = new Server(server)
const _dirname = new URL('.',import.meta.url).pathname
app.use(express.static(`${_dirname}/../client/`))
app.use(express.json())

app.listen(3000,()=> console.log('Port: 3000'))