var nodemailer = require('nodemailer');
module.exports = {
    sendEmail: function (email, token) {
        var tr = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'matcha.oessafi.2021@gmail.com',
                pass: '12345Matcha'
            }
        });
        const url = `http://localhost:3000/confirme/${token}`;
        var mailSending = {
            from: 'matcha.oessafi.2021@gmail.com',
            to: email,
            subject: 'Confirm your account',
            html: `<p>Please click to verify your email</p><span style="background-color:#16C79A"><a href="${url}" >Click me</a></span>`
        };
        tr.sendMail(mailSending, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    },
    sendResetEmail: function (email, token) {
        var tr = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'matcha.oessafi.2021@gmail.com',
                pass: '12345Matcha'
            }
        });
        const url = `http://localhost:3000/resetPassword/${token}`;
        var mailSending = {
            from: 'matcha.oessafi.2021@gmail.com',
            to: email,
            subject: 'Reset your password',
            html: `<p>Please click to verify your email</p><span style="background-color:#16C79A"><a href="${url}" >Click me</a></span>`
        };
        tr.sendMail(mailSending, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    },
};