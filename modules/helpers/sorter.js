import { Employee } from "../employee.js";

const compareSalary = Employee.compareSalary;

export default function sortBySalary(users) {
    return users.sort((a, b) => {
      if (a.salary === b.salary) {
        return a.id - b.id;
      }
      return a.salary - b.salary;
    });
  }
