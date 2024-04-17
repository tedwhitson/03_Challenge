// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
function collectEmployees () {
  const employees = [];

  let addEmployee = true;
  while (addEmployee) {
    const firstName = prompt("Enter Employee First Name:");
    const lastName = prompt("Enter Employee Last Name:");
    let salary = prompt("Enter Employee Salary:");
    salary = isNaN(Number(salary)) ? 0 : Number(salary);
  
    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });
  
    addEmployee = confirm("Do you want to add another employee?");  
  }
  return employees;
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {

  let totalSalary = 0;
  for (let employee of employeesArray) {
  totalSalary += employee.salary;
}

const totalEmployees = employeesArray.length;
const averageSalary = totalSalary / totalEmployees;

console.log (`Average Salary: ${averageSalary.toFixed(2)} for ${totalEmployees} employees`);
}

const getRandomEmployee = function(employeesArray) {

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log (`Random Employee Drawing Winner: First Name ${randomEmployee.firstName}, Last Name: ${randomEmployee.lastName}, Salary: ${randomEmployee.salary}`);

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees(); // [EMPLOYEEDATA]

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
