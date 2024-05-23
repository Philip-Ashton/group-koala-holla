const express = require('express');
const koalaRouter = express.Router();

const pg = require('pg');
// DB CONNECTION
const pool = new pg.Pool({
    database: 'koalas',
    host: 'localhost',
    port: 5432
});

// GET
koalaRouter.get('/', function (request, response){
    //response.send(koalaList);
    const queryText = 'SELECT * FROM "koalas";';
    pool.query(queryText)
        .then((dbResult) => {
            let koalas = dbResult.rows;
            response.send(koalas)
        })
        .catch((dbError) => {
            console.log('dbError:', dbError);
            response.sendStatus(500)
        })
});

// POST
koalaRouter.post('/', function (request, response){
    const newKoala = request.body;
    newKoala.id = koalaList.length + 1;
    koalaList.push(newKoala);
    response.sendStatus(201);
})

// PUT
// koalaRouter.put('/', function (request,response){
//     .then(response =>)
// })

// DELETE
koalaRouter.delete('/:id', function (request, response){
    const koalaId = Number(request.params.id);
    koalaList = koalaList.filter(k => k.id !== koalaId);
    response.sendStatus(201);
});

module.exports = koalaRouter;