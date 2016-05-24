'use strict'

var Base = require('../base');

var user = class Account extends Base {
    constructor(source) {
        super('account', '1.0.0');
        this.username = "";
        this.password = "";
        this.email = "";
        this.locked = false;
        this.confirmed = true;
        this.roles = [];


        this.copy(source);
    }
}

module.exports = user;