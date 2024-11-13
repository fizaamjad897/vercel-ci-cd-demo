const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.MY_SECRET_KEY;
document.getElementById("secretKey").textContent = secretKey;