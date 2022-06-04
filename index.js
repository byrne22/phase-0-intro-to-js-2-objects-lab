// Write your solution in this file!
const employee = {
    name: "",
    streetAddress: "",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Alternate using ES6 Spread operators:
    // return { ...driver, ...{ [key]: value } }
    return Object.assign({}, employee, { [key]: value });
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
  
    return employee;
  }
  
  function deleteFromEmployeeByKey(driver, key) {
    // Alternate using ES6 Spread operators:
    // const newObj = { ...driver }
    const newObj = Object.assign({}, employee);
  
    delete newObj[key];
  
    return newObj;
  }
  
  function destructivelyDeleteFromEmployeeByKey(driver, key) {
    delete employee[key];
  
    return employee;
  }