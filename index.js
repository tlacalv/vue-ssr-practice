//Vue instance 
const Vue = require('vue');
const server = require('express')();
const PORT = 8080;

const template =  require('fs').readFileSync('./templates/index.template.html', 'utf-8');
const renderer = require('vue-server-renderer').createRenderer({
    template,
});

//template interpolation
const context = {
    title: 'Hello SSR Vue',
    metas: `
        <meta name="keyword" content="vue,ssr">
        <meta name="description" content="vue srr demo">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    `
}

//server
server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url,
        },
        template: `<div>The visited URL is {{ url }}</div>`
    });
    
    renderer.renderToString(app, context)
        .then(html => {
            res.end(html);
        })
        .catch(err => {
            console.log(err);
            res.status(500).end('Internal Server Eerror');
        });
});

server.listen(PORT);
console.log(`Listening on http://localhost:${PORT}`);