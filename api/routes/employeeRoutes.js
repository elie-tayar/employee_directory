'use strict';
module.exports = function(app) {
  var employee = require('../controllers/employeeController');

  // todoList Routes
  app.route('/employees')
    .get(employee.list_all_employees)
    .post(employee.create_an_employee);


  app.route('/employees/:employeeId')
    .get(employee.read_an_employee)
    .put(employee.update_an_employee)
    .delete(employee.delete_an_employee);
};
