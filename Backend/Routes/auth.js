const express = require("express");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../Models/User');
const fetchuser = require("../Middleware/fetchuser")

const JWT_SECRET = "I am admin"

const router = express.Router();

router.post('/SignUp', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('phoneno').isLength({ max: 10 })
],   async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Hello World")
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const existingUser = await User.findOne({ email: req.body.email });

        if (existingUser) {
            return res.status(400).json({ error: "Sorry, a user with this email already exists" });
        }

        const { name, email, password, age, phoneno, city, state, sports_prefrence1, sports_prefrence2, sports_prefrence3, sports_prefrence4, sports_prefrence5, sports_prefrence6 } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({ name, email, password: hashedPassword, age, phoneno, city, state, sports_prefrence1, sports_prefrence2, sports_prefrence3, sports_prefrence4, sports_prefrence5, sports_prefrence6});

        const data = {
            newUser: {
                id: newUser.id
            }
        }

        const authData = jwt.sign(data, JWT_SECRET);
        console.log(authData);

        res.json(authData);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

router.post('/login', [
    body('email').isEmail(),
    body('password', "Please Enter the correct password").exists()
], async (req, res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try{
        const {email, password} = req.body;
        let user = await User.findOne({email: email});

        if(!user) {
            return res.status(400).json({error: "Please Login with correct credentials"})
        }

        const passcomp = await bcrypt.compare(password, user.password);
        if(!passcomp) {
            return res.status(400).json({error: "Please Login with correct credentials"})
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authData = jwt.sign(data, JWT_SECRET);
        console.log({authData});
        res.json({authData});
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})

router.post("/forgotpassword", async(req, res)=>{
    try {
    const { email, password } = req.body;
    const user = await User.findOne({email: email});
    if(!user) {
        return res.status(400).json({ error: "Plese give correct credentials"});
    }
    const salt = await bcrypt.genSalt(10);
    const sec = await bcrypt.hash(password, salt);
    user.password = sec; 
    await user.save();
    res.send("Password reset successfully")
} catch(error) {
    console.error(error);
        res.status(500).send("Internal Server Error");
}
})

router.post('/getuser', fetchuser, async (req, res) => {
    // if there are errors return bad request or errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user);
  } catch (error) {
    console.log(error.message)
    res.status(500).send("Internal server error")
  }})

  router.get('/userdetails', async (req, res)=>{
    try {
        const users = await User.find().select("-password");
        res.json(users);
    } catch {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
  })

module.exports = router;