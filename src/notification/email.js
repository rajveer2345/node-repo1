const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "rajveershekhar.singh@gmail.com",
        pass: "ydreuccbxdeqzynv",
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(addressArray,subject,message,name) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: 'artikabra001@gmail.com', // sender address
        to: addressArray, // list of receivers
        subject: name +  ": " + subject, // Subject line
    
        text: message// plain text body
       // html body 
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <mailto:b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
}

module.exports = {
    main
};