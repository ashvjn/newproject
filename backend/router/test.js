const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('user');


router.post('/register', (req, resp) => {
    console.log('reacgefdd211111111111');
    console.log('req.body', req.body);
    if (!req.body.name && !req.body.email && !req.body.password && !req.body.phonenumber && !req.body.dob && !req.body.gender) {
        resp.status(400).json({ msg: 'all fields are required' })
    }
    else {
        User.findOne({ "email": req.body.email }, (err, data) => {
            if (data) {
                resp.status(400).json({ msg: 'email already exist' })
            }
            else {
                var user = new User();
                        user.name = req.body.name;
                        user.email = req.body.email;
                        user.password = req.body.password;
                        user.phonenumber = req.body.phonenumber;
                        user.save((err, result) => {
                            if (result) {
                                let response = {  msg: 'Successful' }
                                resp.status(200).send(response)
                            } else {
                                resp.status(400).json({ msg: 'Something went wrong' })

                            }

                        });
            }
        })
    }
});
router.post('/login', (req, resp) => {
    console.log('login reached');
    const username = req.body.email;
    const password = req.body.password;

    User.findOne({ email: username }, (err, user) => {
        if (err) throw err;
        if (!user) {
            resp.status(400).json({ msg: 'Incorrect email or password' })
        } else {
            resp.status(200).json({ msg: 'Logged in successfully!' })
        }

    })
})


module.exports = router;