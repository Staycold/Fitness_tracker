const router = require("express").Router();
// const path = require("path");
const Workoutdb = require("../models/workout")

router.post('/api/workouts/', async ({ body }, res) =>{
    try{
        const wrkoutData = await Workoutdb.create({})
        res.status(200).json(wrkoutData)
    }
    catch (err) {
        res.status(400).json(err)
    }
    
})


router.put("/api/workouts/:id", async ({params ,body}, res) => {
    try{
        const wrkoutData = await Workoutdb.findByIdAndUpdate(
            params.id,
             { $push: { exercises: body} }, 
             { new: true }
             )
        res.status(200).json(wrkoutData);
    }    
      catch(err) {
        res.json(err);
      };
    })



    router.get('/api/workouts/range', async (req , res) => {
        try {
            const wrkoutData = await Workoutdb.aggregate([
                {
                    $addFields:{
                        totalDuration:{
                            $sum:'$exercises.duration'
                        }
                    }
                }
            ]).sort({_id:1}).limit(7)
            res.status(200).json(wrkoutData)
        } catch (err) {
            res.status(400).json(err)
        }
    })
    

    router.get('/api/workouts', async (req , res) => {
        try {
            const wrkoutData = await Workoutdb.aggregate([
                {
                    $addFields:{
                        totalDuration:{
                            $sum:'$exercises.duration'
                        }
                    }
                }
            ])
            res.status(200).json(wrkoutData)
        } catch (err) {
            res.status(400).json(err)
        }
    })

module.exports = router;