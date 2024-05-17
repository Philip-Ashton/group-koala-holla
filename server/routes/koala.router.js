const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
let koalaList = [
    { id: 1, name: 'Scotty', favoriteColor: 'Red', age: 4, readyToTransfer: true, notes: 'Born in Guatemala'},
    { id: 2, name: 'Jean', favoriteColor: 'Green', age: 5, readyToTransfer: true, notes: 'Allergic to lots of lava'},
    { id: 3, name: 'Ororo', favoriteColor: 'Yellow', age: 7, readyToTransfer: false, notes: 'Loves listening to Paula (Abdul)'},
    { id: 4, name: "K'Leaf", favoriteColor: 'Purple', age: 15, readyToTransfer: false, notes: 'Never refueses a treat.'},
    { id: 5, name: 'Charlie', favoriteColor: 'Orange', age: 9, readyToTransfer: true, notes: 'Favorite band is Nirvana'},
    { id: 6, name: 'Betsy', favoriteColor: 'Blue', age: 4, readyToTransfer: true, notes: 'Has a pet iguana'},
]

// GET
koalaRouter.get('/', function (request, response){
    response.send(koalaList);
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