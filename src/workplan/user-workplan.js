'use strict'
var Period = require('./period');
var Base = require('../base');

module.exports = class UserWorkplan extends Base{
    
    constructor(source){
        super('user-workplan', "1.0.0");
        this.accountId = '';
        this.user = {};
                
        this.periodId = '';
        this.period = new Period();
        
        this.code = '';
        this.items = [];
        this.completion = 0;
        


        this.copy(source); 
    }
}