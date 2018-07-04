const router = require("express").Router();
const sequelize = require("../db");
const Profile = sequelize.import("../models/profile");

//create profile
router.post("/createprofile", (req, res) => {
  console.log("hey");
  Profile.create({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    user_email: req.body.userEmail,
    phone_number: req.body.phoneNumber,
    age: req.body.age,
    child: req.body.child,
    counseling: req.body.counseling,
    sub_counseling: req.body.subCounseling,
    owner: req.user.id
  })
    .then(profile => res.status(200).json(profile))
    .catch(err =>
      res.status(500).json({
        error: err
      })
    );
});

//get individual records by id for individual user
router.get("/:id", (req, res) => {
  Profile.findOne({ where: { id: req.params.id } })
    .then(profile => res.status(200).json(profile))
    .catch(err =>
      res.status(500).json({
        error: err.errors[0].message
      })
    );
});

//allow records to be updated by user
router.put("/update/:id", (req, res) => {
  var data = req.params.id;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var userEmail = req.body.userEmail;
  var phoneNumber = req.body.phoneNumber;
  var age = req.body.age;
  var child = req.body.child;
  var counseling = req.body.counseling;
  var subCounseling = req.body.subCounseling;

  Profile.update(
    {
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      user_email: req.body.userEmail,
      phone_number: req.body.phoneNumber,
      age: req.body.age,
      child: req.body.child,
      counseling: counseling,
      sub_counseling: subCounseling
    },
    { where: { id: data } }
  ).then(
    function updateSuccess(updatedProfile) {
      res.json({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        user_email: req.body.userEmail,
        phone_number: req.body.phoneNumber,
        age: req.body.age,
        child: req.body.child,
        counseling: counseling,
        sub_counseling: subCounseling
      });
    },
    function updateError(err) {
      res.send(500, err.message);
    }
  );
});

//allow individual profiles to be deleted by user
router.delete("/delete/:id", (req, res) => {
  var data = req.params.id;

  Profile.destroy({
    where: { id: data }
  }).then(function deleteLogSuccess(data) {
    res.send("You've successfully deleted your profile");
  });
});

module.exports = router;
