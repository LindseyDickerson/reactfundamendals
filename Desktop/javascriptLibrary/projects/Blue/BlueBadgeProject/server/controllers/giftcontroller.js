let router = require('express').Router();
let sequelize = require('../db');
let User = sequelize.import('../models/user');
//let Gift = require('../db').import('../models/gift');
let GiftModel = sequelize.import('../models/gift');

/**********************************
 * GET ALL ITEMS FOR SPECIFIC USER
***********************************/
router.get('/all', function (req, res) {
    let userid = req.user.id;

    GiftModel
        .findAll({
            where: { owner: userid }
        })
        .then(
            function findAllSuccess(data) {
                res.json(data);
            },
            function findAllErrors(err) {
                res.send(500, err.message);
            }
        );
});

/********************************
 * Post Single Item for One User
*********************************/
router.post('/wrap', function (req, res) {
    const giftRequest = {
        recipient: req.body.user.recipient,
        giftItem: req.body.user.giftItem,
        cost: req.body.user.cost,
        storagePlace: req.body.user.storagePlace,
        purchaseAt: req.body.user.purchaseAt,
        wrappedIn: req.body.user.wrappedIn
    }
    GiftModel.create(giftRequest)
    .then(gift => res.status(200).json(gift))
    .catch(err => res.json(req.errors))
});

/*************************************
 * GET single item for specific user
**************************************/
router.get('/:id', function(req, res) {
    let data = req.params.id;
    let userid = req.user.id;

    GiftModel
        .findOne({
            where: { id: data, owner: userid }
        }).then(
            function findOneSuccess(data) {
                res.json(data);
            },
            function findOneError(err) {
                res.send(500, err.message);
            }
        );
});

/**************************
 * Delete for single user
***************************/
router.delete('/delete/:id', function(req, res) {
    let data = req.params.id;
    let userid = req.user.id;

    GiftModel
        .destroy({
            where: { id: data, owner: userid }
        }).then(
            function deleteSuccess(data) {
                res.send("Gift returned to the elf workshop");
            },
            function deleteError(err) {
                res.send(500, err.message);
            }
        );
});

/*******************************
 * Update item for single user
*******************************/
router.put('/update/:id', function (req, res) {
    let data = req.params.id;
    let giftData = req.body.giftData.item;

    GiftModel
        .update({
            giftData: giftData
        },
        {where: {id: data}}
        ).then(
            function updateSuccess(updatedLog) {
                res.json({
                    giftData: giftdata
                });
            },
            function updateError(err) {
                res.send(500, err.message);
            }
        )
});


module.exports = router;