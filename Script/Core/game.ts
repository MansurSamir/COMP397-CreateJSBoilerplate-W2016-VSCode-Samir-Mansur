/// <reference path="_reference.ts" />


import Person = objects.Person;
import Student = objects.Student;

console.log("Game Started...");


var person: Person = new Person("Samir");
person.speaks();
var student: Student = new Student("Mike", 12345);
student.studies();
student.speaks();