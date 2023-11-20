/* 1. Створити базовий клас Employee з властивостями id, salary та статичним методом для порівняння властивостей salary, який
  повертає строку з тесктом User with id ... has greater salary, або у випадку рівності значень
  повертає salaries are equal. Створити два класи Dev та PM, які успадковують клас Employee та кожен
  по своєму реалізує метод getJobType(), використовуючи для jobType приватну властивість. Кожен з класів 
  повинен бути організований у окремому модулі, які лежать у папці modules. Приклад імпортів та викликів нижче.*/

  import { Dev } from "./modules/dev.js";
  import { PM } from "./modules/pm.js";
  import { Employee } from "./modules/employee.js";
  import sortBySalary from "./modules/helpers/sorter.js";  

const dev = new Dev(1, 2000);
const pm = new PM(2, 2500);
const dev2 = new Dev(3, 2000);
console.log(dev.getJobType()); // виведе I am a Dev
console.log(pm.getJobType()); // виведе I am a PM
console.log(Employee.compareSalary(dev, pm)); // виведе User with id 2 has greater salary
console.log(Employee.compareSalary(dev, dev2)); // виведе salaries are equal


/* 2. На основі ієрархії, побудованої у попередньому завданні, створити об'єкт класу Dev, 
   зробити властивість id незмінною та унеможливити її видалення. Строки для перевірки 
   зміни чи видалення властивості можна коментувати для перевірки роботи скрипта у подальшому.*/

   const newDev = new Dev(1, 3000);

   Object.defineProperty(newDev, "id", {
     value: 1,
     writable: false,
     configurable: false,
     enumerable: true,
   });
   
newDev.id = 15; // видасть помилку TypeError: Cannot assign to read only property 'id' of object '#<Dev>'
delete newDev.id; // видасть помилку TypeError: Cannot delete property 'id' of #<Dev>
for (let key in newDev) {
  console.log(newDev[key]); // виведе почергово 1 та 3000
}

/*3. На основі ієрархії, побудованоі вище, додати до класу Dev статичний метод returnArrayOfDevs, який буде приймати невизначену кількість
об'єктів, перевіряти що вони є об'єктами класу Dev та якщо так - додавати їх у масив та повертати цей масив.
Створити модуль у папці helpers з дефолтним експортом функції sortBySalary (імпорт вже додано вище), яка буде сортувати об'єкти по 
зростанню зарплати, але якщо зп однакова - то по зростанню id. Приклад виконання нижче.*/

const user1 = new Dev(1, 2000);
const user2 = new Dev(2, 1500);
const user3 = new Dev(3, 1000);
const user4 = new Dev(4, 2000);
const user5 = new Dev(6, 2500);
const user6 = new Dev(5, 2500);
const user7 = new PM(7, 3500);
const user8 = new PM(8, 1000);

const users = Dev.returnArrayOfDevs(
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8
);
console.log(sortBySalary(users));

/*
виведе [
  Dev { id: 3, salary: 1000 },
  Dev { id: 2, salary: 1500 },
  Dev { id: 1, salary: 2000 },
  Dev { id: 4, salary: 2000 },
  Dev { id: 5, salary: 2500 },
  Dev { id: 6, salary: 2500 }
]
*/
