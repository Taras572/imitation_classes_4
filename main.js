console.log('--------------завдання 1--------------');
//Завдання 1
class Worker {
    constructor(firstName, secondName, rate, days) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        console.log(`Сумма зарплати ${this.firstName}:${this.rate * this.days}`);
    }
}

let firstWorker = new Worker('Petro', 'Petrov', 10, 31);
console.log('First Worker:', firstWorker);
console.log(firstWorker.firstName);
console.log(firstWorker.secondName);
console.log(firstWorker.rate);
console.log(firstWorker.days);
firstWorker.getSalary();

console.log('-------------------------------------------');

let secondWorker = new Worker('Alina', 'Ivanova', 10, 20);
console.log('Second Worker:', secondWorker);
console.log(secondWorker.firstName);
console.log(secondWorker.secondName);
console.log(secondWorker.rate);
console.log(secondWorker.days);
secondWorker.getSalary();







console.log('--------------завдання 2--------------');
//завдання 2




class MyString {
    reverse(str) {
        let rev = str.split("").reverse().join("");
        return rev;
    }

    ucFirst(str) {
        let FirstLetter = str.charAt(0).toLocaleUpperCase();
        FirstLetter += str.slice(1);
        return FirstLetter;
    }
    ucWords(str) {

        return str.toLowerCase().split(' ').map(function(word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
    }
}
let mystring = new MyString();
console.log(mystring.ucFirst('arsenal'));
console.log(mystring.reverse('IVAN'));
console.log(mystring.ucWords('arsenal arsenal arsenal'));




console.log('--------------завдання 3--------------');


class CoffeeMake{
    ON(){
        console.log('CoffeeMake => ON');
    }
    OFF(){
        console.log('CoffeeMake => OFF');
    }
}
class Drip extends CoffeeMake{
    constructor(strong,average,easy){
        this.strong = strong;
        this.average = average;
        this.easy = easy;
    }
    ON(){
        super.ON();
    }
    OFF(){
        super.OFF();
    }
    milk_for_coffee(){
        console.log('milk for coffee');
    }

}

class Carob extends Drip{
    constructor(strong,average,easy,Grind_coffee_beans){
        super(strong,average,easy);
        this.Grind_coffee_beans = Grind_coffee_beans;
    }
    ON(){
        super.ON();
    }
    OFF(){
        super.OFF();
    }
    milk_for_coffee(){
        super.milk_for_coffee();
    }
    Making_cappuccino(){
        console.log('Making cappuccino');
    }
}

class Coffee_Machine extends Carob{
    constructor(strong,average,easy,Grind_coffee_beans,off_timer){
        super(strong,average,easy,Grind_coffee_beans);
        this.off_timer = off_timer;
    }
    ON(){
        super.ON();
    }
    OFF(){
        super.OFF();
    }
    milk_for_coffee(){
        super.milk_for_coffee();
    }
    Making_cappuccino(){
        super.Making_cappuccino();
    }
    Making_two_Coffees(){
        console.log('Making two coffees at the same time');
    }
}