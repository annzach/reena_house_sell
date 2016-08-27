const express = require('express');
const router = express.Router();
const House = require('../models/house');

router.route('/')
  .get((req, res)=>{
    House.find({}, (err, houses)=>{
      res.status(err ? 400 :200).send(err || houses);
    }).populate('owner')
  })
  .post((req, res)=>{
    House.create(req.body, (err, house)=>{
      if(err){
        return res.status(400).send(err);
      }
      res.send(house);
    });
  });

router.route('/:id')
  .get((req, res) =>{
  // GET /api/house/dfff98767890987fda
  // find house by id
    House.findById(req.params.id, (err, house)=>{
      if(err || !house){
        return res.status(400).send(err || 'House not found');
      }
      res.send(house);
    }).populate('owner')
  })
  .delete((req, res) => {
    House.findByIdAndRemove(req.params.id, err => {
      if(err){
        return res.status(400).send(err);
      }
      House.find({}, (err, houses) =>{
        res.status(err? 400 : 200).send(err || houses);
      })
    }).populate('owner')
  })
  .put((req, res) => {
    House.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, house) => {
      if(err){
        return res.status(400).send(err);
      }
      // else { house.save(); }
      House.find({}, (err,houses) =>{
        res.status(err ? 400 : 200).send(err || houses);
      }).populate('owner')
    })
  })

router.put('/:houseId/addOwner/:ownerId', (req, res)=>{
  House.findById(req.params.houseId, (err, house)=>{
    if(err || !house){
      return res.status(400).send(err || 'House not found');
    }

    let ownerId = req.params.ownerId;

    house.owner = ownerId;
    house.save((err, savedHouse)=>{
      res.status(err ? 400 :200).send(err || savedHouse);
    });
  });
});




module.exports = router;
