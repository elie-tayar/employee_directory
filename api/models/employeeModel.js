'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EmployeeSchema = new Schema({
  firstname: {
    type: String,
    required: 'Kindly enter the firstname of the employee'
  },
  lastname: {
    type: String,
    required: 'Kindly enter the lastname of the employee'
  },
  jobtitle: {
    type: String,
    required: 'Kindly enter the jobtitle of the employee'
  },
  address: {
    type: String,
    required: 'Kindly enter the address of the employee'
  },
  phone: {
    type: String,
    required: 'Kindly enter the phone of the employee'
  },
  email: {
    type: String,
    required: 'Kindly enter the email of the employee'
  },
  picture: {
    type: String,
    required: 'Kindly upload the picture of the employee'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  
});

module.exports = mongoose.model('Employees', EmployeeSchema);