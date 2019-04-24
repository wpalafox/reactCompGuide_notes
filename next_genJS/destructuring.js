//Destructuring
//Easily extract array elements or object properties and store them in variables


//Array Destructuring 

//[a,b] = ['Hello', 'Max']
//console.log(a) // Hello
//console.log(b) //Max 

//Object Destructuring 
/*
{name} = {name: 'Max', age: 28}
console.log(name) // Max 
console.log(age) //undefined 
*/

const numbers = [1,2,3];
[num1, ,num3] = numbers;
console.log(num1, num3);



const person = {
	name: 'Max'

}
//It points to the same object, so if you change the source, it will reflect on the copy
//const secondPerson = person;

//Spread the new person properties.  
//This truly copies the 
//properties of person into the second
//person object

const secondPerson ={ 
	...person

}


person.name = 'Manu';

console.log(secondPerson)


