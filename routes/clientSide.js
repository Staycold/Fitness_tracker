const router = require("express").Router();
const path = require("path");
const Workoutdb = require("../models")

router.get('/api/workouts/', async ({ body }, res) =>{
    try{
        const wrkoutData = await Workoutdb.create({})
        res.status(200).json(wrkoutData)
    }
    catch (err) {
        res.status(400).json(err)
    }
    
})


router.post("/api/workouts/:id", async ({body}, res) => {
    try{
        const wrkoutData = await Workoutdb.findOneAndUpdate({id:params.id}, { $push: { books: _id } }, { new: true })
        res.status(200).json(wrkoutData);
    }    
      catch(err) {
        res.json(err);
      };
    })



    router.get('api/workouts/range', async (req , res) => {
        try {
            const wrkoutData = await Workoutdb.find()
            res.status(200).json(wrkoutData).limit(7)
        } catch (err) {
            res.status(400).json(err)
        }
    })
    

    router.get('api/workouts', async (req , res) => {
        try {
            const wrkoutData = await Workoutdb.find()
            res.status(200).json(wrkoutData)
        } catch (err) {
            res.status(400).json(err)
        }
    })

module.exports = router;