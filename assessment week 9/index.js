// JavaScript program that takes an array with mixed data type and calculates the sum of all numbers
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18
// Original array: 2,3,0,5,7,8,true,false
// Sum all numbers of the said array: 25

function ArrayAdder(num_array){
    console.log('');
    let sum = 0;
    console.log(`Original array: ${num_array}`);
    if(num_array){
        for(let i = 0; i<num_array.length; i++){
            if(typeof(num_array[i]) === 'number'){
            sum+= num_array[i];
            }}
    }
    console.log(`Sum all numbers of the said array: ${sum}`);
}

num_array1 = [2, "11", 3, "a2", false, 5, 7, 1];
num_array2 = [2, 3, 0, 5, 7, 8, true, false];
console.log('Question 4');
ArrayAdder(num_array1);
ArrayAdder(num_array2)

// a JavaScript program to find the leap years in a given range of years

function LeapYearCalculator(numberOfYears) {
    let currentYear = 2023;
    if (numberOfYears) {
      let referenceYears = currentYear - numberOfYears;
      console.log('Leap Years:');
      for (let i = 0; i <= numberOfYears; i++) {
        if ((referenceYears + i) % 400 === 0 || ((referenceYears + i) % 100 !== 0 && (referenceYears + i) % 4 === 0)) {
          console.log(`${referenceYears + i}`);
        }
      }
    }
  }
  
  let numberOfYears = 15;
  console.log('');
  console.log('Question 3');
  LeapYearCalculator(numberOfYears);
  
// JavaScript function that takes a callback and invokes it after a delay of 2 second.

const delayFunction = (printFunction) =>{
    setTimeout(printFunction, 2000)
}

const printFunction = () =>{
    console.log('');
    console.log('Question 1');
    console.log('Happening after 2 seconds');
}

delayFunction(printFunction)


// Classes JS Program
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calcAnnualSalary() {
    let salaryComputed = this.salary * 12;
    console.log(`Employee salary: ${salaryComputed}`);
    return salaryComputed;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calcAnnualSalary() {
    let salaryComputed = super.calcAnnualSalary() + 10000;
    console.log(`Manager salary: ${salaryComputed}`);
    return salaryComputed;
  }
}

const manager1Data = ["Jimmy Cole", 200000, "Procurement"];
const manager2Data = ["Vicky Musa", 120000, "Security"];
const employeeData = ["Josephine Selelo", 50000];

const manager1 = new Manager(...manager1Data);
const manager2 = new Manager(...manager2Data);
const employee = new Employee(...employeeData);

console.log('');
console.log('Question 2');

console.log(`Manager added: ${manager1.name}`);
console.log(`Manager salary: ${manager1.calcAnnualSalary()}\n`);
console.log(`Manager added: ${manager2.name}`);
console.log(`Manager salary: ${manager2.calcAnnualSalary()}\n`);
console.log(`Employee added: ${employee.name}`);
console.log(`Employee salary: ${employee.calcAnnualSalary()}`);
