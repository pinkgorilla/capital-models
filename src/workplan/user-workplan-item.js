'use strict'
var Base = require('../base');

module.exports = class UserWorkplanItem extends Base {

    constructor(source) {
        super('user-workplan-item', "1.0.0");

        this.userWorkplanId = '';

        this.code = '';
        this.no = 0;
        this.type = '';
        this.name = '';
        this.description = '';
        this.estimatedDate = '';
        this.done = false;
        this.completedDate = '';
        this.cancel = false;
        this.cancelReason = '';


        if (source)
            Object.assign(this, source);
    }
}