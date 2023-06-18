const DB = require('../utils/db');


class User {
    email;
    password;

    constructor(email = "", password = "") {
        this.email = email;
        this.password = password;
    }

    async InsertNewUser() {
        try {
            return await new DB().Insert('Users', this); 
        } catch (error) {
            return error;
        } 
    }

    async GetUserByEmail(email) {
        try {
            return await new DB().FindAll('Users', { email: email });

        } catch (error) {
            return error;
        }
    }

}

module.exports = User;
