const router = require('express').Router();
const sequelize = require('../db');
const Shelter = sequelize.import('../models/shelter');

//create new Shelter log
router.post('/create', (req, res)=> {
    Shelter.create({
        shelter_name : req.body.shelter_name,
        shelter_number : req.body.shelter_number,        
        email : req.body.email,
        address : req.body.address,
        city : req.body.city,
        state_init : req.body.state_init,
        zip_code : req.body.zip_code,
        shelter_contact : req.body.shelter_contact,
        shelter_counsel : req.body.shelter_counsel, 
        shelter_drug_counsel : req.body.shelter_drug_counsel,
        capacity : req.body.capacity,
        occupancy : req.body.occupancy
    })
        .then(shelter => res.status(200).json(shelter))
        .catch(err =>
            res.status(500).json({
                error: err
            })
        );
});

//allow shelter to be updated
router.put("/update/:id", (req, res) => {
    //res.send(200,{"hi":"hi"})

    var data = req.params.id;
    var shelter_name = (typeof req.body.shelter_name === "String") ? req.body.shelter_name : "";
    var shelter_number = req.body.shelter_number;
    var email = req.body.email;
    var address = req.body.address;
    var city = req.body.city;
    var state_init = req.body.state_init;
    var zip_code = req.body.zip_code;
    var shelter_contact = req.body.shelter_contact;
    var shelter_counsel = req.body.shelter_counsel;
    var shelter_drug_counsel = req.body.shelter_drug_counsel;
    var capacity = req.body.capacity;
    var occupancy = req.body.occupancy;

    const nextValues = {
        shelter_name: shelter_name,
        shelter_number: shelter_number,
        email: email,
        address: address,
        city: city,
        state_init: state_init,
        zip_code: zip_code,
        shelter_contact: shelter_contact,
        shelter_counsel: shelter_counsel,
        shelter_drug_counsel: shelter_drug_counsel,
        capacity: capacity,
        occupancy: occupancy
    }

    Shelter.update(
        nextValues,
        {where:{id: data}}
    ).then((affectedCount, affectedRows) => {
        console.log("AFFECTED STUFF", affectedCount, affectedRows)
        if(affectedRows === 1) {
            res.send(200, nextValues)
        }
    })
    /*Shelter.update(
        {
            shelter_name: shelter_name,
            shelter_number: shelter_number,
            email: email,
            address: address,
            city: city,
            state_init: state_init,
            zip_code: zip_code,
            shelter_contact: shelter_contact,
            shelter_counsel: shelter_counsel,
            shelter_drug_counsel: shelter_drug_counsel,
            capacity: capacity,
            occupancy: occupancy
        },
        {where:{id: data}}
    ).then((affectedCount, affectedRows) => {
        console.log('done')
    })*//*then(
        function updateSuccess(updatedProfile){
            res.json({
                shelter_name: shelter_name,
                shelter_number: shelter_number,
                email: email,
                address: address,
                city: city,
                state_init: state_init,
                zip_code: zip_code,
                shelter_contact: shelter_contact,
                shelter_counsel: shelter_counsel,
                shelter_drug_counsel: shelter_drug_counsel,
                capacity: capacity,
                occupancy: occupancy
            });
        },
        function updateError(err){
            res.send(500, err.message);
        }
    );*/
});

//get all shelters
router.get('/', (req, res) => {
    Shelter.findAll()
        .then(shelter => res.status(200).json(shelter))
        .catch(err => res.status(500).json({error: err.errors[0].message}))
})

//allow individual shelters to be deleted by 
router.delete('/delete/:id', (req, res) => {
    var data = req.params.id;

    Shelter
        .destroy({
            where:{id: data}
        }).then(
            function deleteLogSuccess(data){
                res.send("Shelter successfully deleted")
            }
        );
});


module.exports = router;