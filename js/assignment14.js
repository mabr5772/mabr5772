// Here is an object that is in a JSON-like format

const employees = [

    {
      name: "Sam",
      department: "Tech",
      designation: "Manager",
      salary: 40000,
      raiseEligible: true,


    },
    {
      name: "Mary",
      department: Finance,
      designation: "Trainee",
      salary: 18500,
      raiseEligible: true,


    },
    {
      name: "Bill",
      department: "HR",
      designation: Executive,
      salary: 21200,
      raiseEligible: false,


    }
  ];

console.log('Problem 1', employees)

// Function to add a new superhero -- it's built to be changeable (see the function call below)
const company = {
companyName: "Tech Stars",
website: "www.techstars.site",
employees: employees,
};

console.log('Problem 2', company)

function addEmployee (employeeName, dept, desig, sal, raiseEligable)
  const newEmployee = {
    name: employeeName,
    department: dept,
    designation: desig,
    salary: sal,
    raiseEligible: raiseEligable

  };
  employees.push(newEmployee);
}
addEmployee('Anna', 'Tech', 'Executive', 25600, false);
console.log('Problem 3', company);

let totalSalary = employees(0).salary + employees(1).salary + employees(2).salary + employees(3).salary;
console.log('Problem 4, totalSalary);

let totalSalaryBetter = 0;
for (let i = 0; i < employees.length; i++) {
  total SalaryBetter += employees[i].salary;
}
console.log('Problem 4 Better', totalSalaryBetter);

function doRaises(){
  for (let i = 0; i < employees.length; i++){
  if (employees[i].raiseEligable){
    employees[i].salary *= 1.1;
    employees[i].raiseEligable = false;
  }
}
}
doRaises();
console.log('Problem 5', employees);

const homeWorkers = ['Anna', 'Sam'];
function setWFH(){
  for(let i=0; i<employees.length; i++){
    employees[i].wfh = homeWorkers.includes(employees[i].name);

  }
}
swtWFH();
console.log('Problem 6', employees);
