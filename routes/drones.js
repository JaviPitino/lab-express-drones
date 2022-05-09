const express = require('express');
const router = express.Router();

// require the Drone model here
const DroneModel = require("../models/Drone.model.js")


router.get('/', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
  .then((drone) => {

    res.render( "drones/list.hbs", {
      drone
    })
  })
  .catch((err) => {
    next(err)
  })
});

router.get('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
});

router.post('/create', (req, res, next) => {
  // Iteration #3: Add a new drone
const { name, propellers, maxSpeed } = req.body

  DroneModel.create({
    name,
    propellers,
    maxSpeed
  })
  .then((drone) => {

    res.redirect(`/drones`)
  })
  .catch((err) => {
    next(err)
  })
});

router.get('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params

  DroneModel.findById(id)
  .then((drone) => {
    res.render("drones/update-form.hbs", {
      drone
    })
  })
  .catch((err) => {
    next(err)
  })
});

router.post('/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body
  const { id } = req.params

  DroneModel.findByIdAndUpdate( id, {
    name,
    propellers,
    maxSpeed
  })
  .then((drone) => {
    res.redirect("/drones")
  })
  .catch((err) => {
    next(err)
  })
});

router.post('/:id/delete', (req, res, next) => {

  const { id } = req.params
  // Iteration #5: Delete the drone
  DroneModel.findByIdAndDelete(id)
  .then((drone) => {
    res.redirect("/drones")
  })
  .catch((err) => {
    next(err)
  })


});

module.exports = router;
