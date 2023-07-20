const express = require("express");
const router = express.Router();
const { create } = require("../usecases/user.usecase");


router.post("/", async (req, res) => {
    try{
        const user = await create(req.body);
        res.status(201);
        res.json({
            success: true,
            data: user
        })
    }catch(err){
        res.status(err.status || 500)
        res.json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router;