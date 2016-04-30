'use strict'

var Base = require('../base');

module.exports = class UserWorkplan extends Base{
    
    constructor(source){
        super('user-workplan', "1.0.0");
        this.accountId = '';
        this.initial = '';
        
        this.periodId = '';
        this.month='';
        this.period = '';
        
        this.items = [];
        this.completion = 0;
        

        if (source)
            Object.assign(this, source);
    }
}