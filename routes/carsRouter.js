const db = require('../data/db');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars);
        });
});

router.post('/', (req, res) => {
    const newCar = req.body;
    db('cars')
        .insert(newCar, 'id')
        .then(ids => {
            db('cars')
                .where({id: ids[0]})
                .then(car => {
                    res.status(201).json(car)
                })
                .catch(error => {
                    console.log('return added car error', error);
                    res.status(500).json({message: 'Could not find a car with that id.'})
                })
        })
        .catch(error => {
            console.log('add a new car error', error);
            res.status(500).json({message: 'Could not add a new car.'})
        })
});

module.exports = router;