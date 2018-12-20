const url = require('url');
const qs = require('querystring');


module.exports = {
    serverHandle: function (req, res) {

        const route = url.parse(req.url)
        const path = route.pathname
        const params = qs.parse(route.query)

        if(path==='/'){
            content = '<!DOCTYPE html>' +
                '<html>' +
                '    <head>' +
                '        <meta charset="utf-8" />' +
                '        <title>TP1</title>' +
                '    </head>' +
                '    <body>' +
                '         <p>Welcome to the first tp, here you have many possibilities :</p>' +
                '         <p>you can put in the url : /hello and see what happen </p>' +
                '         <p>Also you can put in the url : /hello?value=bertrand and you will see my description </p>' +
                '         <p>Then you can put any other name (/hello?value=jean) for instance to introduce you </p>' +
                '    </body>' +
                '</html>';
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(content);
        }
        else if (path === '/hello' && 'value' in params) {
            if (params['value'] === 'bertrand') {
                content = '<!DOCTYPE html>' +
                    '<html>' +
                    '    <head>' +
                    '        <meta charset="utf-8" />' +
                    '        <title>TP1</title>' +
                    '    </head>' +
                    '    <body>' +
                    '         <p>Please allow me to introduce myself</p>' +
                    '         <p>I m a man of wealth and taste</p>' +
                    '         <p>I ve been around for a long, long year</p>' +
                    '         <p>Stole many a man s soul to waste</p>' +
                    '    </body>' +
                    '</html>';
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(content);
            }
            else {
                content = "Hello and nice to meet you " + params['value'] + " !";
                res.write(content)
            }
        }
        else if (path === '/hello'){
            content = '<!DOCTYPE html>' +
                '<html>' +
                '    <head>' +
                '        <meta charset="utf-8" />' +
                '        <title>TP1</title>' +
                '    </head>' +
                '    <body>' +
                '         <p>Hey nice to meet you what s! your name again ?.</p>' +
                '         <p>( come back to the menu just putting a / in the url).</p>' +
                '    </body>' +
                '</html>';
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(content);
        }
        else {
            content = '<!DOCTYPE html>' +
                '<html>' +
                '    <head>' +
                '        <meta charset="utf-8" />' +
                '        <title>TP1</title>' +
                '    </head>' +
                '    <body>' +
                '         <p>Error 404</p>' +
                '    </body>' +
                '</html>';
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(content);
        }

        res.end();
    }
}