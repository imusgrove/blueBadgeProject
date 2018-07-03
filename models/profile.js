module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('profile', {
        first_name : {
            type: DataTypes.STRING,
            allownull: false
        },
        last_name : {
            type: DataTypes.STRING,
            allownull: false
        },
        user_email : {
            type: DataTypes.STRING,
            allownull: false,
            validate: {
                isEmail: true
            }
        },
        phone_number : {
            type: DataTypes.STRING,
        },
        age : {
            type: DataTypes.INTEGER,
        },
        child : {
            type: DataTypes.INTEGER,
            allownull: false
        },
        counseling : {
            type: DataTypes.BOOLEAN,
            allownull: false
        }, 
        sub_counseling : {
            type: DataTypes.BOOLEAN,
            allownull: false
        },
        owner: {
            type:DataTypes.INTEGER,
            allownull: false
        }

    })
    return Profile;
}