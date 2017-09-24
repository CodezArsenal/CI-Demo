import Student from './student.js';
import grades from './grades.js';
import $ from 'jquery';


function signIn(){

}

function signUp(){

}

let student = new Student('1052966', 'Omar', 22, grades);
console.dir(student);
console.log(student.grades);
console.log(student.calculateGPA());
console.log(student.GPABestCase(12));
console.log(student.GPAWorstCase(12));
