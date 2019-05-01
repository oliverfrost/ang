const express = require('express');
const router = express.Router();
const moment = require('moment');
const User = require('../models/user.model');

router.get('/', (req, res, next) => {
    const user = new User();

    user
        .fetchAll()
        .then(u => {
                res.status(200).send(u);
            }, error => {
                res.status(400).send('Failed to fetch user list');
            }
        );
});

router.get('/:userId', (req, res, next) => {
    const user = new User({id: req.params.userId});

    user
        .fetch()
        .then(u => {
                res.status(200).send(u);
            }, error => {
                res.status(400).send(`Failed to fetch user with id ${req.params.userId}`);
            }
        );
});


router.post('/', (req, res, next) => {
    const {name, email} = req.body;

    new User({
        name: name,
        email: email,
        created_at: moment().toISOString()
    }).save()
        .then(u => {
            res.status(200).send(u);
        }, e => {
            switch (e.constraint) {
                case 'users_email_key':
                    res.status(409).send('User with specified email already exists');
                    break;
                default:
                    res.status(400).send('Failed to add new user');
            }
        });
});


module.exports = router;
