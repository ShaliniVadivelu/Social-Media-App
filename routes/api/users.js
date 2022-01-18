const express = require('express');
const router = express.Router();
const bcypt = require('bcryptjs');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');
const config = require ('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route     POST api/user
// @desc      Register user
// @access    Public
router.post(
    '/',
    [
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password','Password is required').exists()
],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }

    const { email, password} = req.body;

    try {
    // see if user exists
        let user= await User.findOne({ email});

        if (!user) {
            return res
            .status (400)
            .json({errors: [ { msg: 'Invalid Credentials'}]});
        }

    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
        return res
            .status (400)
            .json({errors: [ { msg: 'Invalid Credentials'}]});
    }
    
    const payload = {
        user: {
            id: user.id
        }
    };

    jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token)=> {
            if(err) throw err;
            res.json({ token });
        }
        );
    } catch (err){
        console.error(err.message);
        res.status(500).send('Server error');
     }
}
);

module.exports = router;
