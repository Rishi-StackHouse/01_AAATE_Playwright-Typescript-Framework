/*
5. Inheritance (Concept of using parent class properties and methods in child classes for isolation and reusability)
*/
console.log('------------------------Inheritance------------------------------------------');
class Parent {
    name: string = "parent";
    age: number = 80;
    city: string = "New york";
    firstcompany:number = 4;
    nextcompany: number = 2;
    greet(): void {
        console.log(`i m ${this.name}, age: ${this.age}, from: ${this.city}`);
    }
    experience(): number {
        return this.firstcompany + this.nextcompany;
    }
    sample(): void {
        console.log(`Youtube channel`);
    }
}

let paren = new Parent();
console.log(paren.experience());
paren.sample();

console.log('------------------------Child class------------------------------------------');
class FirstChild extends Parent {
    childmethod(): void {
        console.log(`i m ${this.name}, age: ${this.age}, from: ${this.city}`);
    }
    childsample(): void {
        this.sample();
        this.name = 'Child';
        console.log(`${this.name}`);
    }
}

let child1 = new FirstChild();
child1.childmethod();
child1.childsample();
console.log(child1.experience(), child1.name);

let raven = new Parent();
console.log(raven.name);

class SecondChild extends FirstChild {
    secondChildMethod(): void {
        console.log(`i m ${this.name}, age: ${this.age}, from: ${this.city}`);
    }
}

let child2 = new SecondChild();
child2.secondChildMethod();
child2.childsample();
console.log(child2.experience(), child2.name);