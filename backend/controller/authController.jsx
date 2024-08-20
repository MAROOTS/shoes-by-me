const User = require('../models/userModel.jsx')
const jwt = require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const nodemailer=require('nodemailer');
const { validationResult } = require('express-validator');

const sendVerificationEmail = async (req, res) => {
    const token = jwt.sign({userId:user._id},process.env.SECRET,{expiresIn:'1h'});
    user.verificationToken = token;
    await user.save();

    const verificationUrl= `${req.protocol}://${req.get('host')}/api/auth/verify-email/${token}`;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAI_USER,
            pass: process.env.GMAIL_PASS,
        },
    });
    const mailOptions = {
        from: process.env.GMAI_USER,
        to:user.email,
        subject:'verify your email',
        html:`<p> Click <a href="${verificationUrl}">here</a> to verify your email</p>`,
    };
    await transporter.sendMail(mailOptions);
};

exports.registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    const { name, email, password } = req.body;

    try {
        const existingUser= await User.findOne({ email });
        if (existingUser) return res.status(400).json({message:'Email already exists'});
        const user = new User({name, email, password});
        await user.save();
        await sendVerificationEmail(user,req);
        res.status(201).json({message:'User registered successfully. check email to verify your account'});
    }catch (error) {
        res.status(500).send({error: error.message});
    }
};

exports.verifyEmail = async (req, res) => {
    const token = req.params.token;
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        const user = await User.findById(decoded.userId);
        if (!user) return res.status(400).json({message:'Invalid token'});
        user.isVerified = true;
        user.verificationToken = undefined;
        await user.save();

        res.status(201).json({message:'Email verified successfully'});
    }catch (error) {
        res.status(500).send({error: error.message});
    }
}