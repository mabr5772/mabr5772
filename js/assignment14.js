// Problem 1

let employees = [

    {
      name: "Sam",
      department: "Tech",
      designation: "Manager",
      salary: 40000,
      raiseEligible: true,


    },
    {
      name: "Mary",
      department: "Finance",
      designation: "Trainee",
      salary: 18500,
      raiseEligible: true,


    },
    {
      name: "Bill",
      department: "HR",
      designation: "Executive",
      salary: 21200,
      raiseEligible: false,


    }
  ];

console.log('Problem 1', employees)

//Problem 2
const company = {
companyName: "Tech Stars",
website: "www.techstars.site",
employees: employees,
};

console.log('Problem 2', company);

function addEmployee (obj, employeeName, dept, desig, sal, raiseEligable){
  let newEmployee = {
    name: employeeName,
    department: dept,
    designation: desig,
    salary: sal,
    raiseEligible: raiseEligable
  };

  obj.push(newEmployee);
}
addEmployee(employees, 'Anna', 'Tech', 'Executive', 25600, false);
console.log('Problem 3', employees);


let totSalary = 0;
for (let i = 0; i < employees.length; i++) {
  totalSalary += employees[i].salary;
}
console.log('Problem 4', totSalary;

//problem 5

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


//problem 6
const homeWorkers = ['Anna', 'Sam'];
function setWFH(){
  for(let i=0; i<employees.length; i++){
    employees[i].wfh = homeWorkers.includes(employees[i].name);

  }
}
setWFH();
console.log('Problem 6', employees);
