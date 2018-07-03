module.exports = (sequelize, DataTypes) => {
    const Shelter = sequelize.define('shelter', {
       shelter_name : {
           type: DataTypes.STRING,
           allownull: false
       },
       shelter_number : {
        type: DataTypes.STRING,
        allownull: false
    },
       email : {
           type: DataTypes.STRING,
           allownull: false,
           validate: {
               isEmail: true
           }
       },
       address : {
           type: DataTypes.STRING,
           allownull: false
       }, 
       city : {
           type: DataTypes.STRING,
           allownull: false
       },
       state_init : {
           type: DataTypes.STRING,
           allownull: false
       }, 
       zip_code : {
           type: DataTypes.INTEGER,
           allownull: false
       },
       shelter_contact : {
           type: DataTypes.STRING,
           allownull: false
       },
       shelter_counsel : {
           type: DataTypes.BOOLEAN,
           allownull: false
       }, 
       shelter_drug_counsel : {
           type: DataTypes.BOOLEAN,
           allownull: false
       },
       capacity : {
           type: DataTypes.INTEGER,
           allownull: false
       },
       occupancy : {
           type: DataTypes.INTEGER,
           allownull: false
       }

    })
    return Shelter;
}