const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const {username, password} = req.body;
    try {
        if (!username || !password) throw new Error('Please provide username and password');

        const user = await User.findOne({where: {username}});
        if(!user) throw new Error('Invalid email or password');


        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Invalid email or password');

        const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, {expiresIn: '1h'});

        return res.status(200).json({
            message: "User logged in successfully!", token, data: {
                user: {
                    id: user.id, username: user.username, createdAt: user.createdAt, updatedAt: user.updatedAt
                }
            }
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: err.message || 'Internal server error'
        });
    }
}
exports.signup = async (req, res) => {
    const {username, password} = req.body;
    try {
        if (!username || !password) throw new Error('Please provide username and password');

        const userExists = await User.findOne({where: {username}});
        if (userExists) throw new Error('User already exists');

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({username, password: hashedPassword});

        return res.status(200).json({
            message: "User registered successfully!", data: {user: {id: user.id, username: user.username}}
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: err.message || 'Internal server error',
        });
    }
}