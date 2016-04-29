'use strict'

var Base = require('../base');

var user = class UserProfile extends Base {
    constructor(source) {
        super('user-profile', '1.0.0');        
        this.accountId;
        
        this.name;
        this.dob;
        this.gender;

        if (source)
            Object.assign(this, source);
    }
} 

module.exports = user;