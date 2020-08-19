//Vue instance 
// const createApp = require('./app'); //path to built server bundle
const server = require('express')();
const PORT = 8080;
const { createBundleRenderer } = require('vue-server-renderer');
const template =  require('fs').readFileSync('./templates/index.template.html', 'utf-8');
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const renderer = createBundleRenderer( serverBundle, {
    runInNewContext: false,
    template,
})

//template interpolation
// const contextTemplate = {
//     title: 'Hello SSR Vue',
//     metas: `
//         <meta name="keyword" content="vue,ssr">
//         <meta name="description" content="vue srr demo">
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     `
// }

//server
server.get('*', (req, res) => {
    const context = {  url: req.url };

    renderer.renderToString(context, (err, html) => {
        if(err){
            // console.log(err)
            if(err.code === 404) {
                res.status(404).end('Page not found');
            } else {
                console.log(err)
                res.status(500).end('Internal Server Eerror');
            }
        }
        res.end(html);
    });
    
});

server.listen(PORT);
console.log(`Listening on http://localhost:${PORT}`);