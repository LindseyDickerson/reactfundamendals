let router = require('express').Router();
let sequelize = require('../db');
let User = sequelize.import('../models/user');
let Gift = sequelize.import('../models/gift');
let validateSession = require('../middleware/validate-session');

/**********************************
 * GET ALL ITEMS FOR SPECIFIC USER
***********************************/
router.get('/all', function (req, res) {
    let userid = req.user.id;

    Gift
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
router.post('/wrap', validateSession, (req, res) => {
    const giftRequest = {
        recipient: req.body.gift.recipient,
        giftItem: req.body.gift.giftItem,
        cost: req.body.gift.cost,
        storagePlace: req.body.gift.storagePlace,
        purchaseAt: req.body.gift.purchaseAt,
        wrappedIn: req.body.gift.wrappedIn,
        delivered: req.body.gift.delivered,
        owner: req.user.id
    }
    Gift.create(giftRequest)
    .then(gift => res.status(200).json(gift))
    .catch(err => res.json(req.errors))
});

/*************************************
 * GET single item for specific user
**************************************/
router.get('/:id', validateSession, function(req, res) {
    let data = req.params.id;
    let userid = req.user.id;

    Gift
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
router.delete('/delete/:id', validateSession, function(req, res) {
    let data = req.params.id;
    let userid = req.user.id;

    Gift
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
 * Get items by recipient STRETCH GOAL
********************************/
// router.get('/:recipient', validateSession, (req, res) => {
//     Gift.findAll( {where: { recipient: req.params.recipient }})
//     .then(gift => res.status(200).json(gift))
//     .catch(err => res.status(500).json({error: err}))
// })
router.get('/all/:recipient', validateSession, function (req, res) {
    let recipient = req.params.recipient;
    let userid = req.user.id;

    Gift.findAll({
      where: { owner: userid,  recipient: recipient  }
    })
      .then(
        function findAllSuccess(recipient) {
          res.json(recipient);
        },
        function findAllError(err) {
          res.send(500, err.message);
        }
      );
  });




/*******************************
 * Update item for single user
*******************************/
router.put('/:id', validateSession, (req, res) => {
    Gift.update(req.body.gift, { where: {id: req.params.id} })
    .then(gift => res.status(200).json(gift))
    .catch(err => res.status(500).json({error: err}))
})

module.exports = router;