import http from 'node:http';

const users = [];

const server = http.createServer((req, res) => {
    const { method, url } = req

    if(method === 'GET' && url === '/users'){
        return res.setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }
    if(method === 'POST' && URL ==='/users'){
        users.push({
            id:1,
            name: 'Gabs',
            email: 'Gabs@example.com',
            

        })
        return res.end('Criação de usuários')
    }

    return res.end('Hello World')
});

server.listen(3333)

// CommonJS => require 
// agora usamos o ESModules => import/export