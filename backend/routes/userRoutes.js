const express = require("express");
const router = express.Router();
const User = require("../models/User");
router.post("/register", async (req, res) => {
const user = new User(req.body);
await user.save();
res.json({ message: "User registered" });
});
router.post("/login", async (req, res) => {
const user = await User.findOne({
email: req.body.email,
password: req.body.password
});
if(user){
res.json({ message: "Login successful" });
}
else{
res.json({ message: "Invalid credentials" });
}
});
module.exports = router;