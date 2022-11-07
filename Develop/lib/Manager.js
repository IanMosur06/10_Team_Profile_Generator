const Employee = require ('./Employee');

  class Manager extends Employee{
    
    constructor(name, id, email, oNum) {
     super(name, id, email);
     this.oNum = oNum;
    }

    getONum() {
      return "oNum"
    }

    getRole() {
      return "Manager";
    }
  
  }
  
  module.exports = Manager;