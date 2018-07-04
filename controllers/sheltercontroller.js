const router = require('express').Router();
const sequelize = require('../db');
const Shelter = sequelize.import('../models/shelter');

//create new Shelter log
router.post('/create', (req, res)=> {
    Shelter.create({
        shelter_name : req.body.shelterName,
        shelter_number : req.body.shelterNumber,        
        email : req.body.email,
        address : req.body.address,
        city : req.body.city,
        state_init : req.body.stateInit,
        zip_code : req.body.zipCode,
        shelter_contact : req.body.shelterContact,
        shelter_counsel : req.body.shelterCounsel, 
        shelter_drug_counsel : req.body.shelterDrugCounsel,
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
    var data = req.params.id;
    var shelterName = req.body.shelterName;
    var shelterNumber = req.body.shelterNumber;
    var email = req.body.email;
    var address = req.body.address;
    var city = req.body.city;
    var stateInit = req.body.stateInit;
    var zipCode = req.body.zipCode;
    var shelterContact = req.body.shelterContact;
    var shelterCounsel = req.body.shelterCounsel;
    var shelterDrugCounsel = req.body.shelterDrugCounsel;
    var capacity = req.body.capacity;
    var occupancy = req.body.occupancy;

    Shelter.update(
        {
            shelter_name: shelterName,
            shelter_number: shelterNumber,
            email: email,
            address: address,
            city: city,
            state_init: stateInit,
            zipCode: zipCode,
            shelter_contact: shelterContact,
            shelter_counsel: shelterCounsel,
            shelter_drug_counsel: shelterDrugCounsel,
            capacity: capacity,
            occupancy: occupancy
        },
        {where:{id: data}}
    ).then(
        function updateSuccess(updatedProfile){
            res.json({
                shelter_name: shelterName,
                shelter_number: shelterNumber,
                email: email,
                address: address,
                city: city,
                state_init: stateInit,
                zipCode: zipCode,
                shelter_contact: shelterContact,
                shelter_counsel: shelterCounsel,
                shelter_drug_counsel: shelterDrugCounsel,
                capacity: capacity,
                occupancy: occupancy
            });
        },
        function updateError(err){
            res.send(500, err.message);
        }
    );
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