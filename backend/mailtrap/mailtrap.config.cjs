const { MailtrapClient } = require("mailtrap");
require("dotenv").config();

const MAILTRAP_TOKEN = process.env.MAILTRAP_TOKEN;

const MailtrapClient = new MailtrapClient({
    token: MAILTRAP_TOKEN,
});

const sender = {
    email: "hello@demomailtrap.com",
    name: "Pamkenas",
};

module.exports = { client, sender };