const express = require("express")
const router = express.Router( );
const Log = require("../models/log")


router.get("/", async (req, res) => {
    try {
                const foundLogs = await Log.find({ })
                res.status(200).render("logs/Index", {
                    logs: foundLogs,
                });
            } catch(err){
                res.status(400).send(err)
            }
})


router.get("/new", (req, res)=>{
    res.render("Logs/New");
})

router.delete("/:id", async(req, res) => {
    try{
    await Log.findByIdAndDelete(req.params.id);
    res.status(200).redirect("/logs");
    } catch (err){
    res.status(400).send(err);
    }

})


router.put("/:id", async (req, res) =>{
    try {
        if (req.body.shipIsBroken ==="on") {
            req.body.shipIsBroken = true;
        }
        else{
            req.body.shipIsBroken = false;
        }
       
        const updatedLog = await Log.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
    res.redirect(`/logs/${req.params.id}`);
    } catch(err) {
    res.status(400).send(err);
    }

})

router.post("/", async (req, res) => {
    try{
        req.body.shipIsBroken = req.body.shipIsBroken ==="true";
        const createdLog = await Log.create(req.body)
        res.status(201).redirect("/logs");
         } catch(err) {
            res.status(400).send(err)
         }

});

router.get("/:id/edit", async (req ,res) => {
    try{
    const foundLog = await Log.findById(req.params.id);
    res.render("logs/Edit",{
        log: foundLog
    })
    } catch(err){
    res.send(400).send(err);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const foundLog = await Log.findById(req.params.id)
        res.render("logs/Show", {
            log: foundLog
        });
    } catch(err){
        res.status(400).send(err)
    }

})

module.exports = router;