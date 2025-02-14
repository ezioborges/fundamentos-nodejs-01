import http from 'node:http';

const users = []

const server  = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET' && url === '/users') {
        // a função get não recebe/suporta retornos em arrays, é necessário passar pra um JSON
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    };

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Ezio',
            email: 'eziopborges@gmail.com'
        })    
        return res
        .writeHead(201)
        .end()
    
    };
    

    res
    .writeHead(404)
    .end()
})

server.listen(3333)