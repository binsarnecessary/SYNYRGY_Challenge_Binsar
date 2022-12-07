const http = require('http');
const path = require('path');
const fs = require('fs');
const PUBLIC_DIRECTORY = path.join(__dirname, '../public');
const DATA_DIRECTORY = path.join(__dirname, '../data');

const getHtml = (fileName) => {
    const htmlfile = path.join(PUBLIC_DIRECTORY, fileName);
    const html = fs.readFileSync(htmlfile, 'utf8');

    return html
}

const onRequest = (req, res) => {

    switch(req.url) {

    case "/" :
        const htmlIndex = getHtml('/index.html')

        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(htmlIndex);

    return

    // case "/about" :
    //     const htmlAbout = getHtml('about.html')

    //     res.setHeader('Content-Type', 'text/html');
    //     res.writeHead(200);
    //     res.end(htmlAbout);

    // return

    // case "/json" :
    //     const person = {
    //         name : "Stephany",
    //         age : 50,
    //         isMarried : false,
    //         isBeautiful : true,
    //     }

    //         const personJSON = JSON.stringify(person); // object js ke json
    //         //JSON.parse(person); //untuk json ke js            

    //         res.setHeader('Content-Type', 'application/json');
    //         res.writeHead(200);
    //         res.end(personJSON);

        // return
    
    case "/find_car" :
        const dataLoc = path.join(DATA_DIRECTORY, "/find_car.html");
        const dataJSON = fs.readFileSync(dataLoc, 'utf8');

        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(dataJSON);

    return
    }
}

const parseURL = url.parse(reqUrl);
const pathName = `${parseURL.pathname}`;
const extension = path.parse(pathName).ext;
const absolutePath = path.join(PUBLIC_DIRECTORY, pathName);

const ContentTypes = {
    ".css" : "text/css",
    ".png" : "image/png",
    ".jpg" : "image/jpeg", 
    ".svg" : "image/svg+xml",
    ".html" : "text/html",
    ".js" : "text/javascript",
}

fs.exists(absolutePath, (exists) => {
    if (!exists) {
        res.writeHead(404);
        res.end("File not found ...");
    return;
    }
});

fs.readFile(absolutePath, (err, data) => {
    if (err) {
        res.statusCode = 500;
        res.end("File not found ...");
    } else {
        res.setHeader("Content-Type", contentTypes[extension] || "text/plain");
        res.end(data);
    }
});


const server = http.createServer(onRequest);

server.listen(2000, '127.0.0.1', () => {
    console.log("Server sudah berjalan. Buka http://localhost:2000")
})