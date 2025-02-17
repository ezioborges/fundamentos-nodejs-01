import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform {
    _transform(chunk, enconding, callback) {
        const transformed = Number(chunk.toString()) * (-1)
        console.log("🚀 ~ InverseNumberStream ~ _transform ~ transformed:", transformed)

        callback(null, Buffer.from(String(transformed)))
    }
}

const server = http.createServer(async (req, res) => {
    const buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    }

    const fullStreamContent = Buffer.concat(buffers).toString()
    console.log("🚀 ~ server ~ fullStreamContent:", fullStreamContent)

    return res.end(fullStreamContent)
})

server.listen(3334)