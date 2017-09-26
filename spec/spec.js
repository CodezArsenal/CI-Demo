import grades from '../src/grades.js';
import Student from '../src/student.js';
import $ from 'jquery';

describe('studentSuit',function(){
  let student;
  beforeEach(function(){
    student = new Student('1052966', 'Omar', 22, grades);
  });

  describe('calculateGPASuit', function(){

    it('should calculateGPA', function(){
      expect(student.calculateGPA()).toEqual(3.1222222222222222);
    });

    it('should return an error', function(){
      expect(student.calculateGPA([{grade: 'B', hours:3.00}])).toEqual(3);
    });

    it('should return best case scenario', function(){
      expect(student.GPABestCase()).toBeGreaterThan(3);
    });

  });


});
