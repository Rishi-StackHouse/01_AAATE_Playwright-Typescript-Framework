/* OOPS - Object Oriented Programming System
Means - Defining a class with properties and methods, creating an object of that class and accessing the properties and methods using the object instance
-----------------------------
1.Class Declaration (properties and methods)
2.Object Instantiation
3.export and import classes
4.Access Modifiers - public, private, protected
5.  Inheritance

Keywords
--------
this - used to make the class resources identifiable to the class methods, without this - cannot find property CTE
export - used to make the class resources accessible in other files
import - used to import the class in another file

extends - used to inherit the properties and methods of parent class to child class

*/

/* 1.Class Declaration (properties and methods) */

export class animal {
    name: string = 'lion';
    shelter: string = 'forest';
    sound: string = 'roarrrrrrrrrr';
    weight: number = 150;
    domesticated: boolean = false;
    food: string[] = ['meat', 'deer', 'water'];

    intro(): void {
        console.log(`i m a ${this.name}, i live in ${this.shelter}, i weigh ${this.weight} Kg`); // 
    }
    moreinfo(): void {
        console.log(`am i domesticated? ${this.domesticated}, i eat ${this.food}`);
    }
    voice(): string {
        return `my voice is ${this.sound}`;
    }
}

/*
2.Object Instantiation
--------------------
Key Takeaway:
       1.Inside the class(parent/child) the properties and methods will be accessed using this.property/method name
       2.Outside the class the properties and methods will be accessed using objectInstance.property/method name
*/  
let anim = new animal();
console.log(anim.name);
console.log(anim.shelter);
console.log(anim.food);

anim.intro();
anim.moreinfo();
console.log(anim.voice());

let hakim = new animal();
console.log(hakim.name);
console.log(hakim.voice());

/*
3.export and import classes
-----------------------------
Class file and Target file in same folder......In target file - import {className} from './classFile.ts';
Class file 
*/

/*
4.Access Modifiers - public, private, protected
--------------------------------------
1.private 
    - Allows the class resources only acessibile inside the class (no access for resources while object instantiation)
    - CTE ...// property 'name' is private only accessible within the class
2.readonly 
    - makes the class properties only accessible for reading (print) not for editing (both inside and outside the class)
    = CTE ...// cannot assign to 'password' because it is a read-only property
2.protected - 
3.public - 
*/
console.log('-----------------------------------------------------------------------------------------');
class automation {
    private url: string = 'http://localhost';
    readonly password:string = 'admin123';

    username:string = 'username';

    private info(): void {
        console.log(`Next automation url: ${this.url}, username: ${this.username}, password: ${this.password}`);
    }
    details(): void {
        this.info();
    }
    changeurl(newurl: string, password?: string): void {
        this.url = newurl;
        // this.password = password;  // Error - cannot assign to 'password' because it is a read-only property
    }
}

let auto = new automation();
auto.changeurl('http://newurl.com', 'newpassword');

// auto.url = 'mateo';      // Error - property 'url' is private only accessible within the class
// console.log(auto.url);
// auto.info();


// auto.password = 'kthg';
console.log(auto.password);
console.log('sample print');
auto.details();








