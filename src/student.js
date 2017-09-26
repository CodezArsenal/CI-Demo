//import $ from 'jquery';

function clone(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

class Student {
  constructor(id, name, age, grades) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.grades = grades;
  }

  static newStudent(id, name, age){
    return new Student(id, name, age);
  }

  static convertLetters(letter){
    //case what if input is number
    //based on ADU
    switch (letter) {
      case 'A':
      case 'a':
        return 4.0;
        break;
      case 'B+':
      case 'b+':
        return 3.5;
        break;
      case 'B':
      case 'b':
        return 3.0;
        break;
      case 'C+':
      case 'c+':
        return 2.5;
        break;
      case 'C':
      case 'c':
        return 2.0;
        break;
      case 'D+':
      case 'd+':
        return 1.5;
        break;
      case 'D':
      case 'd':
        return 1.0;
        break;
      case 'F':
      case 'f':
        return 0;
        break;
      default:
        alert('grade input is invalid');

    }
  }

  addGrade(grade){
    this.grades.push(Student.convertLetters(grade));
  }

  calculateGPA(gradesArr){
    let grades = gradesArr || this.grades;
    let arr = [];
    let totalHours = 0
    for(let i = 0; i < grades.length; i++){
      if (grades[i].grade != undefined){ //if taken
        arr.push(Student.convertLetters(grades[i].grade) * grades[i].hours);
        totalHours+=grades[i].hours
      }
    }
    let totalGrades = arr.reduce(function(sum, value){
      return sum + value;
    },0);
    return totalGrades/totalHours;
  }

  GPABestCase(numberOfCoursesLeft){
    let arr = clone(this.grades);
    for(let i=0; i<numberOfCoursesLeft; i++)
      arr.push({grade:'A', hours:3.00});
    return this.calculateGPA(arr);

  }
  GPAWorstCase(numberOfCoursesLeft){
    let arr = clone(this.grades);
    for(let i=0; i<numberOfCoursesLeft; i++)
      arr.push({grade:'D', hours:3.00});
    return this.calculateGPA(arr);
  }
  GPAAverageCase(numberOfCoursesLeft){
    return (this.GPABestCase(numberOfCoursesLeft) + this.GPAWorstCase(numberOfCoursesLeft)) /2;
  }
}


export default Student;
