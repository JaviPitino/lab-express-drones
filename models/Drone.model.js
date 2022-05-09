// Iteration #1
const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema ({

    name: {
        type: String
    },
    propellers: {
        type: Number
    },
    maxSpeed: {
        type: Number
    }
})


const DroneModel = mongoose.model( "drone", droneSchema )

module.exports = DroneModel