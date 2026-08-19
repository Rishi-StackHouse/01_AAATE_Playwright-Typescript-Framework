// ---------- PARENT CLASS ----------
class Employee {
    name: string;
    age: number;
    department: string;
    salary: number;
    experience: number;

    constructor(name: string, age: number, department: string, salary: number, experience: number) {
        this.name = name;
        this.age = age;
        this.department = department;
        this.salary = salary;
        this.experience = experience;
    }

    // 1. Introduce the employee
    intro(): void {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old, working in ${this.department}.`);
    }

    // 2. Give a raise and show the new salary
    giveRaise(amount: number): void {
        this.salary += amount; //
        console.log(`${this.name} got a raise of ${amount}. New salary: ${this.salary}`);
    }

    // 3. Check if the employee is a senior (5+ years)
    isSenior(): boolean {
        const senior = this.experience >= 5;
        console.log(`${this.name} is ${senior ? 'a Senior' : 'a Junior'} employee.`);
        return senior;
    }

    // 4. Calculate yearly salary
    yearlySalary(): number {
        const yearly = this.salary * 12;
        console.log(`${this.name}'s yearly salary is ${yearly}.`);
        return yearly;
    }

    // 5. Transfer to another department
    transfer(newDept: string): void {
        console.log(`${this.name} transferred from ${this.department} to ${newDept}.`);
        this.department = newDept;
    }
}

// ---------- USAGE ----------
let emp = new Employee('Ravi', 30, 'Engineering', 50000, 6);
emp.intro();
emp.giveRaise(5000);
emp.isSenior();
let rambo = emp.yearlySalary();
console.log(rambo);
emp.transfer('Product');


// ---------- CHILD CLASS 1 ----------
class Manager extends Employee {
    teamSize: number;          // unique property
    bonus: number;             // unique property

    constructor(name: string,age: number,department: string,salary: number,experience: number,teamSize: number,bonus: number) {
        super(name, age, department, salary, experience);   // 🔗 init parent part
        this.teamSize = teamSize;                           // init own part
        this.bonus = bonus;
    }

    // unique method 1 — uses parent property + own property
    manageTeam(): void {
        console.log(`${this.name} manages a team of ${this.teamSize} in ${this.department}.`);
    }

    // unique method 2 — combines own bonus with parent salary
    totalPay(): number {
        const total = this.salary + this.bonus;
        console.log(`${this.name}'s total pay (salary + bonus) is ${total}.`);
        return total;
    }
}

// ---------- CHILD CLASS 2 ----------
class Intern extends Employee {
    mentor: string;            // unique property
    durationMonths: number;    // unique property

    constructor(
        name: string,
        age: number,
        department: string,
        salary: number,
        mentor: string,
        durationMonths: number
    ) {
        super(name, age, department, salary, 0);   // 🔗 interns always have 0 experience
        this.mentor = mentor;
        this.durationMonths = durationMonths;
    }

    // unique method 1 — uses parent property + own property
    internInfo(): void {
        console.log(`${this.name} is an intern in ${this.department}, mentored by ${this.mentor}.`);
    }

    // unique method 2 — own logic about the internship
    remainingMonths(monthsDone: number): number {
        const left = this.durationMonths - monthsDone;
        console.log(`${this.name} has ${left} month(s) left in the internship.`);
        return left;
    }
}

// ---------- USAGE: CHILDREN ----------
console.log('------------------------ Manager ------------------------');
let mgr = new Manager('Anita', 40, 'Engineering', 90000, 12, 8, 15000);
mgr.intro();          // inherited from Employee
mgr.isSenior();       // inherited from Employee
mgr.manageTeam();     // own method
mgr.totalPay();       // own method

console.log('------------------------ Intern ------------------------');
let intern = new Intern('Karan', 22, 'Marketing', 20000, 'Anita', 6);
intern.intro();               // inherited from Employee
intern.giveRaise(2000);       // inherited from Employee
intern.internInfo();          // own method
intern.remainingMonths(2);    // own method


// ---------- GRANDCHILD CLASS (extends Manager, which extends Employee) ----------
class Director extends Manager {
    region: string;            // unique property
    stockOptions: number;      // unique property

    constructor(
        name: string,
        age: number,
        department: string,
        salary: number,
        experience: number,
        teamSize: number,
        bonus: number,
        region: string,
        stockOptions: number
    ) {
        // 🔗 calls Manager's constructor, which in turn calls Employee's constructor
        super(name, age, department, salary, experience, teamSize, bonus);
        this.region = region;              // init own part
        this.stockOptions = stockOptions;
    }

    // unique method 1 — uses properties from BOTH ancestors (Employee + Manager) + own
    directorInfo(): void {
        console.log(`${this.name} directs ${this.department} across ${this.region}, leading ${this.teamSize} people.`);
    }

    // unique method 2 — combines parent salary/bonus with own stock options
    totalPackage(): number {
        const pkg = this.salary + this.bonus + this.stockOptions;
        console.log(`${this.name}'s total package is ${pkg}.`);
        return pkg;
    }
}

// ---------- USAGE: GRANDCHILD ----------
console.log('------------------------ Director ------------------------');
let dir = new Director('Meera', 50, 'Engineering', 150000, 20, 25, 40000, 'APAC', 60000);
dir.intro();            // from Employee   (grandparent)
dir.manageTeam();       // from Manager    (parent)
dir.directorInfo();     // own method
dir.totalPackage();     // own method
