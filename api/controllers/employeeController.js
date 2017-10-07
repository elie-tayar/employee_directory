'use strict';


var mongoose = require('mongoose'),
  employee = mongoose.model('Employees');

exports.list_all_employees = function(req, res) {
  employee.find({}, function(err, employee) {
    if (err)
      res.send(err);
    res.json(employee);
  });
};


exports.create_an_employee = function(req, res) {
  var new_employee = new employee(req.body);
  new_employee.save(function(err, employee) {
    if (err)
      res.send(err);
    res.json(employee);
  });
};


exports.read_an_employee = function(req, res) {
  employee.findById(req.params.employeeId, function(err, employee) {
    if (err)
      res.send(err);
    res.json(employee);
  });
};


exports.update_an_employee = function(req, res) {
  employee.findOneAndUpdate({_id: req.params.employeeId}, req.body, {new: true}, function(err, employee) {
    if (err)
      res.send(err);
    res.json(employee);
  });
};


exports.delete_an_employee = function(req, res) {
  employee.remove({
    _id: req.params.employeeId
  }, function(err, employee) {
    if (err)
      res.send(err);
    res.json({ message: 'Employee successfully deleted' });
  });
};
