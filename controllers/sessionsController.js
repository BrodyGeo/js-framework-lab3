const Author = require('../models/author');

exports.authenticate = (req, res) => {
    const jwt = require('jsonwebtoken');

    Author.findOne({
        email: req.body.email
    })
    .then(author => {
        author.authenticate(req.body.password, (err, isMatch) => {
            if (err) throw new Error(err);

            if (isMatch) {
                req.session.userId = author.id;

                const token = jwt.sign(
                    {payload: req.body.email}, 
                    "builderthebob", 
                    {expiresIn: "1h"});
                res.cookie('token', token, {httpOnly: true});
            } else {
                res.json({error: 'Your credentials do not match'});
            }
        });
    })
    .catch(err => {
        res.json(err);
    });
};


exports.logout = (req, res) => {
    req.isAuthenticated();

    req.session.userId = null;
    req.flash('success', 'You are logged out');
    res.redirect('/');
};