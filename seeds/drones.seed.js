// Iteration #1
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

require("../db");

const DroneModel = require("../models/Drone.model")

const addDrones = (async (req, res, next) => {

    try {
        await DroneModel.create( drones )

        console.log( drones )
        res.render("./")


    } catch(err) {
        next(err)
    }
})

addDrones()

mongoose.connection.close()