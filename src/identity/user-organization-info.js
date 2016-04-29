'use strict'

var Base = require('../base');

var user = class UserOrganizationInfo extends Base {
    constructor(source) {
        super('user-organization-info', '1.0.0');        
        this.accountId;
        
        this.nik;
        this.initial;
        this.department;

        if (source)
            Object.assign(this, source);
    }
} 

module.exports = user;