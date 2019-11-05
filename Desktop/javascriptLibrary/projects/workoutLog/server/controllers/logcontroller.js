const router = require('express').Router()
const Log = require('../db').import('../models/log');
const sequelize = require('../db');
const User = sequelize.import('../models/user');
const validateSession = require('../middleware/validate-session');


// Create a workout log
router.post('/', validateSession, (req, res) => {
    const logRequest = {
        description: req.body.description, 
        definition: req.body.definition,
        result: req.body.result,
        owner: req.user.id
    }
    Log.create(logRequest)
    .then(log => res.status(200).json(log))
    .catch(err => res.json(req.errors))
})
//Get all logs for individual user
router.get('/', validateSession, (req, res) =>{
    Log.findAll({ where: { owner: req.user.id}, 
    returning: true})
    .then(Log => res.status(200).json(Log))
    .catch(err => res.status(500).json({ error: err}))
})
//Get individual logs by ID for individual user
router.get('/:id', validateSession, (req, res) => {
    Log.findOne({ where: { owner: req.user.id, id: req.params.id }})
    .then(log => res.status(200).json(log))
    .catch(err => res.status(500).json({ error: err}))
})
//Allows individual logs to be updated by a user
router.put('/:id', validateSession, (req, res) => {
    Log.update(req.body, {where: { id: req.params.id}})
    .then(log => res.status(200).json(log))
    .catch(err => res.json(req.errors))
})
//Allows individual logs to be deleted by a user
router.delete('/:id', validateSession, (req, res) => {
    Log.destroy({ where: { id: req.params.id}})
    .then(log => res.status(200).json(log))
    .catch(err => res.status(500).json({ error: err}))
})

module.exports = router;