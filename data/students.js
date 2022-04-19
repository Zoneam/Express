const students = [
    {student: 'Brian Smith', age: 25, present: true, grade: 80},
    {student: 'Lela Huff', age: 32, present: false, grade: 82},
    {student: 'BTeri Gibson', age: 31, present: true, grade: 84},
    {student: 'LSon Waller', age: 47, present: true, grade: 40},
    {student: 'Amanda Golden', age: 58, present: true, grade: 75},
    {student: 'Lanny Pratt', age: 21, present: false, grade: 76},
    {student: 'Donn Duarte', age: 26, present: false, grade: 87},
    {student: 'Tobias Greene', age: 38, present: true, grade: 91},
    {student: 'Quinn Howard', age: 54, present: true, grade: 100},
    {student: 'Essie Shields', age: 24, present: false, grade: 74},
  ];
  
  module.exports = {
    getAll: function() {
      return students;
    }
  };