const express = require('express');
const koalaRouter = express.Router();

const pg = require('pg');
// DB CONNECTION
const pool = new pg.Pool({
    database: 'Koala Holla',
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
            response.sendStatus(500);
        })
});

// POST
koalaRouter.post('/', function (request, response){
    console.log('request.body', request.body);

    let newKoala = request.body;

    let name = newKoala.name;
    let age = newKoala.age;
    let favoriteColor = newKoala.favoriteColor;
    let readyToTransfer = newKoala.readyToTransfer;
    let notes = newKoala.notes;

    let queryText = `INSERT INTO "koalas" ("name", "age", "favoriteColor", "readyToTransfer", "notes")
    VALUES ($1, $2, $3, $4, $5);`
    //newKoala.id = koalaList.length + 1;
    //koalaList.push(newKoala);
    //response.sendStatus(201);
    pool.query(queryText, [name, age, favoriteColor, readyToTransfer, notes])
        .then(dbResult => {
            console.log('dbResult.rows', dbResult.rows);
            response.sendStatus(201);
        })
        .catch(dbError => {
            // unpack the results
            console.log('dbError:', dbError);
            // send the client a response, based on the results.
            response.sendStatus(500);

        console.log('Adding koalas', newKoala);
        })
});

// PUT
// koalaRouter.put('/', function (request,response){
//     .then(response =>)
// })
koalaRouter.put('/:id', function (request, response){
    console.log ()
    let idToUpdate = request.params.id;
    let queryText = `UPDATE "koalas" WHERE id = $1, $2, $3, $4, $5;`;
    pool.query(queryText, [idToUpdate])
        .then(dbResult => {
            console.log(dbResult);
            response.sendStatus(200);
        })
        .catch(dbError => {
            console.log(dbError);
            response.sendStatus(500);
        })
});

// DELETE
koalaRouter.delete('/:id', function (request, response){
    //const koalaId = Number(request.params.id);
    //koalaList = koalaList.filter(k => k.id !== koalaId);
    //response.sendStatus(201);
    console.log('req.params', request.params);

    let idToDelete = request.params.id;

    console.log('idToDelete', idToDelete);
    console.log('typeof idToDelete', typeof idToDelete);

    let queryText = `DELETE FROM "koalas" WHERE id = $1;`;

    pool.query(queryText, [idToDelete])
        .then(dbResult => {
            console.log(dbResult);
            response.sendStatus(200);
        })
        .catch(dbError => {
            console.log(dbError);
            response.sendStatus(500);
        })
});

module.exports = koalaRouter;